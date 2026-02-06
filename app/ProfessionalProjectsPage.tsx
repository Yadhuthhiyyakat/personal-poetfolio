
import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import ProjectsSection from '../sections/ProjectsSection'; // Re-use the ProjectsSection for the grid
import ProjectDetail from '../components/ProjectDetail';
import SectionHeading from '../components/SectionHeading';

interface ProfessionalProjectsPageProps {
  projectId?: string; // Optional projectId from the route
}

const ProfessionalProjectsPage: React.FC<ProfessionalProjectsPageProps> = ({ projectId }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | undefined>(projectId);

  useEffect(() => {
    // Update selected project when projectId prop changes (e.g., from URL hash change)
    setSelectedProjectId(projectId);
  }, [projectId]);

  const selectedProject = projects.find(p => p.id === selectedProjectId);

  if (selectedProject) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <SectionHeading>
          <button
            onClick={() => window.location.hash = '#/projects'}
            className="text-gray-500 hover:text-gray-700 transition-colors mr-3 focus:outline-none focus:ring-2 focus:ring-[#E95420] rounded-md p-1"
            aria-label="Back to Projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          {selectedProject.title}
        </SectionHeading>
        <ProjectDetail project={selectedProject} />
      </div>
    );
  }

  return (
    <ProjectsSection />
  );
};

export default ProfessionalProjectsPage;
