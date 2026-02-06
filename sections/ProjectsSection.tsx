
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects'; // Mock data
import SectionHeading from '../components/SectionHeading';

const ProjectsSection: React.FC = () => {
  return (
    <div className="py-8 md:py-12 px-4"> {/* Adjusted internal padding for window frame */}
      <div className="container mx-auto">
        <SectionHeading>My Projects</SectionHeading>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-2xl mx-auto animate-fade-in animate-once animate-delay-200 animate-duration-700">
          Here are some of the projects I've worked on, showcasing my skills and passion for development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} style={{ animationDelay: `${200 * index + 400}ms` }} className="animate-fade-up animate-once animate-duration-700 animate-ease-in-out">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
