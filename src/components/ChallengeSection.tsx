import { motion } from "framer-motion";
import { FileSpreadsheet, EyeOff, Compass } from "lucide-react";

const challenges = [
  {
    icon: FileSpreadsheet,
    title: "Compliance Complexity",
    description: "Mapping CIS Controls to CMMC and NIST 800-171 is manual, error-prone, and never up to date.",
  },
  {
    icon: EyeOff,
    title: "Blind Spot in Security Posture",
    description: "Your security tools generate data, but connecting that data to your control implementation status requires manual effort.",
  },
  {
    icon: Compass,
    title: "Roadmap Paralysis",
    description: "Prioritizing which controls to implement first across 153 safeguards is overwhelming without risk-based guidance.",
  },
];

export const ChallengeSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">The Challenge</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            CISOs Face a{" "}
            <span className="text-gradient">Growing Gap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Security leaders are overwhelmed by compliance demands, fragmented tooling, and
            the challenge of prioritizing 153 controls without clear risk context.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <challenge.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4">{challenge.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>

                {/* Decorative Glow */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
