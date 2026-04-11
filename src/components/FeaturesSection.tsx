import { motion } from "framer-motion";
import {
  Brain,
  Network,
  FileCheck,
  Map,
  Activity,
  Target,
  ShieldOff
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Security Agents",
    description: "Intelligent agents that query your security tools, identify missing or misconfigured controls, and propose remediation steps — all grounded in live data, not assumptions.",
    highlights: ["Evidence-based", "Per-control intelligence", "Human-approved remediation"],
  },
  {
    icon: Network,
    title: "Security Stack Integration",
    description: "Connect 72+ security tools across EDR, email security, identity, and threat intelligence. One integration layer with automatic tool discovery and control attribution.",
    highlights: [],
  },
  {
    icon: FileCheck,
    title: "Compliance Mapping",
    description: "One security control maps to requirements across 30 compliance frameworks simultaneously. Fix one gap, satisfy HIPAA, SOC 2, ISO 27001, CMMC, and PCI-DSS at once.",
    highlights: [],
  },
  {
    icon: Map,
    title: "Roadmap Simulator",
    description: "Generate and iterate on security roadmaps through conversation. Run what-if scenarios — adjust budgets, shift timelines, reprioritize controls — and see the capability impact before you commit.",
    highlights: ["What-if simulations", "Capability impact analysis", "Versioned drafts"],
  },
  {
    icon: Activity,
    title: "Live Control Intelligence",
    description: "Every security control shows real-time commentary backed by live data from your tools. Not just 'In Progress' — but exactly what's missing, what's misconfigured, and what to fix.",
    highlights: ["Per-control evidence", "Data source attribution", "Actionable next steps"],
  },
  {
    icon: Target,
    title: "Risk-Based Prioritization",
    description: "Weight controls by business impact — data sensitivity, regulatory exposure, threat landscape. Focus resources where they reduce the most risk.",
    highlights: [],
  },
  {
    icon: ShieldOff,
    title: "Sensitive Data Protection",
    description: "Your sensitive data never reaches the AI. Automatically detects and redacts IP addresses, hostnames, organization names, email addresses, and custom terms before every AI interaction.",
    highlights: ["150+ built-in detectors", "Full audit trail", "Enterprise-grade encryption"],
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Capabilities</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Purpose-Built for{" "}
            <span className="text-gradient">Security Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every feature designed to help CISOs track, prioritize, and improve their security posture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Highlights */}
                {feature.highlights.length > 0 && (
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
