import Link from 'next/link';

export default function Dashboard() {
  return (
    <main className="max-w-6xl mx-auto p-6 md:p-12">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
          AI-Lab
        </h1>
        <p className="text-slate-400 mt-2">
          Interactive Proof-of-Work Portfolio | Fullstack AI Engineering Journey
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* TRACK 1 CARD */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-blue-400">Generative AI and AI Agent</h2>
            <span className="text-xs font-semibold bg-blue-500/20 text-blue-400 px-2.5 py-1 rounded-full">
              In Progress
            </span>
          </div>
          <p className="text-sm text-slate-400 mb-6">Weekly exploration of foundations, prompting strategy, and core chatbot infrastructure.</p>
          
          <div className="space-y-3">
            <Link href="/genai-agent/week1" className="flex items-center justify-between p-3 bg-slate-900/60 hover:bg-slate-900 rounded-lg border border-slate-700/50 transition-all group">
              <div>
                <span className="text-xs text-slate-500 block font-mono">WEEK 1</span>
                <span className="text-sm font-medium text-slate-200 group-hover:text-blue-400">Foundations, Ethics & LLMs</span>
              </div>
              <span className="text-emerald-400 text-xs font-semibold">✓ Done</span>
            </Link>

            <Link href="/genai-agent/week2" className="flex items-center justify-between p-3 bg-slate-900/60 hover:bg-slate-900 rounded-lg border border-slate-700/50 transition-all group">
              <div>
                <span className="text-xs text-slate-500 block font-mono">WEEK 2</span>
                <span className="text-sm font-medium text-slate-200 group-hover:text-blue-400">Prompting & ML Types</span>
              </div>
              <span className="text-emerald-400 text-xs font-semibold">✓ Done</span>
            </Link>

            <div className="flex items-center justify-between p-3 bg-slate-900/20 border border-slate-800 rounded-lg opacity-60">
              <div>
                <span className="text-xs text-slate-600 block font-mono">WEEK 3</span>
                <span className="text-sm font-medium text-slate-400">Building an AI Agent</span>
              </div>
              <span className="text-amber-400 text-xs font-semibold">Next Up</span>
            </div>
          </div>
        </div>

        {/* TRACK 2 CARD */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-teal-400">Applied AI Agents & RAG</h2>
            <span className="text-xs font-semibold bg-teal-500/20 text-teal-400 px-2.5 py-1 rounded-full">
              Queued
            </span>
          </div>
          <p className="text-sm text-slate-400 mb-6">Core system architecture engineering across agent environments, vector indexing, and RAG execution layers.</p>
          
          <div className="space-y-2.5">
            {[
              { label: "Power of AI Agents", path: "/applied-agents/power-of-agents", status: "Pending" },
              { label: "Introduction to RAG", path: "/applied-agents/intro-rag", status: "Pending" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-2.5 bg-slate-900/40 rounded-lg border border-slate-800 transition-all">
                <span className="text-sm text-slate-500 font-medium">{item.label}</span>
                <span className="text-slate-600 text-xs font-medium">{item.status}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}