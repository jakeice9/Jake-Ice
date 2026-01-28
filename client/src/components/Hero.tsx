import { motion } from 'framer-motion';
import { ArrowDown, Database, Brain, Trophy } from 'lucide-react';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Opportunities
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1 
            }}
            className="text-7xl md:text-9xl font-black font-display tracking-tighter mb-8 leading-[0.9]"
          >
            <span className="text-gradient drop-shadow-sm">JAKE ICE</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-medium mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide uppercase"
          >
            MBA Student in <span className="text-primary">Artificial Intelligence</span> • 
            Data & AI Sales • Former Division I Athlete
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground mb-10 italic"
          >
            "Motivated, hardworking, and interested in data and business."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="rounded-full px-8 text-lg h-12 transition-all duration-300 hover:bg-accent hover:scale-105 active:scale-95 shadow-lg hover:shadow-accent/20" asChild>
              <Link to="contact" smooth={true} duration={500} offset={-80} className="cursor-pointer">
                Let's Talk
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-12 transition-all duration-300 hover:bg-primary/5 hover:border-primary hover:text-primary hover:scale-105 active:scale-95" asChild>
              <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer">
                More About Me
              </Link>
            </Button>
          </motion.div>

          {/* Floating Icons */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-0 right-0 md:right-20 lg:right-40 text-primary/20 hidden lg:block"
          >
            <Brain size={64} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-0 md:left-20 lg:left-40 text-accent/20 hidden lg:block"
          >
            <Database size={64} />
          </motion.div>
          <motion.div 
             animate={{ rotate: [0, 5, -5, 0] }}
             transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
             className="absolute top-20 left-10 text-primary/10 hidden lg:block"
          >
            <Trophy size={48} />
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
