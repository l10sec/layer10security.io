import { motion } from "framer-motion";
import {
  Users,
  Cpu,
  Server,
  BarChart3,
  Brain,
  Map,
  FileCheck,
  Network,
  Radio,
  KeyRound,
  Shield,
  Mail,
  User,
  Search,
  MoreHorizontal
} from "lucide-react";

const engineModules = [
  { icon: BarChart3, label: "Dashboard (CIS, CMMC, NIST)" },
  { icon: Brain, label: "AI Security Consultant" },
  { icon: Map, label: "Roadmap Generator" },
  { icon: FileCheck, label: "Compliance Mapper" },
];

const gatewayComponents = [
  { icon: Network, label: "Tool Discovery" },
  { icon: Radio, label: "SSE/HTTP Transport" },
  { icon: KeyRound, label: "Bearer/API Key Auth" },
];

const securityTools = [
  { name: "Endpoint Detection & Response", tools: ["EDR", "Vulnerability Mgmt"], icon: Shield },
  { name: "Email Security", tools: ["Gateway", "Behavioral AI"], icon: Mail },
  { name: "Identity & Access", tools: ["Directory", "Governance"], icon: User },
  { name: "Threat Intelligence", tools: ["CTI Platform", "IOC Feeds"], icon: Search },
  { name: "XDR & Network", tools: ["XDR", "Secure Web Gateway"], icon: MoreHorizontal },
];

export const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Architecture</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            End-to-End{" "}
            <span className="text-gradient">Security Architecture</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From your security team to your security tools — a unified platform with AI at the core.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="glass rounded-3xl p-8 lg:p-12">
          <div className="space-y-8">

            {/* Row 1: CISO / Security Team */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-primary/10 border-2 border-primary/30 rounded-2xl">
                <Users className="w-6 h-6 text-primary" />
                <span className="font-bold text-lg">CISO / Security Team</span>
              </div>
            </motion.div>

            {/* Animated Connection */}
            <div className="flex justify-center">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="w-px h-8 bg-gradient-to-b from-primary/60 to-secondary/60 origin-top"
              />
            </div>

            {/* Row 2: Cyber Roadmap Engine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4 justify-center">
                <Cpu className="w-5 h-5 text-secondary" />
                <h3 className="font-bold text-sm uppercase tracking-wider">Cyber Roadmap Engine</h3>
              </div>
              <div className="bg-card border-2 border-secondary/30 rounded-2xl p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {engineModules.map((module, index) => (
                    <motion.div
                      key={module.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-center gap-2 px-3 py-3 bg-secondary/10 rounded-lg"
                    >
                      <module.icon className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-xs font-medium">{module.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Animated Connection */}
            <div className="flex justify-center">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="w-px h-8 bg-gradient-to-b from-secondary/60 to-primary/60 origin-top"
              />
            </div>

            {/* Row 3: MCP Gateway Layer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-4 justify-center">
                <Network className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-sm uppercase tracking-wider">MCP Gateway Layer</h3>
              </div>
              <div className="bg-card border-2 border-primary/30 rounded-2xl p-6">
                <div className="grid grid-cols-3 gap-4">
                  {gatewayComponents.map((component, index) => (
                    <motion.div
                      key={component.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="flex items-center gap-2 px-3 py-3 bg-primary/10 rounded-lg justify-center"
                    >
                      <component.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs font-medium">{component.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Animated Connection */}
            <div className="flex justify-center">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="w-px h-8 bg-gradient-to-b from-primary/60 to-green-500/60 origin-top"
              />
            </div>

            {/* Row 4: Security Tool Integrations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4 justify-center">
                <Server className="w-5 h-5 text-green-500" />
                <h3 className="font-bold text-sm uppercase tracking-wider">Security Tool Integrations</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {securityTools.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="px-4 py-3 bg-muted/50 rounded-lg border border-border"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <category.icon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <p className="text-xs font-medium truncate">{category.name}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{category.tools.join(" / ")}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
