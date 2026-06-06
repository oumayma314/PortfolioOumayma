import { motion } from "framer-motion";
import { GraduationCap, Heart, Activity, Globe, BookOpen, Languages } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-6 border-t border-border/50 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Education */}
        <div className="lg:col-span-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 rounded-full">
              Academic Background
            </span>
            <h2 className="text-3xl font-display font-bold">Education & credentials</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { year: "Jun 2025", degree: "Master in Information Systems & Networks", focus: "Software Engineering & New Technologies — ISET Sfax" },
              { year: "Jun 2023", degree: "Applied Bachelor in IT Technologies", focus: "Information Systems Development — ISET Sfax" },
              { year: "Jun 2020", degree: "Baccalaureate", focus: "Experimental Sciences — Lycée Mohammed Ali, Sfax" }
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border relative group"
              >
                <GraduationCap className="absolute top-5 right-5 w-6 h-6 text-white/5 group-hover:text-primary/20 transition-colors" />
                <div className="text-xs font-mono text-primary mb-2">{edu.year}</div>
                <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership & Languages */}
        <div className="lg:col-span-2 space-y-16">
          {/* Leadership */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 rounded-full">
                Beyond Code
              </span>
              <h2 className="text-3xl font-display font-bold mb-8">Leadership & passions</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Civic Responsibility</h4>
                  <p className="text-sm text-muted-foreground mt-1">Bureau member for Tunisian Constitutional Referendum (ISIE)</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Scout Leadership</h4>
                  <p className="text-sm text-muted-foreground mt-1">Active member of Tunisian Scouts — community building</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border sm:col-span-2"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Fitness Coach</h4>
                  <p className="text-sm text-muted-foreground mt-1">Certified Personal Trainer & GX Coach (discipline & wellness)</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-display font-bold mb-6 flex items-center gap-3"
            >
              <Languages className="w-6 h-6 text-primary" /> Languages
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg bg-white/5 border border-white/5 text-center"
              >
                <div className="font-bold text-foreground">Arabic</div>
                <div className="text-sm text-primary mt-1">Native / Mother tongue</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-4 rounded-lg bg-white/5 border border-white/5 text-center"
              >
                <div className="font-bold text-foreground">French</div>
                <div className="text-sm text-primary mt-1">Advanced (C1)</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-4 rounded-lg bg-white/5 border border-white/5 text-center"
              >
                <div className="font-bold text-foreground">English</div>
                <div className="text-sm text-primary mt-1">Advanced</div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
