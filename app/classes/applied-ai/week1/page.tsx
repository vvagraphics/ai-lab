"use client";

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AtelierSection } from "../../../components/AtelierSection";
import { AgentSimulator } from "../../../components/AgentSimulator";

export default function AppliedWeek1Page() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto">
      {/* GLOBAL ESCAPE HATCH */}
      <Link href="/" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 mb-12 w-fit">
        <ArrowLeft size={16} /> Back to Atelier
      </Link>
      
      <header className="mb-24">
        <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase italic">Module 02 // Week 1</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 tracking-tight">Agents & Task Execution</h1>
      </header>

      <div className="space-y-12">
        <AtelierSection 
          title="The Lecture" 
          shortContent={
            <p>We explored how Autonomous Agents break down complex real-world tasks. Instead of just answering questions, they use a "Chain of Thought" to plan steps, invoke APIs, and synthesize external data to solve problems autonomously.</p>
          }
          fullContent={
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Unleashing Agentic AI</h4>
                <p>During orientation, we watched a live demonstration of an agent acting as a travel planner. The true power of an agent lies in its autonomy. You don't have to tell it *how* to book a cruise. You give it a high-level goal, and the agent breaks it down: it decides to search the web for dates, checks a flight API for tickets, and compares prices before finally presenting you with options.</p>
              </div>
            </div>
          }
        />

        <AtelierSection 
          title="The Lab" 
          isLab={true}
          fullContent={
            <div className="space-y-8">
              <p className="text-neutral-500 text-lg mb-6">Watch an interactive simulation of an agent's "Chain of Thought" as it processes a complex user request using multiple tools.</p>
              <AgentSimulator />
            </div>
          }
        />
      </div>

      {/* COURSE PAGINATION */}
      <nav className="mt-32 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex justify-between">
        <Link href="/" className="text-sm italic text-neutral-500">Back to Studio</Link>
        <Link href="/classes/applied-ai/week2" className="text-sm font-semibold flex items-center gap-2 hover:translate-x-2 transition-transform">
          Next: RAG & Multiagent <ArrowRight size={16} />
        </Link>
      </nav>
    </main>
  );
}