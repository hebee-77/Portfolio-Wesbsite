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
      'This repository contains my Exploratory Data Analysis (EDA) project using Python Pandas. The project focuses on analyzing automobile sales sourced from Kaggle, utilizing google colab for coding.',
    tools: ['Python', 'Numpy', 'Pandas','Matplotlib', 'Excel'],
    ...findImage('project-1'),
    caseStudy: {
      goal: 'To accurately forecast the total revenue a business can reasonably expect from a single customer account throughout the business relationship.',
      method:
        'Utilized historical transaction data and customer behavior metrics. Trained a regression model (XGBoost) after extensive feature engineering to predict future spending. The model was validated against a hold-out dataset.',
      result:
        'The model achieved an R-squared of 0.82, providing a strong basis for budget allocation in marketing. Led to a 15% increase in marketing ROI by focusing on high-value customer segments.',
      githubUrl: '#',
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
      'This project focuses on designing a comprehensive sales analytics and forecasting dashboard for a retail SuperStore dataset. The goal was to build a single, interactive reporting solution that helps business stakeholders monitor performance, identify growth opportunities, and make data-driven decisions using short-term forecasts.',
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
    url: '#',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: '#',
    icon: Github,
  },
  {
    name: 'Email',
    url: 'mailto:vineethgattu065@gmail.com',
    icon: Mail,
  },
];
