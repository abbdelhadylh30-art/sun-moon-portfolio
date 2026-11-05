"use client";

import { useView } from "@/components/theme-provider";

export default function Home() {
  const { view, setView } = useView();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <button
            onClick={() => setView("sun")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              view === "sun"
                ? "bg-[var(--accent)] text-[var(--primary-foreground)]"
                : "border border-[var(--line)]"
            }`}
          >
            ☀️ Sun
          </button>
          <button
            onClick={() => setView("moon")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              view === "moon"
                ? "bg-[var(--accent)] text-[var(--primary-foreground)]"
                : "border border-[var(--line)]"
            }`}
          >
            🌙 Moon
          </button>
        </div>

        <h1 className="text-5xl font-bold mb-4">
          {view === "sun"
            ? "A website that works as hard as you do."
            : "Full-stack developer — open to work."}
        </h1>
        <p className="text-lg opacity-80 max-w-xl">
          {view === "sun"
            ? "Fast bilingual websites for clinics, restaurants, salons and real-estate offices in Egypt & the Gulf."
            : "Next.js 16, TypeScript, bilingual AR/EN with proper RTL. Building production systems."}
        </p>
      </div>
    </main>
  );
}
