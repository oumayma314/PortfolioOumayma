import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Restaurant Management Platform",
    period: "Oct 2025–Feb 2026",
    company: "ExaDev, Sfax",
    tech: "React Native · Laravel",
    description: "Development of a restaurant management platform: reservations, orders, real-time delivery tracking, customer/delivery-rider apps, and admin dashboard."
  },
  {
    role: "Intelligent Medical Platform",
    period: "Feb 2026–May 2026",
    company: "ExaDev, Sfax",
    tech: "React Native · AI/NLP · MySQL",
    description: "Development of a medical platform integrating an AI chatbot, appointment management, medical records, and dedicated spaces for healthcare professionals."
  },
  {
    role: "IIT Mobile App",
    period: "Jul 2025–Present",
    company: "ExaDev, Sfax",
    tech: "React Native · Laravel API · PostgreSQL",
    description: "Development of the official IIT mobile application: schedules, grades, calendar, notifications, library, and administrative requests."
  },
  {
    role: "Poultry Farm Management App",
    period: "Aug 2025–Oct 2025",
    company: "ExaDev, Sfax",
    tech: "React Native · Laravel",
    description: "Development of a farm management solution: stock tracking, egg production, sales, chicken mortality, buildings, and feed resource management."
  },
  {
    role: "Mobile Developer (Cross-Platform)",
    period: "Jul 2025–Present",
    company: "ExaDev, Sfax",
    tech: "React Native · REST APIs",
    description: "Building performant React Native apps, integrating REST APIs, Agile methodology, optimized user experiences."
  },
  {
    role: "Master Internship – Marketplace Winkels",
    period: "Jan 2025–May 2025",
    company: "ExaDev",
    tech: "AI Chatbot integration · Laravel API",
    description: "Designed intelligent conversational assistant for mobile; Laravel API + React Native frontend, NLP models."
  },
  {
    role: "Car Rental Management App",
    period: "May 2024–Jul 2024",
    company: "Freelance",
    tech: "Spring Boot · Thymeleaf · MySQL",
    description: "Fullstack web application with secure authentication, REST endpoints, responsive UI."
  },
  {
    role: "Pharma Delivery App",
    period: "Feb 2023–Jun 2023",
    company: "ExaDev",
    tech: "Laravel · React Native",
    description: "End-to-end delivery solution for pharma products, REST API testing, GitHub workflows."
  },
  {
    role: "BI Mobile Dashboard",
    period: "Jan 2022–Feb 2022",
    company: "Infotech Consulting",
    tech: "Android · MySQL",
    description: "Real-time sales dashboard, live KPIs and revenue tracking with live data sync."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 rounded-full">
            Career Footprint
          </span>
          <h2 className="text-4xl font-display font-bold">Professional journey</h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:bg-card/80 hover:translate-x-2 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-muted-foreground mt-1 flex items-center gap-2">
                    <span className="text-primary">{exp.company}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{exp.tech}</span>
                  </div>
                </div>
                <div className="text-sm font-mono bg-white/5 px-3 py-1 rounded-full border border-white/10 shrink-0 text-muted-foreground">
                  {exp.period}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
