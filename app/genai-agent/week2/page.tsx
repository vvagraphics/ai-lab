'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Week2Page() {
  const [promptType, setPromptType] = useState<'zero' | 'few'>('zero');

  return (
    <main className="max-w-6xl mx-auto p-6 md:p-12 flex flex-col min-h-screen">
      <Link href="/" className="text-sm text-blue-400 hover:underline mb-6 inline-block">
        ← Back to Dashboard
      </Link>
      
      <header className="mb-10 border-b border-slate-700 pb-6">
        <h1 className="text-3xl font-bold text-slate-100">Week 2: Leveraging Context & Prompting</h1>
        <p className="text-slate-400 mt-2">Machine Learning Types, and managing LLM Context Windows.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow">
        
        {/* LEFT COLUMN: The Theory */}
        <div className="space-y-8">
          <section className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-200 mb-4 border-b border-slate-700 pb-2">Machine Learning Types</h2>
            <div className="space-y-4">
              <div className="p-3 bg-slate-900/50 rounded border border-slate-700">
                <h3 className="font-bold text-blue-400">1. Supervised Learning</h3>
                <p className="mt-1 text-sm text-slate-300">Trains on labeled data (e.g., tagging 1,000 product reviews as "Happy" or "Angry").</p>
              </div>
              <div className="p-3 bg-slate-900/50 rounded border border-slate-700">
                <h3 className="font-bold text-teal-400">2. Unsupervised Learning</h3>
                <p className="mt-1 text-sm text-slate-300">Discovers hidden patterns in unlabeled data (e.g., Netflix grouping similar viewers automatically).</p>
              </div>
              <div className="p-3 bg-slate-900/50 rounded border border-slate-700">
                <h3 className="font-bold text-purple-400">3. Reinforcement Learning</h3>
                <p className="mt-1 text-sm text-slate-300">Learns via trial and error (e.g., a delivery drone earning points for staying on course).</p>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: The Application (Prompting Simulator) */}
        <div className="space-y-8">
          <section className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm h-full">
            <h2 className="text-xl font-semibold text-slate-200 mb-4 border-b border-slate-700 pb-2">Prompting Simulator</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-400 mb-2">Scenario: VoltDrive Startup</label>
              <div className="p-3 bg-slate-900 rounded text-sm text-slate-300 border border-slate-700">
                Write a professional email explaining that an Electric Vehicle delivery is delayed by 2 months.
              </div>
            </div>

            <div className="flex space-x-2 mb-4">
              <button 
                onClick={() => setPromptType('zero')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${promptType === 'zero' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
              >
                Zero-Shot (Guessing)
              </button>
              <button 
                onClick={() => setPromptType('few')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${promptType === 'few' ? 'bg-teal-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
              >
                Few-Shot (Pattern Match)
              </button>
            </div>

            <div className="bg-[#0d1117] text-emerald-400 p-5 rounded-lg font-mono text-sm min-h-[300px] border border-slate-700/50 shadow-inner">
              {promptType === 'zero' ? (
                <div className="animate-pulse">
                  <p className="text-slate-500 mb-4">// ZERO-SHOT OUTPUT</p>
                  <p>Dear Customer,</p>
                  <br/>
                  <p>Thank you for contacting us! We are so sorry for the delay... To show our appreciation for your patience, we have credited a 15% discount coupon to your account for your next purchase! Have a wonderful weekend.</p>
                </div>
              ) : (
                <div className="animate-pulse">
                  <p className="text-slate-500 mb-4">// FEW-SHOT OUTPUT (Learning from 3 examples)</p>
                  <p>Dear VoltDriver,</p>
                  <br/>
                  <p>Due to supply chain issues, your Electric Volticle delivery has been delayed by two months. We apologize for the inconvenience.</p>
                  <br/>
                  <p>Thank you for your support in making the world greener and safer for humankind.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* BOTTOM NAVIGATION */}
      <div className="mt-12 pt-6 border-t border-slate-800 flex justify-between items-center">
        <Link href="/genai-agent/week1" className="px-5 py-2.5 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors text-sm font-medium">
          ← Week 1: Foundations
        </Link>
        <Link href="/" className="px-5 py-2.5 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors text-sm font-medium opacity-50 cursor-not-allowed pointer-events-none">
          Week 3: Agents (Locked) →
        </Link>
      </div>
    </main>
  );
}