
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type InfiniteTextMarqueeProps = {
  text?: string;
  link?: string;
  speed?: number;
  showTooltip?: boolean;
  tooltipText?: string;
  fontSize?: string;
  textColor?: string;
  hoverColor?: string;
  className?: string;
};

export const InfiniteTextMarquee: React.FC<InfiniteTextMarqueeProps> = ({
  text = "Let's Get Started",
  link = "#",
  speed = 20,
  showTooltip = true,
  tooltipText = "Time to Flex💪",
  fontSize = "8rem",
  textColor = "", 
  hoverColor = "",
  className,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const maxRotation = 8;

  useEffect(() => {
    if (!showTooltip) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      const midpoint = window.innerWidth / 2;
      const distanceFromMidpoint = Math.abs(e.clientX - midpoint);
      const rotation = (distanceFromMidpoint / midpoint) * maxRotation;

      setRotation(e.clientX > midpoint ? rotation : -rotation);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showTooltip]);

  const repeatedText = Array(4).fill(text).join(" — ") + " — ";

  return (
    <div className={cn("relative overflow-hidden select-none", className)}>
      {showTooltip && (
        <div
          className={cn(
            "fixed z-[99] pointer-events-none transition-opacity duration-300 font-bold px-3 py-1.5 rounded-lg text-nowrap bg-indigo-600 text-white text-xs shadow-xl border border-white/20",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          style={{
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
            transform: `rotateZ(${rotation}deg) translate(-50%, -140%)`,
          }}
        >
          <p>{tooltipText}</p>
        </div>
      )}

      <div className="w-full flex items-center">
        <motion.div
          className="whitespace-nowrap flex"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: speed,
            ease: "linear",
          }}
        >
          <a href={link} className="flex items-center">
            <span
              className="cursor-pointer font-bold tracking-tight transition-colors duration-300"
              style={{
                fontSize,
                color: isHovered && hoverColor ? hoverColor : (textColor || undefined),
              }}
            >
              {repeatedText}
            </span>
            <span
              className="cursor-pointer font-bold tracking-tight transition-colors duration-300"
              style={{
                fontSize,
                color: isHovered && hoverColor ? hoverColor : (textColor || undefined),
              }}
            >
              {repeatedText}
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
