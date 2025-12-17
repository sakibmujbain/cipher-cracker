"use client"; // This must be a client component to handle user input

import { useState, useMemo } from "react";
import { analyzeText } from "../lib/analyzer";
import { FrequencyChart } from "../components/FrequencyChart";

export default function Home() {
  const [input, setInput] = useState("");

  // useMemo ensures we don't re-run the O(N) analysis loop 
  // unless the input string actually changes.
  const frequencyData = useMemo(() => analyzeText(input), [input]);

  return (
    <main className="min-h-screen bg-black text-gray-100 p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Cipher Breaker
          </h1>
          <p className="text-gray-400">
            Paste your encrypted text below to analyze letter frequency.
          </p>
        </div>

        {/* Input Section */}
        <div className="w-full">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste ciphertext here (e.g. URYYB JBEYQ)..."
            className="w-full h-32 p-4 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none font-mono text-sm resize-y"
          />
        </div>

        {/* Visualization Section */}
        <FrequencyChart data={frequencyData} />

      </div>
    </main>
  );
}