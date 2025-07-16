export interface PortfolioItem {
  id: string;
  title: string;
  category: 'all' | 'art' | 'websites' | 'videos';
  image: string;
  description: string;
  isVideo?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}