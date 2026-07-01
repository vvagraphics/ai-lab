"use client";

import { useState } from "react";
import { Sparkles, Terminal } from "lucide-react";

export function PlaygroundFiller() {
  const [isSimpleMode, setIsSimpleMode] = useState(false);

  return (
    <section id="playground" className="mt-24 scroll-mt-24 border-t border-slate-200 dark:border-slate-800 pt-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Terminal className="text-blue-500" />
            Interactive Playground
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Test out AI models, quizzes, and scripts.</p>
        </div>
        
        {/* Simple Mode Toggle */}
        <button 
          onClick={() => setIsSimpleMode(!isSimpleMode)}
          className="px-4 py-2 text-sm font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
        >
          {isSimpleMode ? "Show Advanced UI" : "Enable Simple Mode"}
        </button>
      </div>

      {/* The Filler Content */}
      <div className={`transition-all duration-500 ${isSimpleMode ? 'opacity-80' : 'opacity-100'}`}>
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center text-center min-h-[400px]">
          <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900/30 text-blue-500 rounded-full flex items-center justify-center mb-6">
            <Sparkles size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Quiz Module Coming Soon</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-md">
            This space is reserved for interactive experiments. Future updates will include live RAG querying, prompt testing, and knowledge checks!
          </p>
        </div>
      </div>
    </section>
  );
}