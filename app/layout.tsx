
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'; // New Sidebar component
import AppLauncher from '../components/AppLauncher'; // New AppLauncher component

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showAppLauncher, setShowAppLauncher] = useState(false);

  const toggleAppLauncher = () => {
    setShowAppLauncher(prev => !prev);
  };

  const handleNavigateAndCloseLauncher = (path: string) => {
    window.location.hash = path;
    setShowAppLauncher(false);
  };

  return (
    <div className="flex h-screen bg-gray-800 text-gray-100">
      <Navbar iconSrc="/images/logos/ubuntu.png" /> {/* Top Bar */}
      <Sidebar onToggleAppLauncher={toggleAppLauncher} /> {/* Left Dock, pass toggle function */}
      
      {/* Main content area, offset by Navbar height and Sidebar width */}
      <main className="flex-grow pt-8 md:ml-20 overflow-auto">
        {children}
      </main>

      {/* App Launcher overlay */}
      <AppLauncher
        isOpen={showAppLauncher}
        onClose={toggleAppLauncher}
        onNavigateAndClose={handleNavigateAndCloseLauncher}
      />
    </div>
  );
};

export default Layout;
