
import React from 'react';
import HeroSection from '../sections/HeroSection';

const ProfessionalHomePage: React.FC = () => {
  return (
    <div className="flex flex-col space-y-12">
      <HeroSection />
      {/* Add more sections for the professional home page here, e.g., 'Latest Projects', 'Services', etc. */}
      {/* <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest Work</h2>
        <p className="text-gray-700">Content about latest projects...</p>
      </section> */}
    </div>
  );
};

export default ProfessionalHomePage;
