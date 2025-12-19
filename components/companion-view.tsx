"use client";

import { useState, useMemo } from "react";
import { ManualDotsCanvas } from "./ManualDotsCanvas";
import { unicornDotsData, lockDotsData } from "../data/treeDots";

interface CompanionViewProps {
  habit: any;
  dayRecords: any[];
  onPatternChange?: (pattern: 'unicorn' | 'lock') => void;
  currentPattern?: 'unicorn' | 'lock';
  onComplete?: () => void;
  onMiss?: () => void;
  onCanvasStateChange?: (isShowing: boolean) => void;
}

export default function CompanionView({ habit, dayRecords, onPatternChange, currentPattern = 'unicorn', onComplete, onMiss, onCanvasStateChange }: CompanionViewProps) {
  const [selectedIllustration, setSelectedIllustration] = useState<string>(currentPattern);
  
  // Always start with pattern selection screen, don't auto-show canvas
  const [showCanvas, setShowCanvas] = useState(false);

  // Notify parent when canvas state changes
  useMemo(() => {
    if (onCanvasStateChange) {
      onCanvasStateChange(showCanvas);
    }
  }, [showCanvas, onCanvasStateChange]);

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

  // Update selectedIllustration when currentPattern prop changes
  useMemo(() => {
    setSelectedIllustration(currentPattern);
  }, [currentPattern]);

  const handlePatternChange = (pattern: 'unicorn' | 'lock') => {
    setSelectedIllustration(pattern);
    if (onPatternChange) {
      onPatternChange(pattern);
    }
  };

  const handleContinue = () => {
    setShowCanvas(true);
  };

  // Show pattern selection screen
  if (!showCanvas) {
    return (
      <div className="flex flex-col space-y-4 p-4">
        {/* Pattern Selection */}
        <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
          <h3 className="text-lg font-semibold text-center mb-4">Choose Your Pattern</h3>
          <div className="flex gap-4">
            <button
              onClick={() => handlePatternChange('unicorn')}
              className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                selectedIllustration === 'unicorn'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">🦄</div>
                <h4 className="font-semibold">Unicorn</h4>
                <p className="text-xs text-gray-600">60 dots journey</p>
              </div>
            </button>
            <button
              onClick={() => handlePatternChange('lock')}
              className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                selectedIllustration === 'lock'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">🔒</div>
                <h4 className="font-semibold">Lock</h4>
                <p className="text-xs text-gray-600">30 dots journey</p>
              </div>
            </button>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-4">
          <button
            onClick={handleContinue}
            className="w-full bg-blue-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  // Show dotted canvas screen (after Continue is clicked)
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 max-w-sm mx-auto">
      <ManualDotsCanvas 
        imagePath={selectedIllustration === 'lock' ? "/illustrations/Lock.jpg" : "/illustrations/ghoda.png"}
        dotsData={selectedIllustration === 'lock' ? lockDotsData : unicornDotsData}
        completedDays={completedDays}
        imageWidth={800}
        imageHeight={800}
        imageOpacity={0.35}
      />
    </div>
  );
}