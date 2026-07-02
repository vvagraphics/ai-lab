"use client";

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AtelierSection } from "../../../components/AtelierSection";
import { PromptSimulator } from "../../../components/PromptSimulator";

export default function GenAiWeek2Page() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto">
      {/* GLOBAL ESCAPE HATCH - Always goes home */}
      <Link href="/" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 mb-12">
        <ArrowLeft size={16} /> Back to Atelier
      </Link>
      
      <header className="mb-24">
        <span className="text-blue-500 font-mono text-sm tracking-widest uppercase italic">Class 01 // Week 2</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 tracking-tight">Prompting & Chatbots</h1>
      </header>

      <div className="space-y-12">
        <AtelierSection 
          title="The Lecture" 
          shortContent={
            <p>If LLMs are the engine, Prompt Engineering is the steering wheel. We use hidden instructions (System Prompts) to give AI-Powered Chatbots distinct personalities, rules, and boundaries before they ever speak to a user.</p>
          }
          fullContent={
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2">The Art of Prompt Engineering</h4>
                <p>Prompt engineering is how we shape an AI's output. A simple "zero-shot" prompt just asks a question. But advanced prompting—like giving the AI examples (few-shot) or telling it to take a deep breath and think step-by-step—drastically changes the mathematical pathway it takes to generate a response.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Building AI-Powered Chatbots</h4>
                <p>When you talk to a corporate chatbot, it doesn't start with a blank slate. We inject a "System Prompt" in the background (e.g., "You are a polite customer service bot. Never discuss politics."). This acts as the invisible framework that keeps the bot on-brand and predictable.</p>
              </div>
            </div>
          }
        />

        <AtelierSection 
          title="The Lab" 
          isLab={true}
          fullContent={
            <div className="space-y-8">
              <p className="text-neutral-500 text-lg mb-6">Explore how injecting a different System Prompt completely rewires how the AI answers the exact same user query.</p>
              <PromptSimulator />
            </div>
          }
        />
      </div>

      {/* COURSE PAGINATION */}
      <nav className="mt-32 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex justify-between">
        <Link href="/classes/genai-agent/week1" className="text-sm font-semibold flex items-center gap-2 hover:-translate-x-2 transition-transform">
          <ArrowLeft size={16} /> Prev: Foundations
        </Link>
        <Link href="/classes/genai-agent/week3" className="text-sm font-semibold flex items-center gap-2 hover:translate-x-2 transition-transform">
          Next: Building Agents <ArrowRight size={16} />
        </Link>
      </nav>
    </main>
  );
}