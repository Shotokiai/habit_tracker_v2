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
}

export default function HabitTracker({
  habit,
  onAddHabit,
  onUpdateRecords,
  onDeleteHabit,
  isNewHabitMode,
}: HabitTrackerProps) {
  const [dayRecords, setDayRecords] = useState<DayRecord[]>([])
  const [isSaved, setIsSaved] = useState(false)

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

  if (isNewHabitMode) {
    return <HabitHeader onSave={handleSaveHabit} isSaved={false} habitData={{ name: "", person: "" }} />
  }

  return (
    <div className="flex flex-col gap-4 p-4 h-full">
      {habit && isSaved && (
        <>
          {/* Habit Title at Top */}
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold text-foreground truncate">{habit.name}</h2>
            <div className="text-base font-semibold text-right">Change view V</div>
          </div>

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
              className="w-full px-6 py-3 bg-destructive text-white font-semibold rounded-lg hover:opacity-90 transition-opacity border-2 border-destructive shadow-md"
            >
              Habit Missed
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
