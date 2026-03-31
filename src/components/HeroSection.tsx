import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Brain, Activity } from "lucide-react";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

const badges = [
  { icon: ShieldCheck, label: "CIS v8.1.2", sublabel: "153 Safeguards" },
  { icon: Brain, label: "AI-Powered", sublabel: "Security Consultant" },
  { icon: Activity, label: "Live Telemetry", sublabel: "Via MCP Gateway" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 mb-8"
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
              <span className="text-sm text-muted-foreground">Cyber Roadmap Engine</span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AI-Powered Security Roadmap for{" "}
              <span className="text-gradient">Modern CISOs</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Track your security control implementation, map to compliance frameworks like
              CMMC and NIST 800-171, and get AI-assisted guidance — powered by live
              telemetry from your security stack.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="lg" className="group" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>
                Request a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="lg" onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}>
                See How It Works
              </Button>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-6">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <badge.icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold font-mono">{badge.label}</p>
                    <p className="text-xs text-muted-foreground">{badge.sublabel}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <ArchitectureDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
