"use client";

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AtelierSection } from "../../../components/AtelierSection";
import { RagSimulator } from "../../../components/RagSimulator";

export default function AppliedWeek2Page() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto">
      {/* GLOBAL ESCAPE HATCH */}
      <Link href="/" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 mb-12 w-fit">
        <ArrowLeft size={16} /> Back to Atelier
      </Link>
      
      <header className="mb-24">
        <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase italic">Module 02 // Week 2</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 tracking-tight">RAG & Multiagent Systems</h1>
      </header>

      <div className="space-y-12">
        <AtelierSection 
          title="The Lecture" 
          shortContent={
            <p>RAG (Retrieval-Augmented Generation) prevents AI hallucinations by forcing the model to read private documents before answering. Multiagent systems take this further by creating "teams" of AI bots that collaborate on massive tasks.</p>
          }
          fullContent={
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Grounding the AI with RAG</h4>
                <p>Generative AI tends to hallucinate facts when it relies solely on its pre-trained memory. RAG fixes this. Think of it like an open-book exam. When a user asks a question, the system searches a private vector database, retrieves the exact relevant paragraphs, and injects them into the prompt. The AI is then told: "Answer the user using ONLY this information."</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">The Rise of Multiagent Systems</h4>
                <p>Some problems are too complex for one agent. A Multiagent system mimics human corporate structures. A "Supervisor Agent" receives the prompt, breaks it down, and delegates tasks to "Worker Agents" (like a researcher, a coder, and a reviewer). They debate and refine their work before sending the final answer back to the user.</p>
              </div>
            </div>
          }
        />

        <AtelierSection 
          title="The Lab" 
          isLab={true}
          fullContent={
            <div className="space-y-8">
              <p className="text-neutral-500 text-lg mb-6">Test the 3-step RAG Pipeline visually. Watch how the engine searches the database, augments the prompt, and generates a grounded response.</p>
              <RagSimulator />
            </div>
          }
        />
      </div>

      {/* COURSE PAGINATION */}
      <nav className="mt-32 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex justify-between">
        <Link href="/classes/applied-ai/week1" className="text-sm font-semibold flex items-center gap-2 hover:-translate-x-2 transition-transform">
          <ArrowLeft size={16} /> Prev: Agents
        </Link>
        <button disabled className="text-sm font-semibold flex items-center gap-2 opacity-50 cursor-not-allowed">
          Next: Week 3 (Coming Soon) <ArrowRight size={16} />
        </button>
      </nav>
    </main>
  );
}