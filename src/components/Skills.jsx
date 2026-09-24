import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow="Toolkit" title="Skills" eyebrow_tr="Araçlar" title_tr="Yetenekler"/>

        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {t.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-white/[0.03] border border-white/10 text-neutral-300 hover:text-white hover:border-primary-500/40 hover:bg-primary-500/10 transition-all duration-300 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
