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
    // Find if there's a record at this exact coordinate
    const exactRecord = dayRecords.find((record) => record.x === x && record.y === y);
    if (!exactRecord) return 'none';
    
    // This coordinate has a record - determine if it's success or miss
    // Look at the previous record to see if progress was made
    if (x > 1) {
      const previousRecord = dayRecords.find(r => r.x === x - 1);
      if (previousRecord) {
        // If y increased from previous day = success (black dot)
        if (exactRecord.y > previousRecord.y) {
          return 'success';
        }
        // If y decreased from previous day = missed day (red dot)
        else if (exactRecord.y < previousRecord.y) {
          return 'missed';
        }
        // If y stayed same = also success (maintaining level)
        else {
          return 'success';
        }
      }
    } else if (x === 1) {
      // First day: if y > 0 = success, if y = 0 = missed
      return exactRecord.y > 0 ? 'success' : 'missed';
    }
    
    return 'success';
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
