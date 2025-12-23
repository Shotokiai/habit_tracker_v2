"use client";

import { useState } from "react";

type Dot = { 
  x: number; 
  y: number; 
  visible?: boolean; // Optional - defaults to true for backward compatibility
};

// Helper function to determine connection end index based on completed visible dots
function getConnectionEndIndex(dotsData: Dot[], completedVisibleDots: number): number {
  if (completedVisibleDots <= 0) return 0;
  
  let visibleCount = 0;
  let endIndex = 0;
  
  // Find the index of the last completed visible dot
  for (let i = 0; i < dotsData.length; i++) {
    if (dotsData[i].visible !== false) {
      visibleCount++;
      if (visibleCount === completedVisibleDots) {
        endIndex = i + 1; // Include this dot
        break;
      }
    }
  }
  
  // Include any invisible dots that come immediately after the last completed visible dot
  // until we reach the next visible dot or end of array
  while (endIndex < dotsData.length && dotsData[endIndex].visible === false) {
    endIndex++;
  }
  
  // If we reach another visible dot, include it in the connection
  if (endIndex < dotsData.length && dotsData[endIndex].visible !== false) {
    endIndex++;
  }
  
  return endIndex;
}

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

  // Take only first 30 dots as per requirement, but for Drawing 2 we need more to get 30 visible
  const limitedDotsData = dotsData.slice(0, dotsData.length);
  
  // Create visible dots array with sequential numbering
  const visibleDots = limitedDotsData
    .map((dot, originalIndex) => ({ ...dot, originalIndex }))
    .filter(dot => dot.visible !== false) // Show dots that are explicitly visible or undefined (default visible)
    .slice(0, 30); // Limit to 30 visible dots

  // Debug logging
  console.log('🔍 Canvas Debug:', {
    totalDots: dotsData.length,
    limitedDots: limitedDotsData.length,
    visibleDots: visibleDots.length,
    visibleDotsData: visibleDots.slice(0, 5), // First 5 visible dots
    lastVisibleDots: visibleDots.slice(-5), // Last 5 visible dots
    completedDays,
    imagePath,
    imageWidth,
    imageHeight,
    imageLoaded,
    imageError
  });

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
                  console.log('✅ Image loaded successfully:', imagePath);
                  setImageLoaded(true);
                  setImageError(false);
                }}
                onError={(e) => {
                  console.error('❌ Image failed to load:', imagePath, e);
                  setImageError(true);
                  setImageLoaded(false);
                }}
              />
            </pattern>
          </defs>
          
          {/* Show background image if loaded, otherwise white */}
          <rect width="100%" height="100%" fill={imageLoaded && !imageError ? "url(#backgroundImage)" : "white"} />
          
          {/* Draw only visible dots with sequential numbering */}
          {visibleDots.map((dot, visibleIndex) => (
            <g key={dot.originalIndex}>
              <circle
                cx={dot.x}
                cy={dot.y}
                r="15"
                fill={visibleIndex < completedDays ? "#000000" : "#ffffff"}
                stroke="#1f2937"
                strokeWidth="3"
              />
              <text
                x={dot.x}
                y={dot.y + 5}
                textAnchor="middle"
                className="text-sm font-bold"
                fill={visibleIndex < completedDays ? "#ffffff" : "#000000"}
                fontSize="14"
                fontWeight="bold"
              >
                {visibleIndex + 1}
              </text>
            </g>
          ))}
          
          {/* Draw connecting lines following original dot order (including invisible dots) */}
          {(() => {
            const connectionEndIndex = getConnectionEndIndex(dotsData, completedDays);
            const connectionDots = dotsData.slice(0, connectionEndIndex);
            
            console.log('🔗 Connection Debug:', {
              completedDays,
              connectionEndIndex,
              connectionDotsLength: connectionDots.length,
              connectionDots: connectionDots.map((d, i) => ({ index: i, x: d.x, y: d.y, visible: d.visible }))
            });
            
            return connectionDots.map((dot, index) => {
              if (index === 0) return null;
              const prevDot = connectionDots[index - 1];
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
            });
          })()}
        </svg>
      </div>
    </div>
  );
}