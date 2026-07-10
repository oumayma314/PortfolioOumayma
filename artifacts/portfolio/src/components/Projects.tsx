import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const projects = [
  {
    title: "Restaurant Management System",
    description: "Complete platform for restaurant reservations, delivery ordering, and real-time delivery tracking. Admin dashboard, rider app, customer app with push notifications.",
    tags: ["React Native", "Laravel", "WebSockets", "Geolocation"]
  },
  {
    title: "Automated Medical Platform",
    description: "AI-powered mobile app that analyzes patient symptoms and recommends actions plus doctor matching. Web dashboard for doctors.",
    tags: ["React Native", "Spring Boot", "AI/NLP", "MySQL"]
  },
  {
    title: "IIT Mobile App",
    description: "Official mobile app for International University of Technologies of Tunisia. Course schedules, grades, calendar, push notifications, library, document requests.",
    tags: ["React Native", "Laravel API", "PostgreSQL", "Push Notifications"]
  },
  {
    title: "Poultry Farm Management App",
    description: "Farm management solution: stock tracking, egg production, sales, chicken mortality, buildings, and feed resource management.",
    tags: ["React Native", "Laravel", "MySQL"]
  },
  {
    title: "Winkels Marketplace",
    description: "AI-powered conversational chatbot integrated into mobile app.",
    tags: ["React Native", "Laravel", "NLP"]
  },
  {
    title: "Car Rental Management",
    description: "Full-stack platform with Spring Boot security, car catalog, booking system.",
    tags: ["Spring Boot", "Java", "MySQL"]
  },
  {
    title: "Pharma Delivery App",
    description: "Cross-platform solution for pharma logistics: web admin + mobile client.",
    tags: ["Laravel", "React Native", "REST"]
  },
  {
    title: "BI Mobile Dashboard",
    description: "Real-time business intelligence tool with Kotlin/Java, MySQL live synchronization.",
    tags: ["Android Studio", "Kotlin", "MySQL"]
  },
  {
    title: "E-commerce Platform",
    description: "Responsive online store with PHP, dynamic product catalog & UML design.",
    tags: ["PHP", "Bootstrap", "JS"]
  },
  {
    title: "Conversational AI Integration",
    description: "Research and deployment of NLP chatbots for seamless in-app assistance.",
    tags: ["NLP", "AI APIs", "React Native"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 rounded-full">
            Featured Builds
          </span>
          <h2 className="text-4xl font-display font-bold">Selected projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              data-testid={`project-card-${idx}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors" />
              
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 bg-white/5 rounded border border-white/5 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
