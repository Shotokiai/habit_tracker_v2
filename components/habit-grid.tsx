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
  const dotSize = 6  // Reduced from 8
  const spacing = 10  // Reduced from 12
  const gridWidth = gridSize * spacing
  const gridHeight = gridSize * spacing

  // Calculate completed days
  const completedDays = useMemo(() => {
    if (dayRecords.length === 0) return 0
    
    let completed = 0
    dayRecords.forEach((record, index) => {
      const prevRecord = index > 0 ? dayRecords[index - 1] : null
      const prevY = prevRecord ? prevRecord.y : 0
      
      // A day is completed if y value increased from previous day
      if (record.y > prevY) {
        completed++
      }
    })
    
    return completed
  }, [dayRecords])

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
    <div className="flex flex-col items-center gap-2 px-2 py-2 w-full h-full">
      <div className="relative flex-shrink-0">
        <div
          className="absolute -left-6 top-0 flex flex-col justify-between text-xs font-semibold text-foreground"
          style={{ height: gridHeight + 16 }}
        >
          {Array.from({ length: gridSize }, (_, i) => {
            const num = gridSize - i;
            return (
              <div key={num} className="flex items-center justify-end w-5 h-3">
                <span className="text-right text-xs">{num % 5 === 0 ? num : ''}</span>
              </div>
            );
          })}
        </div>

        {/* Main grid container */}
        <div
          className="relative bg-card border border-foreground/20 rounded-lg p-1 shadow-md"
          style={{ width: gridWidth + 16, height: gridHeight + 16 }}
        >
          <svg width={gridWidth + 32} height={gridHeight + 32} className="absolute inset-0 pointer-events-none">
            {/* Diagonal guide line from (1,1) to (30,30) - plain black line */}
            <line
              x1={dotSize / 2 + 8}
              y1={gridHeight - dotSize / 2 + 8}
              x2={gridWidth - dotSize / 2 + 8}
              y2={dotSize / 2 + 8}
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
          className="flex justify-between mt-1 text-xs font-semibold text-foreground"
          style={{ width: gridWidth + 16 }}
        >
          {Array.from({ length: gridSize }, (_, i) => {
            const num = i + 1;
            return (
              <div key={num} className="w-2 text-center text-xs">
                <span>{num % 5 === 0 ? num : ''}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
