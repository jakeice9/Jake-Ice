import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";

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
          {/* ============================================================
              ACTIVITY 1.1 EDIT START
              Change: Updated the title and added a subtitle.
              Explanation: Dr. Osman asked to identify the structure/anatomy. 
              I changed the main <h2> text and added a <p> tag to serve 
              as the 'subtitle' since this component didn't have a 
              separate subtitle field originally.
             ============================================================ */}
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-2">
            About Me
          </h2>
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            My Story
          </p>
          {/* ============================================================
              ACTIVITY 1.1 EDIT END
             ============================================================ */}

          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
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
            {/* CONTENT AREA: This is where the 'Style' and 'Structure' meet */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an{" "}
              <span className="text-foreground font-semibold">
                MBA student at Sacred Heart University
              </span>
              , deeply passionate about the intersection of technology and
              business.
            </p>

            {/* ... remaining text ... */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {/* These Cards represent modular 'pieces' of the anatomy */}
              <Card className="bg-background/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                  <GraduationCap className="text-primary h-8 w-8" />
                  <span className="font-semibold text-sm">MBA Student</span>
                </CardContent>
              </Card>
              {/* Additional cards follow the same structure */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
