"use client";

import { useState, useMemo } from "react";
import { ManualDotsCanvas } from "@/components/ManualDotsCanvas";
import { unicornDotsData } from "@/data/treeDots";

interface CompanionViewV3Props {
  habit: any;
  dayRecords: any[];
}

export default function CompanionViewV3({ habit, dayRecords }: CompanionViewV3Props) {
  const [selectedIllustration, setSelectedIllustration] = useState<string>("unicorn");

  // Calculate completion progress - count days where y value increased 
  const completedDays = useMemo(() => {
    if (dayRecords.length === 0) return 0
    
    let completed = 0
    dayRecords.forEach((record, index) => {
      const prevRecord = index > 0 ? dayRecords[index - 1] : null
      const prevY = prevRecord ? prevRecord.y : 0
      
      // A day is completed if y value increased from previous day
      if (record.y > prevY) {
        completed++
      }
    })
    
    return completed
  }, [dayRecords])

  return (
    <div className="w-full">
      <ManualDotsCanvas 
        imagePath="/illustrations/ghoda.png"
        dotsData={unicornDotsData}
        completedDays={completedDays}
        imageWidth={800}
        imageHeight={800}
        imageOpacity={0.35}
      />
    </div>
  );
}