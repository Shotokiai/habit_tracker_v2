import { useState } from "react"

interface CustomHabitScreenProps {
  habitType: "make" | "break"
  onHabitCreate: (habitName: string) => void
  onBack: () => void
}

export default function CustomHabitScreen({
  habitType,
  onHabitCreate,
  onBack,
}: CustomHabitScreenProps) {
  const [habitText, setHabitText] = useState("")

  const heading =
    habitType === "make"
      ? "What are you really good at? but not consistent with it..."
      : "What are the bad habits which you are trying to break?"

  const handleLetsBuild = () => {
    if (!habitText.trim()) {
      alert("Please describe your habit")
      return
    }

    onHabitCreate(habitText.trim())
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header with Back Button */}
      <div className="px-4 py-3 bg-card border-b border-border">
        <button
          onClick={onBack}
          className="px-3 py-2 bg-muted text-muted-foreground hover:bg-muted/80 transition-colors font-medium text-sm rounded-md"
        >
          ← Back
        </button>
      </div>

      <div className="flex-1 p-4 flex flex-col justify-center max-w-md mx-auto w-full">
        {/* Heading */}
        <h1 className="text-xl font-bold text-foreground mb-4 text-center">
          {heading}
        </h1>

        {/* Text Input */}
        <div className="mb-4">
          <textarea
            className="w-full border-2 border-input rounded-lg p-3 text-base bg-background text-foreground min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Describe in an one line"
            value={habitText}
            onChange={(e) => setHabitText(e.target.value)}
            maxLength={200}
          />
          <div className="text-xs text-muted-foreground text-right mt-1">
            {habitText.length}/200
          </div>
        </div>

        {/* Let's Build Button */}
        <button
          className={`w-full py-4 rounded-lg text-base font-bold transition-colors ${
            habitText.trim()
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
          onClick={handleLetsBuild}
          disabled={!habitText.trim()}
        >
          Let's Build →
        </button>
      </div>
    </div>
  )
}
