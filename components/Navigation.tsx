import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="w-full flex justify-between items-center p-6 sm:p-10 z-50">
      <div className="text-white font-black text-xl tracking-tighter group cursor-pointer">
        SKY CHAIN <span className="text-neonBlue group-hover:text-neonGreen transition-colors duration-300">CAPITAL</span>
      </div>
      <div className="hidden sm:block">
        <button className="px-6 py-2 border border-white/20 rounded-full text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
          Contact Us
        </button>
      </div>
    </nav>
  );
};