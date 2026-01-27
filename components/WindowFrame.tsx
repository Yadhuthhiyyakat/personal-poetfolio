// /home/yadhukrishna-t-m/Nextprojects/personal-portfolio-ubuntu/components/WindowFrame.tsx
import React from 'react';

interface WindowFrameProps {
  title: string;
  className?: string;
  children: React.ReactNode;
  iconSrc?: string; // Added iconSrc prop
}

const WindowFrame: React.FC<WindowFrameProps> = ({ title, className, children, iconSrc }) => {
  return (
    <div className={`flex flex-col bg-gray-800 rounded-xl shadow-lg ${className || ''}`}>
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-700 border-b border-gray-600 rounded-t-xl">
        <div className="flex items-center">
          {iconSrc && <img src={iconSrc} alt="App Icon" className="w-4 h-4 mr-2" />} {/* Render icon if provided */}
          <span className="text-sm font-medium text-white">{title}</span>
        </div>
        <div className="flex space-x-2">
          <button className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600"></button>
          <button className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600"></button>
          <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600"></button>
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-grow overflow-hidden rounded-b-xl">
        {children}
      </div>
    </div>
  );
};

export default WindowFrame;