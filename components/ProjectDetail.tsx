
import React from 'react';
import { Project } from '../types';
import Button from './Button';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="bg-white p-8 rounded-b-xl text-gray-900 flex flex-col h-full overflow-y-auto">
      <img
        src={project.image}
        alt={project.title}
        className="w-full max-h-96 object-contain rounded-lg mb-6 shadow-md"
        loading="lazy"
      />
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      {/* Tech Stack Section */}
      {project.techStack && project.techStack.length > 0 && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-gray-200 pb-2">Tech Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.techStack.map((stackCategory, index) => (
              <div key={index} className="flex flex-col">
                <p className="text-base font-semibold text-gray-800 mb-2">{stackCategory.category}:</p>
                <div className="flex flex-wrap gap-2">
                  {stackCategory.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-4 mt-auto">
        <Button asLink href={project.githubLink} target="_blank" variant="primary" size="md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.417 2.865 8.163 6.837 9.5.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.893 1.535 2.342 1.092 2.91.834.091-.647.35-1.092.636-1.34-2.22-.253-4.555-1.116-4.555-4.949 0-1.092.39-1.983 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.268 2.75 1.025A9.646 9.646 0 0112 6.809c.85.004 1.705.115 2.504.337 1.909-1.293 2.748-1.025 2.748-1.025.546 1.379.202 2.398.1 2.65.64.699 1.029 1.59 1.029 2.682 0 3.841-2.339 4.691-4.566 4.935.359.309.678.92.678 1.855 0 1.34-.012 2.416-.012 2.744 0 .268.18.577.688.483C20.144 20.166 23 16.41 23 12.017 23 6.484 18.522 2 12 2Z" clipRule="evenodd" />
          </svg>
          <span>View on GitHub</span>
        </Button>
        {project.liveLink && (
          <Button asLink href={project.liveLink} target="_blank" variant="secondary" size="md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>Live Demo</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;