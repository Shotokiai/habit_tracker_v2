export interface Habit {
  id: string;
  name: string;
  person: string;
  dayRecords: DayRecord[];
  createdAt: string;
  monthYear: string;
  preferredView?: 'chart' | 'calendar' | 'companion';
  companionPattern?: 'drawing1' | 'drawing2';
  cycleData?: {
    completed: number;
    missed: number;
    consistency: number;
    last_completed_date?: string;
    start_date?: string;
    end_date?: string;
  };
}

export interface DayRecord {
  x: number;
  y: number;
}

// Extend Window interface for habit UUID storage
declare global {
  interface Window {
    currentHabitUUID: string | null;
    currentHabitName: string | null;
    currentHabitType: string | null;
  }
}
