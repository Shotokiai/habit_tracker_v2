"use client";

import { useState } from "react";
import { HabitCanvas } from "./HabitCanvas";
import { ManualDotsCanvas } from "./ManualDotsCanvas";
import { treeDotsData, unicornDotsData } from "../data/treeDots";

const illustrationOptions = [
  { 
    id: "unicorn", 
    name: "Magical Unicorn",
    description: "Complete 60 days to reveal a beautiful unicorn",
    emoji: "🦄",
    type: "manual" as const
  },
  { 
    id: "rocket", 
    name: "Space Rocket",
    description: "Launch into success with 60 days of habits",
    emoji: "🚀",
    type: "auto" as const
  },
  { 
    id: "trophy", 
    name: "Victory Trophy",
    description: "Win your habits and claim the trophy",
    emoji: "🏆",
    type: "auto" as const
  },
  { 
    id: "tree", 
    name: "Growing Tree",
    description: "Watch your tree grow with 34 connected dots",
    emoji: "🌳",
    type: "manual" as const
  },
];

interface IllustrationSelectorProps {
  onSelect: (illustrationId: string) => void;
  selectedId?: string;
}

export function IllustrationSelector({ onSelect, selectedId }: IllustrationSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-center">Choose Your Goal Illustration</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {illustrationOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`p-4 rounded-lg border-2 transition-all text-left hover:shadow-md ${
              selectedId === option.id
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-2">{option.emoji}</div>
              <h4 className="font-semibold text-gray-800 mb-1">{option.name}</h4>
              <p className="text-xs text-gray-600">{option.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

interface CompanionViewV2Props {
  habit: any;
  dayRecords: any[];
}

export default function CompanionViewV2({ habit, dayRecords }: CompanionViewV2Props) {
  const [selectedIllustration, setSelectedIllustration] = useState<string>("");
  const [currentStep, setCurrentStep] = useState(1);

  // Calculate completion progress
  const completedDays = dayRecords.length > 0 ? dayRecords[dayRecords.length - 1].y : 0;

  const handleIllustrationSelect = (illustrationId: string) => {
    setSelectedIllustration(illustrationId);
    // Auto-advance to step 2 when illustration is selected
    setTimeout(() => setCurrentStep(2), 500);
  };

  const steps = [
    {
      id: 1,
      title: "Choose your goal illustration",
      icon: "🎨",
      description: "Pick what you want to build"
    },
    {
      id: 2,
      title: "Share with your companion",
      icon: "🔗",
      description: "Send invitation link"
    },
    {
      id: 3,
      title: "Start building together",
      icon: "🤝",
      description: "Take turns completing habits"
    }
  ];

  const handleShareHabit = () => {
    const shareUrl = `${window.location.origin}/join-habit/${habit.id}?illustration=${selectedIllustration}`;
    navigator.clipboard.writeText(shareUrl);
    alert("Share link copied to clipboard!");
    setCurrentStep(3);
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto p-4 overflow-hidden">
      {/* Step Cards */}
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2">
        {steps.map((step) => (
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
            
            {step.id === 1 && !selectedIllustration && (
              <div className="text-xs text-gray-500">
                👆 Select an illustration below to continue
              </div>
            )}
            
            {step.id === 2 && currentStep === 2 && (
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

      {/* Illustration Selector - Only show if nothing selected */}
      {!selectedIllustration && (
        <IllustrationSelector 
          onSelect={handleIllustrationSelect}
          selectedId={selectedIllustration}
        />
      )}

      {/* Generated Dot-to-Dot Canvas */}
      {selectedIllustration && (
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-center">Your Progress Drawing</h3>
          
          {/* Render based on type */}
          {(() => {
            const selectedOption = illustrationOptions.find(opt => opt.id === selectedIllustration);
            
            if (selectedOption?.type === "manual" && selectedIllustration === "tree") {
              return (
                <ManualDotsCanvas 
                  imagePath="/images/tree-original.svg"
                  dotsData={treeDotsData}
                  completedDays={completedDays}
                  imageWidth={600}
                  imageHeight={700}
                />
              );
            } else {
              return (
                <HabitCanvas 
                  imageName={selectedIllustration}
                  completedDays={completedDays}
                />
              );
            }
          })()}
        </div>
      )}

      {/* Stats Card */}
      {currentStep >= 3 && (
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Progress Stats</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{completedDays}</div>
              <div className="text-sm text-green-700">Days Completed</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{Math.round((completedDays / 60) * 100)}%</div>
              <div className="text-sm text-blue-700">Progress</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{60 - completedDays}</div>
              <div className="text-sm text-purple-700">Days Remaining</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}