import { useState } from "react";

const getHabitsForAge = (age: number, type: 'make' | 'break') => {
  if (age >= 15 && age <= 20) {
    return type === 'make' ? [
      { key: "study", label: "Study 25 mins focused", emoji: "📚" },
      { key: "walk", label: "Walk briskly 15 mins", emoji: "🚶" },
      { key: "meditate", label: "Meditate 5 mins daily", emoji: "🧘" },
      { key: "read", label: "Read 10 pages daily", emoji: "📖" },
    ] : [
      { key: "noPhone", label: "No phone after 9 PM", emoji: "📵" },
      { key: "noSoda", label: "No soda every day", emoji: "🥤" },
      { key: "sleep", label: "Sleep 7 hrs min", emoji: "😴" },
      { key: "noJunk", label: "No junk food daily", emoji: "🍟" },
    ];
  } else if (age >= 21 && age <= 25) {
    return type === 'make' ? [
      { key: "save", label: "Save ₹100 daily auto", emoji: "💰" },
      { key: "cook", label: "Cook breakfast daily", emoji: "🍳" },
      { key: "callFriend", label: "Call friend nightly", emoji: "📞" },
      { key: "stretch", label: "Stretch after waking", emoji: "🤸" },
    ] : [
      { key: "limitCoffee", label: "Limit coffee to 1 cup", emoji: "☕" },
      { key: "noScreens", label: "No screens after 10 PM", emoji: "📺" },
      { key: "walkShort", label: "Walk short distances", emoji: "🚶" },
      { key: "noLateNights", label: "No late nights out", emoji: "🌙" },
    ];
  } else if (age >= 26 && age <= 30) {
    return type === 'make' ? [
      { key: "readNews", label: "Read news with tea", emoji: "📰" },
      { key: "water", label: "Drink 2L water daily", emoji: "💧" },
      { key: "hobby", label: "Hobby 20 mins daily", emoji: "🎨" },
      { key: "planMeals", label: "Plan meals weekly", emoji: "📋" },
    ] : [
      { key: "noEatingOut", label: "No daily eating out", emoji: "🍽️" },
      { key: "workLimit", label: "Limit work to 8 hrs", emoji: "⏰" },
      { key: "noSnacks", label: "No snacks after 8 PM", emoji: "🍪" },
      { key: "trackExpenses", label: "Track expenses daily", emoji: "💳" },
    ];
  } else if (age >= 31 && age <= 35) {
    return type === 'make' ? [
      { key: "familyChat", label: "Family chat 15 mins", emoji: "👨‍👩‍👧‍👦" },
      { key: "strength", label: "Strength train 20 mins", emoji: "💪" },
      { key: "breathing", label: "Deep breaths morning", emoji: "🫑" },
      { key: "journal", label: "Journal before bed", emoji: "📝" },
    ] : [
      { key: "singleTask", label: "Single-task only", emoji: "🎯" },
      { key: "noSugary", label: "No sugary drinks", emoji: "🥤" },
      { key: "bedTime", label: "Bed by 11 PM", emoji: "😴" },
      { key: "noWeekendScreens", label: "No weekend screens", emoji: "📺" },
    ];
      { key: "oneTask", label: "One task at a time (no multitasking)", emoji: "🎯" },
      { key: "noSugary", label: "Skip sugary drinks", emoji: "🧃" },
      { key: "bedtime", label: "Bedtime by 11 PM", emoji: "🛏️" },
      { key: "noWeekendBinge", label: "No weekend screen binge", emoji: "📱" },
    ];
  } else if (age >= 36 && age <= 40) {
    return type === 'make' ? [
      { key: "freshLunch", label: "Lunch cooked fresh daily", emoji: "🥘" },
      { key: "morningWalk", label: "Morning walk before 8 AM", emoji: "🌅" },
      { key: "waterMorning", label: "Drink 2 glasses of water in the morning", emoji: "💧" },
      { key: "stretchDaily", label: "Stretch 10 mins daily", emoji: "🤸" },
    ] : [
      { key: "noFoodAfter8", label: "No food after 8 PM", emoji: "🍽️" },
      { key: "stand2Min", label: "Stand for 2 minutes every hour", emoji: "🧍" },
      { key: "moveHourly", label: "Move body every hour", emoji: "🚶" },
      { key: "reduceAlcohol", label: "Reduce alcohol intake", emoji: "🍷" },
    ];
  } else if (age >= 36 && age <= 40) {
    return type === 'make' ? [
      { key: "freshLunch", label: "Fresh lunch daily", emoji: "🥗" },
      { key: "walkMorning", label: "Walk before 8 AM", emoji: "🚶" },
      { key: "waterFirst", label: "Drink water AM first", emoji: "💧" },
      { key: "stretchDaily", label: "Stretch 10 mins daily", emoji: "🤸" },
    ] : [
      { key: "noFoodAfter8", label: "No food after 8 PM", emoji: "🍽️" },
      { key: "standHourly", label: "Stand every 1 hour", emoji: "🧍" },
      { key: "moveHourly", label: "Move every hour", emoji: "🚶" },
      { key: "cutAlcohol", label: "Cut alcohol intake", emoji: "🍷" },
    ];
  } else { // 40+
    return type === 'make' ? [
      { key: "yoga", label: "Yoga 15 mins daily", emoji: "🧘" },
      { key: "stretchBed", label: "Stretch before bed", emoji: "🤸" },
      { key: "fruitBreakfast", label: "Fruit in breakfast", emoji: "🍎" },
      { key: "puzzle", label: "Puzzle 10 mins daily", emoji: "🧩" },
    ] : [
      { key: "noPackaged", label: "No packaged foods", emoji: "📦" },
      { key: "stand30Min", label: "Stand every 30 mins", emoji: "🧍" },
      { key: "limitSugar", label: "Limit sugar daily", emoji: "🍭" },
      { key: "healthCheck", label: "Daily health check", emoji: "🩺" },
    ];
  }
};

