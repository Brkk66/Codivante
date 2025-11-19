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
  type: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  gradient: string;
  devices?: ('desktop' | 'tablet' | 'mobile')[];
}

const projects: Project[] = [
  {
    id: 'the-gallery-barbers',
    title: 'The Gallery Barbers',
    category: 'Barbershop',
    type: 'Online Booking Platform',
    shortDescription: 'Professionele barbershop met online afspraken systeem',
    description: 'The Gallery Barbers is een moderne barbershop waar klanten eenvoudig online afspraken kunnen maken. De website biedt een overzicht van diensten, prijzen en beschikbare tijdsloten.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=800&fit=crop',
    features: ['Online Boekingen', '24/7 Beschikbaar', 'Automatische Bevestiging'],
    gradient: 'from-amber-600 via-amber-500 to-yellow-500',
    devices: ['desktop', 'mobile']
  },
  {
    id: 'ma-engineers',
    title: 'MA-Engineers',
    category: 'Multi-Page',
    type: 'Engineering Bureau',
    shortDescription: 'Technische meedenkers voor efficiënter werken',
    description: 'MA-Engineers is geen klassiek engineeringsbureau. Wij zijn technische meedenkers die processen verbeteren, projecten overnemen én teams aanvullen.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop',
    features: ['Responsive Design', 'Moderne Interface', 'SEO Geoptimaliseerd'],
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    devices: ['desktop', 'tablet', 'mobile']
  },
  {
    id: 'moreurop',
    title: 'Moreurop',
    category: 'Full-Stack',
    type: 'Professional Services',
    shortDescription: 'Platform voor professionele klusjesmannen',
    description: 'Een moderne website voor het boeken van professionele klusjesmannen, met een overzicht van diensten en een vlotte boekingsflow.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop',
    features: ['Veilige Betalingen', 'Real-time Updates', 'Gebruiksvriendelijk'],
    gradient: 'from-purple-600 via-purple-500 to-pink-500',
    devices: ['desktop', 'tablet', 'mobile']
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
          <div className="flex gap-6 overflow-x-auto pb-8 px-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
                className="group min-w-[85vw] md:min-w-0 snap-center"
              >
                <Link href={`/portfolio/${project.id}`}>
                  <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 cursor-pointer">
                    {/* Device Mockup Display */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
                      {/* Gradient Accent */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 z-10`} />

                      {/* Desktop/Tablet/Mobile Mockups */}
                      <div className="relative w-full h-full flex items-center justify-center p-8">
                        {/* Desktop mockup (larger) */}
                        <motion.div
                          whileHover={{ scale: 1.02, y: -5 }}
                          transition={{ duration: 0.4 }}
                          className="relative w-[70%] h-[85%] rounded-lg shadow-2xl overflow-hidden border-4 border-zinc-800 dark:border-zinc-700 bg-zinc-900"
                        >
                          <div className="w-full h-6 bg-zinc-800 flex items-center px-2 gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                          </div>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-top"
                          />
                        </motion.div>

                        {/* Mobile mockup (overlapping) */}
                        {project.devices?.includes('mobile') && (
                          <motion.div
                            whileHover={{ scale: 1.05, x: 5 }}
                            transition={{ duration: 0.4 }}
                            className="absolute bottom-8 right-8 w-[25%] h-[70%] rounded-2xl shadow-2xl overflow-hidden border-4 border-zinc-800 dark:border-zinc-700 bg-zinc-900 z-20"
                          >
                            <div className="w-full h-full relative">
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-zinc-900 rounded-b-xl z-30" />
                              <Image
                                src={project.image}
                                alt={`${project.title} mobile`}
                                fill
                                className="object-cover object-top"
                              />
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Device Icons */}
                      <div className="absolute top-4 right-4 flex gap-2 z-30">
                        {project.devices?.includes('desktop') && (
                          <div className="w-8 h-8 rounded-lg bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm flex items-center justify-center">
                            <Monitor className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                          </div>
                        )}
                        {project.devices?.includes('mobile') && (
                          <div className="w-8 h-8 rounded-lg bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm flex items-center justify-center">
                            <Smartphone className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                          </div>
                        )}
                      </div>

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-center gap-2"
                        >
                          <div className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center">
                            <ExternalLink className="w-6 h-6 text-zinc-900 dark:text-white" />
                          </div>
                          <span className="text-white text-sm font-medium">Bekijk Project</span>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Project Info */}
                    <CardHeader className="p-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs font-medium">
                          {project.category}
                        </Badge>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                          {project.type}
                        </span>
                      </div>

                      <CardTitle className="text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </CardTitle>

                      <CardDescription className="text-sm leading-relaxed">
                        {project.shortDescription}
                      </CardDescription>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.features.map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                          >
                            {feature}
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
