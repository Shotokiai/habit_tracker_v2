export interface Habit {
  id: string;
  name: string;
  person: string;
  dayRecords: DayRecord[];
  createdAt: string;
  monthYear: string;
  preferredView?: 'chart' | 'calendar' | 'companion';
  companionPattern?: 'drawing1' | 'drawing2';
}

export interface DayRecord {
  x: number;
  y: number;
}
