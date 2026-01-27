
import React, { useState, useEffect } from 'react';
import Layout from './app/layout';
import HomePage from './app/HomePage';
import AboutPage from './app/AboutPage';
import ProjectsPage from './app/ProjectsPage';
import ContactPage from './app/ContactPage';
// ProjectDetailPage is no longer directly routed as its functionality is integrated into ProjectsPage
import LockScreen from './components/LockScreen'; // Import the new LockScreen component

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
  const [showLockScreen, setShowLockScreen] = useState(true); // State to control lock screen visibility

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
    setShowLockScreen(false);
  };

  const renderMainApp = () => {
    switch (currentRoute.type) {
      case 'about':
        return <AboutPage />;
      case 'projects':
        // ProjectsPage now handles displaying project details based on projectId
        return <ProjectsPage projectId={currentRoute.projectId} />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      {showLockScreen ? (
        <LockScreen
          onUnlock={handleUnlock}
          name="YadhuKrishna T M" // Replace with your name
          photoUrl="app/assets/yadhu.jpeg" // Path to your profile picture
          subtitle="Web Developer & Mobile Developer"
        />
      ) : (
        <Layout>
          {renderMainApp()}
        </Layout>
      )}
    </>
  );
};

export default App;