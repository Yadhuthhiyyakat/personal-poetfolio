
import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center sm:text-left">
      {children}
    </h2>
  );
};

export default SectionHeading;
