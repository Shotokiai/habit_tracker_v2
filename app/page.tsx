"use client"


import { useState, useEffect } from "react"
import HabitTracker from "@/components/habit-tracker"
import FirstUserForm from "@/components/first-user-form"
import HabitSelection from "@/components/habit-selection"
import CustomHabitScreen from "@/components/CustomHabitScreen"
import SplashScreen from "@/components/splash-screen"
import { supabase } from '@/lib/supabase'
import type { Habit, DayRecord } from "@/lib/types"


export default function Page() {
  const [showLoggedMsg, setShowLoggedMsg] = useState(false);
  const [messageType, setMessageType] = useState<'logged' | 'not-started' | 'limit-reached'>('logged');
  // Remove localStorage-based daily interactions - will use Supabase habit_cycles instead
  // const [dailyInteractions, setDailyInteractions] = useState<{[habitId: string]: number}>({});
  const [habits, setHabits] = useState<Habit[]>([]);
  const [currentHabitIndex, setCurrentHabitIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [swipeStartFromNav, setSwipeStartFromNav] = useState(false);
  const [user, setUser] = useState<{ username: string; age: string; email: string } | null>(null);
  const [habitSelection, setHabitSelection] = useState<string | null>(null);
  const [customHabitType, setCustomHabitType] = useState<"make" | "break" | null>(null);
  const [showHabitSelection, setShowHabitSelection] = useState(false);
  const [showProfileDrawer, setShowProfileDrawer] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [currentView, setCurrentView] = useState<'chart' | 'calendar' | 'companion'>('chart');
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  // Helper function to update user's last_seen_at timestamp
  const updateLastSeenAt = async (userEmail: string) => {
    try {
      const { error } = await supabase
        .from('users')
        .update({ last_seen_at: new Date().toISOString() })
        .eq('email', userEmail);
        
      if (error) {
        console.error('Error updating last_seen_at:', error);
      } else {
        console.log('✅ Updated last_seen_at for user:', userEmail);
      }
    } catch (err) {
      console.error('Network error updating last_seen_at:', err);
    }
  };

  // Function to process missed days at midnight (automatic background processing)
  const processMidnightMissedDays = async (userEmail: string) => {
    try {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
        console.log('⚠️ Supabase not configured, skipping midnight processing');
        return;
      }

      console.log('🌙 Processing missed days for midnight...');

      // Get user ID
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('email', userEmail)
        .single();

      if (userError || !userData) {
        console.warn('User not found for midnight processing:', userError);
        return;
      }

      // Get all active habit cycles for this user
      const { data: habitCycles, error: cyclesError } = await supabase
        .from('habit_cycles')
        .select(`
          id, 
          habit_id, 
          start_date, 
          end_date, 
          completed, 
          missed, 
          last_completed_date,
          habits(user_id)
        `)
        .gte('end_date', new Date().toISOString().split('T')[0]) // Active cycles only
        .eq('habits.user_id', userData.id);

      if (cyclesError || !habitCycles) {
        console.warn('Error fetching habit cycles for midnight processing:', cyclesError);
        return;
      }

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayDateString = yesterday.toDateString();

      let processedCount = 0;

      // Check each habit cycle
      for (const cycle of habitCycles) {
        const lastCompletedDate = cycle.last_completed_date 
          ? new Date(cycle.last_completed_date).toDateString() 
          : null;

        // If habit wasn't completed yesterday, mark as missed
        if (lastCompletedDate !== yesterdayDateString) {
          const newMissed = cycle.missed + 1;
          const totalAttempts = cycle.completed + newMissed;
          const newConsistency = Math.round((cycle.completed / totalAttempts) * 100) || 0;

          // Update habit cycle with missed day
          const { error: updateError } = await supabase
            .from('habit_cycles')
            .update({
              missed: newMissed,
              consistency: newConsistency,
              // Don't update last_completed_date - keep it as the actual last completion
            })
            .eq('id', cycle.id);

          if (updateError) {
            console.error('Error updating missed day at midnight:', updateError);
          } else {
            processedCount++;
            console.log(`✅ Marked habit ${cycle.habit_id} as missed for yesterday`);
          }
        }
      }

      console.log(`🌙 Midnight processing complete: ${processedCount} habits marked as missed`);
    } catch (error) {
      console.error('Error in midnight processing:', error);
    }
  };

  // Function to check if we need to run midnight processing
  const checkAndRunMidnightProcessing = async (userEmail: string) => {
    try {
      const today = new Date().toDateString();
      const lastProcessedKey = `lastMidnightProcessing_${userEmail}`;
      const lastProcessed = localStorage.getItem(lastProcessedKey);

      // If we haven't processed today yet, run midnight processing
      if (lastProcessed !== today) {
        await processMidnightMissedDays(userEmail);
        localStorage.setItem(lastProcessedKey, today);
        console.log('🌙 Midnight processing completed for today');
      }
    } catch (error) {
      console.warn('Error checking midnight processing:', error);
    }
  };

  // Function to check if habit was already completed today
  const checkHabitCompletedToday = async (habitId: string): Promise<boolean> => {
    try {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
        return false; // Allow if Supabase not configured
      }

      const today = new Date().toDateString();
      
      // First, let's see what columns actually exist in habit_cycles table
      const { data, error } = await supabase
        .from('habit_cycles')
        .select('*') // Select all columns to see what's available
        .eq('habit_id', habitId)
        .limit(1);

      console.log('🔍 habit_cycles table data:', data);
      console.log('🔍 habit_cycles table error:', error);

      if (error) {
        console.warn('Error checking habit completion:', error);
        return false; // Allow if error
      }

      if (!data || data.length === 0) {
        console.log('No habit cycle found, allowing completion');
        return false; // Allow if no cycle found
      }

      // Check if we have last_completed_date field and if it matches today
      const cycle = data[0];
      console.log('🔍 Cycle structure:', Object.keys(cycle));
      
      if (cycle.last_completed_date) {
        const lastCompletedDate = new Date(cycle.last_completed_date).toDateString();
        return lastCompletedDate === today;
      }

      return false; // Allow if no last_completed_date
    } catch (error) {
      console.warn('Error checking habit completion:', error);
      return false; // Allow if error
    }
  };

  // Function to calculate and update missed days
  const updateMissedDays = async (habitId: string) => {
    try {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
        return;
      }

      const { data, error } = await supabase
        .from('habit_cycles')
        .select('start_date, last_completed_date, completed, missed')
        .eq('habit_id', habitId)
        .single();

      if (error || !data) {
        console.warn('No habit cycle found for missed day calculation');
        return;
      }

      const today = new Date();
      const startDate = new Date(data.start_date);
      const lastCompletedDate = data.last_completed_date ? new Date(data.last_completed_date) : startDate;
      
      // Calculate total days since start
      const totalDaysSinceStart = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      
      // Calculate days since last completion
      const daysSinceLastCompleted = Math.floor((today.getTime() - lastCompletedDate.getTime()) / (1000 * 60 * 60 * 24));
      
      // If more than 1 day since last completion, count missed days
      if (daysSinceLastCompleted > 1) {
        const newMissedDays = daysSinceLastCompleted - 1; // Don't count today as missed yet
        const totalMissed = data.missed + newMissedDays;
        
        // Update missed count in Supabase
        const { error: updateError } = await supabase
          .from('habit_cycles')
          .update({ 
            missed: totalMissed,
            consistency: Math.round((data.completed / (data.completed + totalMissed)) * 100) || 0
          })
          .eq('habit_id', habitId);

        if (updateError) {
          console.error('Error updating missed days:', updateError);
        } else {
          console.log(`✅ Updated ${newMissedDays} missed days for habit`);
        }
      }
    } catch (error) {
      console.warn('Error calculating missed days:', error);
    }
  };

  // Function to complete a habit (increment completed count)
  const completeHabit = async (habitId: string): Promise<{success: boolean, message: string}> => {
    try {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
        return { success: true, message: 'Habit completed locally' };
      }

      // Check if already completed today
      const completedToday = await checkHabitCompletedToday(habitId);
      if (completedToday) {
        return { success: false, message: 'Habit already completed for today!' };
      }

      // Get ALL current cycle data to see what fields exist
      const { data, error } = await supabase
        .from('habit_cycles')
        .select('*') // Get all columns
        .eq('habit_id', habitId)
        .limit(1);

      console.log('🔍 Complete habit - cycle data:', data);
      console.log('🔍 Complete habit - error:', error);

      if (error) {
        console.error('Error fetching habit cycle:', error);
        return { success: false, message: 'Error updating habit: ' + error.message };
      }

      if (!data || data.length === 0) {
        // No cycle exists, create a completion record with proper initial values
        console.log('🔍 No existing cycle, creating new record...');
        const { error: insertError } = await supabase
          .from('habit_cycles')
          .insert({
            habit_id: habitId,
            last_completed_date: new Date().toISOString(),
            start_date: new Date().toISOString().split('T')[0],
            end_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
            completed_days: 1, // This is the first completion
            missed_days: 0,
            consistency: (1 / 30) * 100 // 3.33% for first day
          });

        if (insertError) {
          console.error('Error creating habit cycle:', insertError);
          return { success: false, message: 'Error creating habit cycle: ' + insertError.message };
        }

        console.log('✅ Created new cycle with first completion');

        // Force reload habits to reflect the new cycle data
        if (user) {
          console.log('🔄 Force reloading habits after first completion...');
          await loadUserHabitsFromSupabase(user.email);
        }

        return { success: true, message: 'Habit completed successfully!' };
      }

      const cycle = data[0];
      console.log('🔍 Existing cycle structure:', Object.keys(cycle));

      // Update with available fields
      const updateData: any = {
        last_completed_date: new Date().toISOString()
      };

      // Only add fields that exist in the table
      if ('completed_days' in cycle) {
        const newCompletedDays = (cycle.completed_days || 0) + 1;
        updateData.completed_days = newCompletedDays;
        
        // Also update consistency
        if ('consistency' in cycle) {
          updateData.consistency = (newCompletedDays / 30) * 100;
        }
        
        console.log(`📊 Updating completion: ${cycle.completed_days || 0} → ${newCompletedDays}`);
      }

      const { error: updateError } = await supabase
        .from('habit_cycles')
        .update(updateData)
        .eq('habit_id', habitId);

      if (updateError) {
        console.error('Error updating habit completion:', updateError);
        return { success: false, message: 'Error updating habit: ' + updateError.message };
      }

      console.log('✅ Database updated successfully');

      // CRITICAL: Force reload habits to reflect the updated progress immediately
      console.log('🔄 Force reloading habits to update UI...');
      if (user) {
        await loadUserHabitsFromSupabase(user.email);
        console.log('🔄 Habit reload completed');
      }

      return { success: true, message: 'Habit completed successfully!' };
    } catch (error) {
      console.error('Error completing habit:', error);
      return { success: false, message: 'Error completing habit: ' + (error as Error).message };
    }
  };

  // Function to manually mark habit as missed for today
  const markHabitMissed = async (habitId: string): Promise<{success: boolean, message: string}> => {
    try {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
        return { success: true, message: 'Habit marked as missed locally' };
      }

      // Check if already interacted today (completed or missed)
      const completedToday = await checkHabitCompletedToday(habitId);
      if (completedToday) {
        return { success: false, message: 'Habit already logged for today!' };
      }

      // Get current cycle data
      const { data, error } = await supabase
        .from('habit_cycles')
        .select('*')
        .eq('habit_id', habitId)
        .limit(1);

      console.log('🔍 Mark missed - cycle data:', data);

      if (error) {
        console.error('Error fetching habit cycle for miss:', error);
        return { success: false, message: 'Error updating habit: ' + error.message };
      }

      let updateData: any = {};

      if (!data || data.length === 0) {
        // No cycle exists, create one with missed day
        const { error: insertError } = await supabase
          .from('habit_cycles')
          .insert({
            habit_id: habitId,
            start_date: new Date().toISOString().split('T')[0],
            end_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
            missed_days: 1
          });

        if (insertError) {
          console.error('Error creating habit cycle with miss:', insertError);
          return { success: false, message: 'Error creating habit cycle: ' + insertError.message };
        }

        return { success: true, message: 'Habit marked as missed' };
      }

      const cycle = data[0];
      
      // Only increment missed if that field exists
      if ('missed_days' in cycle) {
        updateData.missed_days = (cycle.missed_days || 0) + 1;
      }

      if (Object.keys(updateData).length > 0) {
        const { error: updateError } = await supabase
          .from('habit_cycles')
          .update(updateData)
          .eq('habit_id', habitId);

        if (updateError) {
          console.error('Error updating habit miss:', updateError);
          return { success: false, message: 'Error updating habit: ' + updateError.message };
        }
      }

      return { success: true, message: 'Habit marked as missed' };
    } catch (error) {
      console.error('Error marking habit as missed:', error);
      return { success: false, message: 'Error marking habit as missed: ' + (error as Error).message };
    }
  };

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
      { key: "noPackaged", label: "No packaged foods" },
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
        
        // Update last_seen_at when app loads with existing user
        updateLastSeenAt(userData.email);
        
        // Load habits from Supabase first (for cross-device sync), then fallback to localStorage
        loadUserHabitsFromSupabase(userData.email);
        
        // MIDNIGHT PROCESSING - Check and run automatic missed day calculation
        checkAndRunMidnightProcessing(userData.email);
        
      } catch {
        localStorage.removeItem("currentUser");
      }
    }
    
    setIsLoaded(true);
  }, []);

  // Function to load user habits from Supabase for cross-device sync
  const loadUserHabitsFromSupabase = async (userEmail: string) => {
    try {
      // Check if Supabase is configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
        console.warn('⚠️ Supabase not configured, using localStorage only');
        loadHabitsFromLocalStorage(userEmail);
        return;
      }

      // Get user ID from email
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('email', userEmail)
        .single();

      if (userError || !userData) {
        console.warn('User not found in Supabase, using localStorage:', userError);
        loadHabitsFromLocalStorage(userEmail);
        return;
      }

      // Get user's habits from Supabase
      const { data: supabaseHabits, error: habitsError } = await supabase
        .from('habits')
        .select('*')
        .eq('user_id', userData.id)
        .order('created_at', { ascending: true });

      if (habitsError) {
        console.warn('Error loading habits from Supabase, using localStorage:', habitsError);
        loadHabitsFromLocalStorage(userEmail);
        return;
      }

      if (supabaseHabits && supabaseHabits.length > 0) {
        console.log('✅ Loaded', supabaseHabits.length, 'habits from Supabase');
        
        // Load habit cycle data for each habit to get progress info
        const localHabits: Habit[] = await Promise.all(supabaseHabits.map(async (habit) => {
          // Get cycle data for this habit
          const { data: cycleData, error: cycleError } = await supabase
            .from('habit_cycles')
            .select('*')
            .eq('habit_id', habit.id)
            .limit(1);

          console.log(`🔍 Cycle data for habit ${habit.title}:`, cycleData);

          let habitWithProgress = {
            id: habit.id,
            name: habit.title,
            person: userEmail,
            dayRecords: habit.day_records || [],
            createdAt: habit.created_at,
            monthYear: new Date(habit.created_at).toISOString().slice(0, 7),
            preferredView: habit.preferred_view || 'chart',
            companionPattern: habit.companion_pattern || 'drawing1'
          };

          // If cycle data exists, add progress information
          if (cycleData && cycleData.length > 0) {
            const cycle = cycleData[0];
            console.log(`📊 Adding progress to ${habit.title}:`, {
              completed: cycle.completed_days || 0,
              missed: cycle.missed_days || 0,
              consistency: cycle.consistency || 0
            });
            
            // Create dayRecords based on Supabase cycle data to show visual progress
            const updatedDayRecords = [...(habit.day_records || [])];
            
            // If we have completed days, ensure the visual representation matches
            if ((cycle.completed_days || 0) > 0) {
              // Update dayRecords to show the completion
              // For each completed day, ensure there's a record showing progress
              for (let day = 1; day <= (cycle.completed_days || 0); day++) {
                const existingRecord = updatedDayRecords.find(record => record.x === day);
                if (existingRecord) {
                  // Ensure this day shows as completed (y value increases)
                  if (day === 1) {
                    existingRecord.y = Math.max(1, existingRecord.y);
                  } else {
                    const prevRecord = updatedDayRecords.find(r => r.x === day - 1);
                    if (prevRecord) {
                      existingRecord.y = Math.max(prevRecord.y + 1, existingRecord.y);
                    }
                  }
                } else {
                  // Create a record for this completed day
                  const prevRecord = updatedDayRecords.find(r => r.x === day - 1);
                  const newY = prevRecord ? prevRecord.y + 1 : 1;
                  updatedDayRecords.push({ x: day, y: newY });
                }
              }
              
              // Sort dayRecords by x (day)
              updatedDayRecords.sort((a, b) => a.x - b.x);
            }
            
            // Add cycle info to habit object
            habitWithProgress = {
              ...habitWithProgress,
              dayRecords: updatedDayRecords, // Use updated dayRecords that reflect Supabase data
              // Store cycle data for display
              cycleData: {
                completed: cycle.completed_days || 0,
                missed: cycle.missed_days || 0,
                consistency: cycle.consistency || 0,
                last_completed_date: cycle.last_completed_date,
                start_date: cycle.start_date,
                end_date: cycle.end_date
              }
            };
          } else {
            console.log(`📊 No cycle data found for ${habit.title}`);
          }

          return habitWithProgress;
        }));

        setHabits(localHabits);
        if (localHabits.length > 0) {
          setHabitSelection("existing");
        }

        // Update localStorage with synced data
        const userHabitsKey = `habits_${userEmail}`;
        localStorage.setItem(userHabitsKey, JSON.stringify(localHabits));
        
      } else {
        console.log('No habits found in Supabase, checking localStorage');
        loadHabitsFromLocalStorage(userEmail);
      }
      
    } catch (error) {
      console.warn('Network error loading from Supabase, using localStorage:', error);
      loadHabitsFromLocalStorage(userEmail);
    }
  };

  // Fallback function to load habits from localStorage
  const loadHabitsFromLocalStorage = (userEmail: string) => {
    const userHabitsKey = `habits_${userEmail}`;
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
    } else {
      setHabits([]);
    }
  };

  // Handle user login/registration
  const handleUserSubmit = (userData: { username: string; age: string; email: string }) => {
    setUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
    setShowSplashScreen(false); // Ensure splash screen is hidden
    
    // Update last_seen_at when user logs in/registers
    updateLastSeenAt(userData.email);
    
    // Load habits from Supabase for cross-device sync
    loadUserHabitsFromSupabase(userData.email);
    
    // MIDNIGHT PROCESSING - Check and run automatic missed day calculation for new login
    checkAndRunMidnightProcessing(userData.email);
  };

  useEffect(() => {
    if (isLoaded && user) {
      // Save habits specific to the current user's email
      const userHabitsKey = `habits_${user.email}`;
      localStorage.setItem(userHabitsKey, JSON.stringify(habits));
    }
  }, [habits, isLoaded, user]);

  // Helper function to create habits in Supabase and locally
  const createHabitInSupabase = async (name: string, person: string, type: string = 'make', source: string = 'predefined') => {
    if (!user?.email) {
      console.error('❌ No user email found');
      return null;
    }

    try {
      // Check if Supabase is properly configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
        console.warn('⚠️ Supabase not configured in production, using local creation only');
        // For production without Supabase, create habit locally
        const fallbackUUID = crypto.randomUUID();
        window.currentHabitUUID = fallbackUUID;
        window.currentHabitName = name;
        window.currentHabitType = type;
        
        const currentMonthYear = new Date().toISOString().slice(0, 7);
        const newHabit: Habit = {
          id: fallbackUUID,
          name: name,
          person,
          dayRecords: [],
          createdAt: new Date().toISOString(),
          monthYear: currentMonthYear,
        };

        setHabits(prevHabits => {
          const updatedHabits = [...prevHabits, newHabit];
          setCurrentHabitIndex(updatedHabits.length - 1);
          return updatedHabits;
        });
        return newHabit;
      }

      // Map type to database values
      const habitType: 'build' | 'break' = type === 'make' ? 'build' : 'break';
      
      // First, get the user's UUID from the users table using email
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('email', user.email)
        .single();

      if (userError || !userData) {
        console.error('Error finding user:', userError);
        // Fallback to local creation if user lookup fails
        const fallbackUUID = crypto.randomUUID();
        window.currentHabitUUID = fallbackUUID;
        window.currentHabitName = name;
        window.currentHabitType = type;
        
        const currentMonthYear = new Date().toISOString().slice(0, 7);
        const newHabit: Habit = {
          id: fallbackUUID,
          name: name,
          person,
          dayRecords: [],
          createdAt: new Date().toISOString(),
          monthYear: currentMonthYear,
        };

        setHabits(prevHabits => {
          const updatedHabits = [...prevHabits, newHabit];
          setCurrentHabitIndex(updatedHabits.length - 1);
          return updatedHabits;
        });
        return newHabit;
      }

      // Generate proper UUID and insert habit
      const habitUUID = crypto.randomUUID();
      const { data, error } = await supabase
        .from('habits')
        .insert([
          {
            id: habitUUID,
            user_id: userData.id,
            title: name,
            type: habitType,
            source: source // Use the passed source parameter
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        // Fallback to local creation if database insert fails
        const fallbackUUID = crypto.randomUUID();
        window.currentHabitUUID = fallbackUUID;
        window.currentHabitName = name;
        window.currentHabitType = type;
        
        const currentMonthYear = new Date().toISOString().slice(0, 7);
        const newHabit: Habit = {
          id: fallbackUUID,
          name: name,
          person,
          dayRecords: [],
          createdAt: new Date().toISOString(),
          monthYear: currentMonthYear,
        };

        setHabits(prevHabits => {
          const updatedHabits = [...prevHabits, newHabit];
          setCurrentHabitIndex(updatedHabits.length - 1);
          return updatedHabits;
        });
        return newHabit;
      }

      console.log('✅ Habit created in Supabase:', data);

      // Store the UUID in window for compatibility with existing flow
      window.currentHabitUUID = habitUUID;
      window.currentHabitName = name;
      window.currentHabitType = type;

      // Create local habit object
      const currentMonthYear = new Date().toISOString().slice(0, 7);
      const newHabit: Habit = {
        id: habitUUID,
        name: name,
        person,
        dayRecords: [],
        createdAt: new Date().toISOString(),
        monthYear: currentMonthYear,
      };

      setHabits(prevHabits => {
        const updatedHabits = [...prevHabits, newHabit];
        setCurrentHabitIndex(updatedHabits.length - 1); // Set to the newly created habit's index
        return updatedHabits;
      });
      return newHabit;
    } catch (err) {
      console.error('Network error during habit creation:', err);
      
      // For production/network issues, create habit locally with fallback UUID
      const fallbackUUID = crypto.randomUUID();
      window.currentHabitUUID = fallbackUUID;
      window.currentHabitName = name;
      window.currentHabitType = type;
      
      const currentMonthYear = new Date().toISOString().slice(0, 7);
      const newHabit: Habit = {
        id: fallbackUUID,
        name: name,
        person,
        dayRecords: [],
        createdAt: new Date().toISOString(),
        monthYear: currentMonthYear,
      };

      setHabits(prevHabits => {
        const updatedHabits = [...prevHabits, newHabit];
        setCurrentHabitIndex(updatedHabits.length - 1);
        return updatedHabits;
      });
      return newHabit;
    }
  };

  const addHabit = async (name: string, person: string) => {
    console.log('🔧 addHabit called with name:', name, 'person:', person);
    
    const currentMonthYear = new Date().toISOString().slice(0, 7);
    
    // Get habit ID and name from stored window object (set by habit-selection)
    let habitId: string;
    let habitName = name;
    
    // Check if we have a stored UUID from habit selection
    if (window.currentHabitUUID) {
      habitId = window.currentHabitUUID;
      habitName = window.currentHabitName || name;
      console.log('✅ Using stored UUID:', habitId, 'Name:', habitName, 'Type:', window.currentHabitType);
      
      // Clear the stored data after using it
      window.currentHabitUUID = null;
      window.currentHabitName = null;
      window.currentHabitType = null;
    } else {
      console.warn('⚠️ No stored UUID found - this should have been set by createHabitInSupabase');
      console.warn('🔧 Creating fallback UUID to prevent flow breaking');
      // Create a fallback UUID to prevent the flow from breaking
      habitId = crypto.randomUUID();
    }
    
    console.log('📝 FINAL RESULT - ID:', habitId, 'Name:', habitName);
    
    const newHabit: Habit = {
      id: habitId, // Use Supabase UUID or fallback to timestamp
      name: habitName,
      person,
      dayRecords: [],
      createdAt: new Date().toISOString(),
      monthYear: currentMonthYear,
    };
    setHabits(prevHabits => {
      const updatedHabits = [...prevHabits, newHabit];
      setCurrentHabitIndex(updatedHabits.length - 1); // Set to the newly created habit's index
      return updatedHabits;
    });

    // Track habit creation in Supabase
    if (user) {
      try {
        await fetch('/api/track-habit-created', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: user.email,
            habitName: name,
            habitCreatedAt: new Date().toISOString()
          })
        });
      } catch (error) {
        console.warn('Failed to track habit creation:', error);
      }
    }
  };
  const updateHabitRecords = async (habitId: string, dayRecords: DayRecord[]) => {
    const habit = habits.find(h => h.id === habitId);
    const hadNoRecords = habit && habit.dayRecords.length === 0;
    const hasRecordsNow = dayRecords.length > 0;
    
    setHabits(habits.map((habit) => (habit.id === habitId ? { ...habit, dayRecords } : habit)));

    // Sync progress to Supabase for cross-device consistency
    await syncHabitProgressToSupabase(habitId, dayRecords);

    // Track habit start (first time logging) in Supabase
    if (hadNoRecords && hasRecordsNow && user && habit) {
      try {
        await fetch('/api/track-habit-started', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: user.email,
            habitName: habit.name,
            habitStartedAt: new Date().toISOString()
          })
        });
      } catch (error) {
        console.warn('Failed to track habit start:', error);
      }
    }
  };

  // Function to sync habit progress to Supabase
  const syncHabitProgressToSupabase = async (habitId: string, dayRecords: DayRecord[]) => {
    try {
      // Check if Supabase is configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
        console.log('⚠️ Supabase not configured, skipping sync');
        return;
      }

      // Skip syncing dayRecords to habits table since day_records column doesn't exist
      // Instead, we'll rely on habit_cycles table for progress tracking
      console.log('📊 Skipping dayRecords sync - using habit_cycles table for progress');
      
    } catch (error) {
      console.warn('Network error syncing to Supabase:', error);
    }
  };
  
  const updateHabit = async (habitId: string, updatedFields: Partial<Habit>) => {
    setHabits(habits.map((habit) => (habit.id === habitId ? { ...habit, ...updatedFields } : habit)));
    
    // Sync habit preferences to Supabase for cross-device consistency
    await syncHabitPreferencesToSupabase(habitId, updatedFields);
  };

  // Function to sync habit preferences to Supabase
  const syncHabitPreferencesToSupabase = async (habitId: string, updatedFields: Partial<Habit>) => {
    try {
      // Check if Supabase is configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
        return;
      }

      // Validate habitId is UUID
      const isUUID = typeof habitId === 'string' && 
        habitId.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
      
      if (!isUUID) {
        return;
      }

      // Prepare update object with relevant fields
      const updateData: any = { last_updated: new Date().toISOString() };
      
      if (updatedFields.preferredView) {
        updateData.preferred_view = updatedFields.preferredView;
      }
      if (updatedFields.companionPattern) {
        updateData.companion_pattern = updatedFields.companionPattern;
      }
      if (updatedFields.dayRecords) {
        updateData.day_records = updatedFields.dayRecords;
      }

      // Update habit preferences in Supabase
      const { error } = await supabase
        .from('habits')
        .update(updateData)
        .eq('id', habitId);

      if (error) {
        console.warn('Failed to sync habit preferences to Supabase:', error);
      } else {
        console.log('✅ Habit preferences synced to Supabase');
      }
    } catch (error) {
      console.warn('Network error syncing preferences to Supabase:', error);
    }
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

  // Show splash screen first for new users (and after logout)
  if (showSplashScreen && !user) {
    return (
      <main className="min-h-screen">
        <SplashScreen onContinue={() => setShowSplashScreen(false)} />
      </main>
    );
  }

  // Show onboarding form after splash screen
  if (!user) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted">
        <FirstUserForm 
          onSubmit={handleUserSubmit} 
          onBack={() => setShowSplashScreen(true)}
        />
      </main>
    );
  }

  // Show habit selection after onboarding (only if user doesn't have existing habits)
  if (user && habitSelection !== "existing" && !customHabitType && habits.length === 0) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted">
        <HabitSelection
          userName={user?.username?.split(' ')[0]}
          userAge={typeof user?.age === 'string' ? parseInt(user.age) || 25 : 25}
          userId={user?.email} // Use email as unique user identifier
          onSelect={async (habit) => {
            console.log('🔗 Habit selection onSelect called with:', habit);
            
            if (habit === "custom_make") {
              setCustomHabitType("make");
            } else if (habit === "custom_break") {
              setCustomHabitType("break");
            } else if (habit.includes("custom_make:")) {
              // Handle custom_make:habit_name format
              const habitName = habit.split("custom_make:")[1];
              console.log('🔧 Processing custom_make habit:', habitName);
              const createdHabit = await createHabitInSupabase(habitName, user?.username || "User", "make", "custom");
              if (createdHabit) {
                setCurrentHabitIndex(habits.length); // Switch to the new habit
                setHabitSelection("existing");
              }
            } else if (habit.includes("custom_break:")) {
              // Handle custom_break:habit_name format
              const habitName = habit.split("custom_break:")[1];
              console.log('🔧 Processing custom_break habit:', habitName);
              const createdHabit = await createHabitInSupabase(habitName, user?.username || "User", "break", "custom");
              if (createdHabit) {
                setCurrentHabitIndex(habits.length); // Switch to the new habit
                setHabitSelection("existing");
              }
            } else if (habit.includes("predefined_make:")) {
              // Handle predefined_make:habit_name format
              const habitKey = habit.split("predefined_make:")[1];
              const habitName = getHabitNameFromKey(habitKey);
              console.log('🔧 Processing predefined_make habit:', habitName);
              const createdHabit = await createHabitInSupabase(habitName, user?.username || "User", "make", "predefined");
              if (createdHabit) {
                setCurrentHabitIndex(habits.length); // Switch to the new habit
                setHabitSelection("existing");
              }
            } else if (habit.includes("predefined_break:")) {
              // Handle predefined_break:habit_name format
              const habitKey = habit.split("predefined_break:")[1];
              const habitName = getHabitNameFromKey(habitKey);
              console.log('🔧 Processing predefined_break habit:', habitName);
              const createdHabit = await createHabitInSupabase(habitName, user?.username || "User", "break", "predefined");
              if (createdHabit) {
                setCurrentHabitIndex(habits.length); // Switch to the new habit
                setHabitSelection("existing");
              }
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
            userAge={typeof user?.age === 'string' ? (user.age === 'under_18' ? 16 : user.age === '18_24' ? 21 : user.age === '25_34' ? 30 : user.age === '35_44' ? 40 : 50) : 25}
            userId={user?.email} // Use email as unique user identifier
            onBack={() => setShowHabitSelection(false)}
            onSelect={async (habit) => {
              if (habit === "custom_make") {
                setCustomHabitType("make");
                setShowHabitSelection(false);
              } else if (habit === "custom_break") {
                setCustomHabitType("break");
                setShowHabitSelection(false);
              } else if (habit.startsWith("custom_make:")) {
                // Extract custom habit name without prefix
                const customHabitName = habit.replace("custom_make:", "");
                // Create habit in Supabase and locally
                await createHabitInSupabase(customHabitName, user?.username || "User", "make", "custom");
                setShowHabitSelection(false);
              } else if (habit.startsWith("custom_break:")) {
                // Extract custom habit name without prefix
                const customHabitName = habit.replace("custom_break:", "");
                // Create habit in Supabase and locally
                await createHabitInSupabase(customHabitName, user?.username || "User", "break", "custom");
                setShowHabitSelection(false);
              } else if (habit.startsWith("predefined_make:")) {
                // Predefined habit from make tab
                const habitKey = habit.replace("predefined_make:", "");
                const fullHabitName = getHabitNameFromKey(habitKey);
                setHabitSelection(habitKey);
                await createHabitInSupabase(fullHabitName, user?.username || "User", "make", "predefined");
                setShowHabitSelection(false);
              } else if (habit.startsWith("predefined_break:")) {
                // Predefined habit from break tab
                const habitKey = habit.replace("predefined_break:", "");
                const fullHabitName = getHabitNameFromKey(habitKey);
                setHabitSelection(habitKey);
                await createHabitInSupabase(fullHabitName, user?.username || "User", "break", "predefined");
                setShowHabitSelection(false);
              } else {
                // Fallback for any other format
                const fullHabitName = getHabitNameFromKey(habit);
                setHabitSelection(habit);
                const habitType = habit.includes('break') ? 'break' : 'make';
                await createHabitInSupabase(fullHabitName, user?.username || "User", habitType, "predefined");
                setShowHabitSelection(false);
              }
            }}
          />
        ) : habits.length === 0 ? (
          <HabitTracker
            habit={null}
            onAddHabit={addHabit}
            onUpdateRecords={() => {}}
            onDeleteHabit={() => {}}
            onUpdateHabit={() => {}}
            onViewChange={setCurrentView}
            isNewHabitMode={true}
            onShowLoggedMsg={(type) => {
              setMessageType(type);
              setShowLoggedMsg(true);
              setTimeout(() => setShowLoggedMsg(false), 3000);
            }}
            onNextHabit={() => {
              const nextIndex = currentHabitIndex < habits.length - 1 ? currentHabitIndex + 1 : 0;
              setCurrentHabitIndex(nextIndex);
            }}
            onCompleteHabit={completeHabit}
            onMarkMissed={markHabitMissed}
            dailyInteractions={dailyInteractions}
            setDailyInteractions={setDailyInteractions}
            totalHabits={habits.length}
          />
        ) : (
          <>
            <div 
              className="bg-card border-b border-foreground/10 p-3 flex items-center justify-between gap-2"
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
              <div className="flex-1 mr-1">
                <h1 className="text-base font-bold text-foreground truncate" style={{ maxWidth: 'calc(100vw - 120px)' }}>
                  {getHabitNameFromKey(habits[currentHabitIndex]?.name) || habits[currentHabitIndex]?.name}
                </h1>
                <div className="text-xs text-muted-foreground h-6 flex items-center">
                  {showLoggedMsg ? (
                    <span className={`inline-flex items-center px-3 py-1 rounded-full border font-semibold text-xs animate-fade-in h-6 ${
                      messageType === 'logged' 
                        ? 'border-green-600 bg-green-100 text-green-700'
                        : messageType === 'not-started'
                        ? 'border-amber-600 bg-amber-100 text-amber-700'
                        : 'border-blue-600 bg-blue-100 text-blue-700'
                    }`}>
                      <svg className={`w-4 h-4 mr-1 ${
                        messageType === 'logged' ? 'text-green-600' : messageType === 'not-started' ? 'text-amber-600' : 'text-blue-600'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {messageType === 'logged' ? (
                          <>
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" stroke={messageType === 'logged' ? 'green' : 'currentColor'} />
                          </>
                        ) : messageType === 'not-started' ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        )}
                      </svg>
                      {messageType === 'logged' ? 'LOGGED FOR TODAY!' : messageType === 'not-started' ? 'HABIT NOT STARTED YET' : '3-HABIT LIMIT REACHED'}
                    </span>
                  ) : (
                    <span className="h-6 flex items-center">Created: {new Date(habits[currentHabitIndex]?.createdAt || '').toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  )}
                </div>
              </div>
              
              <button
                onClick={() => {
                  if (habits.length >= 3) {
                    setMessageType('limit-reached');
                    setShowLoggedMsg(true);
                    setTimeout(() => setShowLoggedMsg(false), 3000);
                  } else {
                    setShowHabitSelection(true);
                  }
                }}
                className={`bg-primary text-primary-foreground font-semibold rounded text-xs transition-opacity px-3 py-2 ${
                  habits.length >= 3 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                }`}
                title="Add new habit"
                style={{ minWidth: '60px', height: '32px' }}
              >
                + Add
              </button>
            </div>

            {/* Statistics Display Box */}
            <div className="bg-muted/50 border-b border-foreground/10 p-3 mx-4 mt-2 rounded-lg">
              <div className="flex justify-between items-center text-sm">
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-foreground">Successful</span>
                  <span className="text-lg font-bold text-green-600">
                    {(() => {
                      const habit = habits[currentHabitIndex];
                      if (!habit) return "0/30";
                      
                      // Use loaded cycle data if available (from Supabase)
                      if (habit.cycleData?.completed !== undefined) {
                        const completed = habit.cycleData.completed;
                        return `${completed}/30`;
                      }
                      
                      // Fallback to dayRecords calculation
                      const records = habit.dayRecords || [];
                      
                      // Count actual successful days - when Y increased from previous day
                      const completed = (() => {
                        let successfulDays = 0;
                        records.forEach((record, index) => {
                          if (index === 0) {
                            // First day success if y > 0
                            if (record.y > 0) successfulDays++;
                          } else {
                            const prevRecord = records[index - 1];
                            // Success only when Y increased from previous day
                            if (record.y > prevRecord.y) {
                              successfulDays++;
                            }
                          }
                        });
                        return successfulDays;
                      })();
                      
                      // Chart view always shows X/30, Calendar view shows X/30, Companion view shows pattern-based limit
                      if (currentView === 'chart' || currentView === 'calendar') {
                        // Chart and Calendar views always show /30 constant
                        return `${completed}/30`;
                      } else {
                        // Companion view always shows 30 dots (lock pattern only)
                        const maxDots = 30;
                        return `${completed}/${maxDots}`;
                      }
                    })()}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-foreground">Missed</span>
                  <span className="text-lg font-bold text-red-500">
                    {(() => {
                      const habit = habits[currentHabitIndex];
                      if (!habit) return "0";
                      
                      // Use loaded cycle data if available (from Supabase)
                      if (habit.cycleData?.missed !== undefined) {
                        return habit.cycleData.missed;
                      }
                      
                      // Fallback to dayRecords calculation
                      const records = habit.dayRecords || [];
                      let missedCount = 0;
                      
                      records.forEach((record, index) => {
                        if (index === 0) {
                          // First day is missed only if y === 0 AND there was an intention to start
                          if (record.y === 0 && record.x === 1) missedCount++;
                        } else {
                          const prevRecord = records[index - 1];
                          
                          // Missed day = when Y DECREASED from previous day (habit missed button clicked)
                          if (record.y < prevRecord.y) {
                            missedCount++;
                          }
                        }
                      });
                      return missedCount;
                    })()}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-foreground">Consistency</span>
                  <span className="text-lg font-bold text-primary">
                    {(() => {
                      const habit = habits[currentHabitIndex];
                      if (!habit) return "0%";
                      
                      // Use loaded cycle data if available (from Supabase)
                      if (habit.cycleData?.consistency !== undefined) {
                        return `${habit.cycleData.consistency.toFixed(2)}%`;
                      }
                      
                      // Fallback to dayRecords calculation
                      const records = habit.dayRecords || [];
                      
                      if (records.length === 0) return "0%";
                      
                      // Count actual successful days - when Y increased from previous day  
                      const successCount = (() => {
                        let successfulDays = 0;
                        records.forEach((record, index) => {
                          if (index === 0) {
                            // First day success if y > 0
                            if (record.y > 0) successfulDays++;
                          } else {
                            const prevRecord = records[index - 1];
                            // Success only when Y increased from previous day
                            if (record.y > prevRecord.y) {
                              successfulDays++;
                            }
                          }
                        });
                        return successfulDays;
                      })();
                      const attemptedDays = records.length > 0 ? records[records.length - 1].x : 0;
                      
                      if (attemptedDays === 0) return "0%";
                      
                      // IMPORTANT: Calculate based on 30 days total so first completion = 3.3%
                      const conversionPercentage = (successCount / 30) * 100;
                      return Math.round(conversionPercentage * 10) / 10 + "%";
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
                onShowLoggedMsg={(type) => {
                  setMessageType(type);
                  setShowLoggedMsg(true);
                  setTimeout(() => setShowLoggedMsg(false), 3000);
                }}
                onNextHabit={() => {
                  setCurrentHabitIndex((prev) => (prev + 1) % habits.length);
                }}
                onCompleteHabit={completeHabit}
                onMarkMissed={markHabitMissed}
                totalHabits={habits.length}
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
                    setShowSplashScreen(true); // Show splash screen after logout
                    // Reset to splash screen
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
