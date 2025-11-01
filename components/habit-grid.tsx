"use client"

import { useMemo } from "react"
import DotGrid from "./dot-grid"

interface DayRecord {
  x: number
  y: number
}

interface HabitGridProps {
  dayRecords: DayRecord[]
}

export default function HabitGrid({ dayRecords }: HabitGridProps) {
  const gridSize = 31
  const dotSize = 12
  const spacing = 18
  const gridWidth = gridSize * spacing
  const gridHeight = gridSize * spacing

  const linePath = useMemo(() => {
    if (dayRecords.length === 0) return ""

    const points: string[] = []
    dayRecords.forEach((record) => {
      const x = record.x * spacing + spacing / 2
      const y = gridHeight - (record.y * spacing + spacing / 2)
      points.push(`${x},${y}`)
    })

    return points.join(" L ")
  }, [dayRecords, gridHeight])

  return (
    <div className="flex flex-col items-center gap-2 overflow-x-auto px-2 py-4">
      <div className="relative">
        <div
          className="absolute -left-12 top-0 flex flex-col justify-between text-xs font-semibold text-foreground"
          style={{ height: gridHeight + 40 }}
        >
          {Array.from({ length: gridSize }, (_, i) => gridSize - i).map((num) => (
            <div key={num} className="flex items-center justify-end w-10 h-4">
              <span>{num}</span>
            </div>
          ))}
        </div>

        {/* Main grid container */}
        <div
          className="relative bg-card border border-foreground/20 rounded-lg p-2 shadow-md ml-2"
          style={{ width: gridWidth + 40, height: gridHeight + 40 }}
        >
          <svg width={gridWidth + 40} height={gridHeight + 40} className="absolute inset-0 pointer-events-none">
            {dayRecords.length > 0 && (
              <polyline points={linePath} fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
            )}
          </svg>

          <DotGrid gridSize={gridSize} spacing={spacing} dotSize={dotSize} dayRecords={dayRecords} />
        </div>

        <div
          className="flex justify-between mt-2 text-xs font-semibold text-foreground ml-2"
          style={{ width: gridWidth + 40 }}
        >
          {Array.from({ length: gridSize }, (_, i) => i + 1).map((num) => (
            <div key={num} className="w-4 text-center text-xs">
              <span>{num}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
