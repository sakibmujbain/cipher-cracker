"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // Optional speed control
}

export const TypewriterEffect = ({ text, speed = 20 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    // 1. Reset text when the input changes
    setDisplayedText(""); 
    
    let i = 0;
    const timer = setInterval(() => {
      // 2. Add one character at a time
      if (i < text.length - 1) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        // Ensure the full text is shown at the end
        setDisplayedText(text);
        clearInterval(timer);
      }
    }, speed);

    // Cleanup timer if the user slides the slider again quickly
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className="font-mono text-cyan-400 break-words">
      {displayedText}
      {/* The Blinking Cursor */}
      <span className="inline-block w-2 h-5 ml-1 align-middle bg-cyan-400 animate-pulse"></span>
    </span>
  );
};