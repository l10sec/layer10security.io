import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Mail,
  Brain,
  Scan,
  Globe,
  Plug
} from "lucide-react";

const integrationCategories = [
  {
    icon: Shield,
    title: "Endpoint Detection & Response",
    tools: ["EDR Platforms", "Vulnerability Scanners"],
    color: "primary",
  },
  {
    icon: Users,
    title: "Identity & Access Management",
    tools: ["Directory Services", "Identity Governance"],
    color: "secondary",
  },
  {
    icon: Mail,
    title: "Email Security",
    tools: ["Email Gateways", "Behavioral AI Detection"],
    color: "accent",
  },
  {
    icon: Brain,
    title: "Threat Intelligence",
    tools: ["Threat Intel Platforms", "IOC Feeds"],
    color: "primary",
  },
  {
    icon: Scan,
    title: "Extended Detection & Response",
    tools: ["XDR Platforms", "SIEM Solutions"],
    color: "secondary",
  },
  {
    icon: Globe,
    title: "Network Security",
    tools: ["Secure Web Gateways", "ZTNA"],
    color: "accent",
  },
  {
    icon: Plug,
    title: "Any Security Tool",
    tools: ["Connect any security tool via our open integration protocol"],
    color: "primary",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "primary":
      return "bg-primary/10 text-primary border-primary/20";
    case "secondary":
      return "bg-secondary/10 text-secondary border-secondary/20";
    case "accent":
      return "bg-accent/10 text-accent border-accent/20";
    default:
      return "bg-primary/10 text-primary border-primary/20";
  }
};

export const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-24 relative overflow-hidden bg-muted/20">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Integrations</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Connect Your{" "}
            <span className="text-gradient">Security Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Live telemetry from your security tools via the Model Context Protocol. One gateway, every domain.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrationCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getColorClasses(category.color)}`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm">{category.title}</h3>
                </div>

                {/* Tools */}
                <div className="space-y-2">
                  {category.tools.map((tool) => (
                    <div
                      key={tool}
                      className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
