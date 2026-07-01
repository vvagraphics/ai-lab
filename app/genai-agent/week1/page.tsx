import Link from 'next/link';

export default function Week1Page() {
  return (
    <main className="max-w-5xl mx-auto p-6 md:p-12 min-h-screen flex flex-col">
      <Link href="/" className="text-sm text-blue-400 hover:underline mb-6 inline-block">
        ← Back to Dashboard
      </Link>
      
      <header className="mb-10 border-b border-slate-700 pb-6">
        <h1 className="text-3xl font-bold text-slate-100">Week 1: GenAI Orientation & Foundations</h1>
        <p className="text-slate-400 mt-2">Setting the baseline: What is GenAI, how do LLMs work, and how do we use them responsibly?</p>
      </header>

      <div className="flex-grow space-y-8">
        
        {/* Module 1: Foundations */}
        <section className="bg-slate-800 p-8 rounded-xl border border-slate-700">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">1. Foundations in Generative AI</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Unlike traditional AI which is trained to predict or classify existing data, Generative AI (GenAI) creates net-new content based on patterns it learned during training.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-700/50">
              <h3 className="font-bold text-slate-200 mb-2">📝 Text Generation</h3>
              <p className="text-sm text-slate-400">Drafting emails, writing code, or summarizing documents.</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-700/50">
              <h3 className="font-bold text-slate-200 mb-2">🎨 Image Generation</h3>
              <p className="text-sm text-slate-400">Creating UI mockups, marketing assets, or conceptual art.</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-700/50">
              <h3 className="font-bold text-slate-200 mb-2">🎵 Audio & Video</h3>
              <p className="text-sm text-slate-400">Generating voiceovers or synthesizing realistic avatars.</p>
            </div>
          </div>
        </section>

        {/* Module 2: Ethics */}
        <section className="bg-slate-800 p-8 rounded-xl border border-slate-700">
          <h2 className="text-2xl font-semibold text-teal-400 mb-4">2. Ethical Considerations</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            With great power comes the need for guardrails. Deploying AI in a business environment requires strict adherence to ethical principles.
          </p>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">►</span>
              <div><strong>Hallucinations:</strong> AI models don't "know" facts; they predict the next logical word. They can confidently output false information. Always verify.</div>
            </li>
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">►</span>
              <div><strong>Data Privacy:</strong> Never put proprietary company code, PII (Personally Identifiable Information), or client data into a public model like ChatGPT.</div>
            </li>
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">►</span>
              <div><strong>Algorithmic Bias:</strong> Models inherit the biases present in their training data. Output must be checked for discriminatory or non-inclusive language.</div>
            </li>
          </ul>
        </section>

        {/* Module 3: LLMs */}
        <section className="bg-slate-800 p-8 rounded-xl border border-slate-700">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">3. Introduction to Large Language Models</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            LLMs are a specific type of GenAI built on the <strong>Transformer architecture</strong>. They are trained on massive datasets of text to understand syntax, semantics, and context.
          </p>
          <div className="p-4 bg-slate-900 rounded-lg border border-slate-700/50 text-sm text-slate-300 italic">
            <strong>Key Concept:</strong> An LLM is essentially the world's most advanced autocomplete. It uses vast neural networks to calculate the highest probability of what the next word in a sequence should be based on the context window you provide.
          </div>
        </section>

      </div>

      {/* BOTTOM NAVIGATION */}
      <div className="mt-12 pt-6 border-t border-slate-800 flex justify-between items-center">
        <Link href="/" className="px-5 py-2.5 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors text-sm font-medium">
          ← Dashboard
        </Link>
        <Link href="/genai-agent/week2" className="px-5 py-2.5 bg-blue-600 text-white hover:bg-blue-500 rounded-lg transition-colors text-sm font-medium">
          Week 2: Prompting & ML Types →
        </Link>
      </div>
    </main>
  );
}