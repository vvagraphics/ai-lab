"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function AtelierSection({ 
  title, 
  shortContent, 
  fullContent,
  isLab = false 
}: { 
  title: string, 
  shortContent?: React.ReactNode, 
  fullContent?: React.ReactNode,
  isLab?: boolean
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // If it's a Lab, just render it static without any toggle logic
  if (isLab) {
    return (
      <section className="my-20 px-6 max-w-5xl mx-auto">
        <h3 className="text-4xl font-light italic tracking-widest text-neutral-400 dark:text-neutral-600 mb-10">{title}</h3>
        <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl">
          {fullContent}
        </div>
      </section>
    );
  }

  // If it's a Lecture, use the toggle
  return (
    <section className="my-20 px-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <h3 className="text-4xl font-light italic tracking-widest text-neutral-400 dark:text-neutral-600">
          {title}
        </h3>
        <button 
  onClick={() => setIsExpanded(!isExpanded)}
  className="text-xs font-mono uppercase tracking-widest text-blue-500 hover:text-blue-400 flex items-center gap-1 transition-colors cursor-pointer"
>
  {isExpanded ? "Show Quick Overview" : "Read Detailed Breakdown"} 
  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
</button>
      </div>

      <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-500 hover:shadow-blue-500/10">
        <div className="text-lg leading-relaxed transition-opacity duration-300">
          {isExpanded ? fullContent : shortContent}
        </div>
      </div>
    </section>
  );
}