import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      {/* Main Dot */}
      <div 
        className="fixed top-0 left-0 w-4 h-4 bg-neonGreen rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-75 ease-out hidden sm:block"
        style={{ 
          transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${isPointer ? 1.5 : 1})` 
        }}
      />
      {/* Trailing Ring */}
      <div 
        className="fixed top-0 left-0 w-10 h-10 border border-neonBlue rounded-full pointer-events-none z-40 transition-transform duration-300 ease-out hidden sm:block"
        style={{ 
          transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${isPointer ? 0.5 : 1})`,
          opacity: isPointer ? 0.5 : 1
        }}
      />
    </>
  );
};