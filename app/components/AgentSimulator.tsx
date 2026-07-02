"use client";

import { useState } from "react";
import { Bot, Search, Plane, Ship, CheckCircle, ArrowRight } from "lucide-react";

export function AgentSimulator() {
  const [isRunning, setIsRunning] = useState(false);
  const [step, setStep] = useState(0);

  const steps = [
    { id: 1, icon: <Bot size={18} />, label: "Analyzing Intent", desc: "User wants a cruise vacation. Needs flights, dates, and cruise line options." },
    { id: 2, icon: <Search size={18} />, label: "Tool: Web Search", desc: "Searching for top-rated Caribbean cruises for next month..." },
    { id: 3, icon: <Plane size={18} />, label: "Tool: Flight API", desc: "Checking flight availability to Miami departure port..." },
    { id: 4, icon: <Ship size={18} />, label: "Tool: Booking Engine", desc: "Comparing prices across Royal Caribbean and Carnival..." },
    { id: 5, icon: <CheckCircle size={18} />, label: "Task Complete", desc: "Formatting 3 package options for the user." }
  ];

  const runAgent = () => {
    if (isRunning) return;
    setIsRunning(true);
    setStep(0);

    // Simulate the agent thinking step-by-step
    steps.forEach((s, index) => {
      setTimeout(() => {
        setStep(index + 1);
        if (index === steps.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 1200); // 1.2 seconds per step
    });
  };

  return (
    <div className="mt-12 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 bg-neutral-50/50 dark:bg-black/50">
      <div className="mb-8">
        <h4 className="text-sm font-mono tracking-widest uppercase text-blue-500 mb-2">Interactive Agent Visualizer</h4>
        <p className="text-neutral-500 text-sm">Watch how an Autonomous Agent breaks down a complex goal into tool-based actions.</p>
      </div>

      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 mb-8 flex items-center justify-between">
        <div>
          <span className="text-xs text-neutral-400 uppercase tracking-wider mb-1 block">User Prompt</span>
          <p className="font-medium text-lg">"Plan a 5-day Caribbean cruise for two, including flights to the port."</p>
        </div>
        <button 
          onClick={runAgent}
          disabled={isRunning || step === steps.length}
          className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 disabled:opacity-50 transition-colors shrink-0"
        >
          {isRunning ? "Agent is Working..." : step === steps.length ? "Done" : "Dispatch Agent"}
        </button>
      </div>

      <div className="space-y-4 relative">
        {/* Connecting Line */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-neutral-200 dark:bg-neutral-800 z-0"></div>

        {steps.map((s, i) => (
          <div key={s.id} className={`relative z-10 flex gap-6 items-start transition-all duration-500 ${step > i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'}`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-4 border-neutral-50 dark:border-black ${step > i + 1 ? 'bg-blue-500 text-white' : 'bg-white dark:bg-neutral-900 text-blue-500 border-blue-500'}`}>
              {s.icon}
            </div>
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 flex-1 shadow-sm">
              <h5 className="font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                {s.label}
                {step === i + 1 && <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>}
              </h5>
              <p className="text-neutral-500 text-sm mt-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {step === steps.length && (
        <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl animate-in fade-in slide-in-from-bottom-4">
          <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-4">Agent Output: 3 Packages Found</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {['Budget Option', 'Balanced Option', 'Luxury Option'].map((opt, i) => (
              <div key={i} className="bg-white dark:bg-black p-4 rounded-lg text-sm border border-neutral-200 dark:border-neutral-800">
                <strong className="block mb-1">{opt}</strong>
                <span className="text-neutral-500">Includes direct flights + Royal Caribbean suite.</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}