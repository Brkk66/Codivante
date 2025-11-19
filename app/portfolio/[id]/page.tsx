'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MagneticButton } from '@/components/magnetic-button';

// Project data (should match portfolio-showcase.tsx)
const projects = {
  'the-gallery-barbers': {
    id: 'the-gallery-barbers',
    title: 'The Gallery Barbers',
    category: 'Barbershop',
    type: 'Online Booking Platform',
    date: 'November 2024',
    client: 'The Gallery Barbers',
    shortDescription: 'Professionele barbershop met online afspraken systeem',
    description: 'The Gallery Barbers is een moderne barbershop waar klanten eenvoudig online afspraken kunnen maken. De website biedt een overzicht van diensten, prijzen en beschikbare tijdsloten.',
    challenge: 'De klant wilde een professionele online aanwezigheid met een eenvoudig boekingssysteem dat klanten 24/7 kunnen gebruiken zonder telefonisch contact.',
    solution: 'We hebben een moderne, gebruiksvriendelijke website gebouwd met een geïntegreerd boekingssysteem. Klanten kunnen nu eenvoudig hun favoriete barber kiezen en een afspraak inplannen.',
    results: [
      '80% minder telefonische boekingen',
      '50% meer afspraken buiten openingstijden',
      'Verhoogde klanttevredenheid door gemak'
    ],
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=1200&h=800&fit=crop'
    ],
    features: ['Online Boekingen', '24/7 Beschikbaar', 'Automatische Bevestiging'],
    technologies: ['WordPress', 'Bookly', 'WooCommerce'],
    liveUrl: 'https://thegallerybarbers.com',
    gradient: 'from-amber-600 via-amber-500 to-yellow-500'
  },
  'ma-engineers': {
    id: 'ma-engineers',
    title: 'MA-Engineers',
    category: 'Multi-Page',
    type: 'Engineering Bureau',
    date: 'Oktober 2024',
    client: 'MA-Engineers',
    shortDescription: 'Technische meedenkers voor efficiënter werken',
    description: 'MA-Engineers is geen klassiek engineeringsbureau. Wij zijn technische meedenkers die processen verbeteren, projecten overnemen én teams aanvullen.',
    challenge: 'Het bedrijf had behoefte aan een professionele website die hun technische expertise en moderne aanpak goed weerspiegelt.',
    solution: 'We ontwikkelden een strakke, professionele website met duidelijke informatie over hun diensten en een moderne uitstraling die past bij hun innovatieve aanpak.',
    results: [
      '3x meer contactaanvragen',
      'Professionelere uitstraling',
      'Betere vindbaarheid in Google'
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1581092160607-ee67b1e23d4e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1581092583537-20d51876521f?w=1200&h=800&fit=crop'
    ],
    features: ['Responsive Design', 'Moderne Interface', 'SEO Geoptimaliseerd'],
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    liveUrl: '#',
    gradient: 'from-blue-600 via-blue-500 to-cyan-500'
  },
  'moreurop': {
    id: 'moreurop',
    title: 'Moreurop',
    category: 'Full-Stack',
    type: 'Professional Services',
    date: 'September 2024',
    client: 'Moreurop',
    shortDescription: 'Platform voor professionele klusjesmannen',
    description: 'Een moderne website voor het boeken van professionele klusjesmannen, met een overzicht van diensten en een vlotte boekingsflow.',
    challenge: 'De klant wilde een platform waar klanten eenvoudig klusjesmannen kunnen boeken en betalen, met een overzichtelijk dashboard voor beide partijen.',
    solution: 'We bouwden een full-stack platform met gebruikersaccounts, boekingssysteem en veilige online betalingen.',
    results: [
      '100+ actieve gebruikers binnen 1 maand',
      'Geautomatiseerde boekingsflow',
      'Veilige online betalingen'
    ],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&h=800&fit=crop'
    ],
    features: ['Veilige Betalingen', 'Real-time Updates', 'Gebruiksvriendelijk'],
    technologies: ['Next.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    gradient: 'from-purple-600 via-purple-500 to-pink-500'
  },
  'olive-grove-market': {
    id: 'olive-grove-market',
    title: 'Olive Grove Market',
    category: 'E-commerce',
    type: 'Online Winkel',
    date: 'Augustus 2024',
    client: 'Olive Grove Market',
    shortDescription: 'Premium Marokkaanse olijfolie online shop',
    description: 'Een elegante e-commerce website voor de verkoop van ambachtelijke Marokkaanse olijfolie, met een focus op kwaliteit en authenticiteit.',
    challenge: 'De klant wilde hun premium olijfolieproducten online verkopen met een website die de ambachtelijke kwaliteit en Marokkaanse roots weerspiegelt.',
    solution: 'We ontwikkelden een visueel aantrekkelijke webshop met productfotografie, veilige betalingen en een intuïtieve winkelervaring die de premium uitstraling van het merk behoudt.',
    results: [
      '200+ online verkopen in eerste maand',
      '45% conversie van bezoekers naar klanten',
      'Verhoogde merkbekendheid'
    ],
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1437252611977-07f74518abd7?w=1200&h=800&fit=crop'
    ],
    features: ['Online Winkelwagen', 'Veilige Checkout', 'Product Reviews'],
    technologies: ['Shopify', 'Liquid', 'Stripe'],
    liveUrl: '#',
    gradient: 'from-green-600 via-emerald-500 to-teal-500'
  },
  'labware': {
    id: 'labware',
    title: 'Labware',
    category: 'E-commerce',
    type: 'B2B Platform',
    date: 'Juli 2024',
    client: 'Labware Solutions',
    shortDescription: 'Platform voor laboratorium apparatuur',
    description: 'Een professioneel B2B e-commerce platform voor de verkoop van laboratoriumapparatuur en wetenschappelijke benodigdheden aan onderzoeksinstellingen.',
    challenge: 'Het bedrijf had een verouderd systeem en wilde een moderne, schaalbare oplossing met voorraadbe heer en gedetailleerde productspecificaties.',
    solution: 'We bouwden een geavanceerd B2B platform met uitgebreide productcatalogi, bulkbestellingen, offerteaanvragen en een CRM-integratie voor accountbeheer.',
    results: [
      '150+ zakelijke klanten gemigreerd',
      '60% snellere orderverwerking',
      'Geautomatiseerd voorraadbeheer'
    ],
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=1200&h=800&fit=crop'
    ],
    features: ['Bulk Ordering', 'Quote Requests', 'Inventory Management'],
    technologies: ['Next.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    gradient: 'from-cyan-600 via-blue-500 to-indigo-500'
  },
  'pixelperfect': {
    id: 'pixelperfect',
    title: 'PixelPerfect',
    category: 'Portfolio',
    type: 'Creative Agency',
    date: 'Juni 2024',
    client: 'PixelPerfect Studio',
    shortDescription: 'Portfolio website voor creatief bureau',
    description: 'Een visueel indrukwekkende portfolio website voor een creatief ontwerpbureau, met focus op het tentoonstellen van hun beste werk en het aantrekken van hoogwaardige klanten.',
    challenge: 'De creative agency wilde een website die hun creatieve visie en unieke ontwerpstijl volledig tot leven brengt, terwijl het technisch hoogstaand blijft.',
    solution: 'We ontwikkelden een interactieve portfolio site met vloeiende animaties, dynamische projectgalerijen en een storytelling-aanpak die bezoekers meeneemt in hun creatieve proces.',
    results: [
      '85% meer portfolio views',
      '12 nieuwe high-value klanten',
      'Award-winning design erkenning'
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=800&fit=crop'
    ],
    features: ['Interactieve Animaties', 'Project Galerij', 'Contact Formulier'],
    technologies: ['Next.js', 'Framer Motion', 'Three.js'],
    liveUrl: '#',
    gradient: 'from-pink-600 via-purple-500 to-violet-600'
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project niet gevonden</h1>
          <Link href="/">
                <Button>Terug naar home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const projectKeys = Object.keys(projects);
  const currentIndex = projectKeys.indexOf(projectId);
  const prevProject = currentIndex > 0 ? projectKeys[currentIndex - 1] : null;
  const nextProject = currentIndex < projectKeys.length - 1 ? projectKeys[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/#portfolio">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Terug naar portfolio
              </Button>
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge className="text-sm">{project.category}</Badge>
              <span className="text-zinc-500 dark:text-zinc-400">•</span>
              <span className="text-zinc-600 dark:text-zinc-400">{project.type}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <div className="text-zinc-500 dark:text-zinc-400 mb-1">Client</div>
                <div className="font-medium">{project.client}</div>
              </div>
              <div>
                <div className="text-zinc-500 dark:text-zinc-400 mb-1">Datum</div>
                <div className="font-medium">{project.date}</div>
              </div>
              <div>
                <div className="text-zinc-500 dark:text-zinc-400 mb-1">Categorie</div>
                <div className="font-medium">{project.category}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto max-w-6xl"
        >
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Project Details */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">De Uitdaging</h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">De Oplossing</h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>

              {/* Additional Images */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {project.images.slice(1).map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image src={img} alt={`${project.title} ${i + 2}`} fill className="object-cover" />
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">Resultaten</h2>
                <ul className="space-y-3">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3 text-lg text-zinc-600 dark:text-zinc-400">
                      <span className={`w-6 h-6 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white text-sm flex-shrink-0 mt-1`}>
                        ✓
                      </span>
                      {result}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 sticky top-24"
              >
                <h3 className="font-bold mb-4">Project Details</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">Features</div>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <Badge key={i} variant="secondary">{feature}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <MagneticButton className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Bekijk Live Site
                    </MagneticButton>
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Other Projects */}
      <section className="px-6 py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            {prevProject ? (
              <Link href={`/portfolio/${prevProject}`} className="group flex items-center gap-2">
                <ChevronLeft className="w-5 h-5" />
                <div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">Vorig Project</div>
                  <div className="font-medium group-hover:text-blue-600 transition-colors">
                    {projects[prevProject as keyof typeof projects].title}
                  </div>
                </div>
              </Link>
            ) : <div />}

            {nextProject ? (
              <Link href={`/portfolio/${nextProject}`} className="group flex items-center gap-2 text-right">
                <div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">Volgend Project</div>
                  <div className="font-medium group-hover:text-blue-600 transition-colors">
                    {projects[nextProject as keyof typeof projects].title}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Klaar voor jouw project?</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
              Laten we samen jouw digitale visie realiseren
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <MagneticButton size="lg">
                  Start Je Project
                </MagneticButton>
              </Link>
              <Link href="/#diensten">
                <MagneticButton size="lg" variant="outline">
                  Bekijk Onze Diensten
                </MagneticButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
