"use client"

import { useState } from "react"

interface HabitHeaderProps {
  onSave: (name: string, person: string) => void
  isSaved: boolean
  habitData: { name: string; person: string }
  compact?: boolean
}

export default function HabitHeader({ onSave, isSaved, habitData, compact = false }: HabitHeaderProps) {
  const [habitName, setHabitName] = useState(habitData.name)
  const [personName, setPersonName] = useState(habitData.person)

  const handleSave = () => {
    if (habitName.trim() && personName.trim()) {
      onSave(habitName, personName)
      setHabitName("")
      setPersonName("")
    }
  }

  if (compact) {
    return (
      <div className="w-full flex flex-col items-center justify-start p-2">
        <div className="w-full bg-card border border-foreground/10 rounded-lg p-3 shadow-sm">
          <h3 className="text-lg font-bold text-foreground mb-2 text-center">Create New Habit</h3>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              placeholder="Habit name"
              className="w-full px-3 py-2 border border-foreground/20 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              placeholder="Why I want to build this habit?"
              className="w-full px-3 py-2 border border-foreground/20 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handleSave}
              disabled={!habitName.trim() || !personName.trim()}
              className="w-full px-3 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity border border-primary disabled:opacity-50 disabled:cursor-not-allowed mt-1"
            >
              Create Habit
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen p-4 gap-6">
      <div className="w-full max-w-sm bg-card border border-foreground/10 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Create New Habit</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Habit Name</label>
            <input
              type="text"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              placeholder="e.g., Phone Habit"
              className="w-full px-4 py-2 border border-foreground/20 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Why I want to build this habit?</label>
            <input
              type="text"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              placeholder="e.g., To improve my focus and productivity"
              className="w-full px-4 py-2 border border-foreground/20 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            onClick={handleSave}
            disabled={!habitName.trim() || !personName.trim()}
            className="w-full px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity border border-primary disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            Create Habit
          </button>
        </div>
      </div>
    </div>
  )
}
