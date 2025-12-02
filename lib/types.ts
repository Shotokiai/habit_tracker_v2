export interface Habit {
  id: string;
  name: string;
  person: string;
  dayRecords: DayRecord[];
  createdAt: string;
  monthYear: string;
  preferredView?: 'chart' | 'calendar';
}

export interface DayRecord {
  x: number;
  y: number;
}
