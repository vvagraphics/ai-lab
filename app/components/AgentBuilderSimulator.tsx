"use client";

import { useState } from "react";
import { Wrench, Globe, Calculator, Calendar, RotateCcw, Cpu } from "lucide-react";

export function AgentBuilderSimulator() {
  const [activeTools, setActiveTools] = useState<string[]>([]);
  const [deployed, setDeployed] = useState(false);

  const tools = [
    { id: "web", name: "Web Search", icon: <Globe size={16} /> },
    { id: "calc", name: "Calculator", icon: <Calculator size={16} /> },
    { id: "cal", name: "Calendar", icon: <Calendar size={16} /> },
  ];

  const toggleTool = (id: string) => {
    if (deployed) return;
    setActiveTools(prev => prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]);
  };

  const resetAgent = () => {
    setDeployed(false);
    setActiveTools([]);
  };

  // Determine Agent Persona based on tools equipped
  const getAgentTheme = () => {
    if (activeTools.length === 3) return { color: "bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500", text: "text-white", border: "border-purple-500", title: "Omni-Agent Supreme" };
    if (activeTools.includes("web") && activeTools.length === 1) return { color: "bg-blue-500", text: "text-blue-500", border: "border-blue-500", title: "Researcher Agent" };
    if (activeTools.includes("calc") && activeTools.length === 1) return { color: "bg-amber-500", text: "text-amber-500", border: "border-amber-500", title: "Analyst Agent" };
    if (activeTools.includes("cal") && activeTools.length === 1) return { color: "bg-purple-500", text: "text-purple-500", border: "border-purple-500", title: "Scheduler Agent" };
    return { color: "bg-emerald-500", text: "text-emerald-500", border: "border-emerald-500", title: "Multi-Tool Agent" };
  };

  const theme = getAgentTheme();

  return (
    <div className="mt-12 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 bg-neutral-50/50 dark:bg-black/50">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h4 className="text-sm font-mono tracking-widest uppercase text-emerald-500 mb-2">Agent Assembly Lab</h4>
          <p className="text-neutral-500 text-sm">Equip different combinations of tools to see how the agent's persona and capabilities change.</p>
        </div>
        {deployed && (
          <button onClick={resetAgent} className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
            <RotateCcw size={14} /> Reset
          </button>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h5 className="font-bold mb-4">1. Equip Tools</h5>
          <div className="space-y-3">
            {tools.map(t => (
              <button 
                key={t.id}
                onClick={() => toggleTool(t.id)}
                disabled={deployed}
                className={`w-full flex items-center gap-3 p-4 rounded-xl border transition-all ${activeTools.includes(t.id) ? 'bg-emerald-500 text-white border-emerald-400 shadow-md' : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:border-emerald-500/50'} ${deployed ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {t.icon} {t.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h5 className="font-bold mb-4">2. Deploy System</h5>
          <div className={`flex-1 bg-white dark:bg-neutral-900 border ${deployed ? theme.border : 'border-neutral-200 dark:border-neutral-800'} rounded-xl p-6 flex flex-col justify-center items-center text-center transition-all duration-500`}>
            {deployed ? (
              <div className="animate-in fade-in zoom-in w-full">
                <div className={`w-20 h-20 ${theme.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Cpu size={32} />
                </div>
                <h6 className={`font-bold text-xl mb-4 ${theme.text}`}>{theme.title}</h6>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="text-xs bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-300">Natural Language</span>
                  {activeTools.includes("web") && <span className="text-xs bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full">Live Browsing</span>}
                  {activeTools.includes("calc") && <span className="text-xs bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full">Complex Math</span>}
                  {activeTools.includes("cal") && <span className="text-xs bg-purple-500/10 text-purple-500 px-3 py-1 rounded-full">Booking</span>}
                </div>
              </div>
            ) : (
              <button 
                onClick={() => setDeployed(true)}
                disabled={activeTools.length === 0}
                className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-600 disabled:opacity-50 transition-colors flex items-center gap-2"
              >
                <Wrench size={18} /> Deploy Agent
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}