"use client"

import { useState, useEffect } from "react"
import HabitTracker from "@/components/habit-tracker"

export interface Habit {
  id: string
  name: string
  person: string
  dayRecords: DayRecord[]
  createdAt: string
  monthYear: string
}

export interface DayRecord {
  x: number
  y: number
}

export default function Home() {
  const [habits, setHabits] = useState<Habit[]>([])
  const [currentHabitIndex, setCurrentHabitIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const savedHabits = localStorage.getItem("habits")
    if (savedHabits) {
      try {
        setHabits(JSON.parse(savedHabits))
      } catch {
        setHabits([])
      }
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("habits", JSON.stringify(habits))
    }
  }, [habits, isLoaded])

  const addHabit = (name: string, person: string) => {
    const currentMonthYear = new Date().toISOString().slice(0, 7)
    const newHabit: Habit = {
      id: Date.now().toString(),
      name,
      person,
      dayRecords: [],
      createdAt: new Date().toISOString(),
      monthYear: currentMonthYear,
    }
    setHabits([...habits, newHabit])
    setCurrentHabitIndex(habits.length)
  }

  const updateHabitRecords = (habitId: string, dayRecords: DayRecord[]) => {
    setHabits(habits.map((habit) => (habit.id === habitId ? { ...habit, dayRecords } : habit)))
  }

  const deleteHabit = (habitId: string) => {
    const newHabits = habits.filter((h) => h.id !== habitId)
    setHabits(newHabits)
    if (currentHabitIndex >= newHabits.length && currentHabitIndex > 0) {
      setCurrentHabitIndex(currentHabitIndex - 1)
    }
  }

  const handleSwipe = () => {
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentHabitIndex < habits.length - 1) {
      setCurrentHabitIndex(currentHabitIndex + 1)
    } else if (isLeftSwipe && currentHabitIndex === habits.length - 1) {
      setCurrentHabitIndex(0)
    } else if (isRightSwipe && currentHabitIndex > 0) {
      setCurrentHabitIndex(currentHabitIndex - 1)
    } else if (isRightSwipe && currentHabitIndex === 0) {
      setCurrentHabitIndex(habits.length - 1)
    }
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-foreground">Loading your habits...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted">
      <div
        className="w-full h-screen max-w-md bg-background overflow-hidden flex flex-col"
        onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
        onTouchEnd={(e) => {
          setTouchEnd(e.changedTouches[0].clientX)
          handleSwipe()
        }}
      >
        {(habits.length === 0 || currentHabitIndex === habits.length) ? (
          // If there are no habits, or the user clicked Add (current index === habits.length),
          // show the new-habit UI. When there are existing habits we render the compact add UI
          // in-place (so it appears just below the top bar) by using HabitTracker in new-habit mode
          // but letting the page layout keep the header and grid visible.
          <HabitTracker
            habit={null}
            onAddHabit={addHabit}
            onUpdateRecords={() => {}}
            onDeleteHabit={() => {}}
            isNewHabitMode={true}
            compact={habits.length > 0 && currentHabitIndex === habits.length}
          />
        ) : (
          <>
            <div className="bg-card border-b border-foreground/10 p-3 flex items-center justify-between gap-2">
              <button
                onClick={() =>
                  setCurrentHabitIndex(currentHabitIndex === 0 ? habits.length - 1 : currentHabitIndex - 1)
                }
                className="px-3 py-1.5 bg-muted text-foreground font-semibold rounded text-sm hover:bg-muted-foreground/50 transition-colors"
                title="Previous habit"
              >
                ← Back
              </button>
              <h1 className="flex-1 text-center text-lg font-bold text-foreground truncate">
                {habits[currentHabitIndex]?.name}
              </h1>
              <button
                onClick={() => setCurrentHabitIndex(habits.length)}
                className="px-3 py-1.5 bg-primary text-primary-foreground font-semibold rounded text-sm hover:opacity-90 transition-opacity"
                title="Add new habit"
              >
                + Add
              </button>
            </div>

            {/* Habit Tracker Content */}
            <div className="flex-1 overflow-auto">
              <HabitTracker
                habit={habits[currentHabitIndex]}
                onAddHabit={addHabit}
                onUpdateRecords={(dayRecords) => updateHabitRecords(habits[currentHabitIndex].id, dayRecords)}
                onDeleteHabit={() => deleteHabit(habits[currentHabitIndex].id)}
                isNewHabitMode={false}
                compact={false}
              />
            </div>

            <div className="bg-card border-t border-foreground/10 px-4 py-2 text-center text-xs text-muted-foreground">
              Habit {currentHabitIndex + 1} of {habits.length} • Swipe to navigate
            </div>
          </>
        )}
      </div>
    </main>
  )
}
