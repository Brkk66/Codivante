/**
 * Centralized project data
 * This is the single source of truth for all portfolio projects
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  color: string;
  tags?: string[]; // Optional tags for homepage preview
}

export const projects: Project[] = [
  {
    id: 'the-gallery-barbers',
    title: 'The Gallery Barbers',
    category: 'Barbershop',
    description: 'Professionele barbershop met online afspraken systeem',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=800&fit=crop',
    tech: ['WordPress', 'Bookly', 'WooCommerce'],
    tags: ['Online Booking', 'Portfolio', 'Social Media'],
    color: 'from-amber-600 via-amber-500 to-yellow-500'
  },
  {
    id: 'ma-engineers',
    title: 'MA-Engineers',
    category: 'Multi-Page',
    description: 'Technische meedenkers voor efficiënter werken',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    tags: ['Responsive Design', 'Multi-Page', 'Modern UI'],
    color: 'from-blue-600 via-blue-500 to-cyan-500'
  },
  {
    id: 'moreurop',
    title: 'Moreurop',
    category: 'Full-Stack',
    description: 'Platform voor professionele klusjesmannen',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop',
    tech: ['Next.js', 'PostgreSQL', 'Stripe'],
    tags: ['Dashboard', 'Payment Integration', 'User Management'],
    color: 'from-purple-600 via-purple-500 to-pink-500'
  },
  {
    id: 'olive-grove-market',
    title: 'Olive Grove Market',
    category: 'E-commerce',
    description: 'Premium Marokkaanse olijfolie online shop',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1200&h=800&fit=crop',
    tech: ['Shopify', 'Liquid', 'Stripe'],
    tags: ['E-commerce', 'Product Catalog', 'Checkout'],
    color: 'from-green-600 via-emerald-500 to-teal-500'
  },
  {
    id: 'labware',
    title: 'Labware',
    category: 'E-commerce',
    description: 'Platform voor laboratorium apparatuur',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=800&fit=crop',
    tech: ['Next.js', 'PostgreSQL', 'Stripe'],
    tags: ['Product Catalog', 'B2B', 'Inventory'],
    color: 'from-cyan-600 via-blue-500 to-indigo-500'
  },
  {
    id: 'pixelperfect',
    title: 'PixelPerfect',
    category: 'Portfolio',
    description: 'Portfolio website voor creatief bureau',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
    tech: ['Next.js', 'Framer Motion', 'Three.js'],
    tags: ['3D Graphics', 'Animations', 'Creative'],
    color: 'from-pink-600 via-purple-500 to-violet-600'
  }
];

// Helper function to get a project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

// Helper function to get featured projects (for homepage)
export function getFeaturedProjects(count: number = 3): Project[] {
  return projects.slice(0, count);
}
