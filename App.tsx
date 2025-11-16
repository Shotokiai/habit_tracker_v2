"use client"

import { useState, useEffect } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  SafeAreaView,
  ActivityIndicator,
} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import HabitGrid from "./components/HabitGrid"
import OnboardingScreen from "./components/OnboardingScreen"
import HabitCategoryScreen from "./components/HabitCategoryScreen"
import CustomHabitScreen from "./components/CustomHabitScreen"

interface DayRecord {
  x: number
  y: number
}

interface Habit {
  id: string
  name: string
  person: string
  dayRecords: DayRecord[]
  createdAt: string
  monthYear: string
}

interface UserData {
  name: string
  age: number
  email: string
}

export default function App() {
  const [appState, setAppState] = useState<
    "onboarding" | "category" | "customHabit" | "tracker"
  >("onboarding")
  const [userData, setUserData] = useState<UserData | null>(null)
  const [habits, setHabits] = useState<Habit[]>([])
  const [currentHabitIndex, setCurrentHabitIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [newHabitName, setNewHabitName] = useState("")
  const [newPersonName, setNewPersonName] = useState("")
  const [showAddForm, setShowAddForm] = useState(false)
  const [customHabitType, setCustomHabitType] = useState<"make" | "break">("make")

  useEffect(() => {
    loadAppState()
  }, [])

  const loadAppState = async () => {
    try {
      const savedUserData = await AsyncStorage.getItem("userData")
      const savedHabits = await AsyncStorage.getItem("habits")
      
      if (savedUserData) {
        const user = JSON.parse(savedUserData)
        setUserData(user)
        
        if (savedHabits) {
          setHabits(JSON.parse(savedHabits))
          setAppState("tracker")
        } else {
          setAppState("category")
        }
      } else {
        setAppState("onboarding")
      }
    } catch (error) {
      console.error("Error loading app state:", error)
      setAppState("onboarding")
    } finally {
      setIsLoaded(true)
    }
  }

  const handleOnboardingComplete = async (data: UserData) => {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(data))
      setUserData(data)
      setAppState("category")
    } catch (error) {
      console.error("Error saving user data:", error)
      Alert.alert("Error", "Failed to save user data")
    }
  }

  const handleHabitCategorySelect = (habitType: "make" | "break", habit: string) => {
    if (habit === "create_own") {
      setCustomHabitType(habitType)
      setAppState("customHabit")
    } else {
      // Handle pre-defined habit selection
      addHabitWithCategory(habit)
    }
  }

  const handleCreateCustom = (habitType: "make" | "break") => {
    setCustomHabitType(habitType)
    setAppState("customHabit")
  }

  const handleCustomHabitCreate = (habitText: string) => {
    addHabitWithCategory(habitText)
  }

  const addHabitWithCategory = (habitName: string) => {
    if (!userData) return

    const currentMonthYear = new Date().toISOString().slice(0, 7)
    const newHabit: Habit = {
      id: Date.now().toString(),
      name: habitName,
      person: userData.name,
      dayRecords: [],
      createdAt: new Date().toISOString(),
      monthYear: currentMonthYear,
    }

    const updatedHabits = [...habits, newHabit]
    saveHabits(updatedHabits)
    setCurrentHabitIndex(updatedHabits.length - 1)
    setAppState("tracker")
  }

  const saveHabits = async (newHabits: Habit[]) => {
    try {
      await AsyncStorage.setItem("habits", JSON.stringify(newHabits))
      setHabits(newHabits)
    } catch (error) {
      console.error("Error saving habits:", error)
    }
  }

  const addHabit = () => {
    if (!newHabitName.trim() || !newPersonName.trim()) {
      Alert.alert("Error", "Please enter both habit name and person name")
      return
    }

    const currentMonthYear = new Date().toISOString().slice(0, 7)
    const newHabit: Habit = {
      id: Date.now().toString(),
      name: newHabitName,
      person: newPersonName,
      dayRecords: [],
      createdAt: new Date().toISOString(),
      monthYear: currentMonthYear,
    }

    const updatedHabits = [...habits, newHabit]
    saveHabits(updatedHabits)
    setNewHabitName("")
    setNewPersonName("")
    setShowAddForm(false)
    setCurrentHabitIndex(updatedHabits.length - 1)
  }

  const updateHabitRecords = (dayRecords: DayRecord[]) => {
    const updatedHabits = habits.map((habit: Habit, idx: number) => (idx === currentHabitIndex ? { ...habit, dayRecords } : habit))
    saveHabits(updatedHabits)
  }

  const deleteHabit = () => {
    Alert.alert("Delete Habit", "Are you sure you want to delete this habit?", [
      { text: "Cancel", onPress: () => {}, style: "cancel" },
      {
        text: "Delete",
        onPress: () => {
          const newHabits = habits.filter((_: Habit, idx: number) => idx !== currentHabitIndex)
          saveHabits(newHabits)
          if (currentHabitIndex > 0) {
            setCurrentHabitIndex(currentHabitIndex - 1)
          }
        },
        style: "destructive",
      },
    ])
  }

  const navigateHabit = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentHabitIndex(currentHabitIndex === 0 ? habits.length - 1 : currentHabitIndex - 1)
    } else {
      setCurrentHabitIndex(currentHabitIndex === habits.length - 1 ? 0 : currentHabitIndex + 1)
    }
  }

  if (!isLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#3b82f6" />
          <Text style={styles.loadingText}>Loading your app...</Text>
        </View>
      </SafeAreaView>
    )
  }

  // Render Onboarding Screen
  if (appState === "onboarding") {
    return <OnboardingScreen onComplete={handleOnboardingComplete} />
  }

  // Render Habit Category Screen
  if (appState === "category") {
    return (
      <HabitCategoryScreen
        onHabitSelect={handleHabitCategorySelect}
        onCreateCustom={handleCreateCustom}
      />
    )
  }

  // Render Custom Habit Screen
  if (appState === "customHabit") {
    return (
      <CustomHabitScreen
        habitType={customHabitType}
        onHabitCreate={handleCustomHabitCreate}
        onBack={() => setAppState("category")}
      />
    )
  }

  // Render Tracker Screen
  return (
    <SafeAreaView style={styles.container}>
      {habits.length === 0 || showAddForm ? (
        <ScrollView style={styles.scrollView}>
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Create New Habit</Text>
            <TextInput
              style={styles.input}
              placeholder="Habit name (e.g., Phone Habit)"
              value={newHabitName}
              onChangeText={setNewHabitName}
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.input}
              placeholder="Person name (e.g., Vinayak)"
              value={newPersonName}
              onChangeText={setNewPersonName}
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.saveButton} onPress={addHabit}>
              <Text style={styles.saveButtonText}>Save Habit</Text>
            </TouchableOpacity>
            {habits.length > 0 && (
              <TouchableOpacity style={[styles.saveButton, styles.cancelButton]} onPress={() => setShowAddForm(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      ) : (
        <>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigateHabit("prev")} style={styles.navButton}>
              <Text style={styles.navButtonText}>← Back</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle} numberOfLines={1}>
              {habits[currentHabitIndex]?.name}
            </Text>
            <TouchableOpacity onPress={() => setShowAddForm(true)} style={styles.addButton}>
              <Text style={styles.addButtonText}>+ Add</Text>
            </TouchableOpacity>
          </View>

          {/* Main Content */}
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.contentContainer}>
              <Text style={styles.personName}>By: {habits[currentHabitIndex]?.person}</Text>
              <HabitGrid
                dayRecords={habits[currentHabitIndex]?.dayRecords || []}
                onUpdateRecords={updateHabitRecords}
              />
            </View>
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Habit {currentHabitIndex + 1} of {habits.length} • Swipe to navigate
            </Text>
            <TouchableOpacity style={styles.deleteButton} onPress={deleteHabit}>
              <Text style={styles.deleteButtonText}>Delete Habit</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#666",
  },
  scrollView: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  formTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#1a1a1a",
  },
  input: {
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#000",
  },
  saveButton: {
    backgroundColor: "#3b82f6",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#e5e7eb",
  },
  cancelButtonText: {
    color: "#666",
    fontSize: 16,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  navButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 6,
  },
  navButtonText: {
    color: "#1a1a1a",
    fontWeight: "bold",
    fontSize: 14,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 12,
    color: "#1a1a1a",
  },
  addButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#3b82f6",
    borderRadius: 6,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  contentContainer: {
    padding: 16,
  },
  personName: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
    textAlign: "center",
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#999",
    marginBottom: 8,
  },
  deleteButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#ef4444",
    borderRadius: 6,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
})
