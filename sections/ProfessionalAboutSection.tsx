
import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const ProfessionalAboutSection: React.FC = () => {
  const name = "YadhuKrishna T M"; // Your name
  const photoUrl = "/images/yadhu.jpeg"; // Path to your profile picture
  const subtitle = "Web Developer & Mobile Developer"; // Your subtitle

  return (
    <section className="py-12 md:py-16 bg-white shadow-lg rounded-lg px-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:space-x-12">
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img
            src={photoUrl}
            alt={name}
            className="w-64 h-64 rounded-full object-cover border-4 border-[#E95420] shadow-xl animate-fade-in animate-once animate-duration-700"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <SectionHeading>About <span className="text-[#E95420]">Me</span></SectionHeading>
          <p className="text-xl font-semibold text-gray-800 mb-4 animate-fade-in animate-once animate-delay-200 animate-duration-700">
            {name} - {subtitle}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 animate-fade-in animate-once animate-delay-400 animate-duration-700">
            Hello! I'm John Doe, a passionate Frontend Developer with a knack for creating dynamic and intuitive user interfaces. With 5 years of experience, I specialize in crafting engaging web applications using modern JavaScript frameworks and libraries.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed animate-fade-in animate-once animate-delay-600 animate-duration-700">
            My expertise lies in React, TypeScript, and Tailwind CSS, allowing me to build robust, scalable, and visually appealing web solutions. I'm always eager to learn new technologies and improve my skills to deliver the best possible user experience.
          </p>
          <div className="mt-8 flex justify-center md:justify-start animate-fade-in animate-once animate-delay-800 animate-duration-700">
            <Button
              asLink
              href="https://drive.google.com/file/d/1npwSZqG9qwIFlq-ylmGy6gv1jHZynT7E/view?usp=drive_link" // Link to local resume.pdf in the public folder
              target="_blank"
              variant="primary"
            >Download Resume</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalAboutSection;
