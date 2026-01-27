
import React, { useState, useRef } from 'react';
import { projects as initialProjects } from '../data/projects'; // Import your project data

const HomePage: React.FC = () => {
  const wallpaperUrl = '/images/wallpaper.jpg'; // Using the imported wallpaper asset
  const [orderedProjects, setOrderedProjects] = useState(initialProjects);

  // Refs to keep track of the dragged and target items
  const draggedItem = useRef<string | null>(null);
  const dragOverItem = useRef<string | null>(null);

  // Updated to navigate to specific project detail
  const handleProjectFolderClick = (e: React.MouseEvent, projectId: string) => {
    e.preventDefault();
    // Only navigate if no drag is in progress (to prevent accidental navigation after drag)
    if (!draggedItem.current) {
      window.location.hash = `#/projects/${projectId}`; // Navigate to the specific project detail page
    }
  };

  const FolderIcon: React.FC<{ isDragging?: boolean }> = ({ isDragging }) => (
    <img src="/images/logos/Folder.png" alt="Folder Icon" className="w-16 h-16 transition-transform duration-200" />
  );

  // Drag & Drop Handlers
  const handleDragStart = (e: React.DragEvent, id: string) => {
    draggedItem.current = id;
    e.currentTarget.classList.add('opacity-50', 'rotate-1', 'scale-95'); // Visual feedback for dragging
  };

  const handleDragEnter = (e: React.DragEvent, id: string) => {
    e.preventDefault(); // Important to allow dropping
    dragOverItem.current = id;
    e.currentTarget.classList.add('border-2', 'border-dashed', 'border-[#E95420]'); // Visual feedback for drop target
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('border-2', 'border-dashed', 'border-[#E95420]'); // Remove visual feedback
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedItem.current === null || dragOverItem.current === null) return;

    // Remove drag-related classes from all items
    const allFolderElements = document.querySelectorAll('.project-folder');
    allFolderElements.forEach(el => el.classList.remove('opacity-50', 'rotate-1', 'scale-95', 'border-2', 'border-dashed', 'border-[#E95420]'));


    const newOrderedProjects = [...orderedProjects];
    const draggedIndex = newOrderedProjects.findIndex(p => p.id === draggedItem.current);
    const dropIndex = newOrderedProjects.findIndex(p => p.id === dragOverItem.current);

    if (draggedIndex === -1 || dropIndex === -1) return;

    const [draggedProject] = newOrderedProjects.splice(draggedIndex, 1);
    newOrderedProjects.splice(dropIndex, 0, draggedProject);

    setOrderedProjects(newOrderedProjects);

    draggedItem.current = null;
    dragOverItem.current = null;
  };

  const handleDragEnd = (e: React.DragEvent) => {
    // Clean up classes whether drop happened or not
    e.currentTarget.classList.remove('opacity-50', 'rotate-1', 'scale-95');
    // Ensure the drop target highlight is also removed from the last hovered item
    const allFolderElements = document.querySelectorAll('.project-folder');
    allFolderElements.forEach(el => el.classList.remove('border-2', 'border-dashed', 'border-[#E95420]'));

    draggedItem.current = null;
    dragOverItem.current = null;
  };

  return (
    <div
      className="w-full h-full bg-cover bg-center p-8 overflow-y-auto"
      style={{ backgroundImage: `url(${wallpaperUrl})` }}
      onDrop={handleDrop} // Allow dropping on the container if not dropped on another item
      onDragOver={handleDragOver}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl"> {/* Removed mx-auto for left alignment */}
        {orderedProjects.map((project) => (
          <button
            key={project.id}
            className={`project-folder flex flex-col items-center text-center p-2 rounded-md hover:bg-black hover:bg-opacity-20 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#E95420] cursor-grab`}
            onClick={(e) => handleProjectFolderClick(e, project.id)}
            aria-label={`Open project ${project.title}`}
            draggable="true"
            onDragStart={(e) => handleDragStart(e, project.id)}
            onDragEnter={(e) => handleDragEnter(e, project.id)}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop} // Individual item drop handler
            onDragEnd={handleDragEnd}
          >
            <FolderIcon isDragging={draggedItem.current === project.id} />
            <span className="mt-2 text-sm text-gray-100 font-medium group-hover:text-white transition-colors duration-200">
              {project.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;