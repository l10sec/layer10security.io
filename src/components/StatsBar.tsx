import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Plug, Layers } from "lucide-react";

const metrics = [
  { icon: ShieldCheck, value: "153", label: "Safeguards", sublabel: "CIS Controls v8.1.2" },
  { icon: FileCheck, value: "3", label: "Compliance Frameworks", sublabel: "CIS, CMMC v2, NIST 800-171" },
  { icon: Plug, value: "61+", label: "Security Tools", sublabel: "Via MCP Integration" },
  { icon: Layers, value: "5", label: "Security Domains", sublabel: "EDR, IAM, Email, Threat Intel, IGA" },
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
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                <metric.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">
                  {metric.value} <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{metric.label}</span>
                </p>
                <p className="text-xs text-muted-foreground">{metric.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
