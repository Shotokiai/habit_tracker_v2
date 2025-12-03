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
  const [swipeStartFromNav, setSwipeStartFromNav] = useState(false);
  const [user, setUser] = useState<{ username: string; age: number; email: string } | null>(null);
  const [habitSelection, setHabitSelection] = useState<string | null>(null);
  const [customHabitType, setCustomHabitType] = useState<"make" | "break" | null>(null);
  const [showHabitSelection, setShowHabitSelection] = useState(false);
  const [showProfileDrawer, setShowProfileDrawer] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [currentView, setCurrentView] = useState<'chart' | 'calendar'>('chart');

  // Helper function to get full habit name from key
  const getHabitNameFromKey = (key: string): string => {
    // Age-based habit mappings
    const allHabits = [
      // 15-20 years
      { key: "study", label: "Study focused for 25 mins" },
      { key: "walk", label: "Walk briskly 15 mins daily" },
      { key: "meditate", label: "Meditate calmly for 10 mins" },
      { key: "read", label: "Read 10 pages daily" },
      { key: "noPhone", label: "No phone after 9 PM" },
      { key: "noSoda", label: "Skip soda daily" },
      { key: "sleep", label: "Avoid sleeping less than 7 hours" },
      { key: "noJunk", label: "Avoid junk food daily" },
      // 20-25 years
      { key: "save", label: "Saved ₹100 everyday" },
      { key: "cook", label: "Cook breakfast before work" },
      { key: "callFriend", label: "Call one friend after dinner" },
      { key: "stretch", label: "Stretch after waking up" },
      { key: "limitCoffee", label: "Limit coffee to one cup" },
      { key: "noScreens", label: "No screens after 10 PM" },
      { key: "walkInstead", label: "Walk instead of driving short distances" },
      { key: "noLateNights", label: "Cut late nights" },
      // 25-30 years
      { key: "readNews", label: "Read news during morning tea" },
      { key: "water", label: "Drink 2L of water daily" },
      { key: "hobby", label: "Do hobby 20 mins daily" },
      { key: "planMeals", label: "Plan meals for the week" },
      { key: "noEatingOut", label: "No eating out daily" },
      { key: "workLimit", label: "Work limit 8 hours" },
      { key: "noSnacks", label: "No snacks after 8 PM" },
      { key: "trackExpenses", label: "Track daily expenses" },
      // 30-35 years
      { key: "familyChat", label: "Family chat 15 mins" },
      { key: "strength", label: "Strength training 20 mins" },
      { key: "breathing", label: "Deep breathing after waking up" },
      { key: "journal", label: "Journal before sleep" },
      { key: "oneTask", label: "One task at a time (no multitasking)" },
      { key: "noSugary", label: "Skip sugary drinks" },
      { key: "bedtime", label: "Bedtime by 11 PM" },
      { key: "noWeekendBinge", label: "No weekend screen binge" },
      // 35-40 years
      { key: "freshLunch", label: "Lunch cooked fresh daily" },
      { key: "morningWalk", label: "Morning walk before 8 AM" },
      { key: "waterMorning", label: "Drink 2 glasses of water in the morning" },
      { key: "stretchDaily", label: "Stretch 10 mins daily" },
      { key: "noFoodAfter8", label: "No food after 8 PM" },
      { key: "stand2Min", label: "Stand for 2 minutes every hour" },
      { key: "moveHourly", label: "Move body every hour" },
      { key: "reduceAlcohol", label: "Reduce alcohol intake" },
      // 40+ years
      { key: "yoga", label: "Yoga 15 mins" },
      { key: "stretchBed", label: "Stretch before bed" },
      { key: "fruitBreakfast", label: "Eat fruit with breakfast" },
      { key: "puzzle", label: "Solve puzzle 10 mins" },
      { key: "noProcessed", label: "No processed packaged foods" },
      { key: "stand30Min", label: "Stand every 30 mins" },
      { key: "limitSugar", label: "Limit sugar intake" },
      { key: "checkHealth", label: "Check health signs daily" },
    ];
    const habit = allHabits.find(h => h.key === key);
    return habit ? habit.label : key;
  };

  useEffect(() => {
    // Load saved user first
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        
        // Load habits specific to this user
        const userHabitsKey = `habits_${userData.email}`;
        const savedUserHabits = localStorage.getItem(userHabitsKey);
        if (savedUserHabits) {
          try {
            const userHabits = JSON.parse(savedUserHabits);
            setHabits(userHabits);
            if (userHabits.length > 0) {
              setHabitSelection("existing");
            }
          } catch {
            setHabits([]);
          }
        }
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
    
    // Load existing habits for this user
    const userHabitsKey = `habits_${userData.email}`;
    const savedUserHabits = localStorage.getItem(userHabitsKey);
    if (savedUserHabits) {
      try {
        const userHabits = JSON.parse(savedUserHabits);
        setHabits(userHabits);
        // If user has habits, don't show habit selection
        if (userHabits.length > 0) {
          setHabitSelection("existing"); // Mark that user has existing habits
        }
      } catch {
        // If there's an error loading habits, start fresh
        setHabits([]);
      }
    }
  };

  useEffect(() => {
    if (isLoaded && user) {
      // Save habits specific to the current user's email
      const userHabitsKey = `habits_${user.email}`;
      localStorage.setItem(userHabitsKey, JSON.stringify(habits));
    }
  }, [habits, isLoaded, user]);

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
  
  const updateHabit = (habitId: string, updatedFields: Partial<Habit>) => {
    setHabits(habits.map((habit) => (habit.id === habitId ? { ...habit, ...updatedFields } : habit)));
  };
  const deleteHabit = (habitId: string) => {
    const newHabits = habits.filter((h) => h.id !== habitId);
    setHabits(newHabits);
    if (currentHabitIndex >= newHabits.length && currentHabitIndex > 0) {
      setCurrentHabitIndex(currentHabitIndex - 1);
    }
  };

  const handleSwipe = () => {
    if (!swipeStartFromNav) return; // Only allow swipe if started from nav
    
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
    setSwipeStartFromNav(false); // Reset after swipe
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

  // Show habit selection after onboarding (only if user doesn't have existing habits)
  if (!habitSelection && !customHabitType && habits.length === 0) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted">
        <HabitSelection
          userAge={user?.age || 25}
          onSelect={(habit) => {
            if (habit === "custom_make") {
              setCustomHabitType("make");
            } else if (habit === "custom_break") {
              setCustomHabitType("break");
            } else if (habit.startsWith("custom_make:")) {
              // Extract custom habit name without prefix
              const customHabitName = habit.replace("custom_make:", "");
              addHabit(customHabitName, "__hide__");
              setHabitSelection(customHabitName);
            } else if (habit.startsWith("custom_break:")) {
              // Extract custom habit name without prefix
              const customHabitName = habit.replace("custom_break:", "");
              addHabit(customHabitName, "__hide__");
              setHabitSelection(customHabitName);
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
      >
        {showHabitSelection ? (
          <HabitSelection
            userName={user?.username}
            userAge={user?.age || 25}
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
              } else if (habit.startsWith("custom_make:")) {
                // Extract custom habit name without prefix
                const customHabitName = habit.replace("custom_make:", "");
                const currentMonthYear = new Date().toISOString().slice(0, 7);
                const newHabit: Habit = {
                  id: Date.now().toString(),
                  name: customHabitName,
                  person: user?.username || "User",
                  dayRecords: [],
                  createdAt: new Date().toISOString(),
                  monthYear: currentMonthYear,
                };
                setHabits([...habits, newHabit]);
                setCurrentHabitIndex(habits.length);
                setShowHabitSelection(false);
              } else if (habit.startsWith("custom_break:")) {
                // Extract custom habit name without prefix
                const customHabitName = habit.replace("custom_break:", "");
                const currentMonthYear = new Date().toISOString().slice(0, 7);
                const newHabit: Habit = {
                  id: Date.now().toString(),
                  name: customHabitName,
                  person: user?.username || "User",
                  dayRecords: [],
                  createdAt: new Date().toISOString(),
                  monthYear: currentMonthYear,
                };
                setHabits([...habits, newHabit]);
                setCurrentHabitIndex(habits.length);
                setShowHabitSelection(false);
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
            onUpdateHabit={() => {}}
            onViewChange={setCurrentView}
            isNewHabitMode={true}
          />
        ) : (
          <>
            <div 
              className="bg-card border-b border-foreground/10 p-3 flex items-center justify-between gap-2"
              onTouchStart={(e) => {
                setTouchStart(e.targetTouches[0].clientX);
                setSwipeStartFromNav(true);
              }}
              onTouchEnd={(e) => {
                if (swipeStartFromNav) {
                  setTouchEnd(e.changedTouches[0].clientX);
                  handleSwipe();
                }
              }}
            >
              <button
                onClick={() => setShowProfileDrawer(true)}
                className="p-2 hover:bg-muted rounded-full transition-colors border border-foreground/20"
                title="Profile"
              >
                <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <div className="flex-1 mr-3">
                <h1 className="text-base font-bold text-foreground truncate" style={{ maxWidth: 'calc(100% - 80px)' }}>
                  {habits[currentHabitIndex]?.name}
                </h1>
                <div className="text-xs text-muted-foreground">
                  Created: {new Date(habits[currentHabitIndex]?.createdAt || '').toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>
              </div>
              <button
                onClick={() => setShowHabitSelection(true)}
                className="w-16 h-10 bg-primary text-primary-foreground font-semibold rounded text-xs hover:opacity-90 transition-opacity flex-shrink-0 flex items-center justify-center ml-2"
                title="Add new habit"
                style={{ minWidth: '64px' }}
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
                      const habit = habits[currentHabitIndex];
                      
                      // Get the final y value which represents total successful days
                      const completed = records.length > 0 ? records[records.length - 1].y : 0;
                      
                      // Chart view always shows X/30, Calendar view shows dynamic days
                      if (currentView === 'chart') {
                        // Chart view always shows /30 constant
                        return `${completed}/30`;
                      } else {
                        // Calculate challenge days based on habit creation date for calendar view
                        const currentDate = new Date();
                        const startDate = new Date(habit?.createdAt || '');
                        const currentMonth = currentDate.getMonth();
                        const currentYear = currentDate.getFullYear();
                        const habitStartDay = startDate.getDate();
                        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
                        const challengeDays = daysInMonth - habitStartDay + 1;
                        return `${completed}/${challengeDays}`;
                      }
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
                      const habit = habits[currentHabitIndex];
                      if (!habit) return "0%";
                      const records = habit.dayRecords || [];
                      
                      // Get the actual successful days from the final y value
                      const successCount = records.length > 0 ? records[records.length - 1].y : 0;
                      if (successCount === 0) return "0%";
                      
                      // Calculate percentage based on view type
                      if (currentView === 'chart') {
                        // Chart view uses 29 days to match calendar logic
                        const percentage = (successCount / 29) * 100;
                        // Round up for better user experience
                        return successCount > 0 ? Math.ceil(percentage * 10) / 10 + "%" : "0%";
                      } else {
                        // Calendar view uses dynamic days calculation
                        const currentDate = new Date();
                        const startDate = new Date(habit?.createdAt || '');
                        const currentMonth = currentDate.getMonth();
                        const currentYear = currentDate.getFullYear();
                        const habitStartDay = startDate.getDate();
                        const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
                        const totalDays = daysInCurrentMonth - habitStartDay + 1;
                        if (totalDays <= 0) return "0%";
                        const percentage = (successCount / totalDays) * 100;
                        // Round up for better user experience
                        return Math.ceil(percentage * 10) / 10 + "%";
                      }
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
                onUpdateHabit={(updatedFields) => updateHabit(habits[currentHabitIndex].id, updatedFields)}
                onViewChange={setCurrentView}
                isNewHabitMode={false}
              />
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
                    // Don't remove user-specific habits - they should persist for next login
                    setUser(null);
                    setHabits([]);
                    setHabitSelection(null);
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
