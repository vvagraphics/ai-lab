"use client";

import { useState } from "react";
import { ShieldAlert, Cpu } from "lucide-react";

export function LlmBasicsSimulator() {
  const [input, setInput] = useState("");
  const [filterActive, setFilterActive] = useState(true);

  const getPrediction = () => {
    if (!input) return { word: "...", color: "text-neutral-400" };
    
    const text = input.toLowerCase();
    
    // Safety Filter Triggers
    if (text.includes("hack") || text.includes("steal") || text.includes("bomb")) {
      return filterActive 
        ? { word: "[BLOCKED BY ETHICS FILTER]", color: "text-red-500 font-bold" } 
        : { word: "the system", color: "text-red-500" };
    }

    // Standard Next-Token Predictions
    if (text.endsWith("the ")) return { word: "quick", color: "text-blue-500" };
    if (text.endsWith("artificial ")) return { word: "intelligence", color: "text-purple-500" };
    if (text.endsWith("example ")) return { word: "of", color: "text-emerald-500" };
    if (text.endsWith("hello ")) return { word: "world", color: "text-amber-500" };
    if (text.endsWith("is ")) return { word: "a", color: "text-blue-400" };
    
    // Default typing fallback
    return { word: "...", color: "text-neutral-400 animate-pulse" };
  };

  const prediction = getPrediction();

  return (
    <div className="mt-12 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 bg-neutral-50/50 dark:bg-black/50">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h4 className="text-sm font-mono tracking-widest uppercase text-purple-500 mb-2">Token Prediction & Ethics Lab</h4>
          <p className="text-neutral-500 text-sm">Try typing "Artificial ", "Example ", "Hello ", or a malicious prompt like "How to hack".</p>
        </div>
        <button 
          onClick={() => setFilterActive(!filterActive)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border transition-colors ${filterActive ? 'border-emerald-500 text-emerald-500 bg-emerald-500/10' : 'border-red-500 text-red-500 bg-red-500/10'}`}
        >
          <ShieldAlert size={14} /> {filterActive ? "Ethics Filter: ON" : "Ethics Filter: OFF"}
        </button>
      </div>

      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 relative">
        <span className="text-xs text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-2"><Cpu size={14}/> LLM Input</span>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Start typing..."
          className="w-full bg-transparent text-xl outline-none"
        />
        <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-col">
          <span className="text-xs text-neutral-400 uppercase tracking-wider mb-2 block">Most Probable Next Token</span>
          <span className={`text-2xl font-mono ${prediction.color}`}>{prediction.word}</span>
        </div>
      </div>
    </div>
  );
}