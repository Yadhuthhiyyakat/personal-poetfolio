
export interface Project {
  id: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  image: string;
  techStack?: { category: string; items: string[] }[];
}