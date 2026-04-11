import { motion } from "framer-motion";

export const ChallengeSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* The narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              There are two problems in compliance: knowing your gaps, and closing them.
              The industry automated the first — evidence collection, audit reports,
              continuous monitoring. The second is still manual. Spreadsheets, tickets,
              quarterly consultant check-ins.
            </p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-l-4 border-primary pl-6 py-2"
            >
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                GRC platforms are compliance <em>reporters</em>.{" "}
                <span className="text-gradient">We are compliance <em>engineers</em>.</span>
              </p>
              <p className="text-base text-muted-foreground mt-2">
                They generate the audit artifact. We generate the fix.
              </p>
            </motion.div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Automated evidence collection was the last decade's innovation.
              Automated remediation is this decade's. We don't document your
              gaps — we eliminate them.
            </p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold text-foreground text-center pt-4"
            >
              They prove you're compliant.{" "}
              <span className="text-gradient">We make you compliant.</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
