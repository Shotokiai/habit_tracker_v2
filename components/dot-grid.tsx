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
  padding?: number
}

export default function DotGrid({ gridSize, spacing, dotSize, dayRecords, padding = 0 }: DotGridProps) {
  const isHighlighted = (x: number, y: number) => {
    return dayRecords.some((record) => record.x === x && record.y === y && record.y > 0)
  }

  const isMissed = (x: number, y: number) => {
    return dayRecords.some((record) => record.x === x && record.y === y && record.y === 0)
  }

  return (
    <div className="relative" style={{ width: gridSize * spacing + padding * 2, height: gridSize * spacing + padding * 2 }}>
      {Array.from({ length: gridSize }, (_, i) => i + 1).map((x) =>
        Array.from({ length: gridSize }, (_, i) => i + 1).map((y) => {
          const posX = padding + (x - 1) * spacing + spacing / 2
          const posY = padding + ((gridSize - y) * spacing + spacing / 2)
          const highlighted = isHighlighted(x, y)
          const missed = isMissed(x, y)

          const baseClass = "absolute rounded-full transition-all"
          const className = highlighted
            ? `${baseClass} bg-primary shadow-lg scale-125`
            : missed
            ? `${baseClass} bg-destructive/80`
            : `${baseClass} bg-muted`

          return (
            <div
              key={`${x}-${y}`}
              className={className}
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
