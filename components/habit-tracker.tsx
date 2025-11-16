"use client"

import { useState, useEffect } from "react"
import FirstUserForm from "./first-user-form"
import type { Habit, DayRecord } from "@/lib/types"
import HabitGrid from "./habit-grid"
import HabitHeader from "./habit-header"

interface HabitTrackerProps {
  habit: Habit | null
  onAddHabit: (name: string, person: string) => void
  onUpdateRecords: (dayRecords: DayRecord[]) => void
  onDeleteHabit: () => void
  isNewHabitMode: boolean
  compact?: boolean
}

export default function HabitTracker({
  habit,
  onAddHabit,
  onUpdateRecords,
  onDeleteHabit,
  isNewHabitMode,
  compact = false,
}: HabitTrackerProps) {
  // First-time user info state
  const [userInfo, setUserInfo] = useState<{ username: string; email: string } | null>(null)
  const [userChecked, setUserChecked] = useState(false)
  const [dayRecords, setDayRecords] = useState<DayRecord[]>([])
  const [isSaved, setIsSaved] = useState(false)
  // On mount, check for user info in localStorage
  useEffect(() => {
    const stored = localStorage.getItem("ht_userInfo")
    if (stored) {
      setUserInfo(JSON.parse(stored))
    }
    setUserChecked(true)
  }, [])

  // Handler for first user form
  const handleFirstUser = (user: { username: string; email: string }) => {
    setUserInfo(user)
    localStorage.setItem("ht_userInfo", JSON.stringify(user))
  }

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
      if (newX <= 31 && newY <= 31) {
        return [...prev, { x: newX, y: newY }]
      }
      return prev
    })
  }

  const handleHabitMissed = () => {
    setDayRecords((prev) => {
      const lastRecord = prev[prev.length - 1]
      if (!lastRecord) {
        return [{ x: 1, y: 0 }]
      }
      const newX = lastRecord.x + 1
      const newY = Math.max(0, lastRecord.y - 1)
      if (newX <= 31) {
        return [...prev, { x: newX, y: newY }]
      }
      return prev
    })
  }

  const handleSaveHabit = (name: string, person: string) => {
    onAddHabit(name, person)
    setIsSaved(true)
  }

  // Show first-user form if not set
  if (userChecked && !userInfo) {
    return <FirstUserForm onSubmit={handleFirstUser} />
  }

  if (isNewHabitMode) {
    if (compact) {
      return (
        <div className="flex flex-col gap-2">
          <HabitHeader onSave={handleSaveHabit} isSaved={false} habitData={{ name: "", person: "" }} compact={true} />
          <div className="px-4">
            <HabitGrid dayRecords={[]} />
          </div>
        </div>
      )
    }
    return <HabitHeader onSave={handleSaveHabit} isSaved={false} habitData={{ name: "", person: "" }} compact={compact} />
  }

  return (
    <div className="flex flex-col gap-2 p-2 h-full">
      {habit && isSaved && (
        <>
          {/* Top bar with Back, habit name, Add */}
          <div className="bg-card border-b border-foreground/10 p-2 flex items-center justify-between gap-2 rounded-t-lg">
            <button
              onClick={onDeleteHabit}
              className="px-2 py-1 bg-transparent text-foreground font-semibold rounded text-sm hover:underline"
              title="Back"
            >
              Back
            </button>
            <h1 className="flex-1 text-center text-base font-bold text-foreground truncate">
              {habit.name}
            </h1>
            <button
              className="px-2 py-1 bg-transparent text-primary font-semibold rounded text-sm hover:underline"
              title="Add"
              disabled
            >
              Add
            </button>
          </div>

          {/* Quote box placeholder */}
          <div className="bg-card border border-foreground/10 rounded-lg p-2 my-2 text-center text-base font-semibold">
            Quote
          </div>

          {/* Change view */}
          <div className="text-center text-base font-semibold mb-2">Change view V</div>

          {/* Dotted structure grid */}
          <div className="flex-1 flex items-center justify-center">
            <HabitGrid dayRecords={dayRecords} />
          </div>

          {/* Two CTAs side by side */}
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleLetGo}
              className="flex-1 px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity border-2 border-primary shadow-md"
            >
              Let's Go
            </button>
            <button
              onClick={handleHabitMissed}
              className="flex-1 px-4 py-3 bg-destructive text-white font-semibold rounded-lg hover:opacity-90 transition-opacity border-2 border-destructive shadow-md"
            >
              Miss My Routine
            </button>
          </div>

          {/* Want to give up text at bottom */}
          <div className="w-full text-center text-base font-semibold mt-4 mb-2">
            Want to give up
          </div>
        </>
      )}
    </div>
  )
}
