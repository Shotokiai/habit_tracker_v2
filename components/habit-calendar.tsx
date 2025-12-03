"use client"

import { DayRecord } from "@/lib/types"

interface HabitCalendarProps {
  dayRecords: DayRecord[]
  habitStartDate: string // ISO date string when habit was created
}

export default function HabitCalendar({ dayRecords, habitStartDate }: HabitCalendarProps) {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  
  // Get habit start date
  const startDate = new Date(habitStartDate)
  const habitStartDay = startDate.getDate()
  
  // Get days in current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  
  // Calculate remaining days in the month from habit start (including today)
  const remainingDays = daysInMonth - habitStartDay + 1
  
  // Get month name
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  
  // Create day status map
  const getDayStatus = (day: number) => {
    if (day < habitStartDay) {
      return 'inactive' // Before habit start - light color
    }
    
    // Calculate which day of the habit this is (1-based)
    const habitDay = day - habitStartDay + 1
    
    // Find record for this habit day
    const record = dayRecords.find(r => r.x === habitDay)
    
    if (!record) {
      return 'pending' // No action taken yet
    }
    
    // Check if this day was completed or missed
    // If y increased from previous day, it was completed
    // If y decreased or stayed same while x increased, it was missed
    const prevRecord = dayRecords.find(r => r.x === habitDay - 1)
    const prevY = prevRecord ? prevRecord.y : 0
    
    return record.y > prevY ? 'completed' : 'missed'
  }
  
  // Generate calendar grid
  const calendarDays = []
  
  // Empty cells for days before month starts
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="w-10 h-10"></div>)
  }
  
  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const status = getDayStatus(day)
    const isToday = day === currentDate.getDate()
    
    calendarDays.push(
      <div
        key={day}
        className={`w-10 h-10 flex items-center justify-center text-sm font-medium relative ${
          isToday ? 'ring-1 ring-blue-400' : ''
        }`}
        style={{
          backgroundColor: status === 'inactive' ? '#f3f4f6' : '#ffffff',
          color: status === 'inactive' ? '#9ca3af' : '#374151',
          border: '1px solid #e5e7eb',
          borderRadius: '2px'
        }}
      >
        <span className={`${status === 'inactive' ? 'opacity-60' : ''} relative z-10`}>{day}</span>
        
        {/* Status indicators */}
        {status === 'completed' && (
          <>
            <div 
              className="absolute inset-0 rounded-sm"
              style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)' }}
            />
            <div 
              className="absolute top-1 right-1 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: '#22c55e' }}
            >
              ✓
            </div>
          </>
        )}
        
        {status === 'missed' && (
          <>
            <div 
              className="absolute inset-0 rounded-sm"
              style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)' }}
            />
            <div 
              className="absolute top-1 right-1 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: '#ef4444' }}
            >
              ✗
            </div>
          </>
        )}
      </div>
    )
  }
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 max-w-sm mx-auto">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">
          {remainingDays} DAYS CHALLENGE
        </h2>
        <div className="text-sm font-medium text-gray-600 mb-3">
          {monthNames[currentMonth].toUpperCase()}
        </div>
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-3">
        {/* Day headers */}
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div
            key={day}
            className="w-10 h-6 flex items-center justify-center text-xs font-medium text-gray-500"
          >
            {day}
          </div>
        ))}
        
        {/* Calendar days */}
        {calendarDays}
      </div>
      
      {/* Legend */}
      <div className="flex justify-center gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: '#f3f4f6' }}></div>
          <span>Inactive</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-green-500 text-white text-xs flex items-center justify-center">✓</span>
          <span>Done</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-red-500 text-white text-xs flex items-center justify-center">✗</span>
          <span>Missed</span>
        </div>
      </div>
    </div>
  )
}