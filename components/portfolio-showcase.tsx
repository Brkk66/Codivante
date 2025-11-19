'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Monitor, Smartphone } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  type: string;
  description: string;
  image: string;
  tags: string[];
  gradient: string;
  devices?: ('desktop' | 'tablet' | 'mobile')[];
}

const projects: Project[] = [
  {
    title: 'MA-Engineers',
    category: 'Multi-Page',
    type: 'Engineering Bureau',
    description: 'MA-Engineers is geen klassiek engineeringsbureau. Wij zijn technische meedenkers die processen verbeteren, projecten overnemen én teams aanvullen.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop',
    tags: ['Moderne Interface', 'Mobiel Optimaal', 'Snelle Laadtijd'],
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    devices: ['desktop', 'tablet', 'mobile']
  },
  {
    title: 'Technical Solutions',
    category: 'Multi-Page',
    type: 'Technical Services',
    description: 'Technical Solutions is een betrouwbare partner voor technische diensten, engineering, pompen, kleppen en meettechnologie.',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&h=800&fit=crop',
    tags: ['Responsive Design', 'SEO Geoptimaliseerd', 'Gebruiksvriendelijk'],
    gradient: 'from-orange-600 via-orange-500 to-yellow-500',
    devices: ['desktop', 'tablet', 'mobile']
  },
  {
    title: 'Moreurop',
    category: 'Full-Stack',
    type: 'Professional Services',
    description: 'Een moderne website voor het boeken van professionele klusjesmannen, met een overzicht van diensten en een vlotte boekingsflow.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop',
    tags: ['Online Boekingen', 'Veilige Betalingen', 'Real-time Updates'],
    gradient: 'from-purple-600 via-purple-500 to-pink-500',
    devices: ['desktop', 'tablet', 'mobile']
  }
];

export function PortfolioShowcase() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
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
                <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700">
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 z-10`} />

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    <div className="absolute bottom-4 right-4 flex gap-2 z-20">
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

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/50 backdrop-blur-sm z-30 flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center"
                      >
                        <ExternalLink className="w-6 h-6 text-zinc-900 dark:text-white" />
                      </motion.div>
                    </motion.div>
                  </div>

                  <CardHeader className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
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

                    <CardDescription className="text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-4 gap-2 md:hidden">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700"
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-xl transition-all duration-300"
          >
            Bekijk Alle Projecten
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
