"use client";

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AtelierSection } from "../../../components/AtelierSection";
import { LlmBasicsSimulator } from "../../../components/LlmBasicsSimulator";

export default function GenAiWeek1Page() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <Link href="/" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 mb-12">
        <ArrowLeft size={16} /> Back to Atelier
      </Link>
      
      <header className="mb-24">
        <span className="text-blue-500 font-mono text-sm tracking-widest uppercase italic">Class 01 // Week 1</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 tracking-tight">Foundations & LLM Ethics</h1>
      </header>

      <div className="space-y-24">
        <AtelierSection title="The Lecture: Introduction to LLMs">
          <p className="leading-relaxed text-lg mb-6">
            At their core, Large Language Models (LLMs) are just incredibly advanced auto-complete systems. They do not "think"; they calculate the mathematical probability of the next logical word based on billions of parameters of training data. 
          </p>
          <p className="leading-relaxed text-lg">
            However, because they are trained on human data, they inherit human biases. This is why <strong>Ethical Considerations</strong> are critical. As AI Engineers, we must build safety layers (guardrails) around the models to prevent them from generating harmful, biased, or malicious content.
          </p>
        </AtelierSection>

        <AtelierSection title="The Lab: Token Prediction & Guardrails">
          <LlmBasicsSimulator />
        </AtelierSection>
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