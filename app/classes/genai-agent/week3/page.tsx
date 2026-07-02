"use client";

import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { AtelierSection } from "../../../components/AtelierSection";
import { AgentBuilderSimulator } from "../../../components/AgentBuilderSimulator";

export default function GenAiWeek3Page() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <Link href="/classes/genai-agent/week2" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 mb-12">
        <ArrowLeft size={16} /> Back to Week 2
      </Link>
      
      <header className="mb-24">
        <span className="text-blue-500 font-mono text-sm tracking-widest uppercase italic">Class 01 // Week 3</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 tracking-tight">Intelligent by Design</h1>
      </header>

      <div className="space-y-24">
        <AtelierSection title="The Lecture: Building an AI Agent">
          <p className="leading-relaxed text-lg mb-6">
            In our final module, we transitioned from Chatbots to <strong>AI Agents</strong>. A chatbot is a passive participant that waits for you to ask a question. An AI Agent is an active participant equipped with a "Toolbelt."
          </p>
          <p className="leading-relaxed text-lg">
            By designing an agent with access to APIs (like a web browser or a calculator), we allow the LLM to write code or search the internet to figure out answers it wasn't originally trained on. This is the bridge between generative text and autonomous action.
          </p>
        </AtelierSection>

        <AtelierSection title="The Lab: Tool Configuration">
          <AgentBuilderSimulator />
        </AtelierSection>
      </div>

      <nav className="mt-32 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex justify-between">
        <Link href="/" className="text-sm italic text-neutral-500">Back to Studio</Link>
        <button disabled className="text-sm font-semibold flex items-center gap-2 opacity-50 cursor-not-allowed">
          Course Complete <CheckCircle size={16} />
        </button>
      </nav>
    </main>
  );
}