import { TechnologyType } from '@/models/Technology';

export interface Project {
  type: 'web' | 'mobile' | 'backend' | 'ml' | 'ai';
  name: string;
  link?: string;
  company?: string;
  description: string;
  image?: string;
  technologies: TechnologyType[];
  images?: string[];
  client?: string;         // <-- FIXED (allow any client)
  discontinued?: boolean;
  year: number;
}

export interface ProjectCollection {
  title: string;
  projects: Project[];
}
