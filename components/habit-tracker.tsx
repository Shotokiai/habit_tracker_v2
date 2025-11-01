"use client"

import { useState, useEffect } from "react"
import FirstUserForm from "./first-user-form"
import type { Habit, DayRecord } from "@/app/page"
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
    <div className="flex flex-col gap-4 p-4 h-full">
      {habit && isSaved && (
        <>
          <div className="bg-card rounded-lg p-4 border border-foreground/10">
            <p className="text-sm text-muted-foreground">
              Why I want to build this habit? <span className="font-semibold text-foreground">{habit.person}</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Month:{" "}
              {new Date(habit.monthYear + "-01").toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <HabitGrid dayRecords={dayRecords} />

          <div className="flex flex-col gap-3">
            <button
              onClick={handleLetGo}
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity border-2 border-primary shadow-md"
            >
              Let's Go
            </button>
            <button
              onClick={handleHabitMissed}
              className="w-full px-6 py-3 bg-destructive text-white font-semibold rounded-lg hover:opacity-90 transition-opacity border-2 border-destructive shadow-md"
            >
              Miss My Routine
            </button>
            <button
              onClick={onDeleteHabit}
              className="w-full px-6 py-2 bg-muted text-foreground font-semibold rounded-lg hover:bg-muted-foreground/50 transition-colors text-sm"
            >
              Delete Habit
            </button>
          </div>
        </>
      )}
    </div>
  )
}
