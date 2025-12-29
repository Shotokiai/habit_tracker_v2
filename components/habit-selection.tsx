import { useState } from "react";
import { supabase } from '../lib/supabase';

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
      { key: "breathing", label: "Deep breaths morning", emoji: "�" },
      { key: "journal", label: "Journal before bed", emoji: "📝" },
    ] : [
      { key: "singleTask", label: "Single-task only", emoji: "🎯" },
      { key: "noSugary", label: "No sugary drinks", emoji: "🥤" },
      { key: "bedTime", label: "Bed by 11 PM", emoji: "😴" },
      { key: "noWeekendScreens", label: "No weekend screens", emoji: "📺" },
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
  userAge = 25, // Default age if not provided
  userId // Add userId prop for linking habits to users
}: { 
  onSelect: (habit: string) => void
  onBack?: () => void
  userName?: string
  userAge?: number
  userId?: string // User ID from authentication or registration
}) {
  const [activeTab, setActiveTab] = useState<'make' | 'break'>('make'); // Track active tab
  const [selected, setSelected] = useState<string>("");
  const [customHabit, setCustomHabit] = useState<string>("");
  const maxCustomLength = 25;

  const habits = getHabitsForAge(userAge, activeTab);

  const handleStartBuilding = async () => {
    let habitTitle = '';
    let isCustom = false;

    if (customHabit.trim()) {
      habitTitle = customHabit.trim();
      isCustom = true;
    } else if (selected) {
      const selectedHabit = habits.find(h => h.key === selected);
      habitTitle = selectedHabit ? selectedHabit.label : selected;
      isCustom = false;
    } else {
      alert('Please select a habit or create your own.');
      return;
    }

    // Don't create habit here - let page.tsx handle ALL database operations
    // Just pass the information to page.tsx with proper format
    if (isCustom) {
      onSelect(`custom_${activeTab}:${habitTitle}`);
    } else {
      // For predefined habits, include tab information in the format
      onSelect(`predefined_${activeTab}:${selected}`);
    }
  };

  const isFormValid = selected || customHabit.trim();

  const getColorClasses = (index: number) => {
    const colors = [
      { bg: 'bg-orange-50', border: 'border-orange-100', text: 'text-orange-600', hover: 'hover:border-orange-500 hover:text-orange-600' },
      { bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-600', hover: 'hover:border-blue-500 hover:text-blue-600' },
      { bg: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-600', hover: 'hover:border-purple-500 hover:text-purple-600' },
      { bg: 'bg-green-50', border: 'border-green-100', text: 'text-green-600', hover: 'hover:border-green-500 hover:text-green-600' },
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-white relative font-sans text-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-teal-400/20 rounded-full blur-[80px] opacity-60 pointer-events-none animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-indigo-500/20 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
      
      <div className="w-full h-full flex flex-col relative z-10">
        {/* Header */}
        <div className="pt-8 px-6 pb-2 flex items-center gap-4 z-20 relative">
          {onBack && (
            <button 
              onClick={onBack}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 text-gray-700 hover:scale-110 active:scale-95 transition-all duration-200 group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Welcome, {userName || 'User'}!
            </h1>
            <span className="text-xs font-semibold text-teal-600 mb-4">Ready to build new habits?</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 pb-4 pt-2">
          {/* Make/Break Toggle */}
          <div className="p-1.5 bg-gray-100 rounded-2xl flex relative mb-6 shadow-inner border border-gray-200 max-w-md mx-auto w-full">
            <button 
              onClick={() => {
                setActiveTab('make');
                setSelected("");
                setCustomHabit("");
              }}
              className={`flex-1 py-3 px-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                activeTab === 'make' 
                  ? 'shadow-md bg-teal-500 text-white scale-100' 
                  : 'text-gray-500 hover:bg-white/50 hover:text-teal-500'
              }`}
            >
              <span className="text-[18px]">✓</span>
              Make Habit
            </button>
            <button 
              onClick={() => {
                setActiveTab('break');
                setSelected("");
                setCustomHabit("");
              }}
              className={`flex-1 py-3 px-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                activeTab === 'break' 
                  ? 'shadow-md bg-rose-500 text-white scale-100' 
                  : 'text-gray-500 hover:bg-white/50 hover:text-rose-500'
              }`}
            >
              <span className="text-[18px]">⊘</span>
              Break Habit
            </button>
          </div>

          <div className="max-w-md mx-auto w-full">
            {/* Habit Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {habits.map((habit, index) => {
                const colors = getColorClasses(index);
                const isSelected = selected === habit.key;
                
                return (
                  <button
                    key={habit.key}
                    onClick={() => {
                      setSelected(habit.key);
                      setCustomHabit("");
                    }}
                    className={`group relative flex flex-col p-3 bg-white rounded-2xl border shadow-sm transition-all duration-300 text-left overflow-hidden h-[130px] ${
                      isSelected 
                        ? 'border-teal-500 ring-4 ring-teal-500/15' 
                        : `${colors.border} ${colors.hover} hover:shadow-lg`
                    }`}
                  >
                    <div className={`absolute -right-6 -top-6 w-20 h-20 ${colors.bg} rounded-full blur-2xl group-hover:opacity-80 transition-opacity`}></div>
                    <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-auto group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 text-xl border ${colors.border}`}>
                      {habit.emoji}
                    </div>
                    <div className="relative z-10 mt-2">
                      <span className={`block text-sm font-bold leading-tight transition-colors ${
                        isSelected ? 'text-teal-600' : `text-gray-900 ${colors.hover.split(' ')[1]}`
                      }`}>
                        {habit.label}
                      </span>
                    </div>
                    {isSelected && (
                      <div className="absolute top-3 right-3">
                        <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center">
                          <span className="text-xs">✓</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-teal-500 text-xl">+</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom Habit Input */}
            <div className="mb-3 group">
              <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide px-1 group-focus-within:text-teal-500 transition-colors">
                Create your own habit...
              </label>
              <div className={`bg-white p-2 rounded-2xl border shadow-sm transition-all ${
                customHabit ? 'border-teal-500 ring-4 ring-teal-500/15' : 'border-gray-200 focus-within:border-teal-500 focus-within:ring-4 focus-within:ring-teal-500/15'
              }`}>
                <input 
                  value={customHabit}
                  onChange={(e) => {
                    setCustomHabit(e.target.value);
                    setSelected("");
                  }}
                  className="w-full bg-transparent border-none p-3 text-sm font-medium text-gray-900 placeholder-gray-400 focus:ring-0 focus:outline-none" 
                  placeholder="e.g. Wake up at 7:00 AM" 
                  type="text"
                  maxLength={maxCustomLength}
                />
              </div>
            </div>

            {/* Start Building Button */}
            <div className="w-full mt-6 mb-4">
              <button 
                onClick={handleStartBuilding}
                disabled={!isFormValid}
                className="w-full h-12 bg-gradient-to-r from-teal-600 to-indigo-600 text-white font-bold text-base rounded-2xl shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 hover:translate-y-[-2px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative">Start Building</span>
                <span className="relative group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
