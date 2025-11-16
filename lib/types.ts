export interface Habit {
  id: string;
  name: string;
  person: string;
  dayRecords: DayRecord[];
  createdAt: string;
  monthYear: string;
}

export interface DayRecord {
  x: number;
  y: number;
}
