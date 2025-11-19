'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Monitor, Smartphone } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  color: string;
}

const projects: Project[] = [
  {
    id: 'the-gallery-barbers',
    title: 'The Gallery Barbers',
    category: 'Barbershop',
    description: 'Professionele barbershop met online afspraken systeem',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=800&fit=crop',
    tech: ['WordPress', 'Bookly', 'WooCommerce'],
    color: 'from-amber-600 via-amber-500 to-yellow-500'
  },
  {
    id: 'ma-engineers',
    title: 'MA-Engineers',
    category: 'Multi-Page',
    description: 'Technische meedenkers voor efficiënter werken',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    color: 'from-blue-600 via-blue-500 to-cyan-500'
  },
  {
    id: 'moreurop',
    title: 'Moreurop',
    category: 'Full-Stack',
    description: 'Platform voor professionele klusjesmannen',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop',
    tech: ['Next.js', 'PostgreSQL', 'Stripe'],
    color: 'from-purple-600 via-purple-500 to-pink-500'
  },
  {
    id: 'olive-grove-market',
    title: 'Olive Grove Market',
    category: 'E-commerce',
    description: 'Premium Marokkaanse olijfolie online shop',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1200&h=800&fit=crop',
    tech: ['Shopify', 'Liquid', 'Stripe'],
    color: 'from-green-600 via-emerald-500 to-teal-500'
  },
  {
    id: 'labware',
    title: 'Labware',
    category: 'E-commerce',
    description: 'Platform voor laboratorium apparatuur',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=800&fit=crop',
    tech: ['Next.js', 'PostgreSQL', 'Stripe'],
    color: 'from-cyan-600 via-blue-500 to-indigo-500'
  },
  {
    id: 'pixelperfect',
    title: 'PixelPerfect',
    category: 'Portfolio',
    description: 'Portfolio website voor creatief bureau',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
    tech: ['Next.js', 'Framer Motion', 'Three.js'],
    color: 'from-pink-600 via-purple-500 to-violet-600'
  }
];

export function PortfolioShowcase() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
  };

  return (
    <section id="portfolio" className="py-20 px-6 bg-white dark:bg-zinc-950">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ons Werk</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Een selectie van onze recente projecten waar we trots op zijn
          </p>
        </motion.div>

        <div className="relative -mx-6 md:mx-0">
          <div className="flex gap-6 overflow-x-auto pb-8 px-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group min-w-[85vw] md:min-w-0 snap-center"
              >
                <Link href={`/portfolio/${project.id}`}>
                  <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-500/20 cursor-pointer">
                    {/* Browser Mockup */}
                    <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${project.color} p-1`}>
                      {/* Browser Chrome */}
                      <div className="bg-white dark:bg-zinc-900 rounded-t-lg h-full flex flex-col">
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-t-lg">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        </div>

                        {/* Screenshot */}
                        <div className="flex-1 relative overflow-hidden">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                            className="w-full h-full"
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover object-top"
                            />
                          </motion.div>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="px-6 py-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-lg font-medium flex items-center gap-2 hover:scale-105 transition-transform">
                          Bekijk Project
                          <ExternalLink className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <CardHeader className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                          {project.category}
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-blue-600 transition-colors mb-2">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicator for mobile */}
          <div className="flex justify-center mt-4 gap-2 md:hidden">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700"
              />
            ))}
          </div>
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/portfolio">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              Bekijk Alle Projecten
              <ExternalLink className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
