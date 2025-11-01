"use client"

import { useState, useEffect } from "react"
import { createRoot } from "react-dom/client"
import { chrome } from "chrome" // Declaring the chrome variable

interface HabitData {
  name: string
  person: string
}

interface DayRecord {
  x: number
  y: number
}

const chromeStorage = {
  get: (key: string): Promise<any> => {
    return new Promise((resolve) => {
      chrome.storage.local.get([key], (result) => {
        resolve(result[key])
      })
    })
  },
  set: (key: string, value: any): Promise<void> => {
    return new Promise((resolve) => {
      chrome.storage.local.set({ [key]: value }, () => {
        resolve()
      })
    })
  },
}

function HabitTrackerPopup() {
  const [dayRecords, setDayRecords] = useState<DayRecord[]>([])
  const [habitData, setHabitData] = useState<HabitData>({ name: "", person: "" })
  const [isSaved, setIsSaved] = useState(false)
  const [habitName, setHabitName] = useState("")
  const [personName, setPersonName] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      const savedHabit = await chromeStorage.get("habitData")
      const savedRecords = await chromeStorage.get("dayRecords")

      if (savedHabit) {
        setHabitData(savedHabit)
        setHabitName(savedHabit.name)
        setPersonName(savedHabit.person)
        setIsSaved(true)
      } else {
        setIsEditing(true)
      }

      if (savedRecords) {
        setDayRecords(savedRecords)
      }
    }

    loadData()
  }, [])

  const handleSaveHabit = async () => {
    if (habitName.trim() && personName.trim()) {
      const newHabitData = { name: habitName, person: personName }
      setHabitData(newHabitData)
      setIsSaved(true)
      setIsEditing(false)
      await chromeStorage.set("habitData", newHabitData)
    }
  }

  const handleLetGo = async () => {
    const newRecords = [...dayRecords]
    const lastRecord = newRecords[newRecords.length - 1]

    if (!lastRecord) {
      newRecords.push({ x: 1, y: 1 })
    } else {
      const newX = lastRecord.x + 1
      const newY = lastRecord.y + 1
      if (newX <= 31 && newY <= 31) {
        newRecords.push({ x: newX, y: newY })
      }
    }

    setDayRecords(newRecords)
    await chromeStorage.set("dayRecords", newRecords)
  }

  const handleHabitMissed = async () => {
    const newRecords = [...dayRecords]
    const lastRecord = newRecords[newRecords.length - 1]

    if (!lastRecord) {
      newRecords.push({ x: 1, y: 0 })
    } else {
      const newX = lastRecord.x + 1
      const newY = Math.max(0, lastRecord.y - 1)
      if (newX <= 31) {
        newRecords.push({ x: newX, y: newY })
      }
    }

    setDayRecords(newRecords)
    await chromeStorage.set("dayRecords", newRecords)
  }

  const handleReset = async () => {
    if (confirm("Are you sure you want to reset all progress?")) {
      setDayRecords([])
      await chromeStorage.set("dayRecords", [])
    }
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const isHighlighted = (x: number, y: number) => {
    return dayRecords.some((record) => record.x === x && record.y === y && record.y > 0)
  }

  const gridSize = 15 // Smaller grid for popup
  const spacing = 16
  const dotSize = 10

  return (
    <div className="container">
      {!isEditing && isSaved ? (
        <>
          <div className="habit-display">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <div>
                <h1>{habitData.name}</h1>
                <p>Tracked by: {habitData.person}</p>
              </div>
              <button className="btn-edit" onClick={handleEdit}>
                Edit
              </button>
            </div>
          </div>

          <div className="grid-section">
            <div className="grid-container" style={{ position: "relative", paddingLeft: "28px" }}>
              <div className="y-axis">
                {Array.from({ length: gridSize }, (_, i) => gridSize - i).map((num) => (
                  <div key={num} style={{ height: spacing, display: "flex", alignItems: "center" }}>
                    {num}
                  </div>
                ))}
              </div>

              <svg width={gridSize * spacing + 20} height={gridSize * spacing + 20} style={{ display: "block" }}>
                {dayRecords.length > 0 && (
                  <polyline
                    points={dayRecords
                      .map((record) => {
                        const x = record.x * spacing + spacing / 2 + 10
                        const y = (gridSize - record.y + 1) * spacing - spacing / 2 + 10
                        return `${x},${y}`
                      })
                      .join(" L ")}
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="1.5"
                  />
                )}

                {Array.from({ length: gridSize }, (_, i) => i + 1).map((x) =>
                  Array.from({ length: gridSize }, (_, i) => i + 1).map((y) => {
                    const posX = x * spacing + spacing / 2 + 10
                    const posY = (gridSize - y + 1) * spacing - spacing / 2 + 10
                    const highlighted = isHighlighted(x, y)

                    return (
                      <circle
                        key={`${x}-${y}`}
                        cx={posX}
                        cy={posY}
                        r={dotSize / 2}
                        fill={highlighted ? "#4f46e5" : "#e5e7eb"}
                        className={highlighted ? "dot highlighted" : "dot empty"}
                        style={{
                          filter: highlighted ? "drop-shadow(0 0 4px rgba(79, 70, 229, 0.6))" : "none",
                        }}
                      />
                    )
                  }),
                )}
              </svg>

              <div className="x-axis">
                {Array.from({ length: gridSize }, (_, i) => i + 1).map((num) => (
                  <div key={num}>{num}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn-lets-go" onClick={handleLetGo}>
              Let's Go
            </button>
            <button className="btn-missed" onClick={handleHabitMissed}>
              Habit Missed
            </button>
          </div>

          <button className="reset-btn" onClick={handleReset}>
            Reset Progress
          </button>
        </>
      ) : (
        <div className="header-section">
          <h2>{isEditing ? "New Habit" : "Setup Habit"}</h2>
          <div className="input-group">
            <label>Habit Name</label>
            <input
              type="text"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              placeholder="e.g., Phone Habit, Exercise"
            />
          </div>
          <div className="input-group">
            <label>Your Name</label>
            <input
              type="text"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              placeholder="e.g., Vinayak"
            />
          </div>
          <div className="button-group">
            <button className="btn-save" onClick={handleSaveHabit} disabled={!habitName.trim() || !personName.trim()}>
              Save Habit
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const root = createRoot(document.getElementById("root")!)
root.render(<HabitTrackerPopup />)
