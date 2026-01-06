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
  LineChart,
  FileCog,
  Server,
  Replace,
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
    icon: Code,
    title: 'Python & SQL',
    description:
      'Utilizing Python and SQL for data manipulation, analysis, and automation to extract actionable insights from data.',
  },
  {
    icon: LineChart,
    title: 'NumPy, Pandas, & Matplotlib',
    description:
      'Leveraging Python libraries for advanced numerical analysis, data manipulation, and creating insightful visualizations.',
  },
  {
    icon: LayoutDashboard,
    title: 'Power BI & Excel',
    description:
      'Building interactive dashboards and reports with Power BI and Excel to visualize data and track key metrics.',
  },
  {
    icon: Server,
    title: 'SQL Server, MySQL, & MongoDB',
    description:
      'Working with relational and NoSQL databases to store, query, and manage large datasets efficiently.',
  },
  {
    icon: Replace,
    title: 'Data Cleaning & Transformation',
    description:
      'Implementing structured pipelines for cleaning and transforming raw data into analysis-ready formats.',
  },
  {
    icon: Beaker,
    title: 'EDA & Forecasting',
    description:
      'Performing Exploratory Data Analysis (EDA) and applying forecasting models to uncover trends and predict outcomes.',
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
      goal: 'To analyze sales and profit data for a business in New Zealand, creating a comprehensive Power BI dashboard to track Key Performance Indicators (KPIs) and provide actionable insights for strategic decision-making.',
      method:
        'The project involved creating an interactive dashboard using Power BI with slicers and filters for easy data exploration. Key metrics such as total sales, profit, quantity sold, and profit margin were monitored. Data Analysis Expressions (DAX) were used to create custom calculations and measures for deeper analysis of product performance, customer segments, and geographical sales distribution.',
      result:
        'The final dashboard provided a clear view of business performance, identifying top-selling products and high-value customer segments. Geographical analysis visualized sales hotspots across New Zealand, enabling targeted marketing efforts and optimized inventory management. The tool empowers stakeholders to make data-driven decisions.',
      githubUrl: 'https://github.com/hebee-77/New-Zealand-Sales-Profit-Analysis',
    },
  },
  {
    id: 'proj-3',
    title: 'SuperStore Sales Power-BI Analysis',
    description:
      'This project focuses on designing a comprehensive sales analytics and forecasting dashboard for a retail SuperStore dataset.',
    tools: ['Power BI', 'Excel', 'Google Colab'],
    ...findImage('project-3'),
    caseStudy: {
      goal: 'To design a comprehensive sales analytics and forecasting dashboard to provide deep insights into sales performance, customer behavior, and product trends, while also predicting future sales to support strategic decision-making.',
      method:
        'An interactive Power BI dashboard was developed to track KPIs like sales, profit, and profit margin. The dashboard includes detailed analysis of customer segments, product performance, and shipping status. Time series forecasting was implemented to predict future sales, aiding in inventory management and strategic planning.',
      result:
        'The resulting dashboard offers a user-friendly interface with slicers and filters for easy data exploration. It successfully identifies high-value customers and popular products, and the sales forecasting feature provides a reliable basis for future inventory and sales strategies. The project delivers actionable insights for the retail business.',
      githubUrl: 'https://github.com/hebee-77/Super-Store-Sales-Powerbi-Dashboard',
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
