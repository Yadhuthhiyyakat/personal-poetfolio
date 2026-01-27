
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Storefront',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product listings, shopping cart, and secure checkout.',
    githubLink: 'https://github.com/yourusername/ecommerce-storefront',
    liveLink: 'https://picsum.photos/400/300?project=ecommerce',
    image: '/projects/ecommerce.jpg', // Corrected to reference from root
    techStack: [
      { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Node.js', 'Express.js'] },
      { category: 'Database', items: ['MongoDB'] },
      { category: 'Deployment', items: ['Vercel', 'Heroku'] },
    ],
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A minimalist task management application. Users can create, update, delete, and filter tasks. Implemented with React and a local storage API.',
    githubLink: 'https://github.com/yourusername/task-management-app',
    liveLink: 'https://picsum.photos/400/300?project=task-manager',
    image: '/projects/task-manager.jpg', // Corrected to reference from root
    techStack: [
      { category: 'Frontend', items: ['React', 'JavaScript', 'CSS Modules'] },
      { category: 'Data Storage', items: ['Local Storage API'] },
      { category: 'Tools', items: ['Vite', 'Git'] },
    ],
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard fetching real-time weather data using a third-party API. Displays current weather and a 5-day forecast for any city.',
    githubLink: 'https://github.com/yourusername/weather-dashboard',
    liveLink: 'https://picsum.photos/400/300?project=weather-app',
    image: '/projects/weather-dashboard.jpg', // Corrected to reference from root
    techStack: [
      { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript'] },
      { category: 'API', items: ['OpenWeatherMap API'] },
      { category: 'Bundler', items: ['Webpack'] },
      { category: 'Deployment', items: ['Netlify'] },
    ],
  },
  {
    id: '4',
    title: 'Personal Blog Platform',
    description: 'A simple blogging platform allowing users to publish articles. Features include rich text editing, tag management, and search functionality.',
    githubLink: 'https://github.com/yourusername/blog-platform',
    liveLink: 'https://picsum.photos/400/300?project=blog',
    image: '/projects/blog-platform.jpg', // Corrected to reference from root
    techStack: [
      { category: 'Frontend', items: ['Vue.js', 'SCSS'] },
      { category: 'Backend', items: ['Firebase Functions'] },
      { category: 'Database', items: ['Firestore'] },
      { category: 'Authentication', items: ['Firebase Auth'] },
    ],
  },
];