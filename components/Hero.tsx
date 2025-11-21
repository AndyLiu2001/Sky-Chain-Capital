import React from 'react';

interface Props {
  mousePos: { x: number; y: number };
}

export const Hero: React.FC<Props> = ({ mousePos }) => {
  return (
    <div className="relative max-w-6xl w-full mx-auto z-20">
      
      {/* Floating decoration */}
      <div className="absolute -top-20 -left-10 w-24 h-24 border-2 border-neonBlue/30 rounded-full animate-spin-slow hidden lg:block" />
      
      {/* Text Container with subtle tilt effect */}
      <div 
        className="flex flex-col items-start justify-center text-left space-y-8 transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * 2}deg) rotateY(${mousePos.x * 2}deg)`
        }}
      >
        {/* Kicker */}
        <div className="inline-flex items-center space-x-3 overflow-hidden">
          <span className="h-[1px] w-12 bg-neonGreen"></span>
          <span className="text-neonGreen font-mono text-sm tracking-[0.2em] uppercase animate-pulse">
            Visionary & Exclusive (Focus on Future)
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight">
          <span className="block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-gray-400 transition-all duration-500">
            WE DON'T
          </span>
          <span className="block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-gray-400 transition-all duration-500">
            PREDICT THE
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonGreen">
            FUTURE.
          </span>
          <span className="block mt-4 text-3xl sm:text-5xl lg:text-6xl text-white/90 font-extrabold">
            WE FUND ITS <br className="sm:hidden"/> FOUNDATION.
          </span>
        </h1>

        {/* Description Box - Glassmorphism */}
        <div className="mt-12 max-w-2xl p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_40px_-10px_rgba(0,243,255,0.15)] hover:shadow-[0_0_60px_-5px_rgba(0,255,65,0.2)] transition-all duration-500 group">
          <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed">
            We specialize in <span className="text-white font-semibold">high-conviction growth equity</span>, 
            targeting proprietary deep-tech platforms in{' '}
            <span className="text-neonBlue font-medium group-hover:text-neonGreen transition-colors">AI-driven solutions</span>{' '}
            and{' '}
            <span className="text-neonBlue font-medium group-hover:text-neonGreen transition-colors">computational foundations</span>.
          </p>
        </div>

      </div>
    </div>
  );
};