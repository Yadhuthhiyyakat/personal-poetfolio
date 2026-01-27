
import React, { useEffect, useRef } from 'react';
import { SidebarItemIcon } from './Sidebar'; // Re-use icon definitions from Sidebar if available

interface AppLauncherProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateAndClose: (path: string) => void;
}

interface LauncherAppProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  onNavigateAndClose: (path: string) => void;
}

const LauncherApp: React.FC<LauncherAppProps> = ({ icon, label, path, onNavigateAndClose }) => {
  return (
    <button
      className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E95420]"
      onClick={() => onNavigateAndClose(path)}
      aria-label={`Open ${label}`}
    >
      <div className="w-14 h-14 mb-2 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-100">{label}</span>
    </button>
  );
};

const AppLauncher: React.FC<AppLauncherProps> = ({ isOpen, onClose, onNavigateAndClose }) => {
  const launcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (launcherRef.current && !launcherRef.current.contains(event.target as Node)) {
        // Only close if the click is outside the content, not the close button itself.
        // This is handled by a transparent full screen div, so any click will close it.
        // The individual app buttons will prevent the click from propagating to here.
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4" ref={launcherRef}>
      {/* Close button at the top-right, similar to Ubuntu's Activities overview */}
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E95420]"
        onClick={onClose}
        aria-label="Close applications launcher"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl w-full">
        <LauncherApp
          icon={
            <img src="app/assets/terminal.webp" alt="About Icon" className="w-12 h-12" />
          }
          label="About"
          path="/about"
          onNavigateAndClose={onNavigateAndClose}
        />
        <LauncherApp
          icon={
            <img src="app/assets/VS.png" alt="Projects Icon" className="w-12 h-12" />
          }
          label="Projects"
          path="/projects"
          onNavigateAndClose={onNavigateAndClose}
        />
        <LauncherApp
          icon={
            <img src="app/assets/mail.png" alt="Contact Icon" className="w-12 h-12" />
          }
          label="Contact"
          path="/contact"
          onNavigateAndClose={onNavigateAndClose}
        />
      </div>
    </div>
  );
};

export default AppLauncher;