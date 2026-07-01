"use client";

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Week1Page() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <Link href="/" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 mb-12">
        <ArrowLeft size={16} /> Back to Atelier
      </Link>
      
      <header className="mb-24">
        <span className="text-blue-500 font-mono text-sm tracking-widest uppercase italic">01 // The Foundations</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 tracking-tight">Genesis of Logic</h1>
      </header>

      <div className="space-y-24">
        <section>
          <h2 className="text-2xl font-light italic text-neutral-400 mb-8 tracking-widest">Concept 01: The Nature of Generation</h2>
          {/* Removed specific text-neutral classes to inherit global body text color */}
          <p className="text-xl leading-relaxed font-serif">
            Traditional computing is transactional; you input X to get Y. Generative AI, however, 
            is probabilistic. It is a mirror held up to the vastness of human knowledge, 
            interpreting patterns to synthesize something entirely net-new.
          </p>
        </section>

        <section className="glass rounded-3xl p-12 border border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xl font-bold mb-8">The Transformer Architecture</h2>
          {/* Removed specific text-neutral classes to inherit global body text color */}
          <p className="leading-relaxed">
            At the heart of the LLM lies the Transformer—a mechanism that allows the model 
            to weight the importance of different parts of input data, essentially 
            "attending" to context in ways that simulate true comprehension.
          </p>
        </section>
      </div>

      <nav className="mt-32 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex justify-between">
        <Link href="/" className="text-sm italic text-neutral-500">Back to Studio</Link>
        <Link href="/genai-agent/week2" className="text-sm font-semibold flex items-center gap-2 hover:translate-x-2 transition-transform">
          Next: Leveraging Context <ArrowRight size={16} />
        </Link>
      </nav>
    </main>
  );
}