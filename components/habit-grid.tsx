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
      // Account for container padding (p-1 = 4px)
      const x = record.x * spacing - spacing / 2 + 4
      const y = (gridSize - record.y + 1) * spacing - spacing / 2 + 4
      points.push(`${x},${y}`)
    })

    return "M " + points.join(" L ")
  }, [dayRecords, gridSize, spacing])

  return (
    <div className="flex flex-col items-center gap-2 pl-6 pr-4 py-2 w-full h-full">
      <div className="relative flex-shrink-0">
        <div
          className="absolute -left-6 top-0 flex flex-col justify-between text-xs font-semibold text-foreground"
          style={{ height: gridHeight + 16, paddingTop: 8, paddingBottom: 8 }}
        >
          {Array.from({ length: gridSize }, (_, i) => {
            const num = gridSize - i;
            return (
              <div key={num} className="flex items-center justify-end w-5" style={{ height: spacing }}>
                <span className="text-right text-gray-700" style={{ fontSize: '10px', lineHeight: '12px', fontWeight: '600' }}>{num % 5 === 0 ? num : ''}</span>
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
            {/* Diagonal guide line from center of (1,1) to center of (30,30) */}
            <line
              x1={1 * spacing - spacing / 2 + 4}
              y1={(gridSize - 1 + 1) * spacing - spacing / 2 + 4}
              x2={30 * spacing - spacing / 2 + 4}
              y2={(gridSize - 30 + 1) * spacing - spacing / 2 + 4}
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
          style={{ width: gridWidth + 16, paddingLeft: 8, paddingRight: 8 }}
        >
          {Array.from({ length: gridSize }, (_, i) => {
            const num = i + 1;
            return (
              <div key={num} className="flex justify-center" style={{ width: spacing }}>
                <span className="text-xs" style={{ fontSize: '10px' }}>{num % 5 === 0 ? num : ''}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
