import { motion } from "framer-motion";
import { Scan, AlertCircle, Zap, Code2 } from "lucide-react";

const useCases = [
  {
    number: "01",
    icon: Scan,
    title: "AI-Powered Vulnerability Scanning",
    description: "Let AI agents orchestrate comprehensive vulnerability assessments across your infrastructure. Combine Nmap, Nuclei, and custom scanners through a single secure gateway.",
    tags: ["Nmap", "Nuclei", "Trivy"],
  },
  {
    number: "02",
    icon: AlertCircle,
    title: "Automated Risk Assessment",
    description: "AI agents query CVE databases, correlate with your asset inventory, and generate prioritized risk reports—all with full audit trails for compliance.",
    tags: ["CVE Lookup", "Asset Correlation", "CVSS Scoring"],
  },
  {
    number: "03",
    icon: Zap,
    title: "Incident Response Automation",
    description: "Connect your SOAR platform to AI agents that can investigate alerts, gather context from multiple tools, and execute response playbooks.",
    tags: ["SIEM Integration", "Playbook Execution", "Alert Triage"],
  },
  {
    number: "04",
    icon: Code2,
    title: "Security Engineering",
    description: "Empower developers with AI assistants that can check code for vulnerabilities, scan dependencies, and enforce security policies in CI/CD pipelines.",
    tags: ["SAST/DAST", "Dependency Scan", "Policy Gates"],
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
            <span className="text-gradient">Security Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From vulnerability management to incident response—Layer 10 powers AI-driven security workflows.
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