export default function HabitSelection({ 
  onSelect, 
  onBack, 
  userName,
  userAge = 25 // Default age if not provided
}: { 
  onSelect: (habit: string) => void
  onBack?: () => void
  userName?: string
  userAge?: number
}) {
  const [tab, setTab] = useState<'make' | 'break'>('make');
  const [selected, setSelected] = useState<string>("");
  const [customHabit, setCustomHabit] = useState<string>("");
  const maxCustomLength = 25;

  const habits = getHabitsForAge(userAge, tab);

  const handleStartBuilding = async () => {
    if (customHabit.trim()) {
      // Track custom habit creation in Google Sheets
      try {
        await fetch('/api/track-custom-habit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            habitName: customHabit.trim(),
            habitType: tab,
            userAge,
            userName
          })
        });
      } catch (error) {
        console.error('Failed to track custom habit:', error);
      }
      
      // Handle custom habit
      onSelect(tab === 'make' ? `custom_make:${customHabit.trim()}` : `custom_break:${customHabit.trim()}`);
    } else if (selected) {
      // Handle predefined habit
      onSelect(selected);
    }
  };

  const isFormValid = selected || customHabit.trim();

  return (
    <div 
      className="flex items-center justify-center min-h-screen p-4"
      style={{ backgroundColor: '#f3f4f6' }}
    >
      <div 
        className="w-full max-w-md rounded-xl shadow-lg p-6 mx-4"
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Header with back button and welcome message - only show if onBack is provided */}
        {onBack && (
          <div className="flex items-center mb-6">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-4"
              style={{ color: '#6b7280' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 
              className="text-lg font-bold"
              style={{ color: '#1f2937' }}
            >
              Welcome, {userName || 'User'}!
            </h1>
          </div>
        )}

        {/* Tab Buttons */}
        <div className="flex mb-6">
          <button
            className={`flex-1 px-4 py-3 font-semibold border-2 rounded-l-lg transition-colors ${
              tab === 'make' 
                ? 'border-gray-800 bg-white text-gray-800' 
                : 'border-gray-300 bg-gray-100 text-gray-600'
            }`}
            onClick={() => {
              setTab('make');
              setSelected('');
              setCustomHabit('');
            }}
          >
            Make Habit
          </button>
          <button
            className={`flex-1 px-4 py-3 font-semibold border-2 border-l-0 rounded-r-lg transition-colors ${
              tab === 'break' 
                ? 'border-gray-800 bg-white text-gray-800' 
                : 'border-gray-300 bg-gray-100 text-gray-600'
            }`}
            onClick={() => {
              setTab('break');
              setSelected('');
              setCustomHabit('');
            }}
          >
            Break Habit
          </button>
        </div>

        {/* Habit Options */}
        <div className="space-y-3 mb-4">
          {habits.map(habit => (
            <button
              key={habit.key}
              className={`w-full p-4 rounded-lg text-left transition-all border-2 flex items-center gap-3 ${
                selected === habit.key 
                  ? 'border-gray-400 bg-gray-50' 
                  : 'border-gray-200 bg-gray-50 hover:border-gray-300'
              }`}
              onClick={() => {
                setSelected(selected === habit.key ? '' : habit.key);
                if (customHabit) setCustomHabit(''); // Clear custom habit when selecting predefined
              }}
            >
              <span className="text-2xl">{habit.emoji}</span>
              <span 
                className="font-medium"
                style={{ color: '#374151' }}
              >
                {habit.label}
              </span>
            </button>
          ))}
        </div>

        {/* Custom Habit Input */}
        <div className="mb-6">
          <div className="flex gap-2 items-stretch">
            <input
              type="text"
              placeholder="Create your own habit..."
              value={customHabit}
              maxLength={maxCustomLength}
              onChange={(e) => {
                setCustomHabit(e.target.value);
                if (selected) setSelected(''); // Clear selection when typing custom
              }}
              className="flex-1 px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              style={{ color: '#374151' }}
            />
            <button
              onClick={() => customHabit && handleStartBuilding()}
              disabled={!customHabit.trim()}
              className={`px-6 py-3 rounded-lg font-semibold text-base transition-all w-20 flex items-center justify-center border-2 flex-shrink-0 ${
                customHabit.trim() 
                  ? 'bg-gray-800 text-white hover:bg-gray-700 shadow-lg border-gray-800' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300'
              }`}
            >
              <span className="text-xl font-bold">+</span>
            </button>
          </div>
          {/* Character count indicator */}
          {customHabit && (
            <div className="text-right mt-2">
              <span 
                className="text-sm"
                style={{ color: customHabit.length >= maxCustomLength ? '#ef4444' : '#6b7280' }}
              >
                {customHabit.length}/{maxCustomLength}
              </span>
            </div>
          )}
        </div>

        {/* Start Building Button */}
        <button
          onClick={handleStartBuilding}
          className="w-full px-4 py-3 font-semibold rounded-lg transition-all"
          style={{
            backgroundColor: isFormValid ? '#1f2937' : '#d1d5db',
            color: isFormValid ? '#ffffff' : '#6b7280',
            cursor: isFormValid ? 'pointer' : 'not-allowed'
          }}
          disabled={!isFormValid}
        >
          Start Building
        </button>
      </div>
    </div>
  );
}
