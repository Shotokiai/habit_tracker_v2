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
  const gridSize = 30
  const dotSize = 8
  const spacing = 12
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
    <div className="flex flex-col items-center gap-2 px-4 py-4">
      <div className="relative">
        <div
          className="absolute -left-8 top-0 flex flex-col justify-between text-xs font-semibold text-foreground"
          style={{ height: gridHeight + 20 }}
        >
          {Array.from({ length: gridSize }, (_, i) => {
            const num = gridSize - i;
            return (
              <div key={num} className="flex items-center justify-end w-6 h-4">
                <span className="text-right">{num % 5 === 0 ? num : ''}</span>
              </div>
            );
          })}
        </div>

        {/* Main grid container */}
        <div
          className="relative bg-card border border-foreground/20 rounded-lg p-2 shadow-md"
          style={{ width: gridWidth + 20, height: gridHeight + 20 }}
        >
          <svg width={gridWidth + 40} height={gridHeight + 40} className="absolute inset-0 pointer-events-none">
            {/* Diagonal guide line from (1,1) to (30,30) - plain black line */}
            <line
              x1={dotSize / 2 + 10}
              y1={gridHeight - dotSize / 2 + 10}
              x2={gridWidth - dotSize / 2 + 10}
              y2={dotSize / 2 + 10}
              stroke="black"
              strokeWidth="1"
            />
            {dayRecords.length > 0 && (
              <polyline points={linePath} fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
            )}
          </svg>

          <DotGrid gridSize={gridSize} spacing={spacing} dotSize={dotSize} dayRecords={dayRecords} />
        </div>

        <div
          className="flex justify-between mt-2 text-xs font-semibold text-foreground"
          style={{ width: gridWidth + 20 }}
        >
          {Array.from({ length: gridSize }, (_, i) => {
            const num = i + 1;
            return (
              <div key={num} className="w-3 text-center text-xs">
                <span>{num % 5 === 0 ? num : ''}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
