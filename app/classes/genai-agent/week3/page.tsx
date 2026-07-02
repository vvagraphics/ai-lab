"use client";

import Link from 'next/link';
import { ArrowLeft, CheckCircle } from "lucide-react";
import { AtelierSection } from "../../../components/AtelierSection";
import { AgentBuilderSimulator } from "../../../components/AgentBuilderSimulator";

export default function GenAiWeek3Page() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto">
      {/* GLOBAL ESCAPE HATCH - Always goes home */}
      <Link href="/" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 mb-12">
        <ArrowLeft size={16} /> Back to Atelier
      </Link>
      
      <header className="mb-24">
        <span className="text-blue-500 font-mono text-sm tracking-widest uppercase italic">Class 01 // Week 3</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 tracking-tight">Intelligent by Design</h1>
      </header>

      <div className="space-y-12">
        <AtelierSection 
          title="The Lecture" 
          shortContent={
            <p>A standard chatbot waits for your question; an AI Agent acts on a goal. By equipping an LLM with external tools (like a web browser or calculator), we transform it from a passive text generator into an autonomous worker.</p>
          }
          fullContent={
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2">The Evolution to Agents</h4>
                <p>An LLM alone is trapped in a box. It only knows what it was trained on, and it cannot interact with the outside world. AI Agents solve this by giving the "brain" (the LLM) a set of "hands" (tools). When an Agent realizes it doesn't know an answer, it can autonomously decide to write code, search Google, or query a database to find out.</p>
              </div>
            </div>
          }
        />

        <AtelierSection 
          title="The Lab" 
          isLab={true}
          fullContent={
            <div className="space-y-8">
              <p className="text-neutral-500 text-lg mb-6">Equip different combinations of digital tools to see how an agent's capabilities and persona evolve.</p>
              <AgentBuilderSimulator />
            </div>
          }
        />
      </div>

      {/* COURSE PAGINATION */}
      <nav className="mt-32 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex justify-between">
        <Link href="/classes/genai-agent/week2" className="text-sm font-semibold flex items-center gap-2 hover:-translate-x-2 transition-transform">
          <ArrowLeft size={16} /> Prev: Prompting
        </Link>
        <button disabled className="text-sm font-semibold flex items-center gap-2 opacity-50 cursor-not-allowed">
          Course Complete <CheckCircle size={16} />
        </button>
      </nav>
    </main>
  );
}