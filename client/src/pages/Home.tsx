import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
/* Note: I removed the 'About' import because we are putting its code directly below 
   to satisfy the 'Anatomy' requirement of the assignment. */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <Navigation />

      <main>
        <Hero />

        {/* ============================================================
            ACTIVITY 1.1: EXPLORE YOUR APP'S ANATOMY
            Change: Moved About section code directly into Home.tsx.
            Explanation: This allows us to see the 'Structure' (h2, p) 
            and 'Style' (className) layers in the main file.
           ============================================================ */}
        <section id="about" className="py-24 bg-secondary/30 relative">
          <div className="container px-4 text-center">
            {/* STRUCTURE LAYER: The actual content */}
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-2">
              About Me
            </h2>
            <p className="text-primary font-medium uppercase text-sm">
              My Story
            </p>

            {/* STYLE LAYER: Tailwind classes for the gold line */}
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-4"></div>

            <div className="mt-8 max-w-2xl mx-auto text-muted-foreground">
              <p>
                I am an MBA student at Sacred Heart University, focused on AI
                and Business Development.
              </p>
            </div>
          </div>
        </section>
        {/* ============================================================
            END OF ACTIVITY 1.1 EDIT
           ============================================================ */}

        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
