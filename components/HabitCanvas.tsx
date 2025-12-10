"use client";

import { useState, useEffect } from "react";

type Dot = { 
  id: number; 
  x: number; 
  y: number; 
};

type DotsData = {
  name: string;
  dots: Dot[];
  totalDots: number;
  createdAt: string;
};

interface HabitCanvasProps {
  imageName: string;
  completedDays: number;
  isLocked?: boolean;
}

export function HabitCanvas({ imageName, completedDays, isLocked = false }: HabitCanvasProps) {
  const [dotsData, setDotsData] = useState<DotsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!imageName) return;

    setLoading(true);
    setError(null);

    fetch(`/dots/${imageName}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load dots for ${imageName}`);
        }
        return res.json();
      })
      .then((data: DotsData) => {
        setDotsData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [imageName]);

  if (loading) {
    return (
      <div className="w-full h-96 flex items-center justify-center border rounded-lg bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
          <p className="text-sm text-gray-600">Loading {imageName}...</p>
        </div>
      </div>
    );
  }

  if (error || !dotsData) {
    return (
      <div className="w-full h-96 flex items-center justify-center border rounded-lg bg-red-50">
        <div className="text-center">
          <p className="text-red-600 mb-2">❌ Error loading illustration</p>
          <p className="text-sm text-gray-600">{error || "No data available"}</p>
        </div>
      </div>
    );
  }

  const { dots } = dotsData;
  const opacity = isLocked ? 0.3 : 1;

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative w-full h-96">
        <svg 
          width="100%" 
          height="400" 
          viewBox="0 0 400 400" 
          className="border rounded-lg bg-white shadow-sm"
        >
          {/* Draw dots */}
          {dots.map((dot, index) => (
            <g key={dot.id} opacity={opacity}>
              <circle
                cx={dot.x}
                cy={dot.y}
                r="6"
                fill={index < completedDays ? "#3b82f6" : "#e5e7eb"}
                stroke="#1f2937"
                strokeWidth="2"
              />
              <text
                x={dot.x}
                y={dot.y + 4}
                textAnchor="middle"
                className="text-xs font-bold fill-white"
              >
                {dot.id}
              </text>
            </g>
          ))}
          
          {/* Draw connecting lines */}
          {dots.slice(0, completedDays).map((dot, index) => {
            if (index === 0) return null;
            const prevDot = dots[index - 1];
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
                opacity={opacity}
              />
            );
          })}
        </svg>

        {/* Lock overlay */}
        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center border-2 border-gray-300">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-semibold text-gray-700 mb-1 text-sm">Locked Drawing</h3>
              <p className="text-xs text-gray-600">Complete steps to unlock</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Progress info */}
      <div className="mt-2 text-center text-sm text-gray-600">
        <span className="font-semibold">{dotsData.name}</span> • 
        <span className="ml-1">{completedDays}/{dotsData.totalDots} dots connected</span>
      </div>
    </div>
  );
}