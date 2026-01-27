
import React, { useEffect, useRef } from 'react';
interface LockScreenProps {
  onUnlock: () => void;
  name: string;
  photoUrl: string;
  subtitle: string;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock, name, photoUrl, subtitle }) => {
  const wallpaperUrl = '/images/wallpaper.jpg'; // Use the imported local wallpaper asset
  const instructionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        onUnlock();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Optional: Animate the instruction text
    const animateInstruction = () => {
      if (instructionRef.current) {
        instructionRef.current.classList.add('animate-pulse');
      }
    };
    const animationTimeout = setTimeout(animateInstruction, 1000); // Start pulse after 1 second

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearTimeout(animationTimeout);
    };
  }, [onUnlock]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${wallpaperUrl})` }}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Dark overlay with blur */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-xl"></div>

      <div className="relative z-10 flex flex-col items-center p-8">
        <img
          src={photoUrl}
          alt={name}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#E95420] mb-6 shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 text-shadow-lg">
          {name}
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-200 mb-12 text-shadow-md">
          {subtitle}
        </p>
        <div ref={instructionRef} className="text-lg md:text-xl text-gray-300 font-medium tracking-wide">
          Press <span className="font-bold text-[#E95420]">ENTER</span> to unlock
        </div>
      </div>
    </div>
  );
};

export default LockScreen;