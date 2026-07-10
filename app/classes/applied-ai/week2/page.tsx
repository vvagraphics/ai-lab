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
        {/* EXISTING CONTENT: MODULE 1 */}
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

        {/* NEW CONTENT: DEEP DIVES BASED ON WEEK 2 TOPICS */}
        <AtelierSection 
          title="Deep Dive: AI Agent Types & Workflows" 
          shortContent={
            <p>Agents are digital entities that perceive their environment and take action. They range from simple, goal-oriented scripts to advanced systems that learn and optimize their paths over time.</p>
          }
          fullContent={
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2">The Three Agent Archetypes</h4>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Goal-based Agents:</strong> Focused entirely on reaching a single defined target (e.g., getting from point A to point B, regardless of efficiency).</li>
                  <li><strong>Utility-based Agents:</strong> Weigh different variables to find the <em>best</em> possible way to achieve a goal (e.g., getting to point B using the most fuel-efficient route).</li>
                  <li><strong>Learning Agents:</strong> Continuously improve their performance by analyzing past actions and adapting to environmental feedback.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">The Agent Workflow in Action</h4>
                <p>An agent workflow consists of observing, reasoning, and acting. For example, a fitness agent observes a user's smartwatch data (steps, sleep, heart rate), reasons about the data to determine fatigue levels, and autonomously acts by generating and emailing a personalized workout plan.</p>
              </div>
            </div>
          }
        />

        <AtelierSection 
          title="Deep Dive: Advanced & Multimodal RAG" 
          shortContent={
            <p>To improve output quality, RAG systems can be upgraded from simple text retrieval to advanced, multimodal setups capable of understanding images, charts, and dynamic live data feeds.</p>
          }
          fullContent={
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Multimodal RAG</h4>
                <p>Standard RAG relies on text documents. Multimodal RAG expands the AI's "open book" to include images, audio, and video. This enables applications like a mechanic uploading a photo of a dashboard warning light, allowing the system to visually match the image and retrieve the exact text-based repair instructions.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Implementation Techniques</h4>
                <p className="mb-2">RAG architecture can be scaled based on complexity:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Naive RAG:</strong> A straightforward process where the system searches the database, retrieves context, and the AI answers directly.</li>
                  <li><strong>Advanced RAG:</strong> Introduces intermediate steps, such as using AI to automatically rewrite the user's prompt for better database search results before retrieval.</li>
                  <li><strong>Modular RAG:</strong> A flexible, component-based setup allowing engineers to easily swap out search engines, LLM providers, or routing logic as needed.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Overcoming RAG Challenges</h4>
                <p>To maintain high accuracy, systems utilize <strong>Chunking</strong> (breaking massive documents down into digestible paragraphs) and <strong>Vectorization</strong> (converting text to mathematical coordinates to find the most relevant information). Integrating dynamic APIs (like live stock prices or weather) further ensures the AI's answers are up-to-the-minute.</p>
              </div>
            </div>
          }
        />

        <AtelierSection 
          title="Deep Dive: Multiagent Applications" 
          shortContent={
            <p>Moving beyond a single supervisor, production-grade multiagent systems revolutionize industries by autonomously handling massive, multi-step workflows like e-commerce logistics and corporate procurement.</p>
          }
          fullContent={
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Real-World Automation</h4>
                <p>Consider an automated procurement system: Agent A monitors factory inventory. When steel supplies drop below 10%, Agent A alerts Agent B, a researcher that scours the web for the best current market prices. Agent B passes the data to Agent C, which drafts a formal purchase order and queues it for a human manager's final approval. This division of labor prevents AI logic breakdowns and speeds up business operations.</p>
              </div>
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