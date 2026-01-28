
import React from 'react';
// Exporting SidebarItemIcon for potential re-use in AppLauncher
export interface SidebarItemIcon {
  icon: React.ReactNode;
  label: string;
  path?: string; // Path is optional for static icons
  isActive?: boolean; // isActive is optional for static icons
  onClick?: (e: React.MouseEvent, path: string) => void; // onClick is optional for static icons
  hasNotification?: boolean; // New prop for notification badge
}

const SidebarItem: React.FC<SidebarItemIcon> = ({ icon, label, path, isActive = false, onClick, hasNotification = false }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick && path) { // Only call onClick if path exists (i.e., it's a navigational item)
      onClick(e, path);
    } else if (onClick && !path) { // For non-navigational items like the app launcher
      onClick(e, ''); // Pass empty string or null if path isn't relevant for the click handler
    }
  };

  return (
    <li className="relative group">
      <a
        href={path ? `#${path}` : undefined}
        className={`flex flex-col items-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200 relative
          ${isActive ? 'text-white bg-gray-700 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-8 before:bg-[#E95420] before:rounded-r-md' : ''}
          ${!path ? 'cursor-pointer' : ''} {/* Ensure static items are still clickable */}
        `}
        onClick={handleClick}
        aria-label={label}
        {...(!path && { role: 'button', 'aria-disabled': 'false' })} // Make static items semantically clickable
      >
        <div className="w-12 h-12 flex items-center justify-center relative">
          <div className="w-10 h-10">{icon}</div>
          {hasNotification && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          )}
        </div>
        {/* Tooltip for desktop */}
        <span className="hidden group-hover:block absolute left-full ml-3 px-3 py-1 bg-gray-700 text-white text-xs rounded shadow-md whitespace-nowrap z-10">
          {label}
        </span>
      </a>
    </li>
  );
};

interface SidebarProps {
  onToggleAppLauncher: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggleAppLauncher }) => {
  // Use location.hash directly and remove the leading #
  const currentPath = window.location.hash.replace('#', '');

  const handleNavLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    window.location.hash = path;
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-20 sm:w-28 bg-gray-900 bg-opacity-50 backdrop-blur-sm z-40 hidden md:flex flex-col items-center py-4 pt-8"> {/* Adjusted pt-8 for Navbar height, made width responsive */}
      <ul className="space-y-4 flex-grow"> {/* flex-grow to push last item to bottom */}
        {/* Home / Files (Nautilus) icon - Functional */}
        <SidebarItem
          icon={<img src="/images/logos/Folder.png" alt="Home Icon" className="w-10 h-10" />}
          label="Home"
          path="/"
          isActive={currentPath === '' || currentPath === '/'}
          onClick={handleNavLinkClick}
          hasNotification={true}
        />

        {/* About / Terminal Icon */}
        <SidebarItem
          icon={<img src="/images/logos/terminal.webp" alt="About Icon" className="w-10 h-10" />}
          label="About"
          path="/about"
          isActive={currentPath === 'about'}
          onClick={handleNavLinkClick}
        />

        {/* Projects / VS Code (Functional) */}
        <SidebarItem
          icon={<img src="/images/logos/VS.png" alt="Projects Icon" className="w-10 h-10" />}
          label="Projects"
          path="/projects"
          isActive={currentPath === 'projects'}
          onClick={handleNavLinkClick}
        />

        {/* Contact / Gmail Icon */}
        <SidebarItem
          icon={<img src="/images/logos/mail.png" alt="Contact Icon" className="w-10 h-10" />}
          label="Contact"
          path="/contact"
          isActive={currentPath === 'contact'}
          onClick={handleNavLinkClick}
        />
      </ul>
      {/* Show Applications icon at the very bottom */}
      <div className="mt-auto pb-4"> {/* Push to bottom and add some padding */}
        <SidebarItem
          icon={<img src="/images/logos/ubuntu.png" alt="App Launcher Icon" className="w-10 h-10" />}
          label="Show Applications"
          onClick={onToggleAppLauncher} // Call the toggle function
        />
      </div>
    </aside>
  );
};

export default Sidebar;