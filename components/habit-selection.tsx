import { useState } from "react";

const makeHabits = [
  { key: "walk", label: "Walk 2km a day", img: "/images/walk.png" },
  { key: "water", label: "Drink 3L water daily", img: "/images/water.png" },
  { key: "read", label: "Read 20 Min a day", img: "/images/read.png" },
  { key: "workout", label: "30 min Basic Workout", img: "/images/workout.png" },
  { key: "plan", label: "Plan the next day", img: "/images/plan.png" },
  { key: "custom", label: "Create your own", img: "/images/custom.png" },
];

const breakHabits = [
  { key: "gaming", label: "Limit Excessive gaming", img: "/images/gaming.png" },
  { key: "junkfood", label: "Eating junk food", img: "/images/junkfood.png" },
  { key: "reels", label: "Scrolling reels for long periods", img: "/images/reels.png" },
  { key: "smoking", label: "Smoking cigarettes", img: "/images/smoking.png" },
  { key: "selftalk", label: "Negative self talk", img: "/images/selftalk.png" },
  { key: "custom", label: "Create your own", img: "/images/custom.png" },
];

export default function HabitSelection({ onSelect }: { onSelect: (habit: string) => void }) {
  const [tab, setTab] = useState<'make' | 'break'>('make');
  const [selected, setSelected] = useState<string>("");

  const habits = tab === 'make' ? makeHabits : breakHabits;

  return (
    <div className="flex flex-col gap-4 p-6 max-w-xs mx-auto bg-card rounded-lg shadow-md border border-foreground/10 mt-10">
      <div className="flex gap-2 mb-4">
        <button
          className={`flex-1 px-2 py-1 rounded-t-lg border-b-2 ${tab === 'make' ? 'border-primary font-bold' : 'border-muted'}`}
          onClick={() => setTab('make')}
        >
          Make Habit
        </button>
        <button
          className={`flex-1 px-2 py-1 rounded-t-lg border-b-2 ${tab === 'break' ? 'border-primary font-bold' : 'border-muted'}`}
          onClick={() => setTab('break')}
        >
          Break Habit
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {habits.map(habit => (
          <button
            key={habit.key}
            className={`flex flex-col items-center gap-2 p-2 border rounded-lg ${selected === habit.key ? 'border-primary bg-primary/10' : 'border-muted bg-background'}`}
            onClick={() => setSelected(habit.key)}
          >
            <img src={habit.img || '/placeholder-logo.png'} alt="" className="w-8 h-8" onError={(e) => { e.currentTarget.src = '/placeholder-logo.png'; }} />
            <span className="text-xs text-center">{habit.label}</span>
          </button>
        ))}
      </div>
      <button
        className={`w-full px-4 py-2 font-semibold rounded-lg transition-opacity border mt-2 ${selected ? 'bg-primary text-primary-foreground border-primary hover:opacity-90' : 'bg-muted text-muted-foreground border-muted cursor-not-allowed'}`}
        disabled={!selected}
        onClick={() => selected && onSelect(selected)}
      >
        Let's build →
      </button>
    </div>
  );
}
