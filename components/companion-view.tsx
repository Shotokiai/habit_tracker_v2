"use client"

import { useState } from "react"
import type { Habit, DayRecord } from "@/lib/types"

interface CompanionViewProps {
  habit: Habit
  dayRecords: DayRecord[]
}

export default function CompanionView({ habit, dayRecords }: CompanionViewProps) {
  const [currentStep, setCurrentStep] = useState(1)
  
  // Steps data
  const steps = [
    {
      id: 1,
      title: "Share this habit with your friend",
      icon: "🔗",
      description: "Send invitation link"
    },
    {
      id: 2,
      title: "Tell your friend to accept these habit after sign up",
      icon: "✉️",
      description: "Wait for acceptance"
    },
    {
      id: 3,
      title: "You have to start this habit today and tomorrow your friend will complete it",
      icon: "🤝",
      description: "Start coordinating"
    }
  ]

  // Calculate stats - unified for both users, total 30 days
  const completedDays = dayRecords.length > 0 ? dayRecords[dayRecords.length - 1].y : 0
  const totalDays = 30
  const missedDays = totalDays - completedDays
  const conversion = Math.round((completedDays / totalDays) * 100)

  // Dog dot-to-dot coordinates (simplified version of your image)
  const dogDots = [
    { id: 1, x: 150, y: 80 },   // Left ear tip
    { id: 2, x: 160, y: 90 },   // Left ear curve
    { id: 3, x: 170, y: 85 },   // Left ear base
    { id: 4, x: 180, y: 75 },   // Head left
    { id: 5, x: 190, y: 70 },   // Forehead left
    { id: 6, x: 200, y: 65 },   // Horn base
    { id: 7, x: 205, y: 50 },   // Horn tip
    { id: 8, x: 210, y: 65 },   // Horn base right
    { id: 9, x: 220, y: 70 },   // Forehead right
    { id: 10, x: 230, y: 75 },  // Head right
    { id: 11, x: 240, y: 85 },  // Right ear base
    { id: 12, x: 250, y: 90 },  // Right ear curve
    { id: 13, x: 260, y: 80 },  // Right ear tip
    { id: 14, x: 255, y: 100 }, // Right side head
    { id: 15, x: 250, y: 110 }, // Right cheek
    { id: 16, x: 240, y: 120 }, // Right eye area
    { id: 17, x: 230, y: 125 }, // Right eye
    { id: 18, x: 220, y: 130 }, // Nose area
    { id: 19, x: 210, y: 135 }, // Nose center
    { id: 20, x: 200, y: 130 }, // Nose left
    { id: 21, x: 190, y: 125 }, // Left eye
    { id: 22, x: 180, y: 120 }, // Left eye area
    { id: 23, x: 170, y: 110 }, // Left cheek
    { id: 24, x: 165, y: 100 }, // Left side head
    { id: 25, x: 160, y: 130 }, // Left face curve
    { id: 26, x: 155, y: 140 }, // Mane start left
    { id: 27, x: 145, y: 155 }, // Mane curve
    { id: 28, x: 140, y: 170 }, // Mane flow
    { id: 29, x: 145, y: 185 }, // Mane down
    { id: 30, x: 155, y: 200 }, // Mane bottom left
    { id: 31, x: 170, y: 210 }, // Neck left
    { id: 32, x: 180, y: 220 }, // Shoulder left
    { id: 33, x: 175, y: 240 }, // Body left top
    { id: 34, x: 170, y: 260 }, // Body left
    { id: 35, x: 165, y: 280 }, // Body left lower
    { id: 36, x: 170, y: 300 }, // Left front leg top
    { id: 37, x: 175, y: 320 }, // Left front leg
    { id: 38, x: 180, y: 340 }, // Left front leg lower
    { id: 39, x: 185, y: 360 }, // Left front hoof
    { id: 40, x: 200, y: 365 }, // Between hooves
    { id: 41, x: 215, y: 360 }, // Right front hoof
    { id: 42, x: 220, y: 340 }, // Right front leg lower
    { id: 43, x: 225, y: 320 }, // Right front leg
    { id: 44, x: 230, y: 300 }, // Right front leg top
    { id: 45, x: 235, y: 280 }, // Body right lower
    { id: 46, x: 240, y: 260 }, // Body right
    { id: 47, x: 245, y: 240 }, // Body right top
    { id: 48, x: 250, y: 220 }, // Shoulder right
    { id: 49, x: 260, y: 210 }, // Neck right
    { id: 50, x: 275, y: 200 }, // Mane bottom right
    { id: 51, x: 285, y: 185 }, // Mane down right
    { id: 52, x: 280, y: 170 }, // Mane flow right
    { id: 53, x: 275, y: 155 }, // Mane curve right
    { id: 54, x: 265, y: 140 }, // Mane start right
    { id: 55, x: 260, y: 130 }, // Right face curve
    { id: 56, x: 250, y: 145 }, // Mane detail
    { id: 57, x: 240, y: 160 }, // Mane flow
    { id: 58, x: 220, y: 175 }, // Mane center
    { id: 59, x: 200, y: 180 }, // Mane center bottom
    { id: 60, x: 180, y: 175 }  // Mane left center
  ]

  const handleShareHabit = () => {
    // Generate shareable link
    const shareUrl = `${window.location.origin}/join-habit/${habit.id}`
    navigator.clipboard.writeText(shareUrl)
    alert("Share link copied to clipboard!")
    setCurrentStep(2)
  }

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto p-4 overflow-hidden">
      {/* Step Cards - Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex-shrink-0 w-72 p-4 rounded-lg border-2 transition-all ${
              currentStep >= step.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{step.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-800">Step {step.id}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3">{step.title}</p>
            {step.id === 1 && (
              <button
                onClick={handleShareHabit}
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Share Habit
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Stats Card (After Step 3) */}
      {currentStep >= 3 && (
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Progress Stats</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{completedDays}/30</div>
              <div className="text-sm text-gray-600">Successful days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{missedDays}</div>
              <div className="text-sm text-gray-600">Missed days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{conversion}%</div>
              <div className="text-sm text-gray-600">Conversion</div>
            </div>
          </div>
        </div>
      )}

      {/* Dot-to-Dot Drawing */}
      <div className="relative w-full max-w-md mx-auto">
        <div className="relative w-full h-96">
          <svg width="100%" height="400" viewBox="0 0 400 400" className="border rounded-lg bg-white shadow-sm">
            {/* Background unicorn outline - based on your uploaded ghodaunicorn.png */}
            <g stroke="#d1d5db" strokeWidth="2" fill="none" opacity="0.4">
              {/* Main head outline */}
              <path d="M165 100 Q180 75 200 65 Q205 50 210 65 Q220 70 230 75 Q245 85 255 100 Q260 130 250 145 Q240 160 220 175 Q200 180 180 175 Q160 160 155 140 Q150 120 165 100 Z"/>
              
              {/* Horn */}
              <path d="M200 65 L205 50 L210 65" strokeWidth="3"/>
              <path d="M202 60 L208 60" strokeWidth="1"/>
              <path d="M203 55 L207 55" strokeWidth="1"/>
              
              {/* Ears */}
              <path d="M150 80 Q160 70 170 85 Q165 95 150 80 Z"/>
              <path d="M240 85 Q250 70 260 80 Q255 95 240 85 Z"/>
              
              {/* Eyes */}
              <circle cx="190" cy="125" r="6" fill="#d1d5db" opacity="0.6"/>
              <circle cx="230" cy="125" r="6" fill="#d1d5db" opacity="0.6"/>
              <circle cx="192" cy="123" r="2" fill="#ffffff" opacity="0.8"/>
              <circle cx="232" cy="123" r="2" fill="#ffffff" opacity="0.8"/>
              
              {/* Nose and mouth */}
              <path d="M205 135 Q210 130 215 135 Q210 140 205 135 Z" fill="#d1d5db" opacity="0.7"/>
              <path d="M200 145 Q210 150 220 145" strokeLinecap="round"/>
              
              {/* Flowing mane - left side */}
              <path d="M165 100 Q145 155 155 200 Q170 210 180 220 Q175 240 170 260 Q165 280 170 300" strokeLinecap="round" strokeWidth="3"/>
              <path d="M170 130 Q140 170 145 185 Q150 195 160 205" strokeLinecap="round"/>
              <path d="M175 140 Q150 175 155 190 Q165 200 175 210" strokeLinecap="round"/>
              
              {/* Flowing mane - right side */}
              <path d="M255 100 Q275 155 265 200 Q250 210 240 220 Q245 240 250 260 Q255 280 250 300" strokeLinecap="round" strokeWidth="3"/>
              <path d="M250 130 Q280 170 275 185 Q270 195 260 205" strokeLinecap="round"/>
              <path d="M245 140 Q270 175 265 190 Q255 200 245 210" strokeLinecap="round"/>
              
              {/* Body outline */}
              <ellipse cx="210" cy="280" rx="30" ry="50"/>
              
              {/* Legs */}
              <path d="M180 320 L175 340 L180 360 L185 360" strokeWidth="4" strokeLinecap="round"/>
              <path d="M220 320 L225 340 L220 360 L215 360" strokeWidth="4" strokeLinecap="round"/>
              
              {/* Hooves */}
              <ellipse cx="182" cy="360" rx="6" ry="4" fill="#d1d5db" opacity="0.5"/>
              <ellipse cx="218" cy="360" rx="6" ry="4" fill="#d1d5db" opacity="0.5"/>
            </g>
            
            {/* Draw dots */}
            {dogDots.map((dot, index) => (
              <g key={dot.id}>
                <circle
                  cx={dot.x}
                  cy={dot.y}
                  r="8"
                  fill={index < completedDays ? "#3b82f6" : "#e5e7eb"}
                  stroke="#1f2937"
                  strokeWidth="2"
                />
                <text
                  x={dot.x}
                  y={dot.y + 5}
                  textAnchor="middle"
                  className="text-xs font-bold fill-white"
                >
                  {dot.id}
                </text>
              </g>
            ))}
            
            {/* Draw connecting lines */}
            {dogDots.slice(0, completedDays).map((dot, index) => {
              if (index === 0) return null
              const prevDot = dogDots[index - 1]
              return (
                <line
                  key={`line-${index}`}
                  x1={prevDot.x}
                  y1={prevDot.y}
                  x2={dot.x}
                  y2={dot.y}
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              )
            })}
          </svg>
          

        </div>
      </div>
    </div>
  )
}