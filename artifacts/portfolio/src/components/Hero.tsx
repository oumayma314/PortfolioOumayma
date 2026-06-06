import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function ProfileAvatar() {
  const [imgError, setImgError] = useState(false);
  if (imgError) {
    return (
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-2xl font-display font-bold text-white shadow-lg flex-shrink-0">
        OD
      </div>
    );
  }
  return (
    <img
      src="/profile.jpg"
      alt="Oumayma Derbala"
      onError={() => setImgError(true)}
      className="w-20 h-20 rounded-full object-cover border-2 border-primary shadow-lg flex-shrink-0"
    />
  );
}

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Crafting <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              cross-platform
            </span>{" "}
            experiences & intelligent backends
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg">
            Oumayma Derbala — React Native · Spring Boot · Laravel · AI Integration
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-primary-foreground border-0" data-testid="button-explore">
              <a href="#projects">
                Explore work <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border hover:bg-white/5" data-testid="button-contact">
              <a href="#contact">
                Let's talk <MessageSquare className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 blur-3xl rounded-full" />
          <div className="relative bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-2xl hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center gap-6 mb-8">
              <ProfileAvatar />
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground">Oumayma Derbala</h3>
                <p className="text-primary font-medium">Mobile & Fullstack Developer</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="text-2xl font-display font-bold text-foreground">2+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Years Exp</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="text-2xl font-display font-bold text-foreground">9+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Projects</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="text-2xl font-display font-bold text-foreground">3</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Languages</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['React Native', 'Laravel', 'Spring Boot', 'AI / NLP', 'MySQL'].map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
