"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  lines: string[];
  onComplete?: () => void;
  showCursor?: boolean;
  cursorBlinkSpeed?: number;
  typingSpeed?: number;
  lineDelay?: number;
  className?: string;
}

export default function TypewriterText({
  lines,
  onComplete,
  showCursor = true,
  cursorBlinkSpeed = 500,
  typingSpeed = 50,
  lineDelay = 100,
  className = "",
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState<string[]>(
    lines.map(() => "")
  );
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursorBlink, setShowCursorBlink] = useState(true);

  // Typewriter effect - type character by character
  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const currentLine = lines[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          const newText = [...prev];
          newText[currentLineIndex] =
            currentLine.substring(0, currentCharIndex + 1);
          return newText;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      // Move to next line after delay
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, lineDelay);

      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, lines, typingSpeed, lineDelay, onComplete]);

  // Cursor blink effect
  useEffect(() => {
    if (!showCursor || isComplete) return;

    const interval = setInterval(() => {
      setShowCursorBlink((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(interval);
  }, [showCursor, cursorBlinkSpeed, isComplete]);

  return (
    <div className={className}>
      {displayedText.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span>{line}</span>
          {/* Show cursor only on current line being typed */}
          {index === currentLineIndex && !isComplete && showCursor && (
            <span
              style={{
                display: "inline-block",
                marginLeft: "2px",
                opacity: showCursorBlink ? 1 : 0,
                transition: "opacity 0.1s",
              }}
            >
              |
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
