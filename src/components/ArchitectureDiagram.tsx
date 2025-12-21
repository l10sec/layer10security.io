import { motion } from "framer-motion";
import { Monitor, Code, MousePointer2, Box, Shield, Server } from "lucide-react";

const clients = [
  { name: "Claude Desktop", icon: Monitor },
  { name: "Claude Code", icon: Code },
  { name: "Cursor", icon: MousePointer2 },
  { name: "Custom MCP Client", icon: Box },
];

const gatewayFeatures = [
  { name: "OAuth 2.1 Auth", active: true, color: "bg-green-500" },
  { name: "Risk Scoring", active: true, color: "bg-green-500" },
  { name: "Audit Logging", active: true, color: "bg-green-500" },
  { name: "Payload Inspection", active: true, color: "bg-green-500" },
  { name: "TBAC Policies", active: true, color: "bg-blue-500" },
  { name: "Rate Limiting", active: false, color: "bg-blue-500" },
  { name: "Threat Detection", active: false, color: "bg-amber-500" },
];

const servers = [
  { name: "EDR" },
  { name: "Email Security" },
  { name: "Identity" },
  { name: "Threat Intel" },
  { name: "ZTNA" },
];

const stats = [
  { value: "12.4K", label: "Requests Blocked", color: "text-green-500" },
  { value: "23ms", label: "Avg Latency", color: "text-primary" },
  { value: "99.99%", label: "Uptime", color: "text-amber-500" },
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
        <span className="text-xs text-muted-foreground ml-4">MCP Gateway Architecture</span>
      </div>

      {/* Three Column Layout */}
      <div className="grid grid-cols-3 gap-4">
        {/* Clients Column */}
        <div>
          <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">MCP Clients</p>
          <div className="space-y-2">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/30 text-xs"
              >
                <client.icon className="w-3.5 h-3.5 text-primary/70" />
                <span className="truncate text-primary/80">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gateway Column */}
        <div className="relative">
          <p className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider text-center">
            Layer 10 Gateway
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-secondary/10 border-2 border-secondary/40 rounded-xl p-4"
          >
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-xs font-semibold">MCP Security Proxy</span>
            </div>
            <div className="space-y-1.5">
              {gatewayFeatures.map((feature, index) => (
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

        {/* Servers Column */}
        <div>
          <p className="text-xs font-semibold text-green-500 mb-3 uppercase tracking-wider text-right">MCP Servers</p>
          <div className="space-y-2">
            {servers.map((server, index) => (
              <motion.div
                key={server.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-end gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-xs"
              >
                <span className="text-green-400/80">{server.name}</span>
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
            12 servers connected
          </span>
          <span className="text-muted-foreground">284 req/min</span>
          <span className="text-muted-foreground">0 threats blocked</span>
        </div>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            className="text-center"
          >
            <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-[10px] text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
