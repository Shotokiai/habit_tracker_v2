"use client"

import { DayRecord } from "@/lib/types"
import { useState } from "react"

interface HabitCalendarProps {
  dayRecords: DayRecord[]
  habitStartDate: string // ISO date string when habit was created
}

export default function HabitCalendar({ dayRecords, habitStartDate }: HabitCalendarProps) {
  const currentDate = new Date()
  const startDate = new Date(habitStartDate)
  
  // Calculate the end date (30 days from habit start)
  const endDate = new Date(startDate)
  endDate.setDate(startDate.getDate() + 29) // 30 days total (including start date)
  
  // State for current viewing month
  const [viewingMonth, setViewingMonth] = useState(startDate.getMonth())
  const [viewingYear, setViewingYear] = useState(startDate.getFullYear())
  
  // Month names
  const monthNames = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ]
  
  // Calculate remaining days for header
  const today = new Date()
  let remainingDays = 0
  if (today <= endDate) {
    const timeDiff = endDate.getTime() - today.getTime()
    remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1
  }
  
  // Get day status for a specific calendar date
  const getDayStatus = (date: Date, day: number) => {
    // Create date-only versions for proper comparison (remove time component)
    const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())
    const endDateOnly = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate())
    
    // Check if this day is before habit start or after habit 30-day period
    if (dateOnly < startDateOnly || dateOnly > endDateOnly) {
      return 'inactive'
    }
    
    // All days from habit start date to end date are active (white background)
    // Calculate which habit day this is (1-30)
    const timeDiff = dateOnly.getTime() - startDateOnly.getTime()
    const habitDay = Math.floor(timeDiff / (1000 * 3600 * 24)) + 1
    
    // Find record for this habit day
    const record = dayRecords.find(r => r.x === habitDay)
    
    if (!record) {
      return 'pending' // No action taken yet - white background
    }
    
    // Check if this day was completed or missed
    const prevRecord = dayRecords.find(r => r.x === habitDay - 1)
    const prevY = prevRecord ? prevRecord.y : 0
    
    return record.y > prevY ? 'completed' : 'missed'
  }
  
  // Generate calendar for current viewing month
  const generateMonthCalendar = () => {
    const daysInMonth = new Date(viewingYear, viewingMonth + 1, 0).getDate()
    const firstDayOfMonth = new Date(viewingYear, viewingMonth, 1).getDay()
    
    const calendarDays = []
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="w-10 h-10"></div>)
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(viewingYear, viewingMonth, day)
      const status = getDayStatus(date, day)
      const isToday = date.toDateString() === currentDate.toDateString()
      
      calendarDays.push(
        <div
          key={day}
          className={`w-10 h-10 flex items-center justify-center text-sm font-medium relative ${
            isToday ? 'ring-1 ring-blue-400' : ''
          }`}
          style={{
            backgroundColor: status === 'inactive' ? '#f3f4f6' : status === 'completed' ? '#22c55e' : '#ffffff',
            color: status === 'inactive' ? '#9ca3af' : status === 'completed' ? '#ffffff' : '#374151',
            border: '1px solid #e5e7eb',
            borderRadius: '2px'
          }}
        >
          <span className={`${status === 'inactive' ? 'opacity-60' : ''} relative z-10`}>{day}</span>
          
          {/* Status indicators */}
          {status === 'completed' && (
            <div 
              className="absolute top-0.5 right-0.5 text-white text-xs leading-none"
              style={{ fontSize: '10px' }}
            >
              ✓
            </div>
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
    
    return calendarDays
  }
  
  // Handle month navigation
  const navigateMonth = (direction: 'prev' | 'next') => {
    let newMonth = viewingMonth
    let newYear = viewingYear
    
    if (direction === 'next') {
      if (viewingMonth === 11) {
        newMonth = 0
        newYear = viewingYear + 1
      } else {
        newMonth = viewingMonth + 1
      }
    } else {
      if (viewingMonth === 0) {
        newMonth = 11
        newYear = viewingYear - 1
      } else {
        newMonth = viewingMonth - 1
      }
    }
    
    setViewingMonth(newMonth)
    setViewingYear(newYear)
  }
  
  // Check if we can navigate to previous month (only if habit days exist in previous months)
  const canNavigatePrev = () => {
    const currentViewDate = new Date(viewingYear, viewingMonth, 1)
    const habitStartMonth = new Date(startDate.getFullYear(), startDate.getMonth(), 1)
    return currentViewDate > habitStartMonth
  }
  
  // Check if we can navigate to next month (only if habit days exist in next months)
  const canNavigateNext = () => {
    const currentViewDate = new Date(viewingYear, viewingMonth, 1)
    const habitEndMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 1)
    return currentViewDate < habitEndMonth
  }
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 max-w-sm mx-auto">
      {/* Scrollable month navigation */}
      <div className="flex items-center justify-between mb-4">
        {canNavigatePrev() ? (
          <button 
            onClick={() => navigateMonth('prev')}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600"
          >
            ←
          </button>
        ) : (
          <div className="w-8 h-8"></div>
        )}
        
        <div className="text-sm font-medium text-gray-600">
          {monthNames[viewingMonth]}
        </div>
        
        {canNavigateNext() ? (
          <button 
            onClick={() => navigateMonth('next')}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600"
          >
            →
          </button>
        ) : (
          <div className="w-8 h-8"></div>
        )}
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
        {generateMonthCalendar()}
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