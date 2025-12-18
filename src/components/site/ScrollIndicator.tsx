"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="text-xs font-mono uppercase tracking-widest text-muted">
        Scroll
      </div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-12 w-6 items-start justify-center rounded-full border border-border/70 p-1"
      >
        <motion.div className="h-2 w-2 rounded-full bg-brand-2" />
      </motion.div>
    </motion.div>
  );
}
