export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  link: string;
  tags: string[];
  image: string;
  category: 'Branding' | 'Marketing' | 'Social Media';
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'Creative Design' | 'Digital Marketing' | 'Tools & Platforms';
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  image: string;
}
