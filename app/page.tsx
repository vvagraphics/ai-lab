'use client';
import { useState } from 'react';

export default function Home() {
  const [promptType, setPromptType] = useState<'zero' | 'few'>('zero');

  return (
    <main className="min-h-screen bg-gray-50 p-8 text-gray-900">
      <header className="mb-12 border-b pb-6">
        <h1 className="text-4xl font-bold text-blue-700">AI-Lab</h1>
        <p className="text-lg text-gray-600 mt-2">Week 1: Fundamentals & Context Windows</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        
        {/* LEFT COLUMN: ML Fundamentals */}
        <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Types of Machine Learning</h2>
          
          <div className="space-y-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-bold text-blue-800 text-lg">1. Supervised Learning</h3>
              <p className="mt-2 text-sm">Trains on labeled data.</p>
              <p className="mt-2 text-sm text-gray-700 italic">
                Example: Tagging 1,000 product reviews as "Happy" or "Angry" so a computer learns to flag complaints.
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <h3 className="font-bold text-purple-800 text-lg">2. Unsupervised Learning</h3>
              <p className="mt-2 text-sm">Discovers hidden patterns in unlabeled data.</p>
              <p className="mt-2 text-sm text-gray-700 italic">
                Example: Grouping shoppers into clusters based on similar buying habits without pre-existing labels.
              </p>
            </div>

            <div className="p-4 bg-teal-50 rounded-lg border border-teal-100">
              <h3 className="font-bold text-teal-800 text-lg">3. Reinforcement Learning</h3>
              <p className="mt-2 text-sm">Learns via trial and error using a reward system.</p>
              <p className="mt-2 text-sm text-gray-700 italic">
                Example: A drone earning points for staying on course and losing points for hitting obstacles.
              </p>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN: Prompting Simulator */}
        <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Prompting Simulator</h2>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Scenario:</label>
            <div className="p-3 bg-gray-100 rounded text-sm text-gray-800">
              Write an email explaining an Electric Vehicle delivery is delayed by 2 months.
            </div>
          </div>

          <div className="flex space-x-2 mb-4">
            <button 
              onClick={() => setPromptType('zero')}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${promptType === 'zero' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Zero-Shot Prompt
            </button>
            <button 
              onClick={() => setPromptType('few')}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${promptType === 'few' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Few-Shot Prompt
            </button>
          </div>

          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm min-h-[250px]">
            {promptType === 'zero' ? (
              <div>
                <p className="text-gray-400 mb-4">// ZERO-SHOT OUTPUT (Guessing without context):</p>
                <p>Dear Customer,</p>
                <br/>
                <p>Thank you for contacting us! We are so sorry for the delay... To show our appreciation for your patience, we have credited a 15% discount coupon to your account for your next purchase! Have a wonderful weekend.</p>
              </div>
            ) : (
              <div>
                <p className="text-gray-400 mb-4">// FEW-SHOT OUTPUT (Pattern matching from provided examples):</p>
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
    </main>
  );
}