import { motion } from "framer-motion";

const skills = [
  {
    category: "Mobile & Cross-Platform",
    items: ["React Native", "Flutter", "Android Studio (Java/Kotlin)"]
  },
  {
    category: "Backend & API",
    items: ["Spring Boot", "Laravel", "Symfony", ".NET", "Node.js", "REST API"]
  },
  {
    category: "Frontend & AI",
    items: ["React.js", "JavaScript/ES6", "HTML5/CSS3", "Bootstrap/Twig", "NLP Integration", "Conversational AI"]
  },
  {
    category: "Databases & Tools",
    items: ["MySQL", "PostgreSQL", "Git/GitHub", "Postman", "UML", "Agile/SCRUM"]
  }
];

export function Skills() {
  return (
    <section id="stack" className="py-20 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 rounded-full">
            Technical Arsenal
          </span>
          <h2 className="text-4xl font-display font-bold">Modern stack & expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:-translate-y-1 transition-transform duration-300 group"
            >
              <h3 className="text-xl font-display font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm font-medium bg-background border border-border rounded-md text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
