
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
          <ul className="text-gray-700 text-lg leading-relaxed mb-6 list-disc list-inside animate-fade-in animate-once animate-delay-400 animate-duration-700">
            <li>Hello! I'm YadhuKrishna T M, a Dynamic Computer Science Engineer and versatile Full-Stack Developer.</li>
            <li>Expertise in building seamless mobile and web applications.</li>
            <li>Combines a problem-solving mindset with a deep understanding of software architecture.</li>
            <li>Aims to deliver high-performance, scalable solutions in a cross-functional environment.</li>
            <li>Committed to continuous learning through real-world challenges to drive digital innovation and create impactful user experiences.</li>
            <li>My expertise lies in React, TypeScript, Tailwind CSS, Next.js, and Flutter.</li>
            <li>Always eager to learn new technologies and improve skills to deliver the best possible user experience.</li>
          </ul>
          {/* New Tech Stack Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 animate-fade-in animate-once animate-delay-600 animate-duration-700">
              My <span className="text-[#E95420]">Tech Stack</span>
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Next.js",
                "Flutter",
                "Firebase",
                "Supabase",
                "Kotlin",
                "JavaScript (ES6+)",
                "HTML5 & CSS3",
                "Git & GitHub",
                "Responsive Design",
                "Dart",
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="px-5 py-2 bg-gray-100 text-gray-800 rounded-full shadow-md hover:bg-[#E95420] hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
                             animate-fade-in animate-once"
                  style={{ animationDelay: `${index * 100 + 1000}ms` }} // Staggered animation
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
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
