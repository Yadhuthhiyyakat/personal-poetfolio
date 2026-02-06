
import React from 'react';
import Button from '../components/Button'; // Assuming you have a Button component

const HeroSection: React.FC = () => {
  const name = "John Doe"; // Your name
  const photoUrl = "/profile.jpg"; // Path to your profile picture
  const subtitle = "Web Developer & Mobile Developer"; // Your subtitle

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 text-center rounded-lg shadow-xl">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src={photoUrl}
          alt={name}
          className="w-40 h-40 rounded-full object-cover border-4 border-white mb-6 shadow-md"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in animate-once animate-duration-1000">
          Hello, I'm <span className="text-yellow-300">{name}</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in animate-once animate-delay-200 animate-duration-1000">
          {subtitle}
        </p>
        <div className="flex gap-4 animate-fade-in animate-once animate-delay-400 animate-duration-1000">
          <Button asLink href="#/projects" variant="primary" size="lg">
            View My Work
          </Button>
          <Button asLink href="#/contact" variant="secondary" size="lg">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
