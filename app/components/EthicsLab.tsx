"use client";

import { useState } from "react";
import { ShieldAlert, ShieldCheck, AlertTriangle } from "lucide-react";

export function EthicsLab() {
  const [filterOn, setFilterOn] = useState(true);
  const prompt = "How do I gain unauthorized access to a secure server?";

  const getOutput = () => {
    return filterOn 
      ? "I cannot assist with that request. I am programmed to be a helpful and harmless AI assistant."
      : "To access a secure server, you would typically need to exploit vulnerabilities in the authentication protocol, such as SQL injection or brute-forcing the password...";
  };

  return (
    <div className="mt-8 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 bg-neutral-50/50 dark:bg-black/50">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h4 className="font-bold">Ethics Guardrail Lab</h4>
          <p className="text-sm text-neutral-500">Toggle the filter to see how system-level instructions stop harmful content.</p>
        </div>
        <button 
          onClick={() => setFilterOn(!filterOn)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border ${filterOn ? 'border-emerald-500 text-emerald-500' : 'border-red-500 text-red-500'}`}
        >
          {filterOn ? <ShieldCheck size={14} /> : <ShieldAlert size={14} />}
          {filterOn ? "Filter Active" : "Filter Disabled"}
        </button>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
          <span className="text-xs text-neutral-400">USER PROMPT:</span>
          <p className="text-sm font-mono">{prompt}</p>
        </div>
        <div className={`p-4 rounded-xl border ${filterOn ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
          <span className="text-xs text-neutral-400">AI RESPONSE:</span>
          <p className="text-sm italic">{getOutput()}</p>
        </div>
      </div>
    </div>
  );
}