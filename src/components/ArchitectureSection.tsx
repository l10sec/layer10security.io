import { motion } from "framer-motion";
import { 
  Monitor, 
  Cpu, 
  Server, 
  ArrowRight,
  Shield,
  Lock,
  BarChart3,
  FileText,
  Search,
  Settings
} from "lucide-react";

const clientApps = ["Claude Desktop", "Cursor", "Custom Agents", "SOAR/SIEM"];

const gatewayComponents = [
  { icon: Lock, label: "OAuth 2.1 / mTLS" },
  { icon: Shield, label: "TBAC Engine" },
  { icon: BarChart3, label: "Risk Scoring" },
  { icon: FileText, label: "Audit Logger" },
  { icon: Search, label: "Payload Scanner" },
  { icon: Settings, label: "Policy Engine" },
];

const serverCategories = [
  { name: "EDR / XDR", tools: ["CrowdStrike", "Defender", "SentinelOne"] },
  { name: "Threat Intel", tools: ["MISP", "VirusTotal", "OTX"] },
  { name: "Vuln Assessment", tools: ["Nmap", "Nuclei", "Trivy"] },
  { name: "Identity", tools: ["Entra ID", "Okta", "CyberArk"] },
  { name: "Email Security", tools: ["Proofpoint", "Mimecast", "M365"] },
  { name: "SecOps", tools: ["SIEM", "SOAR", "Playbooks"] },
];

const backendIntegrations = ["Splunk/Elastic", "ServiceNow", "Cloud Providers", "Kubernetes"];

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
            Enterprise-Grade{" "}
            <span className="text-gradient">Security Architecture</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A defense-in-depth approach to AI-powered security operations.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="glass rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-4 gap-8 items-start">
            {/* Clients */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 mb-6">
                <Monitor className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-sm uppercase tracking-wider">Clients</h3>
              </div>
              {clientApps.map((app, index) => (
                <motion.div
                  key={app}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-3 bg-muted/50 rounded-lg border border-border text-sm text-center"
                >
                  {app}
                </motion.div>
              ))}
            </motion.div>

            {/* Gateway */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-2 mb-6">
                <Cpu className="w-5 h-5 text-secondary" />
                <h3 className="font-bold text-sm uppercase tracking-wider">Layer 10 Gateway</h3>
              </div>
              <div className="bg-card border-2 border-primary/30 rounded-2xl p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gatewayComponents.map((component, index) => (
                    <motion.div
                      key={component.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg"
                    >
                      <component.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs font-medium">{component.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Servers */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 mb-6">
                <Server className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-sm uppercase tracking-wider">Security MCP Servers</h3>
              </div>
              {serverCategories.slice(0, 4).map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="px-4 py-3 bg-muted/50 rounded-lg border border-border"
                >
                  <p className="text-sm font-medium mb-1">{category.name}</p>
                  <p className="text-xs text-muted-foreground">{category.tools.join(" • ")}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Backend Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 pt-8 border-t border-border"
          >
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 text-center">
              Backend Integrations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {backendIntegrations.map((integration) => (
                <span
                  key={integration}
                  className="px-4 py-2 bg-muted/30 rounded-lg text-sm text-muted-foreground"
                >
                  {integration}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
