"use client";

import { CheckCircle2 } from "lucide-react";

interface EventSelectorProps {
  label: string;
  items: string[];
  selectedItems: string[];
  onToggle: (item: string) => void;
  accentColor: "blue" | "indigo";
}

export default function EventSelector({ label, items, selectedItems, onToggle, accentColor }: EventSelectorProps) {
  const accentClasses = {
    blue: "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600",
    indigo: "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600",
  };

  const checkCircleClasses = {
    blue: "bg-blue-500 border-blue-500",
    indigo: "bg-indigo-500 border-indigo-500",
  };

  return (
    <div className="space-y-4">
      <h3 className={`font-bold text-lg ${accentColor === 'blue' ? 'text-blue-600' : 'text-indigo-600'}`}>
        {label}
      </h3>
      <div className="grid gap-3">
        {items.map((item) => (
          <div 
            key={item}
            onClick={() => onToggle(item)}
            className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
              selectedItems.includes(item)
                ? accentClasses[accentColor]
                : "border-gray-100 dark:border-zinc-800 hover:border-gray-200"
            }`}
          >
            <span className="font-medium">{item}</span>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              selectedItems.includes(item) ? checkCircleClasses[accentColor] : "border-gray-300"
            }`}>
              {selectedItems.includes(item) && <CheckCircle2 size={16} className="text-white" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
