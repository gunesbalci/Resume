import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { TwitterIcon as Twitter, GithubIcon as Github, LinkedinIcon as Linkedin } from "./BrandIcons";
import SectionHeader from "./SectionHeader";
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  twitter: Twitter,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeader eyebrow="Get in Touch" title="Contact" eyebrow_tr="Bana Ulaşın" title_tr="İletişim"/>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-neutral-400 leading-relaxed mt-8 mb-8"
        >
          {t.contact.description}
        </motion.p>

        <motion.a
          href={t.profile.socials[t.profile.socials.length - 1].href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
        >
          {t.contact.buttonText}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          {t.profile.socials.map((s) => {
            const Icon = iconMap[s.icon] || Mail;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
                aria-label={s.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
