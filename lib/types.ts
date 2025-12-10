export interface Habit {
  id: string;
  name: string;
  person: string;
  dayRecords: DayRecord[];
  createdAt: string;
  monthYear: string;
  preferredView?: 'chart' | 'calendar' | 'companion';
  companionPattern?: 'unicorn' | 'lock';
}

export interface DayRecord {
  x: number;
  y: number;
}
