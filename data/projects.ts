
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Mucomics-Hub',
    description: 'A full-stack comic platform built with React, Next.js, and Supabase. Features include user authentication, Comic listings, and Chatroom.Sorry the Github Repository is Private.',
   githubLink: '',
    liveLink: 'https://mucomics-hub.vercel.app/',
    image: 'public/images/mucomics.png', // Corrected to reference from root
    techStack: [
      { category: 'Framework', items: ['Next.js'] },
      { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Next.js'] },
      { category: 'Database', items: ['Supabase'] },
      { category: 'Deployment', items: ['Vercel'] },
    ],
  },
  {
    id: '2',
    title: 'Version Control Enabled Note',
    description: 'A Version Control Enabled Note Taking Website. Users can create, update, delete, and view versions of notes. Implemented with React and a local storage API.Sorry the Github Repository is Private.',
    githubLink: '',
    liveLink: 'https://collaborative-note-app-orpin.vercel.app/',
    image: 'public/images/note.png', // Corrected to reference from root
    techStack: [
      { category: 'Framework', items: ['Next.js'] },
      { category: 'Frontend', items: ['React'] },
      { category: 'Data Storage', items: ['Local Storage API'] },
      { category: 'Deployment', items: ['Vercel'] },
    ],
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard fetching real-time weather data using a third-party API. Displays current weather and a 5-day forecast for any city.',
    githubLink: 'https://github.com/Yadhuthhiyyakat/weather_react',
    liveLink: 'https://yadhuthhiyyakat.github.io/weather_react/',
    image: 'public/images/weather.png', // Corrected to reference from root
    techStack: [
      { category: 'Frontend', items: ['React.js'] },
      { category: 'API', items: ['OpenWeatherMap API'] },
      { category: 'Deployment', items: ['Github Pages'] },
    ],
  },
  {
    id: '4',
    title: 'Chat Application',
    description: 'A simple Chat Application allowing users to chat in real-time. Features include rich texting, user authentication,Deletion of messages.',
    githubLink: 'https://github.com/Yadhuthhiyyakat/chatapp_flutter',
    liveLink: '',
    image: 'public/images/chat.jpeg', // Corrected to reference from root
    techStack: [
      { category: 'Framework', items: ['Flutter'] },
      { category: 'Frontend', items: ['Dart'] },
      { category: 'Backend', items: ['Firebase Functions'] },
      { category: 'Database', items: ['Firestore'] },
      { category: 'Authentication', items: ['Firebase Auth'] },
    ],
  },
  {
    id: '5',
    title: 'Movie Watchlist Application',
    description: 'A simple Movie Watchlist Application allowing users to add movies to their watchlist in real-time. Features include user authentication.',
    githubLink: 'https://github.com/Yadhuthhiyyakat/movielistapp_flutter',
    liveLink: '',
    image: 'public/images/movie.jpeg', // Corrected to reference from root
    techStack: [
      { category: 'Framework', items: ['Flutter'] },
      { category: 'Frontend', items: ['Dart'] },
      { category: 'Database', items: ['Firestore'] },
      { category: 'Authentication', items: ['Firebase Auth'] },
    ],
  },
  {
    id: '6',
    title: 'Budget Tracker Website',
    description: 'A simple Budget Tracker Website allowing users to track their expenses and income in real-time. Implemented with React and a local storage API.',
    githubLink: 'https://github.com/Yadhuthhiyyakat/Budget-app-react',
    liveLink: 'https://budget-app-react-one.vercel.app/',
    image: 'public/images/budget.png', // Corrected to reference from root
    techStack: [
      { category: 'Frontend', items: ['React'] },
      { category: 'Data Storage', items: ['Local Storage API'] },
    ],
  },
];