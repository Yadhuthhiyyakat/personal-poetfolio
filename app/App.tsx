
import React, { useState, useEffect } from 'react';
import Layout from './layout';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
// ProjectDetailPage is no longer directly routed as its functionality is integrated into ProjectsPage
// import ProjectDetailPage from './app/ProjectDetailPage'; // REMOVED

// Define a more robust route type
type AppRoute =
  | { type: 'home' }
  | { type: 'about' }
  | { type: 'projects', projectId?: string } // projects can now optionally have a projectId
  | { type: 'contact' };

const getPageFromHash = (): AppRoute => {
  const hash = window.location.hash;
  if (hash === '#/about') return { type: 'about' };
  if (hash === '#/contact') return { type: 'contact' };
  if (hash.startsWith('#/projects')) {
    const parts = hash.split('/');
    if (parts.length === 3 && parts[2]) {
      // If hash is like #/projects/ecommerce-storefront
      return { type: 'projects', projectId: parts[2] };
    }
    return { type: 'projects' }; // If hash is just #/projects
  }
  return { type: 'home' }; // Default to home page
};

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(getPageFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentRoute.type) {
      case 'about':
        return <AboutPage />;
      case 'projects':
        // Pass the projectId to ProjectsPage
        return <ProjectsPage projectId={currentRoute.projectId} />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
};

export default App;