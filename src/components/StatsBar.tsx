import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck, Building2 } from "lucide-react";

const certifications = [
  { icon: ShieldCheck, label: "SOC 2 Ready" },
  { icon: Award, label: "NIST Compliant" },
  { icon: FileCheck, label: "ISO 27001" },
  { icon: Building2, label: "HIPAA Compatible" },
];

export const StatsBar = () => {
  return (
    <section className="py-12 border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sm text-muted-foreground">
            Built for Enterprise Security Teams
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                <cert.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {cert.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
