"use client";

import Link from 'next/link';
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen transition-colors duration-500">
      <nav className="fixed w-full z-50 p-6 flex justify-between items-center backdrop-blur-md bg-neutral-50/50 dark:bg-black/50 border-b border-neutral-200 dark:border-neutral-800">
        <span className="font-bold tracking-tighter text-xl">AI_ATELIER</span>
        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
        >
          {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      <main className="max-w-4xl mx-auto pt-40 px-6">
        <header className="mb-32">
          <h1 className="text-7xl font-bold tracking-tighter leading-none mb-6">
            The Digital <br /> <span className="italic font-serif text-neutral-400">Progression</span>
          </h1>
          {/* REMOVED: explicit text-neutral color classes to inherit global body text */}
          <p className="text-xl max-w-lg leading-relaxed">
            A curated documentation of my evolution as an AI Engineer.
          </p>
        </header>

        <section className="space-y-12">
          {[
            { id: "01", title: "Genesis of Logic", path: "/genai-agent/week1", tag: "Foundations" },
            { id: "02", title: "Context as Medium", path: "/genai-agent/week2", tag: "Architecting" },
          ].map((item) => (
            <Link href={item.path} key={item.id} className="group block py-8 border-t border-neutral-200 dark:border-neutral-800 transition-all hover:pl-8">
              <div className="flex items-center gap-8">
                <span className="text-sm font-mono text-neutral-400 group-hover:text-blue-500">{item.id}</span>
                <div>
                  <h2 className="text-3xl font-bold group-hover:text-blue-500 transition-colors">{item.title}</h2>
                  <span className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-500">{item.tag}</span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}