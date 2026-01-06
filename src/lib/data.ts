import type {
  Service,
  Project,
  NavLink,
} from './types';
import {
  Database,
  LayoutDashboard,
  Code,
  Beaker,
  TrendingUp,
  PenSquare,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    return {
      imageUrl: 'https://picsum.photos/seed/error/500/500',
      imageHint: 'placeholder',
    };
  }
  return { imageUrl: image.imageUrl, imageHint: image.imageHint };
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    icon: Database,
    title: 'SQL Analytics',
    description:
      'Leveraging advanced SQL to uncover deep insights from complex datasets and drive strategic decisions.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboarding (Power BI/Tableau)',
    description:
      'Creating interactive and intuitive dashboards that provide clear, actionable business intelligence.',
  },
  {
    icon: Code,
    title: 'Python Automation',
    description:
      'Developing custom Python scripts to automate data processing, cleaning, and reporting tasks, saving time and reducing errors.',
  },
  {
    icon: Beaker,
    title: 'Experimentation & A/B Testing',
    description:
      'Designing and analyzing controlled experiments to validate hypotheses and optimize product features for user engagement.',
  },
  {
    icon: TrendingUp,
    title: 'Forecasting',
    description:
      'Applying statistical models to historical data to predict future trends in sales, user behavior, and market dynamics.',
  },
  {
    icon: PenSquare,
    title: 'Data Storytelling',
    description:
      'Translating complex data findings into compelling narratives that are easily understood by non-technical stakeholders.',
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Automobile Sales Analysis EDA',
    description:
      'This repository contains my Exploratory Data Analysis (EDA) project using Python Pandas.',
    tools: ['Python', 'Numpy', 'Pandas','Matplotlib', 'Excel'],
    ...findImage('project-1'),
    caseStudy: {
      goal: 'To conduct a comprehensive Exploratory Data Analysis (EDA) on automobile sales data to uncover trends, patterns, and insights that can inform business strategies related to sales, marketing, and inventory management.',
      method:
        'The analysis was performed in Python using libraries like Pandas for data manipulation, and Matplotlib/Seaborn for visualization. The process involved data cleaning, handling missing values, and performing univariate, bivariate, and multivariate analysis to explore relationships between different vehicle attributes and sales metrics.',
      result:
        'Identified the most popular car models and manufacturers to focus marketing. Analyzed relationships between vehicle attributes (e.g., engine size, horsepower) and price for pricing strategies. Visualized sales distribution across regions, highlighting key markets and seasonal trends for better inventory planning.',
      githubUrl: 'https://github.com/hebee-77/Automobile-Sales-Exploratory-Data-Analysis-EDA-',
    },
  },
  {
    id: 'proj-2',
    title: 'New Zealand Sales Profit Analysis',
    description:
      'A complete end-to-end analytics project using SQL Server for data processing and Power BI for dashboard visualization.',
    tools: ['Power BI', 'SQL Server', 'Github','CSV/Excel'],
    ...findImage('project-2'),
    caseStudy: {
      goal: 'Provide the sales leadership team with a self-service tool to track KPIs, analyze regional performance, and drill down into product-level details.',
      method:
        'Connected to multiple data sources including Salesforce and an internal ERP database. Created calculated fields and interactive filters for dynamic analysis. Published the dashboard to Tableau Server for company-wide access.',
      result:
        'Reduced time for weekly reporting from 4 hours to 30 minutes. Enabled sales managers to identify underperforming regions 40% faster, leading to timely interventions.',
      liveUrl: '#',
    },
  },
  {
    id: 'proj-3',
    title: 'Sales Store Sales Power-BI Analysis',
    description:
      'This project focuses on designing a comprehensive sales analytics and forecasting dashboard for a retail SuperStore dataset.',
    tools: ['Power BI', 'Excel', 'Google Colab'],
    ...findImage('project-3'),
    caseStudy: {
      goal: 'To create a reusable and statistically rigorous process for determining the winner of product experiments and communicating results to stakeholders.',
      method:
        'Developed a Python class that takes experiment data as input, performs statistical tests (t-tests, chi-squared), calculates confidence intervals, and generates a standardized report with visualizations.',
      result:
        'Ensured statistical significance in all reported results, eliminating false positives. Reduced analysis time per experiment by 75% and standardized reporting across the product team.',
      githubUrl: '#',
    },
  },
];

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hebee/',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/hebee-77',
    icon: Github,
  },
  {
    name: 'Email',
    url: 'mailto:hebeectr2004@gmail.com',
    icon: Mail,
  },
];
