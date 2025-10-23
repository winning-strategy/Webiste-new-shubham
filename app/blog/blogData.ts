export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '5',
    slug: 'using-ai-financial-modelling',
    title: 'Using AI for Financial Modelling: A Practical Guide for Finance Teams',
    excerpt: 'Explore how artificial intelligence is transforming financial modeling workflows, from automated data processing to advanced scenario analysis.',
    date: '2025-10-19'
  },
  {
    id: '1',
    slug: 'ai-transforming-business-analytics',
    title: 'How AI is Transforming Business Analytics in 2024',
    excerpt: 'Discover the latest trends in AI-powered business analytics and how companies are leveraging artificial intelligence to gain competitive advantages in data-driven decision making.',
    date: '2024-01-15'
  },
  {
    id: '2',
    slug: 'spreadsheet-automation-best-practices',
    title: 'Spreadsheet Automation: Best Practices for Financial Teams',
    excerpt: 'Learn the essential strategies for implementing spreadsheet automation in financial departments, including error reduction techniques and workflow optimization tips.',
    date: '2024-01-08'
  },
  {
    id: '3',
    slug: 'data-visualization-trends',
    title: 'The Future of Data Visualization: Trends to Watch',
    excerpt: 'Explore emerging trends in data visualization and how modern businesses are using interactive dashboards and AI-generated insights to communicate complex data effectively.',
    date: '2024-01-01'
  },
  {
    id: '4',
    slug: 'ai-agents-productivity',
    title: 'AI Agents: The Secret to 10x Productivity Gains',
    excerpt: 'Uncover how AI agents are revolutionizing workplace productivity across industries, from automated report generation to intelligent data analysis and decision support systems.',
    date: '2023-12-25'
  }
];
