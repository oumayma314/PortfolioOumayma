import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 rounded-full">
            Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Let's build something great</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border flex flex-col justify-center space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <a href="mailto:oumaymaderbala@gmail.com" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  oumaymaderbala@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href="tel:+21629693099" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  +216 29 693 099
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="text-lg font-medium text-foreground">
                  Route de Tunis km 2.5, 3000 Sfax, Tunisia
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30 flex flex-col items-center justify-center text-center relative overflow-hidden"
          >
            <Zap className="w-16 h-16 text-primary mb-6 opacity-80" />
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Available for new opportunities</h3>
            <p className="text-muted-foreground mb-8 max-w-sm">
              Currently open for collaborations, freelance work, and full-time positions. Let's discuss your next project.
            </p>
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-hire-me">
              <a href="mailto:oumaymaderbala@gmail.com" className="flex items-center">
                Send a message <Send className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
