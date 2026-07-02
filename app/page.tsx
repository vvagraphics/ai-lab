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

  // Notice the updated paths pointing to the new /classes/ routing structure
  const courses = [
    {
      title: "Generative AI & AI Agent",
      description: "Foundational concepts in LLMs, Transformer architectures, and core generation mechanics.",
      weeks: [
        { id: "01", title: "Genesis of Logic", path: "/classes/genai-agent/week1", tag: "Foundations" },
        { id: "02", title: "Context as Medium", path: "/classes/genai-agent/week2", tag: "Architecting" },
        { id: "03", title: "Week 3 (Pending)", path: "/classes/genai-agent/week3", tag: "Upcoming" },
      ]
    },
    {
      title: "Applied AI Agents, Chatbots & RAG",
      description: "Practical implementations of intelligent systems, retrieval-augmented generation, and conversational memory.",
      weeks: [
        { id: "01", title: "Agents & RAG Fundamentals", path: "/classes/applied-ai/week1", tag: "Implementation" },
        { id: "02", title: "Multiagent Systems", path: "/classes/applied-ai/week2", tag: "Systems" },
      ]
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-500 text-neutral-900 dark:text-neutral-100">
      <nav className="fixed w-full z-50 p-6 flex justify-between items-center backdrop-blur-md bg-neutral-50/50 dark:bg-black/50 border-b border-neutral-200 dark:border-neutral-800">
        <span className="font-bold tracking-tighter text-xl">AI_ATELIER</span>
        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
        >
          {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      <main className="max-w-5xl mx-auto pt-40 px-6 pb-24">
        <header className="mb-24">
          <h1 className="text-7xl font-bold tracking-tighter leading-none mb-6">
            The Digital <br /> <span className="italic font-serif text-neutral-400">Progression</span>
          </h1>
          <p className="text-xl max-w-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            A curated documentation of my evolution as an AI Engineer across multiple disciplines.
          </p>
        </header>

        <div className="space-y-32">
          {courses.map((course, courseIndex) => (
            <section key={courseIndex} className="space-y-8">
              {/* Course Header */}
              <div className="border-b border-neutral-200 dark:border-neutral-800 pb-8">
                <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase italic mb-4 block">
                  Class 0{courseIndex + 1}
                </span>
                <h2 className="text-4xl font-bold tracking-tight mb-4">{course.title}</h2>
                <p className="text-lg text-neutral-500 max-w-2xl">{course.description}</p>
              </div>

              {/* Weekly Modules */}
              <div className="pl-0 md:pl-8 space-y-2">
                {course.weeks.map((item) => (
                  <Link href={item.path} key={item.id} className="group block py-6 border-b border-neutral-100 dark:border-neutral-900 transition-all hover:pl-8">
                    <div className="flex items-center gap-8">
                      <span className="text-sm font-mono text-neutral-400 group-hover:text-emerald-500 transition-colors">
                        W{item.id}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-emerald-500 transition-colors">{item.title}</h3>
                        <span className="text-xs uppercase tracking-widest text-neutral-500">{item.tag}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}