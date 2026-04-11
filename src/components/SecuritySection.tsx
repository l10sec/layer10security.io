import { motion } from "framer-motion";
import { ShieldCheck, Eye, FileSearch, Settings, Lock, BarChart3 } from "lucide-react";

const trustPoints = [
  {
    icon: Eye,
    title: "Automatic Detection & Redaction",
    description: "IP addresses, hostnames, organization names, email addresses, and custom terms are identified and replaced with safe placeholders before any AI interaction.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Protection",
    description: "Built on FedRAMP-authorized infrastructure with 150+ built-in data detectors. Your data stays within your trust boundary — always.",
  },
  {
    icon: FileSearch,
    title: "Full Audit Trail",
    description: "Every detected sensitive data type and volume is logged. Know exactly what data flows through your AI pipeline — valuable for compliance reporting.",
  },
  {
    icon: Lock,
    title: "All AI Paths Covered",
    description: "Security advisor conversations, executive reports, roadmap narratives — every interaction with the AI model goes through data protection screening.",
  },
  {
    icon: Settings,
    title: "Configurable Per Client",
    description: "Toggle data protection on or off without code changes. Enterprise clients add custom sensitive term lists specific to their organization.",
  },
  {
    icon: BarChart3,
    title: "Selective Redaction, Not Blocking",
    description: "Unlike tools that block prompts containing sensitive data, Layer 10 strips the sensitive tokens but preserves analytical context — the AI can still reason about your environment.",
  },
];

export const SecuritySection = () => {
  return (
    <section id="security" className="py-24 relative overflow-hidden bg-muted/20">
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Data Protection</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Your Sensitive Data{" "}
            <span className="text-gradient">Never Reaches the AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get intelligent security guidance without exposing your environment. Sensitive
            information is automatically detected and redacted before every AI interaction.
          </p>
        </motion.div>

        {/* How It Works - Visual Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-primary font-mono">1</span>
              </div>
              <h4 className="font-bold text-sm mb-2">Your Prompt</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                "The host at 10.128.0.4 running on acme-prod-db has 3 critical CVEs"
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="h-px w-8 bg-primary/40" />
                <div className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="text-xs font-medium text-primary">SDP Redaction</span>
                </div>
                <div className="h-px w-8 bg-primary/40" />
              </div>
            </div>
            {/* Mobile arrow */}
            <div className="md:hidden flex justify-center">
              <div className="w-px h-6 bg-primary/40" />
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-secondary font-mono">2</span>
              </div>
              <h4 className="font-bold text-sm mb-2">What the AI Sees</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                "The host at <span className="text-primary font-medium">[IP_ADDRESS]</span> running on <span className="text-primary font-medium">[HOSTNAME]</span> has 3 critical CVEs"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-bold mb-2">{point.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tier Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <h3 className="font-bold text-center mb-6">Data Protection at Every Level</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl bg-muted/50">
              <p className="text-sm font-bold mb-1">Free</p>
              <p className="text-xs text-muted-foreground">Compliance gap analysis + 30 framework mappings with data flow audit trail</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm font-bold mb-1 text-primary">Pro</p>
              <p className="text-xs text-muted-foreground">Full data minimization with automatic redaction + unlimited AI agent remediation</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-muted/50">
              <p className="text-sm font-bold mb-1">Enterprise</p>
              <p className="text-xs text-muted-foreground">Custom sensitive term lists + dedicated per-control agents + SLA guarantees</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
