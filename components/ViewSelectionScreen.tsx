
import React from 'react';

interface ViewSelectionScreenProps {
  onSelectView: (view: 'linux' | 'professional') => void;
  name: string;
  photoUrl: string;
  subtitle: string;
}

const ViewSelectionScreen: React.FC<ViewSelectionScreenProps> = ({ onSelectView, name, photoUrl, subtitle }) => {
  const wallpaperUrl = 'https://raw.githubusercontent.com/mdazlaansaleem/ubuntu-portfolio/main/original-image.jpg'; // Consistent with LockScreen

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${wallpaperUrl})` }}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Dark overlay with blur */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-xl"></div>

      <div className="relative z-10 flex flex-col items-center p-8 text-center max-w-xl">
        <img
          src={photoUrl}
          alt={name}
          className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#E95420] mb-6 shadow-lg"
        />
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-shadow-lg">
          Welcome, {name}!
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-200 mb-8 text-shadow-md">
          {subtitle}
        </p>

        <p className="text-xl md:text-2xl font-bold text-gray-100 mb-8 tracking-wide">
          How would you like to explore my portfolio?
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-sm">
          <button
            onClick={() => onSelectView('linux')}
            className="flex-1 bg-[#E95420] text-white py-4 px-6 rounded-lg shadow-xl hover:bg-orange-700 transition-colors duration-300
                       focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-75 text-lg font-semibold"
            aria-label="Enter Developer Mode (Ubuntu UI)"
          >
            Developer Mode 
          </button>
          <button
            onClick={() => onSelectView('professional')}
            className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-lg shadow-xl hover:bg-blue-700 transition-colors duration-300
                       focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75 text-lg font-semibold"
            aria-label="Enter Client Mode (Simple UI)"
          >
            Client Mode 
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewSelectionScreen;