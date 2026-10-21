'use client';

import React from 'react';

/**
 * Hero Background Graphics
 * 1:1 Parity with https://scalient.webflow.io/
 * - Concentric circular arch guide rings centered at the bottom
 * - Signature bottom-center and bottom-left ambient lime glows (rgba(200, 245, 60, 0.18))
 * - Subtle dark green vignette on the sides with high-contrast pitch-black center (#080d0d)
 * - Four-point star sparkles / green crosshair glints
 */
export const HeroBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* Side Dark-Green Vignettes (Vignette on the sides with pitch-black center) */}
      <div
        className="absolute top-0 bottom-0 left-0 w-[480px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at left center, rgba(30, 58, 20, 0.22) 0%, transparent 75%)',
        }}
      />
      <div
        className="absolute top-0 bottom-0 right-0 w-[480px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at right center, rgba(30, 58, 20, 0.22) 0%, transparent 75%)',
        }}
      />

      {/* Concentric Geometric Arch Rings */}
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1600px] h-[900px] max-w-none opacity-40 pointer-events-none"
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

      {/* Signature Bottom-Center Ambient Lime Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1400px] h-[600px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at bottom center, rgba(200, 245, 60, 0.22) 0%, rgba(200, 245, 60, 0.10) 45%, transparent 70%)',
        }}
      />

      {/* Bottom-Left Ambient Lime Glow */}
      <div
        className="absolute bottom-0 left-[5%] w-[750px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at bottom left, rgba(200, 245, 60, 0.20) 0%, rgba(200, 245, 60, 0.06) 50%, transparent 70%)',
        }}
      />

      {/* Left Crosshair Sparkle Glint */}
      <div className="absolute top-[34%] left-[6%] sm:left-[10%] opacity-50 hover:opacity-80 transition-opacity">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="16" y1="0" x2="16" y2="32" stroke="#c8f53c" strokeWidth="1" strokeOpacity="0.7" />
          <line x1="0" y1="16" x2="32" y2="16" stroke="#c8f53c" strokeWidth="1" strokeOpacity="0.7" />
          <circle cx="16" cy="16" r="2.5" fill="#c8f53c" />
        </svg>
      </div>

      {/* Right Crosshair Sparkle Glint */}
      <div className="absolute top-[52%] right-[6%] sm:right-[10%] opacity-50 hover:opacity-80 transition-opacity">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="14" y1="0" x2="14" y2="28" stroke="#c8f53c" strokeWidth="1" strokeOpacity="0.7" />
          <line x1="0" y1="14" x2="28" y2="14" stroke="#c8f53c" strokeWidth="1" strokeOpacity="0.7" />
          <circle cx="14" cy="14" r="2" fill="#c8f53c" />
        </svg>
      </div>
    </div>
  );
};
