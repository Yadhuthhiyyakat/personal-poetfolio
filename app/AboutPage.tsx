
import React from 'react';
import AboutSection from '../sections/AboutSection';
import WindowFrame from '../components/WindowFrame';

const AboutPage: React.FC = () => {
  return (
    <div className="p-2 sm:p-4 h-full flex items-start justify-center">
      <WindowFrame title="About - Terminal" className="w-full h-full" iconSrc="/images/logos/terminal.webp">
        <AboutSection />
      </WindowFrame>
    </div>
  );
};

export default AboutPage;