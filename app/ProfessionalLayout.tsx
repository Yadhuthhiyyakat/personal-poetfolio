
import React from 'react';
import Header from '../components/Header'; // New professional header
import Footer from '../components/Footer'; // New professional footer

interface ProfessionalLayoutProps {
  children: React.ReactNode;
  toggleView: () => void;
  currentView: 'linux' | 'professional';
}

const ProfessionalLayout: React.FC<ProfessionalLayoutProps> = ({ children, toggleView, currentView }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <Header toggleView={toggleView} currentView={currentView} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ProfessionalLayout;
