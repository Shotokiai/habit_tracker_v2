"use client";

import { useState, useMemo, useEffect } from "react";
import { ManualDotsCanvas } from "./ManualDotsCanvas";
import { drawing1DotsData, drawing2DotsData, drawing3DotsData } from "../data/treeDots";

interface CompanionViewProps {
  habit: any;
  dayRecords: any[];
  onPatternChange?: (pattern: 'drawing1' | 'drawing2' | 'drawing3') => void;
  currentPattern?: 'drawing1' | 'drawing2' | 'drawing3';
  onComplete?: () => void;
  onMiss?: () => void;
  onCanvasStateChange?: (isShowing: boolean) => void;
  onNextHabit?: () => void;
  totalHabits?: number;
}

// Available drawings configuration
const availableDrawings = [
  { id: 'drawing1', name: 'Drawing 1', imagePath: '/images/Drawing 1.png', data: drawing1DotsData },
  { id: 'drawing2', name: 'Drawing 2', imagePath: '/images/Drawing 2.jpg', data: drawing2DotsData },
  { id: 'drawing3', name: 'Drawing 3', imagePath: '/images/Drawing 3.jpg', data: drawing3DotsData }
];

export default function CompanionView({ habit, dayRecords, onPatternChange, currentPattern = 'drawing1', onComplete, onMiss, onCanvasStateChange, onNextHabit, totalHabits = 1 }: CompanionViewProps) {
  const [selectedIllustration, setSelectedIllustration] = useState<string>(currentPattern);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [selectedDrawing, setSelectedDrawing] = useState<'drawing1' | 'drawing2' | 'drawing3' | null>(null);
  const [showHabitTracker, setShowHabitTracker] = useState(false);

  // Use persisted drawing if habit has one locked, otherwise default
  const [lockedDrawing, setLockedDrawing] = useState<'drawing1' | 'drawing2' | 'drawing3' | null>(
    habit?.companionPattern || null
  );

  // If we have a locked drawing for this habit, skip selection and go straight to tracker
  useEffect(() => {
    if (lockedDrawing) {
      setSelectedDrawing(lockedDrawing);
      setShowHabitTracker(true);
    }
  }, [lockedDrawing]);

  // Check which images actually exist
  const [existingDrawings, setExistingDrawings] = useState(availableDrawings);

  useEffect(() => {
    // Check which images exist by trying to load them
    const checkImages = async () => {
      const validDrawings = [];
      for (const drawing of availableDrawings) {
        try {
          const img = new Image();
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = drawing.imagePath;
          });
          validDrawings.push(drawing);
        } catch (error) {
          console.log(`Image not found: ${drawing.imagePath}`);
        }
      }
      setExistingDrawings(validDrawings);
    };
    
    checkImages();
  }, []);

  // Notify parent when canvas state changes
  useMemo(() => {
    if (onCanvasStateChange) {
      onCanvasStateChange(showBottomSheet);
    }
  }, [showBottomSheet, onCanvasStateChange]);

  // Calculate completion progress - count days where y value increased 
  const completedDays = useMemo(() => {
    if (dayRecords.length === 0) return 0
    
    let completed = 0
    dayRecords.forEach((record, index) => {
      const prevRecord = index > 0 ? dayRecords[index - 1] : null
      const prevY = prevRecord ? prevRecord.y : 0
      
      // A day is completed if y value increased from previous day
      if (record.y > prevY) {
        completed++
      }
    })
    
    return completed
  }, [dayRecords])

  const handleDrawingSelect = (drawingId: 'drawing1' | 'drawing2' | 'drawing3') => {
    setSelectedDrawing(drawingId);
    setShowBottomSheet(true);
    if (onPatternChange) {
      onPatternChange(drawingId);
    }
  };

  const handleCloseBottomSheet = () => {
    setShowBottomSheet(false);
    setSelectedDrawing(null);
  };

  const handleContinue = () => {
    // Lock the selected drawing to this habit and persist it
    if (selectedDrawing && onPatternChange) {
      onPatternChange(selectedDrawing);
      setLockedDrawing(selectedDrawing);
    }
    
    // Close the bottom sheet and show the habit tracker
    setShowBottomSheet(false);
    setShowHabitTracker(true);
    if (onCanvasStateChange) {
      onCanvasStateChange(true);
    }
  };

  // Show habit tracking interface after Continue
  if (showHabitTracker && selectedDrawing) {
    const selectedDrawingData = existingDrawings.find(d => d.id === selectedDrawing);
    
    return (
      <div className="flex flex-col h-full">
        {/* Canvas with dots - matching Chart/Calendar view spacing */}
        <div className="flex-1 pt-2">
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-[800px] aspect-square mx-auto">
              <ManualDotsCanvas 
                imagePath={selectedDrawingData?.imagePath || ''}
                dotsData={selectedDrawingData?.data || []}
                completedDays={completedDays}
                imageWidth={800}
                imageHeight={800}
                imageOpacity={0.30}
              />
            </div>
          </div>
        </div>

        {/* Fixed bottom CTAs matching other views exactly */}
        <div className="fixed bottom-8 left-0 right-0 bg-white p-4 z-10">
          <div className="max-w-sm mx-auto">
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => {
                  if (onComplete) onComplete();
                }}
                className="flex-1 px-3 py-2.5 bg-green-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all active:scale-95 shadow-lg text-center text-sm flex items-center justify-center h-14 rounded-2xl"
              >
                <span className="text-[15px] font-bold whitespace-nowrap">Completed Habit!</span>
              </button>
              <button
                onClick={() => {
                  if (onMiss) onMiss();
                }}
                className="flex-1 px-3 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-700 font-semibold rounded-lg border border-amber-200 transition-all active:scale-95 text-center text-sm flex items-center justify-center h-14 rounded-2xl"
              >
                <span className="text-[15px] font-bold">Missed Today</span>
              </button>
            </div>
            
            {/* Bottom text row matching other views */}
            {habit && (
              <div className="w-full flex justify-between items-center text-sm font-semibold px-4">
                <button
                  className="text-muted-foreground/60 hover:text-muted-foreground/80 transition-colors"
                >
                  Want to give up?
                </button>
                <button
                  onClick={() => onNextHabit && totalHabits > 1 && onNextHabit()}
                  className={`flex items-center transition-colors ${
                    totalHabits > 1
                      ? 'text-foreground/80 hover:text-foreground cursor-pointer'
                      : 'text-muted-foreground/60 cursor-not-allowed'
                  }`}
                  disabled={totalHabits <= 1}
                >
                  Next habit
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Show bottom sheet with canvas
  if (showBottomSheet && selectedDrawing) {
    return (
      <div className="fixed inset-0 z-50 flex items-end">
        <div className="bg-white rounded-t-2xl w-full max-h-[90vh] overflow-hidden">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">
              {existingDrawings.find(d => d.id === selectedDrawing)?.name || 'Drawing'}
            </h3>
            <button
              onClick={handleCloseBottomSheet}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              ✕
            </button>
          </div>
          
          {/* Canvas container with proper sizing */}
          <div className="p-4 flex justify-center bg-white">
            <div className="w-full max-w-[800px] aspect-square">
              <ManualDotsCanvas 
                imagePath={existingDrawings.find(d => d.id === selectedDrawing)?.imagePath || ''}
                dotsData={existingDrawings.find(d => d.id === selectedDrawing)?.data || []}
                completedDays={completedDays}
                imageWidth={800}
                imageHeight={800}
                imageOpacity={0.30}
              />
            </div>
          </div>
          
          {/* Continue button */}
          <div className="p-4 bg-white">
            <button 
              onClick={handleContinue}
              className="w-full bg-blue-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show main selection screen
  return (
    <div className="flex flex-col space-y-4 px-2">
      {/* Drawing Selection */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 mb-4 mx-2">
        <h3 className="text-lg font-semibold text-center mb-6">Choose your drawing</h3>
        <div className="grid grid-cols-3 gap-6">
          {existingDrawings.map((drawing) => (
            <button
              key={drawing.id}
              onClick={() => handleDrawingSelect(drawing.id as 'drawing1' | 'drawing2' | 'drawing3')}
              className="py-6 px-3 rounded-lg border-2 border-gray-200 bg-gray-50 hover:border-blue-500 hover:bg-blue-50 transition-all min-h-[80px] flex items-center justify-center"
            >
              <div className="text-center">
                <h4 className="font-semibold text-sm leading-tight">{drawing.name}</h4>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}