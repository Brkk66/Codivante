'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Palette, Rocket, Users, Mail, Phone, MapPin, CheckCircle2, Star, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { TextScramble } from '@/components/text-scramble';
import { MagneticButton } from '@/components/magnetic-button';
import { portfolioImages } from '@/lib/unsplash';
import { useLenis, scrollTo } from '@/hooks/use-lenis';

export default function Home() {
  useLenis();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const handleScrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollTo(id);
    setMobileMenuOpen(false);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: 'easeOut' }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 w-full overflow-x-hidden max-w-[100vw]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Codivante
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex items-center gap-8"
            >
              <a href="#diensten" onClick={handleScrollTo('#diensten')} className="text-sm font-medium hover:text-blue-600 transition-colors cursor-pointer">Diensten</a>
              <a href="#portfolio" onClick={handleScrollTo('#portfolio')} className="text-sm font-medium hover:text-blue-600 transition-colors cursor-pointer">Portfolio</a>
              <a href="#over-ons" onClick={handleScrollTo('#over-ons')} className="text-sm font-medium hover:text-blue-600 transition-colors cursor-pointer">Over Ons</a>
              <a href="#contact" onClick={handleScrollTo('#contact')} className="text-sm font-medium hover:text-blue-600 transition-colors cursor-pointer">Contact</a>
              <MagneticButton size="sm" onClick={() => scrollTo('#contact')}>Start Project</MagneticButton>
            </motion.div>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a href="#diensten" onClick={handleScrollTo('#diensten')} className="text-lg font-medium hover:text-blue-600 transition-colors cursor-pointer">
                    Diensten
                  </a>
                  <a href="#portfolio" onClick={handleScrollTo('#portfolio')} className="text-lg font-medium hover:text-blue-600 transition-colors cursor-pointer">
                    Portfolio
                  </a>
                  <a href="#over-ons" onClick={handleScrollTo('#over-ons')} className="text-lg font-medium hover:text-blue-600 transition-colors cursor-pointer">
                    Over Ons
                  </a>
                  <a href="#contact" onClick={handleScrollTo('#contact')} className="text-lg font-medium hover:text-blue-600 transition-colors cursor-pointer">
                    Contact
                  </a>
                  <Button className="w-full mt-4" onClick={() => { scrollTo('#contact'); setMobileMenuOpen(false); }}>
                    Start Project
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Static gradient background for mobile */}
        <div className="absolute inset-0 md:hidden">
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-block">
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-sm font-medium">
                Digitale Innovatie
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              Transformeer Jouw
              <span className="block">
                <TextScramble
                  text="Digitale Visie"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
            >
              Wij bouwen moderne websites en applicaties die jouw bedrijf naar het volgende niveau tillen.
              Van concept tot lancering, wij maken het mogelijk.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <MagneticButton size="lg" className="text-lg px-8">
                Start Je Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </MagneticButton>
              <MagneticButton size="lg" variant="outline" className="text-lg px-8">
                Bekijk Portfolio
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16"
            >
              {[
                { value: '50+', label: 'Projecten', color: 'text-blue-600' },
                { value: '100%', label: 'Tevreden', color: 'text-purple-600' },
                { value: '24/7', label: 'Support', color: 'text-pink-600' },
                { value: '5★', label: 'Reviews', color: 'text-orange-600' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                >
                  <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating gradient orbs - hidden on mobile */}
        <motion.div
          className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="hidden md:block absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Onze Diensten</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Alles wat je nodig hebt voor jouw digitale succes
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          >
            {[
              {
                icon: Code2,
                title: 'Webontwikkeling',
                description: 'Snelle en schaalbare websites met moderne technologieën.',
                features: ['Moderne Architectuur', 'Veilig & Betrouwbaar', 'Responsive Design']
              },
              {
                icon: Palette,
                title: 'UI/UX Design',
                description: 'Mooie interfaces die gebruikers bekoren en converteren.',
                features: ['Modern Ontwerp', 'Gebruikersonderzoek', 'Prototyping']
              },
              {
                icon: Rocket,
                title: 'Prestaties',
                description: 'Razendsnelle websites die hoog scoren in Google.',
                features: ['SEO Optimalisatie', 'Snelheidsoptimalisatie', 'Core Web Vitals']
              },
              {
                icon: Users,
                title: 'Consultancy',
                description: 'Strategisch advies voor transformatie en groei.',
                features: ['Tech Stack Advies', 'Roadmap Planning', 'Best Practices']
              },
              {
                icon: CheckCircle2,
                title: 'Onderhoud',
                description: 'Continue support en updates voor je website.',
                features: ['24/7 Monitoring', 'Regelmatige Updates', 'Bug Fixes']
              },
              {
                icon: Star,
                title: 'Webshop',
                description: 'Webshops die verkopen en meeschalen.',
                features: ['Betaalintegratie', 'Voorraadbeheer', 'Rapportages']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex"
              >
                <Card className="h-full w-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500/20 flex flex-col">
                  <CardHeader className="p-4 md:p-6">
                    <motion.div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-3 md:mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-base md:text-lg min-h-[2.5rem] md:min-h-[1.75rem]">{service.title}</CardTitle>
                    <CardDescription className="text-xs md:text-sm line-clamp-3">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 md:p-6 md:pt-0 flex-grow">
                    <ul className="space-y-1.5 md:space-y-2">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center text-xs md:text-sm text-zinc-600 dark:text-zinc-400"
                        >
                          <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 mr-1.5 md:mr-2 text-green-500 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio" className="py-20 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-end justify-between mb-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Werk</h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400">
                  Een selectie van onze nieuwste projecten
                </p>
              </div>
              <a href="/portfolio" className="hidden md:block">
                <MagneticButton>
                  Alle Projecten
                  <ArrowRight className="ml-2 h-4 w-4" />
                </MagneticButton>
              </a>
            </div>
          </motion.div>

          {/* Horizontaal scrollende cards */}
          <div className="relative -mx-6 md:mx-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex gap-6 overflow-x-auto pb-8 px-6 md:px-0 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                {
                  title: 'The Gallery Barbers',
                  category: 'Barbershop',
                  image: portfolioImages.ecommerce,
                  tech: ['WordPress', 'Bookly'],
                  color: 'from-blue-500 to-purple-600'
                },
                {
                  title: 'TechFlow Solutions',
                  category: 'SaaS Platform',
                  image: portfolioImages.saas,
                  tech: ['Next.js', 'TypeScript'],
                  color: 'from-green-500 to-teal-600'
                },
                {
                  title: 'Urban Eats',
                  category: 'Restaurant',
                  image: portfolioImages.corporate,
                  tech: ['React', 'Framer Motion'],
                  color: 'from-orange-500 to-red-600'
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="group min-w-[85vw] md:min-w-0 snap-center"
                >
                  <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-500/20">
                    {/* Browser Mockup */}
                    <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.color} p-1`}>
                      {/* Browser Chrome */}
                      <div className="bg-white dark:bg-zinc-900 rounded-t-lg h-full flex flex-col">
                        <div className="flex items-center gap-1.5 px-3 py-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-t-lg border-b border-zinc-200 dark:border-zinc-700">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                          <div className="flex-1 mx-4 h-6 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700" />
                        </div>

                        {/* Screenshot */}
                        <div className="flex-1 relative overflow-hidden bg-white dark:bg-zinc-900">
                          <motion.div
                            whileHover={{ scale: 1.03 }}
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
                    </div>

                    {/* Project Info */}
                    <CardHeader className="p-5">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 inline-block w-fit mb-3">
                        {project.category}
                      </span>
                      <CardTitle className="group-hover:text-blue-600 transition-colors text-xl mb-3">
                        {project.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8 md:hidden"
          >
            <a href="/portfolio">
              <MagneticButton size="lg" className="text-lg px-8">
                Bekijk Alle Projecten
                <ArrowRight className="ml-2 h-5 w-5" />
              </MagneticButton>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="over-ons" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Over Codivante
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                Wij zijn een team van gepassioneerde developers en designers die geloven in de kracht
                van technologie om bedrijven te transformeren.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                Met jarenlange ervaring in web development, design en digital strategy, helpen we
                ondernemers en bedrijven hun digitale dromen waar te maken.
              </p>
              <MagneticButton size="lg">
                Leer Ons Kennen
                <ArrowRight className="ml-2 h-5 w-5" />
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Ervaring', value: '10+ jaar' },
                { label: 'Team Leden', value: '15+' },
                { label: 'Technologies', value: '20+' },
                { label: 'Coffee Cups', value: '∞' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Neem Contact Op</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Klaar om jouw project te starten? Laten we praten!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <CardTitle>Stuur een Bericht</CardTitle>
                  <CardDescription>We nemen binnen 24 uur contact met je op</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Naam</Label>
                    <Input id="name" placeholder="Jouw naam" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="jouw@email.nl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Bericht</Label>
                    <Textarea id="message" placeholder="Vertel ons over je project..." rows={5} />
                  </div>
                  <MagneticButton className="w-full" size="lg">
                    Verstuur Bericht
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </MagneticButton>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Informatie</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', value: 'info@codivante.com', bg: 'bg-blue-100 dark:bg-blue-950', color: 'text-blue-600' },
                    { icon: Phone, label: 'Telefoon', value: '+31 6 12345678', bg: 'bg-purple-100 dark:bg-purple-950', color: 'text-purple-600' },
                    { icon: MapPin, label: 'Locatie', value: 'Amsterdam, Nederland', bg: 'bg-pink-100 dark:bg-pink-950', color: 'text-pink-600' }
                  ].map((contact, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-10 h-10 rounded-lg ${contact.bg} flex items-center justify-center flex-shrink-0`}
                      >
                        <contact.icon className={`h-5 w-5 ${contact.color}`} />
                      </motion.div>
                      <div>
                        <div className="font-medium">{contact.label}</div>
                        <div className="text-zinc-600 dark:text-zinc-400">{contact.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0">
                  <CardHeader>
                    <CardTitle className="text-white">Klaar om te starten?</CardTitle>
                    <CardDescription className="text-blue-100">
                      Plan een gratis consult van 30 minuten
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="secondary" size="lg" className="w-full">
                      Boek Afspraak
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 dark:bg-black text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 mb-8"
          >
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Codivante
              </div>
              <p className="text-zinc-400 text-sm">
                Transformeer jouw digitale visie naar realiteit
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Diensten</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Maintenance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Bedrijf</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">Over Ons</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>info@codivante.com</li>
                <li>+31 6 12345678</li>
                <li>Amsterdam, NL</li>
              </ul>
            </div>
          </motion.div>
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-400">
              © 2024 Codivante. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6 text-sm text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
