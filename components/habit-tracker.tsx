"use client"

import { useState, useEffect } from "react"
import { supabase } from '../lib/supabase'
import FirstUserForm from "@/components/first-user-form"
import type { Habit, DayRecord } from "@/lib/types"
import HabitGrid from "@/components/habit-grid"
import HabitHeader from "@/components/habit-header"
import HabitCalendar from "@/components/habit-calendar"
import CompanionView from "./companion-view"
import CompanionViewV3 from "./CompanionViewV3"
import LockView from "@/components/LockView"

interface HabitTrackerProps {
  habit: Habit | null
  onAddHabit: (name: string, person: string) => void
  onUpdateRecords: (dayRecords: DayRecord[]) => void
  onDeleteHabit: () => void
  isNewHabitMode: boolean
  onUpdateHabit?: (habit: Habit) => void
  onViewChange?: (view: 'chart' | 'calendar' | 'companion') => void
  onShowLoggedMsg?: (type: 'logged' | 'not-started' | 'limit-reached') => void
  onNextHabit?: () => void
  onCompleteHabit?: (habitId: string) => Promise<{success: boolean, message: string}>
  onMarkMissed?: (habitId: string) => Promise<{success: boolean, message: string}>
  totalHabits?: number
}

export default function HabitTracker({
  habit,
  onAddHabit,
  onUpdateRecords,
  onDeleteHabit,
  isNewHabitMode,
  onUpdateHabit,
  onViewChange,
  onShowLoggedMsg,
  onNextHabit,
  onCompleteHabit,
  onMarkMissed,
  totalHabits = 1,
}: HabitTrackerProps) {
  const [dayRecords, setDayRecords] = useState<DayRecord[]>([])
  const [isSaved, setIsSaved] = useState(false)
  
  // Habit Cycle State Management
  const [currentCycle, setCurrentCycle] = useState<any>(null)
  const [habitStarted, setHabitStarted] = useState<boolean>(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [showViewDropdown, setShowViewDropdown] = useState(false)
  const [currentView, setCurrentView] = useState<'chart' | 'calendar' | 'companion'>(habit?.preferredView || 'chart')
  const [hasUsedCalendar, setHasUsedCalendar] = useState(false)
  const [companionPattern, setCompanionPattern] = useState<'drawing1' | 'drawing2' | 'drawing3'>(habit?.companionPattern || 'drawing1')
  const [showPatternSelection, setShowPatternSelection] = useState(!habit?.companionPattern)
  const [isCompanionCanvasShowing, setIsCompanionCanvasShowing] = useState(false)

  // Auto-select pattern based on existing progress when switching to companion view
  useEffect(() => {
    if (currentView === 'companion' && !habit?.companionPattern && dayRecords.length > 0) {
      // Show pattern selection instead of auto-selecting
      setShowPatternSelection(true);
    }
  }, [currentView, habit?.companionPattern, dayRecords, onUpdateHabit]);

  // Reset pattern selection when switching views (only if no pattern is saved)
  useEffect(() => {
    if (currentView !== 'companion') {
      // Don't reset if habit already has a pattern
      if (!habit?.companionPattern) {
        setShowPatternSelection(true);
      }
    }
  }, [currentView, habit?.companionPattern]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showViewDropdown) {
        setShowViewDropdown(false)
      }
    }

    if (showViewDropdown) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [showViewDropdown])

  useEffect(() => {
    if (habit) {
      console.log('🔄 Habit updated, refreshing component state:', habit.name);
      console.log('📊 New habit dayRecords length:', habit.dayRecords?.length || 0);
      console.log('📊 New habit cycleData:', habit.cycleData);
      
      const currentMonthYear = new Date().toISOString().slice(0, 7)
      // REMOVED: Month-based reset that was causing data loss for existing users
      // Always load existing habit data to preserve user progress
      setDayRecords(habit.dayRecords)
      setIsSaved(true)
      
      // Load existing habit cycle data
      loadHabitCycle();
    } else {
      setDayRecords([])
      setIsSaved(false)
      setCurrentCycle(null);
      setHabitStarted(false);
    }
  }, [habit])

  // Load existing habit cycle for this habit
  const loadHabitCycle = async () => {
    if (!habit) return;
    
    // First check if cycle data was already loaded with the habit
    if (habit.cycleData) {
      console.log('✅ Using pre-loaded cycle data for habit:', habit.name);
      console.log('📊 Cycle data:', habit.cycleData);
      
      setCurrentCycle(habit.cycleData);
      setHabitStarted(true);
      return;
    }
    
    // Fallback: Load from Supabase if not pre-loaded
    console.log('🔄 Loading cycle data from Supabase for habit:', habit.name);
    
    // Strict UUID validation for loadHabitCycle
    const habitId = habit.id;
    const isUUID = typeof habitId === 'string' && 
      habitId.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    
    if (!isUUID) {
      console.error('❌ loadHabitCycle: Invalid habit UUID:', habitId, 'TYPE:', typeof habitId);
      console.error('❌ STOPPING cycle lookup - habit must have valid UUID');
      return;
    }
    
    console.log('🆔 Using valid habit UUID for cycle lookup:', habitId);
    
    try {
      const { data: cycles, error } = await supabase
        .from('habit_cycles')
        .select('*')
        .eq('habit_id', habitId) // Use validated UUID
        .limit(1);

      console.log('🔍 Loaded cycle data from Supabase:', cycles);

      if (error) {
        console.error('Error loading habit cycle:', error);
        return;
      }

      if (cycles && cycles.length > 0) {
        setCurrentCycle(cycles[0]);
        setHabitStarted(true);
      } else {
        setCurrentCycle(null);
        setHabitStarted(false);
      }
    } catch (err) {
      console.error('Network error loading habit cycle:', err);
    }
  };

  useEffect(() => {
    if (isSaved && habit) {
      onUpdateRecords(dayRecords)
    }
  }, [dayRecords, isSaved])



  const handleLetGo = async () => {
    if (!habit) return;
    
    console.log('🎯 Production Habit Completion Debug:');
    console.log('- Habit ID:', habit.id);
    console.log('- Current dayRecords length:', dayRecords.length);
    console.log('- Cycle data:', habit.cycleData);
    
    // Strict UUID validation - NO fallbacks allowed for database operations
    const habitId = habit.id;
    const isUUID = typeof habitId === 'string' && 
      habitId.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    
    if (!isUUID) {
      console.error('❌ Invalid habit UUID received:', habitId, 'TYPE:', typeof habitId);
      console.error('❌ STOPPING EXECUTION - habit must have valid UUID');
      // Still create visual feedback but skip all database operations
      setDayRecords((prev) => {
        const lastRecord = prev[prev.length - 1]
        if (!lastRecord) {
          return [{ x: 1, y: 1 }]
        }
        const newX = lastRecord.x + 1
        const newY = lastRecord.y + 1
        return [...prev, { x: newX, y: newY }]
      })
      return;
    }
    
    console.log('✅ Using valid habit UUID:', habitId);
    
    // Use Supabase-based completion logic instead of localStorage
    if (onCompleteHabit) {
      console.log('🎯 Calling parent completion function...');
      const result = await onCompleteHabit(habitId);
      
      if (!result.success) {
        console.warn('❌ Completion failed:', result.message);
        // Show "already logged" message for actual failures
        if (result.message.includes('already completed')) {
          onShowLoggedMsg?.('logged');
        }
        return;
      }
      
      console.log('✅ Completion successful:', result.message);
      console.log('🔄 Parent should have updated habits - component will re-render');
      
      // SUCCESS: Don't manually create dayRecords here!
      // The parent component will reload habits and the useEffect will update dayRecords
      // This prevents the blinking issue and ensures UI matches database
      return;
    }

    // Fallback: If no onCompleteHabit function, create visual feedback locally
    console.warn('⚠️ No onCompleteHabit function - creating local visual feedback only');
    setDayRecords((prev) => {
      const lastRecord = prev[prev.length - 1]
      if (!lastRecord) {
        return [{ x: 1, y: 1 }]
      }
      const newX = lastRecord.x + 1
      const newY = lastRecord.y + 1
      // Set limits based on view type
      let maxDots, maxY
      if (currentView === 'companion') {
        // Companion view: dynamic limit based on pattern
        maxDots = 30  // Always use lock pattern (30 dots)
        maxY = maxDots
      } else {
        // Chart/Calendar view: always 30x30 grid
        maxDots = 30
        maxY = 30
      }
      if (newX <= maxDots && newY <= maxY) {
        return [...prev, { x: newX, y: newY }]
      }
      return prev
    })
  }
    try {
      console.log('🔍 Starting Supabase operations for habit:', habitId);
      console.log('🔍 Habit ID type:', typeof habitId, 'length:', habitId.length, 'contains dash:', habitId.includes('-'));
      
      // Check if there's an active cycle for this habit
      const { data: cycles, error: cyclesError } = await supabase
        .from('habit_cycles')
        .select('*')
        .eq('habit_id', habitId) // habitId must be UUID
        .gte('end_date', new Date().toISOString().split('T')[0]) // only active cycles
        .order('created_at', { ascending: false })
        .limit(1);

      console.log('📊 Query result - cycles:', cycles, 'error:', cyclesError);

      if (cyclesError) {
        console.error('❌ Error checking cycles:', cyclesError);
        
        // If the error is about table not existing or column issues, log it specifically
        if (cyclesError.code === '42P01') {
          console.error('🚨 Table habit_cycles does not exist!');
        } else if (cyclesError.code === '42703') {
          console.error('🚨 Column habit_id does not exist in habit_cycles table!');
        }
        
        return; // Visual feedback already created above
      }

      const todayDate = new Date().toISOString().split('T')[0];
      console.log('📅 Today date:', todayDate);

      if (cycles.length === 0) {
        // No active cycle exists → create a new cycle (this starts the habit)
        console.log('➕ Creating new habit cycle...');
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 29); // Add 29 days for 30-day cycle including today
        
        const newCycleData = {
          habit_id: habitId,
          start_date: todayDate,
          end_date: endDate.toISOString().split('T')[0],
          completed_days: 1, // first day completed
          missed_days: 0,
          consistency: (1 / 30.0) * 100,
        };
        
        console.log('📝 Inserting cycle data:', newCycleData);
        console.log('📝 Habit ID for insert:', habitId, 'type:', typeof habitId, 'length:', habitId.length);
        
        const { data, error } = await supabase
          .from('habit_cycles')
          .insert([newCycleData])
          .select();

        console.log('💾 Insert result - data:', data, 'error:', error);
        
        if (error) {
          console.error('❌ Detailed error creating habit cycle:', {
            message: error.message,
            code: error.code,
            details: error.details,
            hint: error.hint
          });
          
          // Try a fallback approach - check if habit exists in habits table
          console.log('🔄 Checking if habit exists in habits table...');
          const { data: habitCheck, error: habitCheckError } = await supabase
            .from('habits')
            .select('id, title')
            .eq('id', habitId);
          
          console.log('🔍 Habit check result:', habitCheck, 'error:', habitCheckError);
          return; // Visual feedback already created above
        }

        console.log('✅ New habit cycle created:', data);
        setCurrentCycle(data[0]);
        setHabitStarted(true);
        
      } else {
        // Active cycle exists → update it
        console.log('🔄 Updating existing habit cycle...');
        const currentCycleData = cycles[0];
        const newCompletedDays = currentCycleData.completed_days + 1;
        const newConsistency = (newCompletedDays / 30.0) * 100;

        console.log('📈 Update data - completed days:', newCompletedDays, 'consistency:', newConsistency);

        const { error } = await supabase
          .from('habit_cycles')
          .update({
            completed_days: newCompletedDays,
            consistency: newConsistency,
          })
          .eq('id', currentCycleData.id);

        console.log('💾 Update result - error:', error);

        if (error) {
          console.error('❌ Error updating habit cycle:', error);
          return; // Visual feedback already created above
        }

        console.log('✅ Habit cycle updated - completed day');
        setCurrentCycle({...currentCycleData, completed_days: newCompletedDays, consistency: newConsistency});
        setHabitStarted(true);
      }

    } catch (err) {
      console.error('🚨 Network error during habit cycle management:', err);
      // Visual feedback already created above, so don't block the UI
    }
  }

  const handleStick = () => {

    setDayRecords((prev) => {
      const lastRecord = prev[prev.length - 1]
      if (!lastRecord) {
        return [{ x: 1, y: 0 }]
      }
      const newX = lastRecord.x + 1
      const newY = Math.max(0, lastRecord.y - 1)
      // Always use lock pattern - 30 dots  
      const maxDots = 30
      if (newX <= maxDots) {
        return [...prev, { x: newX, y: newY }]
      }
      return prev
    })
  }

  const handleSaveHabit = (name: string, person: string) => {
    onAddHabit(name, person)
    setIsSaved(true)
  }

  const handleGiveUpClick = () => {
    setShowDeleteConfirmation(true)
  }

  const handleConfirmDelete = () => {
    onDeleteHabit()
    setShowDeleteConfirmation(false)
  }

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false)
  }

  const handleHabitMissed = async () => {
    if (!habit) return;
    
    // Check if habit has started yet (has active cycle)
    if (!habitStarted && dayRecords.length === 0) {
      onShowLoggedMsg?.('not-started');
      return;
    }
    
    const habitId = habit.id;
    
    // Use Supabase-based miss logic instead of localStorage
    if (onMarkMissed) {
      const result = await onMarkMissed(habitId);
      
      if (!result.success) {
        // Show "already logged" message
        onShowLoggedMsg?.('logged');
        return;
      }
    }
    
    // Continue with visual feedback for the dot grid
    setDayRecords((prev) => {
      const lastRecord = prev[prev.length - 1]
      
      // For Day 2 missed: create dot at X=2, Y=1 (next to Day 1 green circle)
      // For subsequent days: follow previous miss logic
      const newX = lastRecord.x + 1
      let newY;
      
      if (newX === 2 && lastRecord.y > 0) {
        // Day 2 miss: set Y to 1 to appear next to Day 1 green circle
        newY = 1;
      } else {
        // Regular miss logic: decrease Y by 1, minimum 0
        newY = Math.max(0, lastRecord.y - 1);
      }
      
      // Set limits based on view type
      let maxDays
      if (currentView === 'companion') {
        maxDays = 30  // Always use lock pattern (30 dots)
      } else {
        maxDays = 30 // Chart/Calendar view limit
      }
      
      if (newX <= maxDays) {
        return [...prev, { x: newX, y: newY }]
      }
      return prev
    })
  }

  if (isNewHabitMode) {
    return <HabitHeader onSave={handleSaveHabit} isSaved={false} habitData={{ name: "", person: "" }} />
  }

  // Handle null habit state - show message to create a habit
  if (!habit) {
    return (
      <div className="flex flex-col h-full px-4 py-8 items-center justify-center text-center">
        <div className="bg-gray-50 rounded-lg p-6 max-w-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">No Habits Yet</h2>
          <p className="text-gray-600 mb-4">
            You haven't created any habits yet. Start your journey by creating your first habit!
          </p>
          <button
            onClick={() => {
              // This should trigger the habit selection flow
              window.location.reload();
            }}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Create Your First Habit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full px-4 py-2">
      {habit && isSaved && (
        <>
          {/* View Dropdown */}
          <div className="flex items-center justify-end py-2 relative">
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowViewDropdown(!showViewDropdown);
                }}
                className="flex items-center justify-between w-44 px-3 py-2 text-sm border border-gray-200 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap"
              >
                <span className="text-gray-900 truncate">{currentView.charAt(0).toUpperCase() + currentView.slice(1)} View</span>
                <svg className={`ml-2 h-5 w-5 text-gray-400 transition-transform duration-200 ${showViewDropdown ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {showViewDropdown && (
                <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu">
                    {currentView !== 'chart' && (
                      <button
                        onClick={() => {
                          setCurrentView('chart');
                          onViewChange?.('chart');
                          setShowViewDropdown(false);
                        }}
                        className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Chart View
                      </button>
                    )}
                    {currentView !== 'calendar' && (
                      <button
                        onClick={() => {
                          setCurrentView('calendar');
                          onViewChange?.('calendar');
                          setShowViewDropdown(false);
                        }}
                        className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Calendar View
                      </button>
                    )}
                    {currentView !== 'companion' && (
                      <button
                        onClick={() => {
                          setCurrentView('companion');
                          onViewChange?.('companion');
                          setShowViewDropdown(false);
                          setShowPatternSelection(true); // Always show pattern selection when switching to companion
                        }}
                        className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Companion View
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main view rendering */}
          <div className="flex-1 pb-24">
            {currentView === 'chart' && (
              <div className="w-full flex items-center justify-center">
                <HabitGrid dayRecords={dayRecords} />
              </div>
            )}
            {currentView === 'calendar' && (
              <div className="w-full flex items-center justify-center pt-2">
                <HabitCalendar dayRecords={dayRecords} habitStartDate={habit.createdAt} />
              </div>
            )}
            {currentView === 'companion' && (
              <div className="w-full flex items-center justify-center pt-2">
                <CompanionView 
                  habit={habit} 
                  dayRecords={dayRecords} 
                  onPatternChange={(pattern) => {
                    setCompanionPattern(pattern);
                    onUpdateHabit({...habit, companionPattern: pattern});
                  }}
                  currentPattern={companionPattern}
                  onComplete={handleLetGo}
                  onMiss={handleHabitMissed}
                  onCanvasStateChange={setIsCompanionCanvasShowing}
                  onNextHabit={onNextHabit}
                  totalHabits={totalHabits}
                />
              </div>
            )}
          </div>

          {/* Fixed positioned CTAs - only show when content is loaded and companion is in drawing mode */}
          {(currentView === 'chart' || currentView === 'calendar' || 
            (currentView === 'companion' && isCompanionCanvasShowing)) && (
            <div className="fixed bottom-8 left-0 right-0 bg-white p-4 z-10">
              <div className="max-w-sm mx-auto">
                <div className="flex gap-2 mb-3">
                  <button
                    onClick={handleLetGo}
                    className="flex-1 px-3 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors shadow-lg text-center text-sm flex items-center justify-center h-14 rounded-2xl"
                  >
                    <span className="text-[15px] font-bold whitespace-nowrap">Completed Habit!</span>
                  </button>
                  <button
                    onClick={handleHabitMissed}
                    className="flex-1 px-3 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-700 font-semibold rounded-lg border border-amber-200 transition-all active:scale-95 text-center text-sm flex items-center justify-center h-14 rounded-2xl"
                  >
                    <span className="text-[15px] font-bold">Missed Today</span>
                  </button>
                </div>
                
                {/* Navigation row */}
                {habit && (
                  <div className="w-full flex justify-between items-center text-sm font-semibold px-4">
                    <button
                      onClick={handleGiveUpClick}
                      className="text-muted-foreground/60 hover:text-muted-foreground/80 transition-colors"
                    >
                      Want to give up?
                    </button>
                    <button
                      onClick={() => totalHabits > 1 && onNextHabit?.()}
                      className={`flex items-center transition-colors ${
                        totalHabits > 1
                          ? 'text-foreground/80 hover:text-foreground cursor-pointer'
                          : 'text-muted-foreground/60 cursor-not-allowed'
                      }`}
                      disabled={totalHabits <= 1}
                    >
                      Next habit
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Confirmation Dialog */}
          {showDeleteConfirmation && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-background border border-border rounded-lg p-6 max-w-sm mx-4 shadow-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                  Do you really don't want to continue?
                </h3>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={handleConfirmDelete}
                    className="flex-1 px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors"
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleCancelDelete}
                    className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition-colors"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
