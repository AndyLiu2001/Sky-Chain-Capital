import React from 'react';

interface Props {
  mousePos: { x: number; y: number };
}

export const Hero: React.FC<Props> = ({ mousePos }) => {
  // Calculate separate parallax speeds for layers to create playful depth
  const x1 = mousePos.x * 15;
  const y1 = mousePos.y * 15;
  const x2 = mousePos.x * 30;
  const y2 = mousePos.y * 30;
  const x3 = mousePos.x * 50;
  const y3 = mousePos.y * 50;

  return (
    <div className="relative w-full max-w-7xl mx-auto z-20 flex flex-col items-center justify-center text-center min-h-[60vh]">
      
      {/* Decorative playful elements floating in background */}
      <div 
        className="absolute top-0 right-10 lg:right-32 w-24 h-24 border-4 border-neonBlue/20 rounded-full animate-spin-slow hidden lg:block pointer-events-none transition-transform duration-100 ease-out" 
        style={{ transform: `translate(${x1}px, ${y1}px)` }}
      />
      <div 
        className="absolute bottom-20 left-10 lg:left-32 w-12 h-12 bg-neonGreen/20 rounded-full animate-float pointer-events-none transition-transform duration-100 ease-out"
        style={{ transform: `translate(${x1 * -1}px, ${y1 * -1}px)` }}
      />

      {/* Kicker Pill - Bouncy */}
      <div 
        className="mb-10 inline-flex items-center justify-center px-6 py-2 rounded-full border border-neonGreen/30 bg-neonGreen/10 backdrop-blur-sm transition-transform duration-100 ease-out hover:scale-105 cursor-default"
        style={{ transform: `translate(${x1 * 0.5}px, ${y1 * 0.5}px)` }}
      >
        <span className="w-2 h-2 bg-neonGreen rounded-full mr-3 animate-pulse"></span>
        <span className="text-neonGreen font-mono text-xs font-bold tracking-widest uppercase">
          Deep Tech Ventures
        </span>
      </div>

      {/* Main Headline - Layered Parallax for 3D feel */}
      <div className="relative perspective-1000 space-y-2 sm:space-y-4">
        
        {/* Layer 1 */}
        <div 
          className="text-5xl sm:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter select-none transition-transform duration-75 ease-linear hover:skew-x-2"
          style={{ transform: `translate(${x1 * -1}px, ${y1 * -1}px)` }}
        >
          WE DON'T
        </div>
        
        {/* Layer 2 - Ghost effect */}
        <div className="relative inline-block">
          <div 
            className="text-5xl sm:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 relative z-10"
            style={{ transform: `translate(${x2 * -1}px, ${y2 * -1}px)` }}
          >
            PREDICT
          </div>
          <div 
            className="absolute top-0 left-0 w-full h-full text-5xl sm:text-8xl lg:text-9xl font-black text-white/10 pointer-events-none mix-blend-overlay"
            style={{ transform: `translate(${x3}px, ${y3}px)` }}
          >
            PREDICT
          </div>
        </div>
        
        {/* Layer 3 - Highlight */}
        <div 
           className="text-5xl sm:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter select-none transition-transform duration-100 ease-out"
           style={{ transform: `translate(${x1}px, ${y1}px)` }}
        >
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonGreen">
             THE FUTURE
           </span>
        </div>
      </div>

      {/* Subtext / Description - Floating Card */}
      <div 
        className="mt-16 max-w-xl mx-auto transition-transform duration-200 ease-out p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10"
        style={{ 
          transform: `translate(${x1 * 0.5}px, ${y1 * 0.5}px) rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)` 
        }}
      >
        <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed">
          We fund its <span className="text-neonGreen font-bold underline decoration-neonGreen/30 decoration-4 underline-offset-4">foundation</span>.
        </p>
        <p className="text-sm sm:text-base text-white/50 font-light mt-3">
          High-conviction growth equity for AI & computational platforms.
        </p>
      </div>

      {/* Playful Arrow */}
      <div className="mt-16 animate-bounce opacity-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>

    </div>
  );
};