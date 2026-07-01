"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Week2Page() {
  const [active, setActive] = useState<'zero' | 'few'>('zero');

  return (
    <main className="min-h-screen py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <header className="mb-20">
        <span className="text-teal-500 font-mono text-sm tracking-widest uppercase italic">02 // The Atelier</span>
        <h1 className="text-5xl font-bold mt-4 tracking-tight">Context as Medium</h1>
      </header>

      {/* The Atelier Exhibit */}
      <section id="atelier" className="glass rounded-3xl p-8 md:p-16 border border-neutral-200 dark:border-neutral-800 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <div className="max-w-md">
            <h2 className="text-3xl font-light mb-4">Prompting Simulator</h2>
            <p className="text-neutral-500">An experiment in pattern alignment. How does providing context (few-shot) change the 'personality' of the output?</p>
          </div>

          <div className="flex p-1 bg-neutral-200 dark:bg-neutral-800 rounded-lg">
            <button onClick={() => setActive('zero')} className={`px-6 py-2 rounded-md transition-all ${active === 'zero' ? 'bg-white dark:bg-black shadow-sm' : ''}`}>Zero-Shot</button>
            <button onClick={() => setActive('few')} className={`px-6 py-2 rounded-md transition-all ${active === 'few' ? 'bg-white dark:bg-black shadow-sm' : ''}`}>Few-Shot</button>
          </div>
        </div>

        <div className="bg-black/90 p-8 rounded-2xl border border-neutral-700 font-mono text-emerald-500 h-64 overflow-y-auto">
           {active === 'zero' ? "> Generating response... \n\n Dear Customer, we are delayed..." : "> Aligning patterns... \n\n Dear VoltDriver, supply chains have shifted..."}
        </div>
      </section>

      <footer className="mt-24 text-center">
        <Link href="/" className="text-sm underline underline-offset-8 decoration-neutral-300 dark:decoration-neutral-700">Return to Atelier Gallery</Link>
      </footer>
    </main>
  );
}