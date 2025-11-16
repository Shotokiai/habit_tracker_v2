import { View, TouchableOpacity, StyleSheet } from "react-native"

interface DayRecord {
  x: number
  y: number
}

interface DotGridProps {
  gridSize: number
  spacing: number
  dotSize: number
  dayRecords: DayRecord[]
  onDotPress?: (x: number, y: number) => void
}

export default function DotGrid({ gridSize, spacing, dotSize, dayRecords, onDotPress }: DotGridProps) {
  const isHighlighted = (x: number, y: number) => {
    return dayRecords.some((record) => record.x === x && record.y === y)
  }

  const dots = []
  for (let y = 1; y <= gridSize; y++) {
    for (let x = 1; x <= gridSize; x++) {
      const highlighted = isHighlighted(x, y)
      const dotX = x * spacing + spacing / 2
      const dotY = (gridSize - y + 1) * spacing + spacing / 2

      dots.push(
        <TouchableOpacity
          key={`${x}-${y}`}
          style={[
            styles.dot,
            {
              left: dotX - dotSize / 2,
              top: dotY - dotSize / 2,
              width: highlighted ? dotSize + 4 : dotSize,
              height: highlighted ? dotSize + 4 : dotSize,
              borderRadius: (highlighted ? dotSize + 4 : dotSize) / 2,
            },
            highlighted && styles.highlightedDot,
          ]}
          onPress={() => onDotPress?.(x, y)}
        />,
      )
    }
  }

  return <View style={styles.container}>{dots}</View>
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  dot: {
    position: "absolute",
    backgroundColor: "#d1d5db",
    borderRadius: 4,
  },
  highlightedDot: {
    backgroundColor: "#3b82f6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
})
