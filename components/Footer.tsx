
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto text-center text-sm px-4">
        <p>&copy; {currentYear} YadhuKrishna T M. All rights reserved.</p>
        <p className="mt-2">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
