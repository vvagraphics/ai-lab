import { AtelierSection } from "@/app/components/AtelierSection";

export default function SandboxPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 text-neutral-900 dark:text-neutral-100">
      <main className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Live Builds & Agents</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-16">
          A dedicated space for the tools, agents, and pipelines I am actively building.
        </p>

        <AtelierSection 
          title="Project 1: Setup & Initialization"
          isLab={true}
          fullContent={
            <div className="space-y-4">
              <p>
                Currently setting up the environment for testing custom agents. 
                Future builds and notes will be documented here.
              </p>
            </div>
          }
        />
      </main>
    </div>
  );
}