import { motion } from "framer-motion";
import { GraduationCap, Calendar, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from '../context/LanguageContext';

export default function Education() {
  const { t } = useLanguage();
  return (
    <section id="education" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow="Academic" title="Education" eyebrow_tr="Akademik" title_tr="Eğitim"/>

        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {t.education.map((edu, i) => (
            <motion.a
              key={edu.institution}
              href={edu.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-primary-500/30 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
                  <GraduationCap size={18} />
                </div>
                <ExternalLink size={14} className="text-neutral-600 group-hover:text-primary-400 transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1">{edu.institution}</h3>
              <p className="text-sm text-neutral-400 mb-2">{edu.detail}</p>
              <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500">
                <Calendar size={12} />
                {edu.period}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
