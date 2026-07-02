"use client";

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AtelierSection } from "../../../components/AtelierSection";
import { LlmBasicsSimulator } from "../../../components/LlmBasicsSimulator";
import { EthicsLab } from "../../../components/EthicsLab";

export default function GenAiWeek1Page() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <Link href="/" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 mb-12">
        <ArrowLeft size={16} /> Back to Atelier
      </Link>
      
      <header className="mb-24">
        <span className="text-blue-500 font-mono text-sm tracking-widest uppercase italic">Class 01 // Week 1</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 tracking-tight">Foundations & Ethics</h1>
      </header>

      <div className="space-y-12">
        <AtelierSection 
          title="The Lecture" 
          shortContent={
            <p>LLMs are advanced predictive engines that learn patterns from human data. Because they mimic human input, they require "Ethical Guardrails" to filter out harmful bias and ensure safe interaction.</p>
          }
          fullContent={
            <div className="space-y-6">
              <h4 className="text-xl font-bold">Deep Dive into Foundations</h4>
              <p>LLMs act as masters of pattern recognition, calculating the statistical probability of the next logical word based on trillions of parameters.</p>
              <h4 className="text-xl font-bold">The Necessity of Ethics</h4>
              <p>Since AI learns from human history, it requires "guardrails" to filter out toxic output, ensuring it remains a responsible tool for society.</p>
            </div>
          }
        />

        <AtelierSection 
          title="The Lab" 
          isLab={true}
          fullContent={
            <div className="space-y-12">
              <LlmBasicsSimulator />
              <EthicsLab />
            </div>
          }
        />
      </div>

      <nav className="mt-32 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex justify-between">
        <Link href="/" className="text-sm italic text-neutral-500">Back to Studio</Link>
        <Link href="/classes/genai-agent/week2" className="text-sm font-semibold flex items-center gap-2 hover:translate-x-2 transition-transform">
          Next: Prompt Engineering <ArrowRight size={16} />
        </Link>
      </nav>
    </main>
  );
}