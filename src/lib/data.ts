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
  { label: 'About', href: '#about' },
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
    title: 'Customer Lifetime Value Prediction',
    description:
      'Developed a model to predict the lifetime value of customers, enabling targeted marketing campaigns.',
    tools: ['Python', 'Scikit-learn', 'Pandas', 'SQL'],
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
    title: 'Interactive Sales Dashboard',
    description:
      'Designed a real-time sales dashboard in Tableau to monitor performance and identify trends.',
    tools: ['Tableau', 'SQL', 'Data Blending'],
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
    title: 'A/B Test Analysis Framework',
    description:
      'Built a standardized framework in Python for analyzing and reporting on A/B test results.',
    tools: ['Python', 'Statsmodels', 'Jupyter', 'Plotly'],
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
  {
    id: 'proj-4',
    title: 'Churn Prediction for SaaS',
    description:
      'A machine learning model to identify customers at high risk of churning from a subscription service.',
    tools: ['Python', 'TensorFlow', 'SQL', 'BigQuery'],
    ...findImage('project-4'),
    caseStudy: {
      goal: 'Proactively identify users likely to cancel their subscription in the next 30 days to enable targeted retention efforts.',
      method: 'Engineered features from user activity logs, subscription data, and support ticket history. Trained a logistic regression model on a dataset of over 100,000 users. Deployed the model as a weekly batch scoring job.',
      result: 'The model identified 70% of churning users with a precision of 75%. The subsequent retention campaign reduced overall churn by 12% in the first quarter.',
      githubUrl: '#'
    }
  },
  {
    id: 'proj-5',
    title: 'Marketing Channel Attribution',
    description: 'Analyzed marketing channel effectiveness by building a multi-touch attribution model.',
    tools: ['R', 'SQL', 'Google Analytics'],
    ...findImage('project-5'),
    caseStudy: {
      goal: 'Move beyond last-click attribution to understand the entire customer journey and properly allocate marketing spend across channels.',
      method: 'Extracted raw touchpoint data from Google Analytics. Applied a Markov chain model to assign fractional credit to each channel based on its contribution to conversion paths.',
      result: 'Revealed that organic search and email marketing were undervalued by 30% and 25% respectively. Reallocation of budget based on these insights led to a 10% increase in overall conversion volume with the same ad spend.',
      liveUrl: '#',
    }
  },
  {
    id: 'proj-6',
    title: 'Automated Financial Reporting',
    description: 'Automated the generation of monthly financial reports using Python and SQL scripts.',
    tools: ['Python', 'SQL', 'Airflow'],
    ...findImage('project-6'),
    caseStudy: {
      goal: 'Eliminate manual data pulling and spreadsheet manipulation for month-end financial reporting, reducing errors and saving time.',
      method: 'Wrote SQL queries to extract raw data from the finance database. Developed Python scripts with Pandas to perform transformations, calculate metrics, and format the output into Excel templates. Orchestrated the entire workflow using Apache Airflow.',
      result: 'Reduced the time to generate monthly reports from 2 days to 15 minutes. Eliminated all manual data entry errors and provided the finance team with faster access to critical data.',
      githubUrl: '#'
    }
  }
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
    url: 'mailto:analyst@example.com',
    icon: Mail,
  },
];
