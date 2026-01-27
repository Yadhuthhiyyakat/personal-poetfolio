// /home/yadhukrishna-t-m/Nextprojects/personal-portfolio-ubuntu/components/Navbar.tsx
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  iconSrc?: string; // Added iconSrc prop
}

const Navbar: React.FC<NavbarProps> = ({ iconSrc }) => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
    };

    updateDateTime(); // Set immediately on mount
    const intervalId = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 grid grid-cols-3 items-center h-8 px-4 bg-gray-700 text-white shadow-md">
      <div className="flex items-center">
        {iconSrc && <img src={iconSrc} alt="Ubuntu Logo" className="h-5 w-5 mr-2" />} {/* Render icon if provided */}
      </div>
      {/* Centered date and time */}
      <div className="flex items-center justify-center space-x-4">
        <span className="text-xs">{currentDate}</span>
        <span className="text-xs">{currentTime}</span>
      </div>
      {/* Empty div to balance the grid and push the middle content to the center */}
      <div></div>
    </nav>
  );
};

export default Navbar;