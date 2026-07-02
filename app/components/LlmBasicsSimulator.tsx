"use client";

import { useState } from "react";
import { Cpu } from "lucide-react";

export function LlmBasicsSimulator() {
  const [input, setInput] = useState("");

  const getPrediction = (text: string) => {
    if (!text) return "";
    const lower = text.toLowerCase();
    if (lower.includes("artificial")) return "intelligence";
    if (lower.includes("hello")) return "world";
    if (lower.includes("machine")) return "learning";
    return "processing...";
  };

  return (
    <div className="mt-8 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 bg-neutral-50/50 dark:bg-black/50">
      <h4 className="font-bold mb-2">Next-Token Prediction Lab</h4>
      <p className="text-sm text-neutral-500 mb-6">Type "Artificial", "Hello", or "Machine" to see the model predict the next word.</p>
      
      <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
        <input 
          autoFocus
          className="w-full bg-transparent text-xl outline-none"
          placeholder="Type here..."
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="mt-4 flex items-center gap-2">
          <span className="text-neutral-400 text-xl">{input}</span>
          <span className="text-emerald-500 text-xl font-bold animate-pulse">{getPrediction(input)}</span>
        </div>
      </div>
    </div>
  );
}