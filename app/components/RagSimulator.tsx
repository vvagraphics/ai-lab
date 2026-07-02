"use client";

import { useState } from "react";
import { Search, Database, Cpu, ArrowDown } from "lucide-react";

export function RagSimulator() {
  const [query, setQuery] = useState("");
  const [step, setStep] = useState(0); // 0: idle, 1: retrieving, 2: augmenting, 3: generating
  const [activeDoc, setActiveDoc] = useState<number | null>(null);

  const knowledgeBase = [
    { id: 1, topic: "IBM SkillsBuild", text: "IBM SkillsBuild provides free learning, support, and resources for tech careers." },
    { id: 2, topic: "AI Agents", text: "AI Agents can autonomously execute multi-step plans using external tools." },
    { id: 3, topic: "RAG Setup", text: "RAG combines an information retrieval component with a text generator model." },
  ];

  const simulateRag = () => {
    if (!query) return;
    
    // Reset
    setStep(1);
    setActiveDoc(null);

    // Step 1: Retrieval (fake delay)
    setTimeout(() => {
      // Simple logic to pick a doc based on keywords, defaulting to doc 3
      let foundDoc = 3; 
      if (query.toLowerCase().includes("ibm")) foundDoc = 1;
      if (query.toLowerCase().includes("agent")) foundDoc = 2;
      
      setActiveDoc(foundDoc);
      setStep(2);

      // Step 2: Augmentation to Generation
      setTimeout(() => {
        setStep(3);
      }, 1500);
    }, 1500);
  };

  return (
    <div className="mt-12 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 bg-neutral-50/50 dark:bg-black/50 overflow-hidden">
      <div className="mb-8">
        <h4 className="text-sm font-mono tracking-widest uppercase text-emerald-500 mb-2">Interactive RAG Visualizer</h4>
        <p className="text-neutral-500 text-sm">Type a query like "What are AI Agents?" or "Tell me about IBM SkillsBuild" to see the engine work.</p>
      </div>

      <div className="flex gap-4 mb-12">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask the AI a question..."
          className="flex-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition-colors"
        />
        <button 
          onClick={simulateRag}
          disabled={!query || step > 0 && step < 3}
          className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-600 disabled:opacity-50 transition-colors"
        >
          {step > 0 && step < 3 ? "Processing..." : "Run Engine"}
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 relative">
        {/* Step 1: Database */}
        <div className={`p-6 rounded-2xl border transition-all duration-500 ${step >= 1 ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-neutral-200 dark:border-neutral-800'}`}>
          <div className="flex items-center gap-2 mb-4 text-emerald-500 font-semibold">
            <Database size={18} /> 1. Vector Database
          </div>
          <div className="space-y-3">
            {knowledgeBase.map((doc) => (
              <div key={doc.id} className={`p-3 rounded-lg text-sm border transition-all ${activeDoc === doc.id ? 'bg-emerald-500 text-white border-emerald-400 scale-105 shadow-lg' : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-500'}`}>
                <strong>{doc.topic}:</strong> {doc.text}
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Prompt Augmentation */}
        <div className={`p-6 rounded-2xl border transition-all duration-500 ${step >= 2 ? 'border-blue-500/50 bg-blue-500/5' : 'border-neutral-200 dark:border-neutral-800 opacity-50'}`}>
          <div className="flex items-center gap-2 mb-4 text-blue-500 font-semibold">
            <Search size={18} /> 2. Augmented Context
          </div>
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 font-mono text-xs text-neutral-400">
            System: Answer the user using ONLY this context.<br/><br/>
            Context: {activeDoc ? knowledgeBase.find(d => d.id === activeDoc)?.text : "[Awaiting Retrieval]"}<br/><br/>
            User: {query || "[Awaiting Query]"}
          </div>
        </div>

        {/* Step 3: Generation */}
        <div className={`p-6 rounded-2xl border transition-all duration-500 ${step === 3 ? 'border-purple-500/50 bg-purple-500/5 shadow-xl shadow-purple-500/10' : 'border-neutral-200 dark:border-neutral-800 opacity-50'}`}>
          <div className="flex items-center gap-2 mb-4 text-purple-500 font-semibold">
            <Cpu size={18} /> 3. LLM Generation
          </div>
          <div className="text-sm leading-relaxed">
            {step === 3 ? (
              <span className="text-neutral-900 dark:text-neutral-100">
                Based on the retrieved context, {knowledgeBase.find(d => d.id === activeDoc)?.text.toLowerCase()}
              </span>
            ) : (
              <span className="text-neutral-500 italic">Waiting for augmented prompt...</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}