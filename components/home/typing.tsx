"use client";

import { useEffect, useRef, useState } from "react";
import focuses from "./focus.json";

const FOCUSES = Object.values(focuses) as string[];

const TYPE_SPEED = 60;
const DELETE_SPEED = 35;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_BEFORE_DELETE = 400;

export default function TypingFocus() {
  const [displayText, setDisplayText] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [chipsVisible, setChipsVisible] = useState(false);

  const indexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Stagger chip reveal on mount
    const t = setTimeout(() => setChipsVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const tick = () => {
      const word = FOCUSES[indexRef.current];
      const isDeleting = isDeletingRef.current;
      const next = isDeleting
        ? word.slice(0, charIndexRef.current - 1)
        : word.slice(0, charIndexRef.current + 1);

      setDisplayText(next);
      charIndexRef.current += isDeleting ? -1 : 1;

      if (!isDeleting && charIndexRef.current === word.length) {
        setActiveIndex(indexRef.current);
        timeoutRef.current = setTimeout(() => {
          isDeletingRef.current = true;
          timeoutRef.current = setTimeout(tick, PAUSE_BEFORE_DELETE);
        }, PAUSE_AFTER_TYPE);
        return;
      }

      if (isDeleting && charIndexRef.current === 0) {
        isDeletingRef.current = false;
        indexRef.current = (indexRef.current + 1) % FOCUSES.length;
        timeoutRef.current = setTimeout(tick, 300);
        return;
      }

      timeoutRef.current = setTimeout(tick, isDeleting ? DELETE_SPEED : TYPE_SPEED);
    };

    timeoutRef.current = setTimeout(tick, 500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="py-5 font-sans">
      
<span className="text-[15px] text-gray-400 dark:text-gray-500 mr-2.5 whitespace-nowrap select-none">
          Focused on:
        </span>
      {/* Typing display */}
      <div className="inline-flex items-center ">
        
        <span className="text-lg font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
          {displayText}
        </span>
        <span className="inline-block w-[3px] h-[46px] bg-gray-900 dark:bg-white ml-1 rounded-sm align-middle animate-[blink_0.9s_step-end_infinite]" />
      </div>

      {/* Divider */}
      {/* <div className="w-10 h-0.5 bg-gray-900 dark:bg-white rounded my-6" /> */}

      {/* Chips */}
      {/* <div className="flex flex-wrap gap-2">
        {FOCUSES.map((focus, i) => (
          <span
            key={focus}
            className={[
              "font-mono text-xs px-3.5 py-1.5 rounded-full border transition-all duration-300",
              chipsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2",
              activeIndex === i
                ? "border-gray-900 text-gray-900 bg-white dark:border-white dark:text-white dark:bg-transparent"
                : "border-gray-200 text-gray-400 bg-gray-50 dark:border-gray-700 dark:text-gray-500 dark:bg-gray-900",
            ].join(" ")}
            style={{ transitionDelay: chipsVisible ? `${i * 60}ms` : "0ms" }}
          >
            {focus}
          </span>
        ))}
      </div> */}

      
    </section>
  );
}