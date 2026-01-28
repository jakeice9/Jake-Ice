import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "ALKU",
    role: "Recruiting Specialist",
    period: "Previous",
    description: [
      "Strategically sourced high-level technical talent for specialized Artificial Intelligence and Data Engineering roles.",
      "Conducted deep-dive candidate screenings to evaluate technical proficiency and cultural alignment with specialized project requirements.",
      "Collaborated with hiring managers to refine sourcing strategies in the rapidly evolving AI landscape."
    ],
    tags: ["Recruiting", "AI Sourcing", "Talent Acquisition"]
  },
  {
    company: "Northwestern Mutual",
    role: "Financial Representative Intern",
    period: "Previous",
    description: [
      "Cultivated strategic client relationships through targeted lead generation and professional networking initiatives.",
      "Assisted in developing comprehensive financial plans by analyzing client data and identifying long-term growth opportunities.",
      "Demonstrated excellence in consultative sales, consistently meeting outreach and lead conversion benchmarks."
    ],
    tags: ["Sales", "Lead Gen", "Finance"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 tracking-tight">Professional Experience</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative">
                <div className="glass-panel rounded-2xl p-10 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1 shadow-sm">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-display tracking-tight text-foreground">{job.company}</h3>
                        <p className="text-primary font-semibold text-lg tracking-wide">{job.role}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold bg-secondary px-4 py-1.5 rounded-full text-muted-foreground uppercase tracking-[0.2em] border border-border/50 self-start md:self-auto">
                      {job.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {Array.isArray(job.description) && job.description.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                        <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    {job.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-primary/5 text-primary rounded-full border border-primary/10 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
