import { Project, Skill, Service, Testimonial } from './types';

export const projectsData: Project[] = [
  {
    id: 'dacia',
    title: 'Dacia Campaign Concept',
    client: 'Dacia Brand Concept',
    description: 'A creative visual and marketing concept for the Dacia brand focused on modern advertising and clean digital storytelling.',
    link: 'https://canva.link/1np9tjj5455as5v',
    tags: ['Marketing Strategy', 'Campaign Design', 'Social Media', 'Brand Concept'],
    image: 'dacia.jpg',
    category: 'Marketing'
  },
  {
    id: 'nesma',
    title: 'Nesma Home Fragrance',
    client: 'Nesma Brand Identity',
    description: 'A luxurious visual identity for a home fragrance brand focused on elegance, premium aesthetics, and exquisite sensory branding.',
    link: 'https://canva.link/0q2cuc00w40xog5',
    tags: ['Branding', 'Visual Identity', 'Packaging Concept', 'Luxury Aesthetics'],
    image: 'nes.jpg',
    category: 'Branding'
  },
  {
    id: 'selfup',
    title: 'Selfup Digital Identity',
    client: 'Selfup Platform',
    description: 'A contemporary branding and social content ecosystem engineered to communicate self-growth, motivation, and professional scaling.',
    link: 'https://canva.link/vuogpof5fetiske',
    tags: ['Branding', 'Social Media Design', 'Typography', 'Content Creation'],
    image: 'sel.jpg',
    category: 'Social Media'
  }
];

export const skillsData: Skill[] = [
  { name: 'Graphic Design', percentage: 95, category: 'Creative Design' },
  { name: 'Branding & Visual Identity', percentage: 92, category: 'Creative Design' },
  { name: 'Social Media Design', percentage: 94, category: 'Creative Design' },
  { name: 'Canva Design & Prototyping', percentage: 98, category: 'Tools & Platforms' },
  { name: 'Adobe Photoshop', percentage: 88, category: 'Tools & Platforms' },
  { name: 'Adobe Illustrator', percentage: 85, category: 'Tools & Platforms' },
  { name: 'Digital Marketing', percentage: 90, category: 'Digital Marketing' },
  { name: 'Content Creation', percentage: 93, category: 'Digital Marketing' },
  { name: 'Community Management', percentage: 88, category: 'Digital Marketing' },
  { name: 'Marketing Strategy', percentage: 86, category: 'Digital Marketing' }
];

export const servicesData: Service[] = [
  {
    title: 'Brand Identity Design',
    description: 'Developing high-end, timeless logos, color theories, typography plans, and guidelines that encapsulate your luxury brand narrative.',
    iconName: 'Sparkles',
    features: ['Logo Systems', 'Luxury Brand Guidelines', 'Color & Font Strategy', 'Stationery Systems Design']
  },
  {
    title: 'Social Media Design',
    description: 'Crafting premium grids, stories, high-end layouts, and templated suites on Adobe and Canva to convert viewers into clients.',
    iconName: 'Instagram',
    features: ['Curated Feed Structures', 'Interactive Carousel Storyboards', 'Animated Post Layouts', 'Custom Canva Toolkits']
  },
  {
    title: 'Digital Marketing',
    description: 'Designing highly targeted visual campaigns, marketing funnels, and digital communication strategies aligned with Moroccan and global audiences.',
    iconName: 'Target',
    features: ['Ad Creative Production', 'Brand Positioning Strategy', 'Campaign Conceptualization', 'Conversion Management']
  },
  {
    title: 'Content Strategy',
    description: 'Orchestrating editorial plans, copywriting guides, community scripts, and social platforms roadmap to scale organic digital reach.',
    iconName: 'Layers',
    features: ['Copywriting (French & Arabic)', 'Editorial Calendar Design', 'SEO-friendly Content', 'Growth Tracking Audits']
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Benjelloun',
    role: 'Creative Director',
    company: 'Maison du Luxe',
    feedback: 'Kawtar brings an incredible level of dedication and refined aesthetic sensibility to every piece she creates. Her branding expertise has elevated our visual consistency across all social media frontages, capturing exactly the elegance we sought.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 'test-2',
    name: 'Youssef El Alami',
    role: 'Marketing Lead',
    company: 'Chambre Marocaine d’Innovation',
    feedback: 'An outstanding digital marketer with rare public law analytical depth and highly refined graphic skill. Working with Kawtar is a seamless process. She listens intently, refines beautifully, and delivers on-site luxury content that drives engagement.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 'test-3',
    name: 'Meriem Lahlou',
    role: 'Founder',
    company: 'Lumière Fragrances',
    feedback: 'From our brand strategy definition down to the fine typography pairings, Kawtar was instrumental in launching our social accounts. She is highly proactive, responsive, and an absolute artist with Canva and Adobe suites.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'
  }
];
