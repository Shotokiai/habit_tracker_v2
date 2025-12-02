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
  const [showHabitSelection, setShowHabitSelection] = useState(false);
  const [showProfileDrawer, setShowProfileDrawer] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  // Helper function to get full habit name from key
  const getHabitNameFromKey = (key: string): string => {
    const allHabits = [
      { key: "walk", label: "Walk 2km a day" },
      { key: "water", label: "Drink 3L water daily" },
      { key: "read", label: "Read 20 Min a day" },
      { key: "workout", label: "30 min Basic Workout" },
      { key: "plan", label: "Plan the next day" },
      { key: "gaming", label: "Limit Excessive gaming" },
      { key: "junkfood", label: "Eating junk food" },
      { key: "reels", label: "Scrolling reels for long periods" },
      { key: "smoking", label: "Smoking cigarettes" },
      { key: "selftalk", label: "Negative self talk" },
    ];
    const habit = allHabits.find(h => h.key === key);
    return habit ? habit.label : key;
  };

  useEffect(() => {
    const savedHabits = localStorage.getItem("habits");
    if (savedHabits) {
      try {
        setHabits(JSON.parse(savedHabits));
      } catch {
        setHabits([]);
      }
    }
    
    // Load saved user
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem("currentUser");
      }
    }
    
    setIsLoaded(true);
  }, []);

  // Handle user login/registration
  const handleUserSubmit = (userData: { username: string; age: number; email: string }) => {
    setUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
  };

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
        <FirstUserForm onSubmit={handleUserSubmit} />
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
              const fullHabitName = getHabitNameFromKey(habit);
              setHabitSelection(habit);
              addHabit(fullHabitName, "__hide__");
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
        {showHabitSelection ? (
          <HabitSelection
            userName={user?.username}
            onBack={() => setShowHabitSelection(false)}
            onSelect={(habit) => {
              if (habit === "custom_make") {
                setCustomHabitType("make");
                setShowHabitSelection(false);
                setCurrentHabitIndex(habits.length);
              } else if (habit === "custom_break") {
                setCustomHabitType("break");
                setShowHabitSelection(false);
                setCurrentHabitIndex(habits.length);
              } else {
                const fullHabitName = getHabitNameFromKey(habit);
                setHabitSelection(habit);
                setShowHabitSelection(false);
                // Directly create the habit with the full name
                const currentMonthYear = new Date().toISOString().slice(0, 7);
                const newHabit: Habit = {
                  id: Date.now().toString(),
                  name: fullHabitName,
                  person: user?.username || "User",
                  dayRecords: [],
                  createdAt: new Date().toISOString(),
                  monthYear: currentMonthYear,
                };
                setHabits([...habits, newHabit]);
                setCurrentHabitIndex(habits.length);
              }
            }}
          />
        ) : (habits.length === 0 || currentHabitIndex === habits.length) ? (
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
                onClick={() => setShowProfileDrawer(true)}
                className="p-2 hover:bg-muted rounded-full transition-colors border border-foreground/20"
                title="Profile"
              >
                <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <h1 className="text-lg font-bold text-foreground truncate">
                {habits[currentHabitIndex]?.name}
              </h1>
              <button
                onClick={() => setShowHabitSelection(true)}
                className="px-3 py-1.5 bg-primary text-primary-foreground font-semibold rounded text-sm hover:opacity-90 transition-opacity"
                title="Add new habit"
              >
                + Add
              </button>
            </div>

            {/* Statistics Display Box */}
            <div className="bg-muted/50 border-b border-foreground/10 p-3 mx-4 mt-2 rounded-lg">
              <div className="flex justify-between items-center text-sm">
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-foreground">Successful days</span>
                  <span className="text-lg font-bold text-green-600">
                    {(() => {
                      const records = habits[currentHabitIndex]?.dayRecords || [];
                      let successCount = 0;
                      records.forEach((record, index) => {
                        if (index === 0) {
                          // First day is successful if y > 0
                          if (record.y > 0) successCount++;
                        } else {
                          // Subsequent days are successful if y >= previous y
                          const prevRecord = records[index - 1];
                          if (record.y >= prevRecord.y) successCount++;
                        }
                      });
                      return successCount;
                    })()}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-foreground">Missed days</span>
                  <span className="text-lg font-bold text-red-500">
                    {(() => {
                      const records = habits[currentHabitIndex]?.dayRecords || [];
                      let missedCount = 0;
                      records.forEach((record, index) => {
                        if (index === 0) {
                          // First day is missed if y === 0
                          if (record.y === 0) missedCount++;
                        } else {
                          // Subsequent days are missed if y < previous y
                          const prevRecord = records[index - 1];
                          if (record.y < prevRecord.y) missedCount++;
                        }
                      });
                      return missedCount;
                    })()}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-foreground">Conversion</span>
                  <span className="text-lg font-bold text-primary">
                    {(() => {
                      const records = habits[currentHabitIndex]?.dayRecords || [];
                      let successCount = 0;
                      records.forEach((record, index) => {
                        if (index === 0) {
                          if (record.y > 0) successCount++;
                        } else {
                          const prevRecord = records[index - 1];
                          if (record.y >= prevRecord.y) successCount++;
                        }
                      });
                      if (successCount === 0) return "0%";
                      return Math.round((successCount / 30) * 100) + "%";
                    })()}
                  </span>
                </div>
              </div>
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
        
        {/* Profile Side Drawer */}
        {showProfileDrawer && (
          <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowProfileDrawer(false)}
            />
            
            {/* Drawer - Mobile view format */}
            <div className="absolute left-0 top-0 h-full w-3/4 max-w-sm bg-background border-r border-foreground/20 shadow-xl">
              <div className="p-6 space-y-6 h-full overflow-y-auto">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-foreground">Profile</h2>
                  <button
                    onClick={() => setShowProfileDrawer(false)}
                    className="p-1 hover:bg-muted rounded"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Profile Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {user?.username || 'User'}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {user?.email || 'user@example.com'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    Age: {user?.age || 'Not specified'}
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    Date Joined: {new Date().toLocaleDateString()}
                  </div>
                </div>
                
                {/* Menu Options */}
                <div className="space-y-2 pt-4 border-t border-foreground/10">
                  <button
                    onClick={() => setShowLogoutConfirmation(true)}
                    className="w-full text-left p-3 hover:bg-muted rounded-lg transition-colors"
                  >
                    <div className="font-medium">Log out</div>
                    <div className="text-sm text-muted-foreground">Sign out of your account</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Logout Confirmation Dialog */}
        {showLogoutConfirmation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-background border border-border rounded-lg p-6 max-w-sm mx-4 shadow-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Do you want to log out?
              </h3>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => {
                    // Handle logout
                    localStorage.removeItem('currentUser');
                    localStorage.removeItem('habits');
                    setUser(null);
                    setHabits([]);
                    setShowProfileDrawer(false);
                    setShowLogoutConfirmation(false);
                    // Reset to first user form or login screen
                  }}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowLogoutConfirmation(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition-colors"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
