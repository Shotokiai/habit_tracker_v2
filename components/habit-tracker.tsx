"use client"

import { useState, useEffect } from "react"
import FirstUserForm from "@/components/first-user-form"
import type { Habit, DayRecord } from "@/lib/types"
import HabitGrid from "@/components/habit-grid"
import HabitHeader from "@/components/habit-header"
import HabitCalendar from "@/components/habit-calendar"
import CompanionView from "./companion-view"
import CompanionViewV3 from "./CompanionViewV3"
import LockView from "@/components/LockView"

interface HabitTrackerProps {
  habit: Habit | null
  onAddHabit: (name: string, person: string) => void
  onUpdateRecords: (dayRecords: DayRecord[]) => void
  onDeleteHabit: () => void
  isNewHabitMode: boolean
  onUpdateHabit?: (habit: Habit) => void
  onViewChange?: (view: 'chart' | 'calendar' | 'companion') => void
}

export default function HabitTracker({
  habit,
  onAddHabit,
  onUpdateRecords,
  onDeleteHabit,
  isNewHabitMode,
  onUpdateHabit,
  onViewChange,
}: HabitTrackerProps) {
  const [dayRecords, setDayRecords] = useState<DayRecord[]>([])
  const [isSaved, setIsSaved] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [showViewDropdown, setShowViewDropdown] = useState(false)
  const [currentView, setCurrentView] = useState<'chart' | 'calendar' | 'companion'>(habit?.preferredView || 'chart')
  const [hasUsedCalendar, setHasUsedCalendar] = useState(false)
  const [companionPattern, setCompanionPattern] = useState<'unicorn' | 'lock'>(habit?.companionPattern || 'unicorn')
  const [showPatternSelection, setShowPatternSelection] = useState(!habit?.companionPattern)
  const [isCompanionCanvasShowing, setIsCompanionCanvasShowing] = useState(false)

  // Auto-select pattern based on existing progress when switching to companion view
  useEffect(() => {
    if (currentView === 'companion' && !habit?.companionPattern && dayRecords.length > 0) {
      // Show pattern selection instead of auto-selecting
      setShowPatternSelection(true);
    }
  }, [currentView, habit?.companionPattern, dayRecords, onUpdateHabit]);

  // Reset pattern selection when switching views (only if no pattern is saved)
  useEffect(() => {
    if (currentView !== 'companion') {
      // Don't reset if habit already has a pattern
      if (!habit?.companionPattern) {
        setShowPatternSelection(true);
      }
    }
  }, [currentView, habit?.companionPattern]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showViewDropdown) {
        setShowViewDropdown(false)
      }
    }

    if (showViewDropdown) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [showViewDropdown])

  useEffect(() => {
    if (habit) {
      const currentMonthYear = new Date().toISOString().slice(0, 7)
      if (habit.monthYear !== currentMonthYear) {
        // Different month - reset
        setDayRecords([])
        setIsSaved(true)
      } else {
        setDayRecords(habit.dayRecords)
        setIsSaved(true)
      }
    } else {
      setDayRecords([])
      setIsSaved(false)
    }
  }, [habit])

  useEffect(() => {
    if (isSaved && habit) {
      onUpdateRecords(dayRecords)
    }
  }, [dayRecords, isSaved])



  const handleLetGo = () => {

    setDayRecords((prev) => {
      const lastRecord = prev[prev.length - 1]
      if (!lastRecord) {
        return [{ x: 1, y: 1 }]
      }
      const newX = lastRecord.x + 1
      const newY = lastRecord.y + 1
      
      // Set limits based on view type
      let maxDots, maxY
      if (currentView === 'companion') {
        // Companion view: dynamic limit based on pattern
        maxDots = companionPattern === 'lock' ? 30 : 60
        maxY = maxDots
      } else {
        // Chart/Calendar view: always 30x30 grid
        maxDots = 30
        maxY = 30
      }
      
      if (newX <= maxDots && newY <= maxY) {
        return [...prev, { x: newX, y: newY }]
      }
      return prev
    })
  }

  const handleStick = () => {

    setDayRecords((prev) => {
      const lastRecord = prev[prev.length - 1]
      if (!lastRecord) {
        return [{ x: 1, y: 0 }]
      }
      const newX = lastRecord.x + 1
      const newY = Math.max(0, lastRecord.y - 1)
      // Dynamic limit based on companion pattern - lock: 30 dots, unicorn: 60 dots  
      const maxDots = currentView === 'companion' && companionPattern === 'lock' ? 30 : 60
      if (newX <= maxDots) {
        return [...prev, { x: newX, y: newY }]
      }
      return prev
    })
  }

  const handleSaveHabit = (name: string, person: string) => {
    onAddHabit(name, person)
    setIsSaved(true)
  }

  const handleGiveUpClick = () => {
    setShowDeleteConfirmation(true)
  }

  const handleConfirmDelete = () => {
    onDeleteHabit()
    setShowDeleteConfirmation(false)
  }

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false)
  }

  const handleHabitMissed = () => {
    // Only track missed habits if habit tracking has already started
    if (dayRecords.length === 0) {
      // Don't start habit tracking on missed click - only on Let's Go
      return;
    }
    
    setDayRecords((prev) => {
      const lastRecord = prev[prev.length - 1]
      
      // Missed habit: x increases (day advances) and y DECREASES (goes down)
      // This creates the red dot below the previous position
      const newX = lastRecord.x + 1
      const newY = Math.max(0, lastRecord.y - 1) // Decrease Y by 1, minimum 0
      
      // Set limits based on view type
      let maxDays
      if (currentView === 'companion') {
        maxDays = companionPattern === 'lock' ? 30 : 60
      } else {
        maxDays = 30 // Chart/Calendar view limit
      }
      
      if (newX <= maxDays) {
        return [...prev, { x: newX, y: newY }]
      }
      return prev
    })
  }

  if (isNewHabitMode) {
    return <HabitHeader onSave={handleSaveHabit} isSaved={false} habitData={{ name: "", person: "" }} />
  }

  // Handle null habit state - show message to create a habit
  if (!habit) {
    return (
      <div className="flex flex-col h-full px-4 py-8 items-center justify-center text-center">
        <div className="bg-gray-50 rounded-lg p-6 max-w-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">No Habits Yet</h2>
          <p className="text-gray-600 mb-4">
            You haven't created any habits yet. Start your journey by creating your first habit!
          </p>
          <button
            onClick={() => {
              // This should trigger the habit selection flow
              window.location.reload();
            }}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Create Your First Habit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full px-4 py-2">
      {habit && isSaved && (
        <>
          {/* View Dropdown */}
          <div className="flex items-center justify-end py-2 relative">
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowViewDropdown(!showViewDropdown);
                }}
                className="flex items-center justify-between w-44 px-3 py-2 text-sm border border-gray-200 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap"
              >
                <span className="text-gray-900 truncate">{currentView.charAt(0).toUpperCase() + currentView.slice(1)} View</span>
                <svg className={`ml-2 h-5 w-5 text-gray-400 transition-transform duration-200 ${showViewDropdown ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {showViewDropdown && (
                <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu">
                    {currentView !== 'chart' && (
                      <button
                        onClick={() => {
                          setCurrentView('chart');
                          onViewChange?.('chart');
                          setShowViewDropdown(false);
                        }}
                        className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Chart View
                      </button>
                    )}
                    {currentView !== 'calendar' && (
                      <button
                        onClick={() => {
                          setCurrentView('calendar');
                          onViewChange?.('calendar');
                          setShowViewDropdown(false);
                        }}
                        className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Calendar View
                      </button>
                    )}
                    {currentView !== 'companion' && (
                      <button
                        onClick={() => {
                          setCurrentView('companion');
                          onViewChange?.('companion');
                          setShowViewDropdown(false);
                          setShowPatternSelection(true); // Always show pattern selection when switching to companion
                        }}
                        className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Companion View
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main view rendering */}
          <div className="flex-1 pb-24">
            {currentView === 'chart' && (
              <div className="w-full flex items-center justify-center">
                <HabitGrid dayRecords={dayRecords} />
              </div>
            )}
            {currentView === 'calendar' && (
              <div className="w-full flex items-center justify-center pt-2">
                <HabitCalendar dayRecords={dayRecords} habitStartDate={habit.createdAt} />
              </div>
            )}
            {currentView === 'companion' && (
              <div className="w-full flex items-center justify-center pt-2">
                <CompanionView 
                  habit={habit} 
                  dayRecords={dayRecords} 
                  onPatternChange={(pattern) => {
                    setCompanionPattern(pattern);
                    onUpdateHabit({...habit, companionPattern: pattern});
                  }}
                  currentPattern={companionPattern}
                  onComplete={handleLetGo}
                  onMiss={handleHabitMissed}
                  onCanvasStateChange={setIsCompanionCanvasShowing}
                />
              </div>
            )}
          </div>

          {/* Fixed positioned CTAs - only show when content is loaded and companion is in drawing mode */}
          {(currentView === 'chart' || currentView === 'calendar' || 
            (currentView === 'companion' && isCompanionCanvasShowing)) && (
            <div className="fixed bottom-8 left-0 right-0 bg-white p-4 z-10">
              <div className="max-w-sm mx-auto">
                <div className="flex gap-2 mb-3">
                  <button
                    onClick={handleLetGo}
                    className="flex-1 px-3 py-2.5 bg-green-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all active:scale-95 shadow-lg text-center text-sm flex items-center justify-center h-14 rounded-2xl"
                    style={{ backgroundColor: '#10B981', boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.3)' }}
                  >
                    <span className="text-[15px] font-bold whitespace-nowrap">Completed Habit!</span>
                  </button>
                  <button
                    onClick={handleHabitMissed}
                    className="flex-1 px-3 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-700 font-semibold rounded-lg border border-amber-200 transition-all active:scale-95 text-center text-sm flex items-center justify-center h-14 rounded-2xl"
                  >
                    <span className="text-[15px] font-bold">Missed Today</span>
                  </button>
                </div>
                
                {/* Want to give up text */}
                {dayRecords.length > 0 && dayRecords[dayRecords.length - 1]?.y > 0 && (
                  <div className="w-full text-center text-sm font-semibold">
                    <button
                      onClick={handleGiveUpClick}
                      className="underline text-foreground hover:text-muted-foreground transition-colors"
                    >
                      Want to give up
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Confirmation Dialog */}
          {showDeleteConfirmation && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-background border border-border rounded-lg p-6 max-w-sm mx-4 shadow-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                  Do you really don't want to continue?
                </h3>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={handleConfirmDelete}
                    className="flex-1 px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors"
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleCancelDelete}
                    className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition-colors"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
