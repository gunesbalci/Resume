import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { useLanguage } from '../context/LanguageContext';

export default function SectionHeader({ eyebrow, title, subtitle, className, eyebrow_tr, title_tr }) {
  const { lang } = useLanguage();

  const currentEyebrow = lang === 'tr' ? (eyebrow_tr || eyebrow) : eyebrow;
  const currentTitle = lang === 'tr' ? (title_tr || title) : title;
  return (
    <div className={cn("text-center", className)}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="inline-block text-sm font-medium text-primary-400 tracking-wide uppercase mb-2"
      >
        {currentEyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
      >
        {currentTitle}
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
