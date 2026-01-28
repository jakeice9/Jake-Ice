import { motion } from 'framer-motion';
import { 
  Users, 
  BarChart3, 
  MessageSquare, 
  TrendingUp, 
  Swords 
} from 'lucide-react';

const skills = [
  {
    name: "Data & AI Recruiting",
    icon: Users,
    description: "Sourcing top-tier talent for specialized technical roles.",
    level: 90
  },
  {
    name: "Business Analytics",
    icon: BarChart3,
    description: "Interpreting complex data to drive strategic decisions.",
    level: 85
  },
  {
    name: "Communication",
    icon: MessageSquare,
    description: "Bridging the gap between technical and non-technical stakeholders.",
    level: 95
  },
  {
    name: "Financial Services",
    icon: TrendingUp,
    description: "Experience in lead generation and client management.",
    level: 80
  },
  {
    name: "Leadership",
    icon: Swords,
    description: "Discipline and team leadership forged through Division I wrestling.",
    level: 100
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Core Competencies</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A unique blend of athletic discipline, business acumen, and technical understanding.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
                <div className="p-4 bg-primary/5 rounded-full text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <skill.icon size={28} />
                </div>
                <h3 className="text-sm font-bold font-display uppercase tracking-wider mb-2">{skill.name}</h3>
                <div className="mt-auto w-full pt-4">
                  <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                      className="bg-primary h-full rounded-full"
                    />
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
