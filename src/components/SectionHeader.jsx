import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export default function SectionHeader({ eyebrow, title, subtitle, className }) {
  return (
    <div className={cn("text-center", className)}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="inline-block text-sm font-medium text-primary-400 tracking-wide uppercase mb-2"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-neutral-400 mt-3 text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
