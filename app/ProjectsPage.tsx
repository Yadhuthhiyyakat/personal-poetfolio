import React, { useState, useEffect } from 'react';
import WindowFrame from '../components/WindowFrame';
import { projects } from '../data/projects';
import ProjectDetail from '../components/ProjectDetail';

// --- Sub-components ---

interface VscodeFileItemProps {
  projectTitle: string;
  projectId: string;
  isSelected: boolean;
  onClick: (id: string) => void;
}

const VscodeFileItem: React.FC<VscodeFileItemProps> = ({ projectTitle, projectId, isSelected, onClick }) => {
  return (
    <button
      className={`flex items-center w-full px-4 py-1.5 text-sm transition-colors duration-200
                  ${isSelected ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
                  focus:outline-none`}
      onClick={() => onClick(projectId)}
    >
      {/* Replaced SVG with PNG image and increased size */}
      <img src="/images/logos/Folder.png" alt="Folder Icon" className="h-6 w-6 mr-2 flex-shrink-0" />
      <span className="truncate">{projectTitle}</span>
    </button>
  );
};

interface VscodeEditorProps {
  selectedProject: typeof projects[0] | undefined;
}

const VscodeEditor: React.FC<VscodeEditorProps> = ({ selectedProject }) => {
  const kotlinPlaceholder = `// Please choose a project from the sidebar to view its details.

fun main() {
    println("Happy coding!")
}`;

  return (
    <div className="flex-grow bg-[#1e1e1e] text-white p-6 font-mono overflow-y-auto">
      {selectedProject ? (
        <ProjectDetail project={selectedProject} />
      ) : (
        <pre className="text-sm">
          {kotlinPlaceholder.split('\n').map((line, index) => {
            if (line.trim().startsWith('//')) return <span key={index} className="text-gray-500 block">{line}</span>;
            if (line.includes('fun main() {')) return <span key={index} className="block"><span className="text-purple-400">fun</span> <span className="text-yellow-300">main</span>() {'{'}</span>;
            if (line.includes('println')) return <span key={index} className="block">{'    '}<span className="text-purple-400">println</span>(<span className="text-green-400">"Happy coding!"</span>)</span>;
            if (line.trim() === '}') return <span key={index} className="block">{'}'}</span>;
            return <span key={index} className="block">{line || ' '}</span>;
          })}
        </pre>
      )}
    </div>
  );
};

// --- Main Page Component ---

const ProjectsPage: React.FC<{ projectId?: string }> = ({ projectId }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | undefined>(projectId);

  useEffect(() => {
    setSelectedProjectId(projectId);
  }, [projectId]);

  const handleSelectProject = (id: string) => {
    window.location.hash = `#/projects/${id}`; 
  };

  const selectedProject = projects.find(p => p.id === selectedProjectId);

  return (
    /* h-screen makes the container exactly the height of the browser window */
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-black">
      <WindowFrame title="Projects - Visual Studio Code" className="w-full h-full" iconSrc="/images/logos/VS.png">
        <div className="flex h-full bg-[#1e1e1e] overflow-hidden">
          
          {/* VS Code Sidebar */}
          <aside className="w-64 bg-[#252526] border-r border-[#333333] flex flex-col py-2 overflow-y-auto">
            <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-4 mb-2">
              EXPLORER: PROJECTS
            </h3>
            <ul className="space-y-0.5">
              {projects.map((project) => (
                <li key={project.id}>
                  <VscodeFileItem
                    projectTitle={project.title}
                    projectId={project.id}
                    isSelected={selectedProjectId === project.id}
                    onClick={handleSelectProject}
                  />
                </li>
              ))}
            </ul>
          </aside>

          {/* VS Code Editor Area */}
          <VscodeEditor selectedProject={selectedProject} />
          
        </div>
      </WindowFrame>
    </div>
  );
};

export default ProjectsPage;