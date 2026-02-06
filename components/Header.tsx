
import React from 'react';
import Button from './Button';

interface HeaderProps {
  toggleView: () => void;
  currentView: 'linux' | 'professional';
}

const Header: React.FC<HeaderProps> = ({ toggleView, currentView }) => {
  // Use window.location.hash directly to determine active link
  const currentPath = window.location.hash.replace('#', '');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-gray-900">
          <a href="#/" className="hover:text-[#E95420] transition-colors">YadhuKrishna T M</a> {/* Replace with your name */}
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.path}`}
              className={`text-lg font-medium hover:text-[#E95420] transition-colors
                ${(currentPath === link.path || (currentPath === '' && link.path === '/')) ? 'text-[#E95420] border-b-2 border-[#E95420]' : 'text-gray-700'}`}
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={toggleView}
            variant="secondary"
            size="sm"
            className="ml-4"
            aria-label="Switch to Linux View"
          >
            Switch to Linux
          </Button>
        </nav>
        {/* Mobile menu button (can be added later if needed) */}
        <div className="md:hidden">
          {/* Example: Mobile menu icon */}
          <button className="text-gray-700 hover:text-[#E95420] focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
