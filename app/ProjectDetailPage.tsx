
// This component is no longer used as project details are now displayed within the ProjectsPage.
// import React from 'react';
// import ProjectDetail from '../components/ProjectDetail';
// import WindowFrame from '../components/WindowFrame';
// import { projects } from '../data/projects'; // Import your project data

// interface ProjectDetailPageProps {
//   projectId: string;
// }

// const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projectId }) => {
//   const project = projects.find(p => p.id === projectId);

//   if (!project) {
//     return (
//       <div className="p-4 h-full flex items-start justify-center">
//         <WindowFrame title="Error" className="w-full max-w-md h-auto">
//           <div className="p-8 text-center text-gray-900">
//             <h2 className="text-xl font-bold mb-4">Project Not Found</h2>
//             <p className="text-gray-700">The project with ID "{projectId}" could not be found.</p>
//             <button
//               onClick={() => window.location.hash = '#/'}
//               className="mt-6 bg-[#E95420] text-white px-4 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
//             >
//               Go to Homepage
//             </button>
//           </div>
//         </WindowFrame>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4 h-full flex items-start justify-center">
//       <WindowFrame title={project.title} className="w-full max-w-3xl h-full">
//         <ProjectDetail project={project} />
//       </WindowFrame>
//     </div>
//   );
// };

// export default ProjectDetailPage;
