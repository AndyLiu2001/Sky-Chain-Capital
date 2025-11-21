import React, { useState, useEffect, useRef } from 'react';
import { AbstractBackground } from './components/AbstractBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CustomCursor } from './components/CustomCursor';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden selection:bg-neonGreen selection:text-black">
      {/* Dynamic Abstract Background */}
      <AbstractBackground mousePos={mousePos} />
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-grow flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-12">
          <Hero mousePos={mousePos} />
        </main>

        <footer className="w-full p-8 text-center text-white/30 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Sky Chain Capital
        </footer>
      </div>

      {/* Custom Cursor Overlay */}
      <CustomCursor />
    </div>
  );
};

export default App;