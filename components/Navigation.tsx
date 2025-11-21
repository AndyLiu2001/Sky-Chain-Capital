import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="w-full flex justify-between items-center p-6 sm:p-10 z-50 relative">
      <div className="text-white font-black text-xl sm:text-2xl tracking-tighter group cursor-pointer hover:scale-105 transition-transform duration-300 origin-left">
        SKY CHAIN <span className="text-neonBlue group-hover:text-neonGreen transition-colors duration-300">CAPITAL</span>
      </div>
      <div className="hidden sm:block">
        <button className="px-8 py-3 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:bg-neonGreen hover:scale-110 hover:-rotate-2 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,65,0.6)] active:scale-95">
          GET IN TOUCH
        </button>
      </div>
    </nav>
  );
};