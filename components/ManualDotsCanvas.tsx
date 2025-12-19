"use client";

import { useState } from "react";

type Dot = { 
  x: number; 
  y: number; 
};

interface ManualDotsCanvasProps {
  imagePath: string;  // Path to background image
  dotsData: Dot[];    // Your manual coordinates
  completedDays: number;
  imageWidth?: number;
  imageHeight?: number;
  imageOpacity?: number;
}

export function ManualDotsCanvas({ 
  imagePath, 
  dotsData, 
  completedDays, 
  imageWidth = 600,
  imageHeight = 600,
  imageOpacity = 0.35
}: ManualDotsCanvasProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  if (!dotsData || dotsData.length === 0) {
    return (
      <div className="w-full h-96 flex items-center justify-center border rounded-lg bg-gray-50">
        <p className="text-gray-600">No dot data provided</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden aspect-square">
        <svg 
          width="100%" 
          height="100%" 
          viewBox={`0 0 ${imageWidth} ${imageHeight}`}
          className="w-full h-full"
          style={{ backgroundColor: 'white' }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Load ghoda image with better debugging */}
          <defs>
            <pattern id="backgroundImage" patternUnits="userSpaceOnUse" width={imageWidth} height={imageHeight}>
              <image 
                href={imagePath}
                x="0" 
                y="0" 
                width={imageWidth} 
                height={imageHeight}
                opacity={imageOpacity}
                onLoad={() => {
                  console.log('✅ Image loaded:', imagePath);
                  setImageLoaded(true);
                }}
                onError={(e) => {
                  console.error('❌ Ghoda image failed:', imagePath, e);
                  setImageError(true);
                }}
              />
            </pattern>
          </defs>
          
          {/* Show background image if loaded, otherwise white */}
          <rect width="100%" height="100%" fill={imageLoaded && !imageError ? "url(#backgroundImage)" : "white"} />
          
          {/* Draw dots with numbers - larger size for better visibility */}
          {dotsData.map((dot, index) => (
            <g key={index}>
              <circle
                cx={dot.x}
                cy={dot.y}
                r="12"
                fill={index < completedDays ? "#000000" : "#ffffff"}
                stroke="#1f2937"
                strokeWidth="2"
              />
              <text
                x={dot.x}
                y={dot.y + 5}
                textAnchor="middle"
                className="text-sm font-bold"
                fill="#000000"
                fontSize="12"
              >
                {index + 1}
              </text>
            </g>
          ))}
          
          {/* Draw connecting lines for completed days - show line even for first completion */}
          {completedDays > 0 && dotsData.slice(0, completedDays + 1).map((dot, index) => {
            if (index === 0) return null;
            const prevDot = dotsData[index - 1];
            return (
              <line
                key={`line-${index}`}
                x1={prevDot.x}
                y1={prevDot.y}
                x2={dot.x}
                y2={dot.y}
                stroke="#000000"
                strokeWidth="4"
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}