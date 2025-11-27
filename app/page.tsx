"use client"


import { useState, useEffect } from "react"
import HabitTracker from "@/components/habit-tracker"
import FirstUserForm from "@/components/first-user-form"
import HabitSelection from "@/components/habit-selection"
import CustomHabitScreen from "@/components/CustomHabitScreen"
import type { Habit, DayRecord } from "@/lib/types"


export default function Page() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [currentHabitIndex, setCurrentHabitIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [user, setUser] = useState<{ username: string; age: number; email: string } | null>(null);
  const [habitSelection, setHabitSelection] = useState<string | null>(null);
  const [customHabitType, setCustomHabitType] = useState<"make" | "break" | null>(null);

  useEffect(() => {
    const savedHabits = localStorage.getItem("habits");
    if (savedHabits) {
      try {
        setHabits(JSON.parse(savedHabits));
      } catch {
        setHabits([]);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("habits", JSON.stringify(habits));
    }
  }, [habits, isLoaded]);

  const addHabit = (name: string, person: string) => {
    const currentMonthYear = new Date().toISOString().slice(0, 7);
    const newHabit: Habit = {
      id: Date.now().toString(),
      name,
      person,
      dayRecords: [],
      createdAt: new Date().toISOString(),
      monthYear: currentMonthYear,
    };
    setHabits([...habits, newHabit]);
    setCurrentHabitIndex(habits.length);
  };
  const updateHabitRecords = (habitId: string, dayRecords: DayRecord[]) => {
    setHabits(habits.map((habit) => (habit.id === habitId ? { ...habit, dayRecords } : habit)));
  };
  const deleteHabit = (habitId: string) => {
    const newHabits = habits.filter((h) => h.id !== habitId);
    setHabits(newHabits);
    if (currentHabitIndex >= newHabits.length && currentHabitIndex > 0) {
      setCurrentHabitIndex(currentHabitIndex - 1);
    }
  };

  const handleSwipe = () => {
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe && currentHabitIndex < habits.length - 1) {
      setCurrentHabitIndex(currentHabitIndex + 1);
    } else if (isLeftSwipe && currentHabitIndex === habits.length - 1) {
      setCurrentHabitIndex(0);
    } else if (isRightSwipe && currentHabitIndex > 0) {
      setCurrentHabitIndex(currentHabitIndex - 1);
    } else if (isRightSwipe && currentHabitIndex === 0) {
      setCurrentHabitIndex(habits.length - 1);
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-foreground">Loading your habits...</p>
        </div>
      </div>
    );
  }

  // Show onboarding form first
  if (!user) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted">
        <FirstUserForm onSubmit={setUser} />
      </main>
    );
  }

  // Show habit selection after onboarding
  if (!habitSelection && !customHabitType) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted">
        <HabitSelection
          onSelect={(habit) => {
            if (habit === "custom_make") {
              setCustomHabitType("make");
            } else if (habit === "custom_break") {
              setCustomHabitType("break");
            } else {
              setHabitSelection(habit);
              addHabit(habit, "__hide__");
            }
          }}
        />
      </main>
    );
  }

  // Show custom habit creation screen
  if (customHabitType) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted">
        <div className="w-full max-w-md">
          <CustomHabitScreen
            habitType={customHabitType}
            onHabitCreate={(habitName) => {
              addHabit(habitName, "__hide__");
              setHabitSelection(habitName);
              setCustomHabitType(null);
            }}
            onBack={() => setCustomHabitType(null)}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted">
      <div
        className="w-full h-screen max-w-md bg-background overflow-hidden flex flex-col"
        onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
        onTouchEnd={(e) => {
          setTouchEnd(e.changedTouches[0].clientX);
          handleSwipe();
        }}
      >
        {(habits.length === 0 || currentHabitIndex === habits.length) ? (
          <HabitTracker
            habit={null}
            onAddHabit={addHabit}
            onUpdateRecords={() => {}}
            onDeleteHabit={() => {}}
            isNewHabitMode={true}
          />
        ) : (
          <>
            <div className="bg-card border-b border-foreground/10 p-3 flex items-center justify-between gap-2">
              <button
                onClick={() =>
                  setCurrentHabitIndex(currentHabitIndex === 0 ? habits.length - 1 : currentHabitIndex - 1)
                }
                className="px-3 py-1.5 bg-muted text-foreground font-semibold rounded text-sm hover:bg-muted-foreground/50 transition-colors"
                title="Previous habit"
              >
                ← Back
              </button>
              <h1 className="flex-1 text-center text-lg font-bold text-foreground truncate">
                {habits[currentHabitIndex]?.name}
              </h1>
              <button
                onClick={() => setCurrentHabitIndex(habits.length)}
                className="px-3 py-1.5 bg-primary text-primary-foreground font-semibold rounded text-sm hover:opacity-90 transition-opacity"
                title="Add new habit"
              >
                + Add
              </button>
            </div>

            {/* Habit Tracker Content */}
            <div className="flex-1 overflow-auto">
              <HabitTracker
                habit={habits[currentHabitIndex]}
                onAddHabit={addHabit}
                onUpdateRecords={(dayRecords) => updateHabitRecords(habits[currentHabitIndex].id, dayRecords)}
                onDeleteHabit={() => deleteHabit(habits[currentHabitIndex].id)}
                isNewHabitMode={false}
              />
            </div>

            <div className="bg-card border-t border-foreground/10 px-4 py-2 text-center text-xs text-muted-foreground">
              Habit {currentHabitIndex + 1} of {habits.length} • Swipe to navigate
            </div>
          </>
        )}
      </div>
    </main>
  );
}
