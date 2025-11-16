"use client"

interface DayRecord {
  x: number
  y: number
}

interface DotGridProps {
  gridSize: number
  spacing: number
  dotSize: number
  dayRecords: DayRecord[]
}

export default function DotGrid({ gridSize, spacing, dotSize, dayRecords }: DotGridProps) {
  const isHighlighted = (x: number, y: number) => {
    return dayRecords.some((record) => record.x === x && record.y === y && record.y > 0)
  }

  return (
    <div className="relative" style={{ width: gridSize * spacing, height: gridSize * spacing }}>
      {Array.from({ length: gridSize }, (_, i) => i + 1).map((x) =>
        Array.from({ length: gridSize }, (_, i) => i + 1).map((y) => {
          const posX = x * spacing - spacing / 2
          const posY = (gridSize - y + 1) * spacing - spacing / 2
          const highlighted = isHighlighted(x, y)

          return (
            <div
              key={`${x}-${y}`}
              className={`absolute rounded-full transition-all ${
                highlighted ? "bg-primary shadow-lg scale-125" : "bg-muted hover:bg-muted-foreground/30"
              }`}
              style={{
                width: dotSize,
                height: dotSize,
                left: posX,
                top: posY,
                transform: "translate(-50%, -50%)",
              }}
            />
          )
        }),
      )}
    </div>
  )
}
