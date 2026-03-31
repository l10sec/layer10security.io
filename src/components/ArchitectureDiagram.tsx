import { motion } from "framer-motion";
import { Shield, Brain, BarChart3, FileCheck, Network, Server, Activity } from "lucide-react";

const dashboardMetrics = [
  { label: "CIS Controls", value: "18", sublabel: "Families" },
  { label: "Safeguards", value: "153", sublabel: "Tracked" },
  { label: "Compliance", value: "3", sublabel: "Frameworks" },
];

const platformFeatures = [
  { name: "AI Consultant", icon: Brain, active: true, color: "bg-green-500" },
  { name: "Roadmap Engine", icon: BarChart3, active: true, color: "bg-green-500" },
  { name: "Compliance Maps", icon: FileCheck, active: true, color: "bg-green-500" },
  { name: "Tool Integration", icon: Network, active: true, color: "bg-blue-500" },
  { name: "Live Telemetry", icon: Activity, active: true, color: "bg-blue-500" },
  { name: "Risk Scoring", icon: Shield, active: true, color: "bg-amber-500" },
];

const connectedTools = [
  { name: "EDR" },
  { name: "Email Security" },
  { name: "IAM" },
  { name: "Threat Intel" },
  { name: "XDR" },
];

export const ArchitectureDiagram = () => {
  return (
    <div className="relative glass rounded-2xl p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-destructive" />
          <span className="w-3 h-3 rounded-full bg-amber-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-muted-foreground ml-4">Cyber Roadmap Engine</span>
      </div>

      {/* Three Column Layout */}
      <div className="grid grid-cols-3 gap-4">
        {/* Dashboard Column */}
        <div>
          <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Dashboard</p>
          <div className="space-y-2">
            {dashboardMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-primary/10 border border-primary/30 text-xs"
              >
                <span className="text-primary/80 truncate">{metric.label}</span>
                <span className="font-bold text-primary">{metric.value}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Platform Column */}
        <div className="relative">
          <p className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider text-center">
            Platform
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-secondary/10 border-2 border-secondary/40 rounded-xl p-4"
          >
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-xs font-semibold">AI-Powered Engine</span>
            </div>
            <div className="space-y-1.5">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${feature.color} ${feature.active ? "animate-pulse" : ""}`} />
                  <span className="text-[10px] text-muted-foreground">{feature.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-primary/30 -z-10" />
        </div>

        {/* Tools Column */}
        <div>
          <p className="text-xs font-semibold text-green-500 mb-3 uppercase tracking-wider text-right">Integrations</p>
          <div className="space-y-2">
            {connectedTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-end gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-xs"
              >
                <span className="text-green-400/80">{tool.name}</span>
                <Server className="w-3.5 h-3.5 text-green-500/70" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs"
      >
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            5 domains connected
          </span>
          <span className="text-muted-foreground">153 safeguards</span>
          <span className="text-muted-foreground">3 frameworks</span>
        </div>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
        {[
          { value: "CIS v8.1.2", label: "Controls Framework", color: "text-green-500" },
          { value: "CMMC v2", label: "Compliance", color: "text-primary" },
          { value: "NIST 800-171", label: "Compliance", color: "text-amber-500" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label + stat.value}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            className="text-center"
          >
            <p className={`text-sm font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-[10px] text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
