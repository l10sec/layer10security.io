import { motion } from "framer-motion";
import { Shield, Brain, BarChart3, Search, Wrench, Server, Activity } from "lucide-react";

const dashboardMetrics = [
  { label: "Frameworks", value: "30", sublabel: "Mapped" },
  { label: "Controls", value: "3,400+", sublabel: "Mappings" },
  { label: "Security Tools", value: "72+", sublabel: "Connected" },
];

const platformFeatures = [
  { name: "Identify Gaps", icon: Search, active: true, color: "bg-red-500" },
  { name: "Prove with Data", icon: Activity, active: true, color: "bg-amber-500" },
  { name: "Remediate", icon: Wrench, active: true, color: "bg-green-500" },
  { name: "AI Agents", icon: Brain, active: true, color: "bg-blue-500" },
  { name: "Compliance Scoring", icon: BarChart3, active: true, color: "bg-blue-500" },
  { name: "Risk Prioritization", icon: Shield, active: true, color: "bg-purple-500" },
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
        <span className="text-xs text-muted-foreground ml-4">Layer 10 Security</span>
      </div>

      {/* Three Column Layout */}
      <div className="grid grid-cols-3 gap-4">
        {/* Dashboard Column */}
        <div>
          <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Coverage</p>
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
            Engine
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-secondary/10 border-2 border-secondary/40 rounded-xl p-4"
          >
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-xs font-semibold">AI Security Engineering</span>
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
          <p className="text-xs font-semibold text-green-500 mb-3 uppercase tracking-wider text-right">Your Stack</p>
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
        className="mt-6 pt-4 border-t border-border flex items-center justify-center gap-6 text-xs"
      >
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          Identify
        </span>
        <span className="text-muted-foreground">→</span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          Prove
        </span>
        <span className="text-muted-foreground">→</span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Remediate
        </span>
      </motion.div>
    </div>
  );
};
