"use client";

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AtelierSection } from "../../../components/AtelierSection";
import { PromptSimulator } from "../../../components/PromptSimulator";

export default function GenAiWeek2Page() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <Link href="/classes/genai-agent/week1" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 mb-12">
        <ArrowLeft size={16} /> Back to Week 1
      </Link>
      
      <header className="mb-24">
        <span className="text-blue-500 font-mono text-sm tracking-widest uppercase italic">Class 01 // Week 2</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 tracking-tight">Prompting & Chatbots</h1>
      </header>

      <div className="space-y-24">
        <AtelierSection title="The Lecture: Shaping AI Outputs">
          <p className="leading-relaxed text-lg mb-6">
            If LLMs are the engine, <strong>Prompt Engineering</strong> is the steering wheel. The way you frame a question completely alters the mathematical pathway the AI takes to generate a response. 
          </p>
          <p className="leading-relaxed text-lg">
            When building <strong>AI-Powered Chatbots</strong>, we use hidden "System Prompts" to give the AI a persona, set rules, and provide context before the user ever types a word. This ensures the chatbot stays on-brand and behaves predictably.
          </p>
        </AtelierSection>

        <AtelierSection title="The Lab: System Prompt Injection">
          <PromptSimulator />
        </AtelierSection>
      </div>

      <nav className="mt-32 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex justify-between">
        <Link href="/" className="text-sm italic text-neutral-500">Back to Studio</Link>
        <Link href="/classes/genai-agent/week3" className="text-sm font-semibold flex items-center gap-2 hover:translate-x-2 transition-transform">
          Next: Building Agents <ArrowRight size={16} />
        </Link>
      </nav>
    </main>
  );
}