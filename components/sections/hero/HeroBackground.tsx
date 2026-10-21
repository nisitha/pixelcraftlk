'use client';

import React from 'react';

/**
 * Hero Background Graphics
 * Recreates the reference concentric circular arch rings, radial lime ambient glow,
 * and decorative sparkle glints
 */
export const HeroBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* Concentric Geometric Arch Rings */}
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1600px] h-[900px] max-w-none opacity-40"
        viewBox="0 0 1600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="800" cy="850" r="300" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
        <circle cx="800" cy="850" r="480" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
        <circle cx="800" cy="850" r="660" stroke="white" strokeOpacity="0.04" strokeWidth="1" />
        <circle cx="800" cy="850" r="840" stroke="white" strokeOpacity="0.035" strokeWidth="1" />
        <circle cx="800" cy="850" r="1020" stroke="white" strokeOpacity="0.03" strokeWidth="1" />
        <circle cx="800" cy="850" r="1200" stroke="white" strokeOpacity="0.02" strokeWidth="1" />
      </svg>

      {/* Bottom Center Radial Glow (Electric Lime Accent) */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(188, 234, 62, 0.08) 0%, rgba(121, 112, 255, 0.04) 45%, transparent 70%)',
        }}
      />

      {/* Left Crosshair Sparkle Glint */}
      <div className="absolute top-[34%] left-[6%] sm:left-[10%] opacity-40 hover:opacity-80 transition-opacity">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="16" y1="0" x2="16" y2="32" stroke="#bcea3e" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="0" y1="16" x2="32" y2="16" stroke="#bcea3e" strokeWidth="1" strokeOpacity="0.6" />
          <circle cx="16" cy="16" r="2" fill="#bcea3e" />
        </svg>
      </div>

      {/* Right Crosshair Sparkle Glint */}
      <div className="absolute top-[52%] right-[6%] sm:right-[10%] opacity-40 hover:opacity-80 transition-opacity">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="14" y1="0" x2="14" y2="28" stroke="#bcea3e" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="0" y1="14" x2="28" y2="14" stroke="#bcea3e" strokeWidth="1" strokeOpacity="0.6" />
          <circle cx="14" cy="14" r="1.5" fill="#bcea3e" />
        </svg>
      </div>
    </div>
  );
};
