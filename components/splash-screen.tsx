"use client"

import { useState, useEffect } from 'react'
import { ChevronRightIcon, CheckIcon } from '@heroicons/react/24/outline'

interface SplashScreenProps {
  onContinue: () => void
}

export default function SplashScreen({ onContinue }: SplashScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    const scrollLeft = container.scrollLeft
    const width = container.offsetWidth
    const index = Math.round(scrollLeft / width)
    setCurrentSlide(index)
  }

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragStartX(clientX)
  }

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const diff = clientX - dragStartX
    const maxOffset = 280 // Button width minus circle width
    const clampedOffset = Math.max(0, Math.min(diff, maxOffset))
    setDragOffset(clampedOffset)
    
    // Complete action when dragged far enough (80% of max width)
    if (clampedOffset > maxOffset * 0.8) {
      setIsDragging(false)
      setDragOffset(0)
      onContinue()
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    setDragOffset(0)
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased overflow-x-hidden">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-50/95 backdrop-blur-md">
        <div className="flex justify-center items-center px-4 py-4 max-w-md mx-auto w-full">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center relative shadow-sm">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <CheckIcon className="w-2 h-2 text-indigo-500 font-bold" />
              </div>
            </div>
            <h2 className="text-xl font-bold tracking-tight">Sankalp</h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex flex-col min-h-screen pt-20 pb-12 px-4 max-w-md mx-auto w-full">
        <div className="flex-1 flex flex-col justify-center mb-8 relative">
          {/* Carousel Container */}
          <div 
            className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 snap-x snap-mandatory h-[520px] no-scrollbar"
            onScroll={handleScroll}
            style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
          >
            {/* Slide 1 - Chart View */}
            <div className="min-w-full flex flex-col h-full snap-center">
              <div className="bg-white rounded-3xl p-5 shadow-lg border border-gray-100 flex flex-col h-full relative overflow-hidden">
                <div className="grid grid-cols-3 gap-2 mb-6 bg-gray-50 p-3 rounded-2xl">
                  <div className="text-center">
                    <p className="text-[10px] text-gray-500 font-medium">Successful</p>
                    <p className="text-lg font-bold text-green-500">24/30</p>
                  </div>
                  <div className="text-center border-l border-r border-gray-200">
                    <p className="text-[10px] text-gray-500 font-medium">Missed</p>
                    <p className="text-lg font-bold text-red-500">6</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-gray-500 font-medium">Consistency</p>
                    <p className="text-lg font-bold text-gray-900">80%</p>
                  </div>
                </div>
                
                <div className="flex-1 bg-white rounded-xl border border-gray-100 relative p-4 mb-4 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-2 right-2 bg-white shadow-md rounded-md px-2 py-1 text-[10px] font-bold text-indigo-500 border border-gray-100 z-10">
                    Chart View
                  </div>
                  <div className="w-full h-full relative pl-4 pb-4 pr-2 pt-2">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <defs>
                        <pattern id="grid-dots" patternUnits="userSpaceOnUse" width="10" height="10">
                          <circle className="fill-gray-100" cx="1" cy="1" r="0.8" />
                        </pattern>
                      </defs>
                      <rect fill="url(#grid-dots)" width="100%" height="100%" />
                      <line className="text-gray-300" stroke="currentColor" strokeDasharray="2,2" strokeWidth="0.5" x1="0" x2="100" y1="100" y2="0" />
                      
                      {/* Chart points */}
                      {[
                        {x: 3, y: 97, color: 'fill-gray-800'}, {x: 6, y: 94, color: 'fill-gray-800'}, {x: 9, y: 91, color: 'fill-gray-800'},
                        {x: 12, y: 94, color: 'fill-red-500'}, {x: 15, y: 91, color: 'fill-gray-800'}, {x: 18, y: 88, color: 'fill-gray-800'},
                        {x: 21, y: 85, color: 'fill-gray-800'}, {x: 24, y: 82, color: 'fill-gray-800'}, {x: 27, y: 79, color: 'fill-gray-800'},
                        {x: 30, y: 82, color: 'fill-red-500'}, {x: 33, y: 85, color: 'fill-red-500'}, {x: 36, y: 82, color: 'fill-gray-800'},
                        {x: 39, y: 79, color: 'fill-gray-800'}, {x: 42, y: 76, color: 'fill-gray-800'}, {x: 45, y: 73, color: 'fill-gray-800'},
                        {x: 48, y: 70, color: 'fill-gray-800'}, {x: 51, y: 67, color: 'fill-gray-800'}, {x: 54, y: 70, color: 'fill-red-500'},
                        {x: 57, y: 73, color: 'fill-red-500'}, {x: 60, y: 76, color: 'fill-red-500'}, {x: 63, y: 73, color: 'fill-gray-800'},
                        {x: 66, y: 70, color: 'fill-gray-800'}, {x: 69, y: 67, color: 'fill-gray-800'}, {x: 72, y: 64, color: 'fill-gray-800'},
                        {x: 75, y: 61, color: 'fill-gray-800'}, {x: 78, y: 58, color: 'fill-gray-800'}, {x: 81, y: 55, color: 'fill-gray-800'},
                        {x: 84, y: 52, color: 'fill-gray-800'}, {x: 87, y: 49, color: 'fill-gray-800'}, {x: 90, y: 46, color: 'fill-gray-800'}
                      ].map((point, index) => (
                        <circle key={index} className={point.color} cx={point.x} cy={point.y} r="2" />
                      ))}
                    </svg>
                    
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-2 bottom-4 w-4 text-[10px] text-gray-400 font-medium select-none pointer-events-none">
                      <span className="absolute right-1" style={{bottom: '90%'}}>30</span>
                      <span className="absolute right-1" style={{bottom: '75%'}}>25</span>
                      <span className="absolute right-1" style={{bottom: '60%'}}>20</span>
                      <span className="absolute right-1" style={{bottom: '45%'}}>15</span>
                      <span className="absolute right-1" style={{bottom: '30%'}}>10</span>
                      <span className="absolute right-1" style={{bottom: '15%'}}>5</span>
                    </div>
                    
                    {/* X-axis labels */}
                    <div className="absolute left-4 right-2 bottom-0 h-4 text-[10px] text-gray-400 font-medium select-none pointer-events-none">
                      {['5', '10', '15', '20', '25', '30'].map((label, index) => (
                        <span key={index} className="absolute top-0 -translate-x-1/2" style={{left: `${15 + index * 15}%`}}>{label}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 mt-auto">
                  <p className="text-xs text-gray-600 leading-relaxed text-left">
                    Watch your habits grow like a stock chart. Daily wins push you up, missed days cause a dip.
                  </p>
                </div>
              </div>
            </div>

            {/* Slide 2 - Calendar View */}
            <div className="min-w-full flex flex-col h-full snap-center">
              <div className="bg-white rounded-3xl p-5 shadow-lg border border-gray-100 flex flex-col h-full relative overflow-hidden">
                {/* Stats Header */}
                <div className="grid grid-cols-3 gap-2 mb-4 bg-gray-50 p-3 rounded-2xl">
                  <div className="text-center">
                    <p className="text-[10px] text-gray-500 font-medium">Successful</p>
                    <p className="text-lg font-bold text-green-600">1/30</p>
                  </div>
                  <div className="text-center border-l border-r border-gray-200">
                    <p className="text-[10px] text-gray-500 font-medium">Missed</p>
                    <p className="text-lg font-bold text-red-600">0</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-gray-500 font-medium">Consistency</p>
                    <p className="text-lg font-bold text-gray-900">3.4%</p>
                  </div>
                </div>

                {/* Calendar */}
                <div className="flex-1 bg-white rounded-xl border border-gray-100 relative px-4 py-2 flex flex-col overflow-hidden">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">DECEMBER</h3>
                    <div className="px-1.5 py-[2px] bg-white border border-gray-100 rounded-lg shadow-sm">
                      <span className="text-[9px] font-bold text-indigo-500">Calendar View</span>
                    </div>
                  </div>

                  <div className="w-full my-auto">
                    <div className="grid grid-cols-7 gap-1 text-center mb-1 px-1">
                      <div className="text-[10px] font-medium text-gray-400">S</div>
                      <div className="text-[10px] font-medium text-gray-400">M</div>
                      <div className="text-[10px] font-medium text-gray-400">T</div>
                      <div className="text-[10px] font-medium text-gray-400">W</div>
                      <div className="text-[10px] font-medium text-gray-400">T</div>
                      <div className="text-[10px] font-medium text-gray-400">F</div>
                      <div className="text-[10px] font-medium text-gray-400">S</div>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1 px-1">
                      <div className="aspect-square"></div>
                      <div className="aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300">1</div>
                      <div className="aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300">2</div>
                      <div className="aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300">3</div>
                      <div className="aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300">4</div>
                      <div className="aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300">5</div>
                      <div className="aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300">6</div>
                      <div className="aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300">7</div>
                      <div className="aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300">8</div>
                      <div className="aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300">9</div>
                      <div className="aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300">10</div>
                      <div className="aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300">11</div>
                      <div className="aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300">12</div>
                      <div className="aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300">13</div>
                      <div className="aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300">14</div>
                      <div className="aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300">15</div>
                      <div className="aspect-square bg-green-600 rounded flex items-center justify-center text-[10px] text-white font-bold relative ring-2 ring-blue-100 z-10 shadow-sm">
                        16
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full flex items-center justify-center">
                          <CheckIcon className="w-[6px] h-[6px] text-green-600 font-bold" />
                        </span>
                      </div>
                      <div className="aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold">17</div>
                      <div className="aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold">18</div>
                      <div className="aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold">19</div>
                      <div className="aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold">20</div>
                      <div className="aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold">21</div>
                      <div className="aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold">22</div>
                      <div className="aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold">23</div>
                      <div className="aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold">24</div>
                      <div className="aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold">25</div>
                      <div className="aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold">26</div>
                      <div className="aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold">27</div>
                      <div className="aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold">28</div>
                      <div className="aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold">29</div>
                      <div className="aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold">30</div>
                      <div className="aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold">31</div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 mt-4 text-left">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Mark progress directly on your calendar. A simple way to spot consistency and trends over time.
                  </p>
                </div>
              </div>
            </div>

            {/* Slide 3 - Companion View */}
            <div className="min-w-full flex flex-col h-full snap-center">
              <div className="bg-white rounded-3xl p-5 shadow-lg border border-gray-100 flex flex-col h-full relative overflow-hidden">
                {/* Stats Header */}
                <div className="grid grid-cols-3 gap-2 mb-4 bg-gray-50 p-3 rounded-2xl">
                  <div className="text-center">
                    <p className="text-[10px] text-gray-500 font-medium">Successful</p>
                    <p className="text-lg font-bold text-green-600">8/30</p>
                  </div>
                  <div className="text-center border-l border-r border-gray-200">
                    <p className="text-[10px] text-gray-500 font-medium">Missed</p>
                    <p className="text-lg font-bold text-red-600">2</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-gray-500 font-medium">Consistency</p>
                    <p className="text-lg font-bold text-gray-900">26.7%</p>
                  </div>
                </div>

                {/* Companion Visualization */}
                <div className="flex-1 bg-white rounded-xl border border-gray-100 relative flex flex-col overflow-hidden justify-center items-center">
                  <div className="absolute top-2 right-2 bg-white shadow-md rounded-md px-2 py-1 text-[10px] font-bold text-indigo-500 border border-gray-100 z-20">
                    Companion View
                  </div>
                  <div className="relative w-full h-full max-w-[240px] max-h-[240px] flex items-center justify-center">
                    <img 
                      alt="Teddy Bear Dot-to-Dot" 
                      className="w-full h-full object-contain" 
                      src="/images/teddy-bear-dots.png"
                      onError={(e) => {
                        console.log('Image failed to load');
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 mt-4 text-left">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Build habits with a friend for 30 days. Take turns completing habits and grow together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-2">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-6 bg-indigo-500' 
                    : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Title and Description */}
        <div className="mb-6 text-center px-2">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-3 leading-tight tracking-tight">
            Track Your Habits<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-400 block mt-1">
              Build Consistency
            </span>
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Monitor your habits and grow<br/>
            consistently, one step closer each day.
          </p>
        </div>

        {/* Continue Button */}
        <div className="mt-auto">
          <div className="mb-6 relative w-full max-w-[340px] mx-auto">
            <div 
              className="w-full h-16 bg-gray-900 rounded-full flex items-center px-2 relative overflow-hidden shadow-lg border border-gray-900 cursor-grab active:cursor-grabbing"
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              <div 
                className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg z-10 transition-transform duration-100"
                style={{ transform: `translateX(${dragOffset}px)` }}
              >
                <ChevronRightIcon className="w-6 h-6 animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <span className="text-white font-medium text-sm tracking-wide opacity-90 pl-8" style={{ fontSize: '14px', fontWeight: '500' }}>
                  Swipe to continue
                </span>
              </div>
              <div 
                className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12"
                style={{ 
                  left: `${-100 + (dragOffset / 280) * 100}%`,
                  transition: isDragging ? 'none' : 'left 0.3s ease'
                }}
              />
            </div>
          </div>
          
          {/* Terms and Privacy */}
          <div className="px-6 text-center pb-6">
            <p className="text-[10px] text-gray-400 leading-tight">
              By continuing, you agree to our{' '}
              <a className="font-bold text-gray-600 hover:underline" href="#">
                Terms of Service
              </a>{' '}
              and{' '}
              <a className="font-bold text-gray-600 hover:underline" href="#">
                Privacy Policy
              </a>.
            </p>
          </div>
        </div>
      </main>
      
      {/* Custom CSS for scrollbar hiding */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}