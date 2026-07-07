"use client";

import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldAlert } from "lucide-react";
import { AtelierSection } from "../../../components/AtelierSection";
import { PromptSimulator } from "../../../components/PromptSimulator";

export default function GenAiWeek2Page() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12 max-w-4xl mx-auto">
      {/* GLOBAL ESCAPE HATCH */}
      <Link href="/" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 mb-12 w-fit">
        <ArrowLeft size={16} /> Back to Atelier
      </Link>
      
      <header className="mb-24">
        <span className="text-blue-500 font-mono text-sm tracking-widest uppercase italic">Class 01 // Week 2</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 tracking-tight">Prompting & Chatbots</h1>
      </header>

      <div className="space-y-12">
        
        {/* --- LECTURE SESSION --- */}
        
        <AtelierSection 
          title="The Lecture" 
          shortContent={
            <p>If LLMs are the engine, Prompt Engineering is the steering wheel. We use hidden instructions (System Prompts) to give AI-Powered Chatbots distinct personalities, rules, and boundaries before they ever speak to a user.</p>
          }
          fullContent={
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2">The Art of Prompt Engineering</h4>
                <p>Prompt engineering is how we shape an AI's output. A simple "zero-shot" prompt just asks a question. But advanced prompting—like giving the AI examples (few-shot) or telling it to take a deep breath and think step-by-step—drastically changes the mathematical pathway it takes to generate a response.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Building AI-Powered Chatbots</h4>
                <p>When you talk to a corporate chatbot, it doesn't start with a blank slate. We inject a "System Prompt" in the background (e.g., "You are a polite customer service bot. Never discuss politics."). This acts as the invisible framework that keeps the bot on-brand and predictable.</p>
              </div>
            </div>
          }
        />

        {/* --- LAB 1 --- */}

        <AtelierSection 
          title="The Lab: System Prompts" 
          isLab={true}
          fullContent={
            <div className="space-y-8">
              <p className="text-neutral-500 text-lg mb-6">Explore how injecting a different System Prompt completely rewires how the AI answers the exact same user query.</p>
              <PromptSimulator />
            </div>
          }
        />

        {/* --- SESSION 2: CREATE FRAMEWORK --- */}

        <AtelierSection 
          title="The CREATE Framework" 
          shortContent={
            <p>To craft reliable, enterprise-grade prompts, we use the CREATE framework. It is a structural blueprint ensuring the AI understands its exact persona, constraints, and the expected format of its final output.</p>
          }
          fullContent={
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Components of a Perfect Prompt</h4>
                <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li><strong>CHARACTER:</strong> Define the persona or role the AI should adopt.</li>
                  <li><strong>REQUEST:</strong> Clearly state the task or what you want the AI to do.</li>
                  <li><strong>EXAMPLES:</strong> Provide instances or patterns for the AI to follow.</li>
                  <li><strong>ADJUSTMENTS/CONSTRAINTS:</strong> Specify limitations or guidelines to refine the output.</li>
                  <li><strong>TEMPLATE/VARIABLES:</strong> Create a structure or placeholders for dynamic inputs.</li>
                  <li><strong>END FORMAT:</strong> Define how you want the final response presented (e.g., table, list, code).</li>
                </ul>
              </div>
            </div>
          }
        />

        {/* --- LAB 2 --- */}

        <AtelierSection 
          title="The Lab: Data Extraction & Reporting" 
          isLab={true}
          fullContent={
            <div className="space-y-8">
              <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900 p-4 rounded-lg flex gap-4 items-start">
                <ShieldAlert className="text-yellow-600 dark:text-yellow-500 shrink-0 mt-1" size={20} />
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>Data Privacy Note:</strong> Large language models and AI companies often use the information you feed them to train their public models. We must always use sanitized text (where PII is replaced by brackets) before sending data to external AI servers. If a human team needs the specific unredacted details later, we provide that information locally and securely.
                </p>
              </div>

              <div className="p-6 bg-neutral-100 dark:bg-neutral-900 rounded-xl font-mono text-sm space-y-8 border border-neutral-200 dark:border-neutral-800">
                 
                 <div>
                    <span className="text-blue-600 dark:text-blue-400 font-bold block mb-2">1. Input: Sanitized Client Email</span>
                    <div className="p-4 bg-white dark:bg-black rounded border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 h-64 overflow-y-auto whitespace-pre-wrap">
{`Subject: URGENT: Catastrophic Platform Outage, SLA Violation, and Pending Legal Action - Ticket #[TICKET_NUMBER]

[RECIPIENT_NAME],

I am escalating this immediately because the recent instability of your enterprise cloud infrastructure has caused irreparable damage to our Q4 revenue targets. As you know, [CLIENT_COMPANY] relies on your enterprise tier for 24/7 availability, especially during our global product launch event yesterday. 

According to our monitoring tools, your primary servers located in [LOCATION] went completely offline for [DOWNTIME_DURATION], starting at exactly [START_TIME]. This is a blatant violation of Section [SECTION_NUMBER] of our Master Services Agreement, which guarantees a strict [SLA_UPTIME_AGREEMENT] uptime for Tier-1 vendors. Our analytics team estimates a direct financial loss of [FINANCIAL_IMPACT] in uncaptured shopping cart checkouts during this blackout window.

When the crash occurred, I immediately paged [INTERNAL_EMPLOYEE] on your emergency engineering support desk. [INTERNAL_EMPLOYEE] promised a hotfix and failover transition within 15 minutes. Instead, we received zero communication for over two hours while our customers flooded our social channels with complaints.

Our CEO, [CEO_NAME], is furious and is currently instructing our legal team to draft a breach of contract notice. If we do not receive a full post-mortem root cause analysis, a validated plan for system redundancy, and the immediate application of our SLA penalty credits by [DEADLINE_TIME] tomorrow, we will immediately migrate our infrastructure to your primary competitor and seek financial damages. Do not route this to a helpdesk tier; I expect a direct response from your office.

Sincerely,
[SENDER_NAME]
[SENDER_TITLE]
[CLIENT_COMPANY]
[SENDER_EMAIL] | [SENDER_PHONE]`}
                    </div>
                 </div>

                 <div>
                    <span className="text-purple-600 dark:text-purple-400 font-bold block mb-2">2. Prompt: CREATE Framework Instruction</span>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded border border-purple-200 dark:border-purple-900 text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap">
                      <strong>CHARACTER:</strong> You are a Senior Incident Response Manager with 10 years of experience managing Enterprise SaaS disputes.<br/><br/>
                      <strong>REQUEST:</strong> Analyze the provided sanitized client escalation email to extract the technical failure details, isolate the financial impact, and draft an objective, fact-based Internal Incident Report for our executive team.<br/><br/>
                      <strong>EXAMPLES/CONTEXT:</strong> This text involves a critical platform outage from a VIP enterprise client threatening contract termination and legal action over an SLA breach. The report must be a clinical, objective summary of verifiable operational facts, stripped of the client's emotional rhetoric.<br/><br/>
                      <strong>ADJUSTMENTS:</strong> Limit the report to under 100 words. Do not use defensive language or apologies. Maintain a strictly neutral tone.<br/><br/>
                      <strong>TEMPLATE:</strong> Populate the blueprint layout template by extracting the facts from the [CLIENT_EMAIL] variable:<br/>
                      Support Ticket ID: [TICKET_NUMBER]<br/>
                      SLA Violation Details: [DOWNTIME_DURATION] vs [SLA_UPTIME_AGREEMENT]<br/>
                      Estimated Financial Impact: [FINANCIAL_IMPACT]<br/>
                      Identified Internal Contact: [INTERNAL_EMPLOYEE]<br/>
                      Material Business Risk: [RISK_SUMMARY]<br/>
                      Client Ultimatum Deadline: [DEADLINE_TIME]<br/><br/>
                      <strong>END FORMAT:</strong> Output the completed template layout as a clean Markdown text block. Return exclusively the populated data fields.
                    </div>
                 </div>

                 <div>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-2">3. Output: Internal Incident Report</span>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded border border-emerald-200 dark:border-emerald-900 text-neutral-800 dark:text-neutral-200 leading-relaxed whitespace-pre-wrap">
Support Ticket ID: [TICKET_NUMBER]
SLA Violation Details: [DOWNTIME_DURATION] total outage vs. [SLA_UPTIME_AGREEMENT] guarantee
Estimated Financial Impact: [FINANCIAL_IMPACT] in uncaptured checkouts
Identified Internal Contact: [INTERNAL_EMPLOYEE]
Material Business Risk: Client threatening breach of contract notice, migration to competitor, and seeking damages for lost revenue.
Client Ultimatum Deadline: [DEADLINE_TIME] tomorrow
                    </div>
                 </div>
              </div>
              
            </div>
          }
        />

        {/* --- LAB 3 --- */}

        <AtelierSection 
          title="The Lab: Organizing a Daily Routine" 
          isLab={true}
          fullContent={
            <div className="space-y-6">
              <p className="text-neutral-500 text-lg">Using the CREATE framework, see how we can instruct an AI to design a highly optimized daily schedule.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
                  <h5 className="font-bold mb-2">Prompt Strategy</h5>
                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                    <li><strong>C:</strong> You are an elite executive productivity coach.</li>
                    <li><strong>R:</strong> Create a hybrid work-from-home schedule for me.</li>
                    <li><strong>E:</strong> e.g., use "Time-Blocking" and "Pomodoro" techniques.</li>
                    <li><strong>A:</strong> Must include 1 hour for lunch, 45 mins for exercise. End workday by 5:30 PM.</li>
                    <li><strong>T:</strong> Use my variables: [START_TIME], [TOP_PRIORITY], [MEETINGS_COUNT].</li>
                    <li><strong>E:</strong> Output as a Markdown table with columns: Time, Activity, Energy Level.</li>
                  </ul>
                </div>
                <div className="p-4 bg-white dark:bg-black rounded-lg border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-center text-neutral-500 italic">
                  *Try applying this framework in ChatGPT or Claude using your own variables!*
                </div>
              </div>
            </div>
          }
        />

        {/* --- LAB 4 --- */}

        <AtelierSection 
          title="The Lab: Crafting a LinkedIn Profile" 
          isLab={true}
          fullContent={
            <div className="space-y-6">
              <p className="text-neutral-500 text-lg">Let's use the CREATE framework to generate a compelling, professional LinkedIn summary without it sounding "robotic."</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
                  <h5 className="font-bold mb-2">Prompt Strategy</h5>
                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                    <li><strong>C:</strong> You are an expert B2B copywriter and career strategist.</li>
                    <li><strong>R:</strong> Write an engaging LinkedIn About section for my profile.</li>
                    <li><strong>E:</strong> Focus on a "Hook, Value Proposition, Call to Action" format.</li>
                    <li><strong>A:</strong> Do not use buzzwords like "synergy," "ninja," or "passionate." Keep under 150 words. Write in first person.</li>
                    <li><strong>T:</strong> My Role: [JOB_TITLE], My Top Achievement: [ACHIEVEMENT], My Target Audience: [AUDIENCE].</li>
                    <li><strong>E:</strong> Output as 3 distinct short paragraphs separated by line breaks.</li>
                  </ul>
                </div>
                <div className="p-4 bg-white dark:bg-black rounded-lg border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-center text-neutral-500 italic">
                  *This strict framework forces the AI to drop its default style and adopt your specific branding.*
                </div>
              </div>
            </div>
          }
        />

      </div>

      {/* COURSE PAGINATION */}
      <nav className="mt-32 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex justify-between">
        <Link href="/classes/genai-agent/week1" className="text-sm font-semibold flex items-center gap-2 hover:-translate-x-2 transition-transform">
          <ArrowLeft size={16} /> Prev: Foundations
        </Link>
        <Link href="/classes/genai-agent/week3" className="text-sm font-semibold flex items-center gap-2 hover:translate-x-2 transition-transform">
          Next: Building Agents <ArrowRight size={16} />
        </Link>
      </nav>
    </main>
  );
}