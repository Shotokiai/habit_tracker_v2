import { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native"

interface HabitCategoryProps {
  onHabitSelect: (habitType: "make" | "break", habit: string) => void
  onCreateCustom: (habitType: "make" | "break") => void
}

const makeHabits = [
  { id: 1, name: "Walk 2km a day" },
  { id: 2, name: "Drink 3L water daily" },
  { id: 3, name: "Read 20 Min a day" },
  { id: 4, name: "30 min Basic Workout" },
  { id: 5, name: "Plan the next day" },
]

const breakHabits = [
  { id: 1, name: "Limit Excessive Gaming" },
  { id: 2, name: "Eating junk food" },
  { id: 3, name: "Scrolling reels for long periods" },
  { id: 4, name: "Smoking cigarettes" },
  { id: 5, name: "Negative self talk" },
]

export default function HabitCategoryScreen({ onHabitSelect, onCreateCustom }: HabitCategoryProps) {
  const [activeTab, setActiveTab] = useState<"make" | "break">("make")
  const [selectedHabit, setSelectedHabit] = useState<string | null>(null)

  const habitsToDisplay = activeTab === "make" ? makeHabits : breakHabits

  const handleHabitSelect = (habitName: string) => {
    setSelectedHabit(habitName)
  }

  const handleLetsBuild = () => {
    if (selectedHabit) {
      onHabitSelect(activeTab, selectedHabit)
    }
  }

  const handleCreateYourOwn = () => {
    setSelectedHabit(null)
    onCreateCustom(activeTab)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "make" && styles.tabActive]}
          onPress={() => {
            setActiveTab("make")
            setSelectedHabit(null)
          }}
        >
          <Text style={[styles.tabText, activeTab === "make" && styles.tabTextActive]}>
            Make Habit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "break" && styles.tabActive]}
          onPress={() => {
            setActiveTab("break")
            setSelectedHabit(null)
          }}
        >
          <Text style={[styles.tabText, activeTab === "break" && styles.tabTextActive]}>
            Break Habit
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.habitsContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.habitsGrid}>
          {habitsToDisplay.map((habit) => (
            <TouchableOpacity
              key={habit.id}
              style={[styles.habitCard, selectedHabit === habit.name && styles.habitCardSelected]}
              onPress={() => handleHabitSelect(habit.name)}
            >
              <View style={styles.habitImage}>
                <Text style={styles.habitImagePlaceholder}>📋</Text>
              </View>
              <Text style={styles.habitName}>{habit.name}</Text>
            </TouchableOpacity>
          ))}

          {/* Create Your Own */}
          <TouchableOpacity
            style={[styles.habitCard, selectedHabit === "create_own" && styles.habitCardSelected]}
            onPress={() => {
              setSelectedHabit("create_own")
              handleCreateYourOwn()
            }}
          >
            <View style={styles.habitImage}>
              <Text style={styles.habitImagePlaceholder}>➕</Text>
            </View>
            <Text style={styles.habitName}>Create your own</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Lets build Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.letsBuildButton, !selectedHabit && styles.letsBuildButtonDisabled]}
          onPress={handleLetsBuild}
          disabled={!selectedHabit}
        >
          <Text style={styles.letsBuildButtonText}>Let's Build →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },
  tabActive: {
    borderBottomColor: "#3b82f6",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#999",
  },
  tabTextActive: {
    color: "#3b82f6",
  },
  habitsContainer: {
    flex: 1,
    padding: 16,
  },
  habitsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  habitCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#e5e7eb",
  },
  habitCardSelected: {
    borderColor: "#3b82f6",
    backgroundColor: "#f0f7ff",
  },
  habitImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  habitImagePlaceholder: {
    fontSize: 28,
  },
  habitName: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1a1a1a",
    textAlign: "center",
  },
  footer: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  letsBuildButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  letsBuildButtonDisabled: {
    backgroundColor: "#ccc",
  },
  letsBuildButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})
