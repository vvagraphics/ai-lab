"use client";

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AtelierSection } from "../../../components/AtelierSection";
import { RagSimulator } from "../../../components/RagSimulator"; // Import the RAG simulator here

export default function AppliedWeek2Page() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <Link href="/classes/applied-ai/week1" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 mb-12">
        <ArrowLeft size={16} /> Back to Week 1
      </Link>
      
      <header className="mb-24">
        <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase italic">Class 02 // Week 2</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 tracking-tight">RAG, Params & Multiagent</h1>
      </header>

      <div className="space-y-24">
        <AtelierSection title="The Lecture: Controlling the AI">
          <h2 className="text-2xl font-bold mb-4">LLM Parameters (kwargs)</h2>
          <p className="leading-relaxed text-lg mb-8">
            When communicating with an AI via code, we pass "Keyword Arguments" (kwargs) to control its behavior. The most famous is <strong>Temperature</strong>. A temperature of `0.0` makes the AI deterministic and focused (great for coding or math). A temperature of `0.8` or higher makes the AI creative and random (great for brainstorming).
          </p>

          <h2 className="text-2xl font-bold mb-4">Multiagent Systems</h2>
          <p className="leading-relaxed text-lg mb-6">
            Why use one agent when you can have a team? A Multiagent System breaks a massive problem into pieces. A "Supervisor Agent" receives the user's prompt and delegates tasks to "Worker Agents" (e.g., a Research Agent, a Coding Agent, and a QA Agent). They converse with each other until the final answer is perfect.
          </p>
        </AtelierSection>

        <AtelierSection title="The Lab: RAG Architecture">
           <p className="leading-relaxed text-lg mb-6">
            <strong>Retrieval-Augmented Generation (RAG)</strong> is how we fix AI hallucinations. Instead of relying on the AI's memory, RAG intercepts the user's query, searches a private database for the exact facts, and forces the AI to use those facts to answer.
          </p>
          <RagSimulator />
        </AtelierSection>
      </div>

      <nav className="mt-32 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex justify-between">
        <Link href="/" className="text-sm italic text-neutral-500">Back to Studio</Link>
        <button disabled className="text-sm font-semibold flex items-center gap-2 opacity-50 cursor-not-allowed">
          Next: Week 3 (Coming Soon) <ArrowRight size={16} />
        </button>
      </nav>
    </main>
  );
}