"use client"

import { useState, useEffect } from "react"
import FirstUserForm from "@/components/first-user-form"
import type { Habit, DayRecord } from "@/lib/types"
import HabitGrid from "@/components/habit-grid"
import HabitHeader from "@/components/habit-header"
import HabitCalendar from "@/components/habit-calendar"
import CompanionViewV3 from "@/components/CompanionViewV3"
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

  // Auto-select pattern based on existing progress when switching to companion view
  useEffect(() => {
    if (currentView === 'companion' && !habit?.companionPattern && dayRecords.length > 0) {
      // If user has existing progress, auto-select based on chart view (30 dots = lock pattern)
      const currentProgress = dayRecords[dayRecords.length - 1]?.y || 0;
      if (currentProgress <= 30) {
        setCompanionPattern('lock');
        if (onUpdateHabit && habit) {
          onUpdateHabit({...habit, companionPattern: 'lock'});
        }
        setShowPatternSelection(false);
      }
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

  return (
    <div className="flex flex-col h-full px-4 py-2">
      {habit && isSaved && (
        <>
          {/* Chart view dropdown */}
          <div className="relative flex items-center justify-end py-2 flex-shrink-0">
            <button
              onClick={() => setShowViewDropdown(!showViewDropdown)}
              className="flex items-center gap-1 text-base font-semibold text-right hover:text-primary transition-colors"
            >
              {currentView === 'chart' ? 'Chart view' : currentView === 'calendar' ? 'Calendar view' : 'Companion view'}
              <span className={`transform transition-transform ${showViewDropdown ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            {showViewDropdown && (
              <div 
                className="absolute top-8 right-0 bg-background border border-foreground/20 rounded-md shadow-lg z-10 min-w-32"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => {
                    setCurrentView('chart')
                    setShowViewDropdown(false)
                    onViewChange?.('chart')
                    if (habit && onUpdateHabit) {
                      onUpdateHabit({...habit, preferredView: 'chart'})
                    }
                  }}
                  className={`w-full px-3 py-2 text-left hover:bg-muted transition-colors text-sm ${
                    currentView === 'chart' ? 'bg-muted font-semibold' : ''
                  }`}
                >
                  Chart view
                </button>
                <button
                  onClick={() => {
                    setCurrentView('calendar')
                    setHasUsedCalendar(true)
                    setShowViewDropdown(false)
                    onViewChange?.('calendar')
                    if (habit && onUpdateHabit) {
                      onUpdateHabit({...habit, preferredView: 'calendar'})
                    }
                  }}
                  className={`w-full px-3 py-2 text-left hover:bg-muted transition-colors text-sm ${
                    currentView === 'calendar' ? 'bg-muted font-semibold' : ''
                  }`}
                >
                  Calendar view
                </button>
                <button
                  onClick={() => {
                    setCurrentView('companion')
                    setShowViewDropdown(false)
                    onViewChange?.('companion')
                    if (habit && onUpdateHabit) {
                      onUpdateHabit({...habit, preferredView: 'companion'})
                    }
                  }}
                  className={`w-full px-3 py-2 text-left hover:bg-muted transition-colors text-sm ${
                    currentView === 'companion' ? 'bg-muted font-semibold' : ''
                  }`}
                >
                  Companion view
                </button>
              </div>
            )}
          </div>

          {/* Dotted structure grid, Calendar view, or Companion view */}
          <div className="w-full py-4">
            {currentView === 'chart' ? (
              <div className="w-full h-full flex items-center justify-center">
                <HabitGrid dayRecords={dayRecords} />
              </div>
            ) : currentView === 'calendar' ? (
              <HabitCalendar 
                dayRecords={dayRecords} 
                habitStartDate={habit.createdAt}
              />
            ) : (
              <div className="w-full">
                {showPatternSelection ? (
                  /* Pattern Selection Screen */
                  <div className="flex flex-col items-center space-y-6 py-8">
                    <h2 className="text-xl font-bold text-center">Choose Your Drawing Pattern</h2>
                    
                    <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                      {/* Unicorn Pattern Box */}
                      <div 
                        onClick={() => setCompanionPattern('unicorn')}
                        className={`border-2 rounded-lg p-4 text-center cursor-pointer transition-all ${
                          companionPattern === 'unicorn' 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="text-lg font-semibold">🦄 Unicorn</div>
                        <div className="text-sm text-gray-600 mt-1">60 dots journey</div>
                      </div>
                      
                      {/* Lock Pattern Box */}
                      <div 
                        onClick={() => setCompanionPattern('lock')}
                        className={`border-2 rounded-lg p-4 text-center cursor-pointer transition-all ${
                          companionPattern === 'lock' 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="text-lg font-semibold">🔒 Lock</div>
                        <div className="text-sm text-gray-600 mt-1">30 dots journey</div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        setShowPatternSelection(false);
                        // Store the selected pattern in the habit
                        if (onUpdateHabit && habit) {
                          onUpdateHabit({...habit, companionPattern});
                        }
                      }}
                      className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                ) : (
                  /* Show Selected Pattern */
                  <div className="w-full">
                    {companionPattern === 'unicorn' ? (
                      <CompanionViewV3 
                        habit={habit}
                        dayRecords={dayRecords}
                      />
                    ) : (
                      <LockView 
                        habit={habit}
                        dayRecords={dayRecords}
                      />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Two CTAs side by side - only show when not in pattern selection */}
          {!(currentView === 'companion' && showPatternSelection) && (
            <div className="flex gap-2 flex-shrink-0 px-2">
              <button
                onClick={handleLetGo}
                className="flex-1 px-3 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity border-2 border-primary shadow-md text-center text-sm"
              >
                Let's Go
              </button>
              <button
                onClick={handleHabitMissed}
                className="flex-1 px-3 py-2.5 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors border-2 border-red-500 shadow-md text-center text-sm"
              >
                Habit missed
              </button>
            </div>
          )}

          {/* Want to give up text at bottom - only show if habit journey started and not in pattern selection */}
          {!(currentView === 'companion' && showPatternSelection) && dayRecords.length > 0 && dayRecords[dayRecords.length - 1]?.y > 0 && (
            <div className="w-full text-center text-sm font-semibold py-3 flex-shrink-0">
              <button
                onClick={handleGiveUpClick}
                className="underline text-foreground hover:text-muted-foreground transition-colors"
              >
                Want to give up
              </button>
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
