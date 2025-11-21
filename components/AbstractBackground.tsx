import React from 'react';

interface Props {
  mousePos: { x: number; y: number };
}

export const AbstractBackground: React.FC<Props> = ({ mousePos }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base Grid overlay for tech feel */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Glowing Orbs (Simulating the liquid cooled energy) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-neonBlue/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-neonGreen/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-indigo-900/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />

      {/* Interactive "Chains" or "Nodes" - Parallax layer */}
      <div 
        className="absolute inset-0 opacity-30 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`
        }}
      >
        {/* Abstract SVG graphic representing neural/molecular bonds */}
        <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-40">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00f3ff', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#00ff41', stopOpacity: 0.2 }} />
            </linearGradient>
          </defs>
          
          {/* Floating Nodes */}
          <circle cx="15%" cy="25%" r="4" fill="#00ff41" className="animate-pulse" />
          <circle cx="85%" cy="15%" r="6" fill="#00f3ff" className="animate-pulse" />
          <circle cx="55%" cy="85%" r="3" fill="#ffffff" className="animate-pulse" />
          
          {/* Connecting Lines */}
          <path d="M 100,100 Q 400,50 600,300 T 1000,500" stroke="url(#grad1)" strokeWidth="1" fill="none" className="opacity-50" />
          <path d="M -50,600 Q 300,500 800,800" stroke="url(#grad1)" strokeWidth="1" fill="none" className="opacity-30" />
        </svg>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-deepDark via-deepDark/80" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
    </div>
  );
};