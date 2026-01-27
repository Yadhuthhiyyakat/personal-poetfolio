
import React from 'react';
import { Project } from '../types';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const truncatedDescription = project.description.length > 150
    ? project.description.substring(0, 150) + '...'
    : project.description;

  // Removed handleCardClick and its usage, as ProjectCard is no longer used for navigation on ProjectsPage
  // The component remains available for potential other uses if needed.

  return (
    <div
      className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col h-full animate-fade-up animate-once animate-duration-700 animate-ease-in-out"
      // Removed onClick and role/tabIndex related to navigation
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover object-center"
        loading="lazy"
      />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-700 text-base leading-relaxed mb-4 flex-grow">
          {truncatedDescription}
        </p>
        <div className="flex flex-wrap gap-3 mt-auto">
          {/* Example of how buttons might still be used, but without direct navigation from the card itself for the ProjectsPage context */}
          <Button asLink href={project.githubLink} target="_blank" variant="primary" size="sm" className="flex-shrink-0">
            GitHub
          </Button>
          {project.liveLink && (
            <Button asLink href={project.liveLink} target="_blank" variant="secondary" size="sm" className="flex-shrink-0">
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;