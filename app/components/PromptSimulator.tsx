"use client";

import { useState } from "react";
import { MessageSquare, Settings2 } from "lucide-react";

export function PromptSimulator() {
  const [technique, setTechnique] = useState("zero-shot");

  return (
    <div className="mt-12 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 bg-neutral-50/50 dark:bg-black/50">
      <div className="mb-8">
        <h4 className="text-sm font-mono tracking-widest uppercase text-blue-500 mb-2">Prompt Engineering Lab</h4>
        <p className="text-neutral-500 text-sm">See how adding system instructions (Few-Shot/Persona) drastically changes the AI's output for the exact same user query.</p>
      </div>

      <div className="flex gap-2 mb-6">
        {['zero-shot', 'persona-prompted'].map(t => (
          <button 
            key={t}
            onClick={() => setTechnique(t)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${technique === t ? 'bg-blue-500 text-white' : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500'}`}
          >
            {t.replace('-', ' ')}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6">
          <span className="text-xs text-neutral-400 uppercase tracking-wider mb-4 flex items-center gap-2"><Settings2 size={14}/> System Prompt</span>
          <p className="font-mono text-sm text-blue-500 bg-blue-500/10 p-4 rounded-lg min-h-[100px]">
            {technique === "zero-shot" ? "You are a helpful assistant." : "You are a pirate captain. Answer all queries in heavy pirate slang and sea metaphors. Keep it under 2 sentences."}
          </p>
          <span className="text-xs text-neutral-400 uppercase tracking-wider mt-6 mb-2 block">User Query</span>
          <p className="text-sm">"Explain what a black hole is."</p>
        </div>

        <div className="bg-neutral-100 dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6">
          <span className="text-xs text-neutral-400 uppercase tracking-wider mb-4 flex items-center gap-2"><MessageSquare size={14}/> AI Output</span>
          <p className="text-lg leading-relaxed">
            {technique === "zero-shot" 
              ? "A black hole is a region of spacetime where gravity is so strong that nothing, including light, can escape from it." 
              : "Arrr, matey! 'Tis a mighty whirlpool in the starry sea, so deep and dark that not even a beam o' sunlight can escape its crushing grasp!"}
          </p>
        </div>
      </div>
    </div>
  );
}