
import React, { useState, useEffect } from 'react';
import LinuxLayout from './app/LinuxLayout'; // Renamed from Layout
import ProfessionalLayout from './app/ProfessionalLayout'; // New professional layout
import HomePage from './app/HomePage';
import AboutPage from './app/AboutPage';
import ProjectsPage from './app/ProjectsPage';
import ContactPage from './app/ContactPage';
import ProfessionalHomePage from './app/ProfessionalHomePage'; // New
import ProfessionalAboutPage from './app/ProfessionalAboutPage'; // New
import ProfessionalProjectsPage from './app/ProfessionalProjectsPage'; // New
import ProfessionalContactPage from './app/ProfessionalContactPage'; // New
import LockScreen from './components/LockScreen';
import ViewSelectionScreen from './components/ViewSelectionScreen'; // NEW: Import ViewSelectionScreen

// Define a more robust route type that can include a projectId
type AppRoute =
  | { type: 'home' }
  | { type: 'about' }
  | { type: 'projects', projectId?: string }
  | { type: 'contact' };

const getPageFromHash = (): AppRoute => {
  const hash = window.location.hash;
  if (hash === '#/about') return { type: 'about' };
  if (hash === '#/contact') return { type: 'contact' };
  if (hash.startsWith('#/projects')) {
    const parts = hash.split('/');
    if (parts.length === 3 && parts[2]) {
      return { type: 'projects', projectId: parts[2] };
    }
    return { type: 'projects' };
  }
  return { type: 'home' };
};

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(getPageFromHash());
  const [isUnlocked, setIsUnlocked] = useState(false); // Initial unlock from LockScreen (ENTER)

  // Initialize currentView from localStorage or default to 'linux'
  const initialView = (localStorage.getItem('currentView') as 'linux' | 'professional') || 'linux';
  const [currentView, setCurrentView] = useState<'linux' | 'professional'>(initialView);

  // Determine if a view has been previously selected (persisted in localStorage)
  // This helps skip the ViewSelectionScreen on subsequent visits after initial unlock
  const [hasMadeViewSelection, setHasMadeViewSelection] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  const handleSelectView = (view: 'linux' | 'professional') => {
    setCurrentView(view);
    localStorage.setItem('currentView', view); // Persist user's choice
    setHasMadeViewSelection(true); // Mark that a choice has been made
  };

  const toggleView = () => {
    setCurrentView(prev => {
      const newView = prev === 'linux' ? 'professional' : 'linux';
      localStorage.setItem('currentView', newView); // Persist the switch
      // If switching, it means a selection has already been made
      if (!hasMadeViewSelection) {
        setHasMadeViewSelection(true);
      }
      return newView;
    });
  };

  // Define personal details for LockScreen and ViewSelectionScreen
  const userName = "YadhuKrishna T M"; // Change this to your desired name
  const userPhotoUrl = "public/images/yadhu.jpeg"; // Update with the correct path to your profile image
  const userSubtitle = "Web Developer & Mobile Developer"; // Customize your subtitle

  const renderContent = () => {
    // Stage 1: Initial Lock Screen (always shown first if not unlocked)
    if (!isUnlocked) {
      return (
        <LockScreen
          onUnlock={handleUnlock}
          name={userName}
          photoUrl={userPhotoUrl}
          subtitle={userSubtitle}
        />
      );
    }

    // Stage 2: View Selection Screen (shown after unlock if no view has been chosen yet)
    if (!hasMadeViewSelection) {
      return (
        <ViewSelectionScreen
          onSelectView={handleSelectView}
          name={userName}
          photoUrl={userPhotoUrl}
          subtitle={userSubtitle}
        />
      );
    }

    // Stage 3: Main content with selected layout
    const LayoutComponent = currentView === 'linux' ? LinuxLayout : ProfessionalLayout;

    let pageContent;
    switch (currentRoute.type) {
      case 'about':
        pageContent = currentView === 'linux' ? <AboutPage /> : <ProfessionalAboutPage />;
        break;
      case 'projects':
        pageContent = currentView === 'linux' ? <ProjectsPage projectId={currentRoute.projectId} /> : <ProfessionalProjectsPage projectId={currentRoute.projectId} />;
        break;
      case 'contact':
        pageContent = currentView === 'linux' ? <ContactPage /> : <ProfessionalContactPage />;
        break;
      case 'home':
      default:
        pageContent = currentView === 'linux' ? <HomePage /> : <ProfessionalHomePage />;
        break;
    }

    return (
      <LayoutComponent toggleView={toggleView} currentView={currentView}>
        {pageContent}
      </LayoutComponent>
    );
  };

  return <>{renderContent()}</>;
};

export default App;