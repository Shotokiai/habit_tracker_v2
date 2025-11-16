import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import Svg, { Polyline } from "react-native-svg"
import DotGrid from "./DotGrid"

interface DayRecord {
  x: number
  y: number
}

interface HabitGridProps {
  dayRecords: DayRecord[]
  onUpdateRecords: (records: DayRecord[]) => void
}

export default function HabitGrid({ dayRecords, onUpdateRecords }: HabitGridProps) {
  const gridSize = 31
  const dotSize = 8
  const spacing = 12
  const gridWidth = gridSize * spacing
  const gridHeight = gridSize * spacing

  const linePath = dayRecords
    .map((record, idx) => {
      const x = record.x * spacing + spacing / 2
      const y = gridHeight - (record.y * spacing + spacing / 2)
      return `${x},${y}`
    })
    .join(" ")

  const handleDotPress = (x: number, y: number) => {
    const newRecords = [...dayRecords, { x, y }]
    onUpdateRecords(newRecords)
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <View style={styles.gridWrapper}>
          {/* Y-axis labels */}
          <View style={styles.yAxisContainer}>
            {Array.from({ length: gridSize }, (_, i) => gridSize - i).map((num) => (
              <View key={num} style={[styles.yAxisLabel, { height: spacing }]}>
                <Text style={styles.axisText}>{num}</Text>
              </View>
            ))}
          </View>

          {/* Grid */}
          <View style={styles.gridContainer}>
            <View style={[styles.grid, { width: gridWidth + 20, height: gridHeight + 20 }]}>
              <Svg width={gridWidth + 20} height={gridHeight + 20} style={styles.svg}>
                {dayRecords.length > 0 && <Polyline points={linePath} fill="none" stroke="#3b82f6" strokeWidth="2" />}
              </Svg>

              <DotGrid
                gridSize={gridSize}
                spacing={spacing}
                dotSize={dotSize}
                dayRecords={dayRecords}
                onDotPress={handleDotPress}
              />
            </View>

            {/* X-axis labels */}
            <View style={[styles.xAxisContainer, { width: gridWidth + 20 }]}>
              {Array.from({ length: gridSize }, (_, i) => i + 1).map((num) => (
                <View key={num} style={[styles.xAxisLabel, { width: spacing }]}>
                  <Text style={styles.axisText}>{num}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.letsGoButton}
          onPress={() => {
            const newLength = dayRecords.length + 1
            handleDotPress(newLength, newLength)
          }}
        >
          <Text style={styles.buttonText}>Let's Go</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.missedButton}
          onPress={() => {
            const newLength = dayRecords.length + 1
            const lastY = dayRecords.length > 0 ? dayRecords[dayRecords.length - 1].y : 0
            handleDotPress(newLength, Math.max(1, lastY - 1))
          }}
        >
          <Text style={styles.missedButtonText}>Habit Missed</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  gridWrapper: {
    flexDirection: "row",
    padding: 8,
  },
  yAxisContainer: {
    justifyContent: "space-between",
    marginRight: 8,
    width: 40,
  },
  yAxisLabel: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 4,
  },
  gridContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  grid: {
    position: "relative",
    backgroundColor: "#fafafa",
  },
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  xAxisContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    paddingTop: 4,
  },
  xAxisLabel: {
    justifyContent: "center",
    alignItems: "center",
  },
  axisText: {
    fontSize: 10,
    color: "#666",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    padding: 16,
  },
  letsGoButton: {
    flex: 1,
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  missedButton: {
    flex: 1,
    backgroundColor: "#ef4444",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  missedButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})
