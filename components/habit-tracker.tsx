"use client"

import { useState, useEffect } from "react"
import FirstUserForm from "./first-user-form"
import type { Habit, DayRecord } from "@/lib/types"
import HabitGrid from "./habit-grid"
import HabitHeader from "./habit-header"
import HabitCalendar from "./habit-calendar"

interface HabitTrackerProps {
  habit: Habit | null
  onAddHabit: (name: string, person: string) => void
  onUpdateRecords: (dayRecords: DayRecord[]) => void
  onDeleteHabit: () => void
  isNewHabitMode: boolean
  onUpdateHabit?: (habit: Habit) => void
  onViewChange?: (view: 'chart' | 'calendar') => void
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
  const [currentView, setCurrentView] = useState<'chart' | 'calendar'>(habit?.preferredView || 'chart')
  const [hasUsedCalendar, setHasUsedCalendar] = useState(false)
  const [showAlreadyLoggedMessage, setShowAlreadyLoggedMessage] = useState(false)

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

  // Check if user has already logged today
  const hasLoggedToday = () => {
    if (!habit) return false
    const today = new Date()
    const habitStartDate = new Date(habit.createdAt)
    const daysSinceStart = Math.floor((today.getTime() - habitStartDate.getTime()) / (1000 * 60 * 60 * 24)) + 1
    
    // Check if there's already a record for today
    return dayRecords.some(record => record.x === daysSinceStart)
  }

  const handleLetGo = () => {
    if (hasLoggedToday()) {
      setShowAlreadyLoggedMessage(true)
      setTimeout(() => setShowAlreadyLoggedMessage(false), 3000)
      return
    }

    setDayRecords((prev) => {
      const lastRecord = prev[prev.length - 1]
      if (!lastRecord) {
        return [{ x: 1, y: 1 }]
      }
      const newX = lastRecord.x + 1
      const newY = lastRecord.y + 1
      if (newX <= 30 && newY <= 30) {
        return [...prev, { x: newX, y: newY }]
      }
      return prev
    })
  }

  const handleHabitMissed = () => {
    if (hasLoggedToday()) {
      setShowAlreadyLoggedMessage(true)
      setTimeout(() => setShowAlreadyLoggedMessage(false), 3000)
      return
    }

    setDayRecords((prev) => {
      const lastRecord = prev[prev.length - 1]
      if (!lastRecord) {
        return [{ x: 1, y: 0 }]
      }
      const newX = lastRecord.x + 1
      const newY = Math.max(0, lastRecord.y - 1)
      if (newX <= 30) {
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

  if (isNewHabitMode) {
    return <HabitHeader onSave={handleSaveHabit} isSaved={false} habitData={{ name: "", person: "" }} />
  }

  return (
    <div className="flex flex-col h-full px-6 py-2">
      {habit && isSaved && (
        <>
          {/* Chart view dropdown */}
          <div className="relative flex items-center justify-end py-2 flex-shrink-0">
            <button
              onClick={() => setShowViewDropdown(!showViewDropdown)}
              className="flex items-center gap-1 text-base font-semibold text-right hover:text-primary transition-colors"
            >
              {currentView === 'chart' ? 'Chart view' : 'Calendar view'}
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
              </div>
            )}
          </div>

          {/* Dotted structure grid or Calendar view */}
          <div className="w-full py-4">
            {currentView === 'chart' ? (
              <div className="w-full h-full flex items-center justify-center">
                <HabitGrid dayRecords={dayRecords} />
              </div>
            ) : (
              <HabitCalendar 
                dayRecords={dayRecords} 
                habitStartDate={habit.createdAt}
              />
            )}
          </div>

          {/* Already logged message */}
          {showAlreadyLoggedMessage && (
            <div className="bg-orange-100 border border-orange-300 text-orange-800 px-4 py-2 rounded-md text-center text-sm font-medium mb-2">
              You have already logged your habit for today!
            </div>
          )}

          {/* Two CTAs side by side */}
          <div className="flex gap-2 flex-shrink-0 px-2">
            <button
              onClick={handleLetGo}
              className="flex-1 px-3 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity border-2 border-primary shadow-md text-center text-sm"
            >
              Let's Go
            </button>
            <button
              onClick={handleHabitMissed}
              className="flex-1 px-3 py-2.5 bg-destructive text-white font-semibold rounded-lg hover:opacity-90 transition-opacity border-2 border-destructive shadow-md text-center text-sm"
            >
              Habit Missed
            </button>
          </div>

          {/* Want to give up text at bottom */}
          <div className="w-full text-center text-sm font-semibold py-3 flex-shrink-0">
            <button
              onClick={handleGiveUpClick}
              className="underline text-foreground hover:text-muted-foreground transition-colors"
            >
              Want to give up
            </button>
          </div>

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
