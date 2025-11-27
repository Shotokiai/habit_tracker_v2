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
  const getRecordType = (x: number, y: number) => {
    const record = dayRecords.find((record) => record.x === x && record.y === y);
    if (!record) return 'none';
    
    // Check if this is a missed day by comparing with previous day
    if (x > 1) {
      const previousRecord = dayRecords.find(r => r.x === x - 1);
      if (previousRecord && record.y < previousRecord.y) {
        return 'missed';
      }
    } else if (x === 1 && record.y === 0) {
      return 'missed';
    }
    
    return record.y >= 0 ? 'success' : 'none';
  }

  return (
    <div className="relative" style={{ width: gridSize * spacing, height: gridSize * spacing }}>
      {Array.from({ length: gridSize }, (_, i) => i + 1).map((x) =>
        Array.from({ length: gridSize }, (_, i) => i + 1).map((y) => {
          const posX = x * spacing - spacing / 2
          const posY = (gridSize - y + 1) * spacing - spacing / 2
          const recordType = getRecordType(x, y)

          return (
            <div
              key={`${x}-${y}`}
              className={`absolute rounded-full transition-all ${
                recordType === 'success' 
                  ? 'bg-primary scale-150 shadow-lg' 
                  : recordType === 'missed'
                  ? 'bg-red-500 scale-150 shadow-lg'
                  : 'bg-muted scale-100'
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
