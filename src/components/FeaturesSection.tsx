import { motion } from "framer-motion";
import { 
  KeyRound, 
  Search, 
  FileText, 
  BarChart3, 
  Database, 
  Settings2 
} from "lucide-react";

const features = [
  {
    icon: KeyRound,
    title: "Task-Based Access Control",
    description: "Go beyond RBAC with context-aware authorization. AI agents get precisely scoped permissions based on the security task at hand.",
    highlights: ["Dynamic permission scoping", "Context-aware authorization", "Least-privilege enforcement"],
  },
  {
    icon: Search,
    title: "Deep Payload Inspection",
    description: "Scan every MCP request for prompt injection, command injection, and malicious payloads before they reach your security tools.",
    highlights: [],
  },
  {
    icon: FileText,
    title: "Forensic Audit Logging",
    description: "Immutable, timestamped logs of every AI-tool interaction. SIEM-ready exports for Splunk, Elastic, and your compliance team.",
    highlights: [],
  },
  {
    icon: BarChart3,
    title: "Real-Time Risk Scoring",
    description: "ML-powered risk assessment for every request. Automatically flag, throttle, or block high-risk AI operations before damage occurs.",
    highlights: [],
  },
  {
    icon: Database,
    title: "Security Tool Registry",
    description: "Curated catalog of pre-vetted security MCP servers. Nmap, Nuclei, SQLMap, and more—all security reviewed and ready to deploy.",
    highlights: [],
  },
  {
    icon: Settings2,
    title: "Policy Engine",
    description: "Define granular allow/deny rules for tools, actions, and data. Enforce security policies consistently across all AI agent interactions.",
    highlights: [],
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
            <span className="text-gradient">Security Operations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every feature designed with security teams in mind—from authentication to audit trails.
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
