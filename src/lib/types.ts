import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tools: string[];
  imageUrl: string;
  imageHint: string;
  caseStudy: {
    goal: string;
    method: string;
    result: string;
    githubUrl?: string;
    liveUrl?: string;
  };
};
