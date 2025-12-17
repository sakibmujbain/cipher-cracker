"use client";

import { useState, useMemo } from "react";
import { analyzeText, decryptText } from "@/lib/analyzer"; 
import { FrequencyChart } from "@/components/FrequencyChart";

export default function Home() {
  const [input, setInput] = useState("");
  const [shift, setShift] = useState(0);

  // Analyze frequency (Memoized for performance)
  const frequencyData = useMemo(() => analyzeText(input), [input]);
  
  // Decrypt text in real-time based on slider value
  const decryptedText = useMemo(() => decryptText(input, shift), [input, shift]);

  return (
    <main className="min-h-screen bg-black text-gray-100 p-8 flex flex-col items-center font-sans">
      <div className="max-w-4xl w-full space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Cipher Breaker
          </h1>
          <p className="text-gray-400">
            Paste text, analyze frequency, and shift to decrypt.
          </p>
        </div>

        {/* Input Section */}
        <div className="w-full space-y-2">
          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Ciphertext Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your code here (e.g. GB OR ABG GB OR)..."
            className="w-full h-32 p-4 bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none font-mono text-sm resize-y placeholder-gray-600"
          />
        </div>

        {/* Chart Section */}
        <FrequencyChart data={frequencyData} />

        {/* 🎛️ NEW: Decryption Dashboard */}
        <div className="bg-gray-900 p-6 rounded-xl border border-blue-500/30 shadow-2xl space-y-6">
          
          <div className="flex justify-between items-center border-b border-gray-800 pb-4">
            <h2 className="text-xl font-bold text-white">Decryption Tool</h2>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-mono text-sm">
              Shift: +{shift}
            </span>
          </div>

          {/* The Slider */}
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="25"
              value={shift}
              onChange={(e) => setShift(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-cyan-400"
            />
            <div className="flex justify-between text-xs text-gray-500 font-mono">
              <span>0</span>
              <span>13 (ROT13)</span>
              <span>25</span>
            </div>
          </div>

          {/* The Result */}
          <div className="space-y-2">
             <label className="text-xs text-gray-500 uppercase">Decrypted Result:</label>
             <div className="p-4 bg-black/50 rounded-lg border border-gray-700 min-h-[100px] font-mono text-cyan-400 whitespace-pre-wrap break-words">
               {decryptedText || "Waiting for input..."}
             </div>
          </div>
          
        </div>

      </div>
    </main>
  );
}