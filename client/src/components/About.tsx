import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Unsplash abstract image representing data/business */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              {/* Photo by Campaign Creators on Unsplash */}
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Business meeting" 
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an <span className="text-foreground font-semibold">MBA student at Sacred Heart University</span>, 
              deeply passionate about the intersection of technology and business. 
              My academic focus lies in Artificial Intelligence, but my drive extends to practical applications 
              in business development and sales.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a background in recruiting and financial services, I understand the human element 
              behind the data. I thrive in environments that challenge me to leverage analytics 
              to drive growth and build meaningful connections.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <Card className="bg-background/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <GraduationCap className="text-primary h-8 w-8" />
                  <span className="font-semibold text-sm">MBA Student</span>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <Briefcase className="text-primary h-8 w-8" />
                  <span className="font-semibold text-sm">Biz Dev</span>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <Award className="text-primary h-8 w-8" />
                  <span className="font-semibold text-sm">Div I Athlete</span>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
