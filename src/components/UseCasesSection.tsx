import { motion } from "framer-motion";
import { CalendarRange, ClipboardCheck, MessageSquare, Layers } from "lucide-react";

const useCases = [
  {
    number: "01",
    icon: CalendarRange,
    title: "Quarterly Security Roadmap",
    description: "Generate a risk-prioritized roadmap across configurable quarters. AI considers your implementation group (IG1/IG2/IG3), compliance requirements, and current gaps.",
    tags: ["IG1/IG2/IG3", "Risk-Weighted", "1-12 Quarters"],
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Compliance Audit Preparation",
    description: "Instantly see your CMMC v2 or NIST 800-171 readiness mapped from CIS Controls. Export evidence packages showing which practices are addressed.",
    tags: ["CMMC v2", "NIST 800-171", "Evidence Export"],
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Live Security Posture",
    description: "Ask the AI consultant about your vulnerability counts, email threats, or identity risks — it queries your actual security tools in real time via MCP.",
    tags: ["Real-Time Queries", "AI Chat", "MCP Telemetry"],
  },
  {
    number: "04",
    icon: Layers,
    title: "Vendor Consolidation",
    description: "See all your security tools in one view. Understand which CIS Controls each vendor covers and identify gaps or overlaps.",
    tags: ["Tool Coverage", "Gap Analysis", "Overlap Detection"],
  },
];

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Use Cases</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Built for{" "}
            <span className="text-gradient">Security Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From roadmap planning to compliance audits — the Cyber Roadmap Engine powers data-driven security decisions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors font-mono">
                      {useCase.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <useCase.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 lg:flex-shrink-0">
                    {useCase.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
