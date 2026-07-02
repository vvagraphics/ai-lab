"use client";

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AtelierSection } from "../../../components/AtelierSection";
import { AgentSimulator } from "../../../components/AgentSimulator"; // Import the new simulator

export default function AppliedWeek1Page() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <Link href="/" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 mb-12">
        <ArrowLeft size={16} /> Back to Atelier
      </Link>
      
      <header className="mb-24">
        <span className="text-blue-500 font-mono text-sm tracking-widest uppercase italic">Class 02 // Week 1</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 tracking-tight">Agents & Task Execution</h1>
      </header>

      <div className="space-y-24">
        <AtelierSection title="The Lecture: What is an AI Agent?">
          <p className="leading-relaxed text-lg mb-6">
            An LLM acts as a brain, but an <strong>AI Agent</strong> is a brain with hands. While a standard chatbot just predicts text, an agent is given a goal, a set of tools (APIs, web browsers, calculators), and the autonomy to figure out how to use those tools to achieve the goal. 
          </p>
          <p className="leading-relaxed text-lg">
            In our orientation, we saw a live demonstration of an agent acting as a travel planner. It didn't just write an itinerary; it actually checked live flight times, compared cruise prices, and dynamically formulated a response based on real-time data it fetched itself.
          </p>
        </AtelierSection>

        <AtelierSection title="The Lab: Task Automation Simulator">
          <p className="leading-relaxed text-lg mb-6 text-neutral-500">
            Below is an interactive simulation of the "Chain of Thought" process an agent goes through when tasked with a complex goal like booking a cruise.
          </p>
          <AgentSimulator />
        </AtelierSection>
      </div>

      <nav className="mt-32 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex justify-between">
        <Link href="/" className="text-sm italic text-neutral-500">Back to Studio</Link>
        <Link href="/classes/applied-ai/week2" className="text-sm font-semibold flex items-center gap-2 hover:translate-x-2 transition-transform">
          Next: RAG & Multiagent Systems <ArrowRight size={16} />
        </Link>
      </nav>
    </main>
  );
}