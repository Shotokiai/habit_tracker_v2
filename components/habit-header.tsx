"use client"

import { useState } from "react"

interface HabitHeaderProps {
  onSave: (name: string, person: string) => void
  isSaved: boolean
  habitData: { name: string; person: string }
}

export default function HabitHeader({ onSave, isSaved, habitData }: HabitHeaderProps) {
  const [habitName, setHabitName] = useState(habitData.name)

  const handleSave = () => {
    if (habitName.trim()) {
      onSave(habitName, "");
      setHabitName("");
    }
  }

  // No compact mode needed, always show main form

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
          <button
            onClick={handleSave}
            disabled={!habitName.trim()}
            className="w-full px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity border border-primary disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            Create Habit
          </button>
        </div>
      </div>
    </div>
  )
}
