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
  const dotSize = 6  // smaller dots
  const spacing = 10 // tighter spacing
  const padding = 24 // more padding for labels
  const gridWidth = gridSize * spacing
  const gridHeight = gridSize * spacing
  
  // Only show numbers that are multiples of 5
  const showLabel = (num: number) => num % 5 === 0

  const linePath = useMemo(() => {
    if (dayRecords.length === 0) return ""

    const points: string[] = []
    dayRecords.forEach((record) => {
      const x = padding + (record.x - 1) * spacing + spacing / 2
      const y = padding + ((gridSize - record.y) * spacing + spacing / 2)
      points.push(`${x},${y}`)
    })

    return points.join(" L ")
  }, [dayRecords, gridHeight])

  return (
    <div className="flex flex-col items-center w-full px-2">
      <div className="relative w-full">
        <div
          className="absolute -left-8 flex flex-col justify-between text-[10px] font-semibold text-foreground"
          style={{ height: gridHeight + padding * 2, top: padding }}
        >
          {Array.from({ length: gridSize }, (_, i) => gridSize - i).map((num) => {
            const isMultipleOf5 = num % 5 === 0;
            const offsetY = ((gridSize - num) * spacing + spacing / 2);
            return (
              <div 
                key={num} 
                className={`absolute flex items-center justify-end ${!isMultipleOf5 ? 'opacity-0' : ''}`}
                style={{
                  transform: `translateY(${offsetY}px)`,
                  width: '24px',
                  left: 0
                }}
              >
                <span>{num}</span>
              </div>
            );
          })}
        </div>

        {/* Main grid container */}
        <div
          className="relative bg-card border border-foreground/20 rounded-lg p-0 shadow-md ml-2"
          style={{ width: gridWidth + padding * 2, height: gridHeight + padding * 2, maxHeight: '100%' }}
        >
          <svg width={gridWidth + padding * 2} height={gridHeight + padding * 2} className="absolute inset-0 pointer-events-none">
            {dayRecords.length > 0 && (
              <polyline points={linePath} fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
            )}
          </svg>

          <DotGrid gridSize={gridSize} spacing={spacing} dotSize={dotSize} dayRecords={dayRecords} padding={padding} />
        </div>

        <div
          className="relative mt-2 text-[10px] font-semibold text-foreground ml-2"
          style={{ width: gridWidth + padding * 2, height: '20px' }}
        >
          {Array.from({ length: gridSize }, (_, i) => i + 1).map((num) => {
            const isMultipleOf5 = num % 5 === 0;
            const offsetX = padding + (num - 1) * spacing + spacing / 2;
            return (
              <div 
                key={num} 
                className={`absolute ${!isMultipleOf5 ? 'opacity-0' : ''}`}
                style={{
                  transform: `translateX(-50%)`,
                  left: `${offsetX}px`,
                  top: 0
                }}
              >
                <span>{num}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
