import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { TwitterIcon as Twitter, GithubIcon as Github, LinkedinIcon as Linkedin } from "./BrandIcons";
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  twitter: Twitter,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg mask-radial" />

      {/* Meteors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute top-0 left-1/2 w-0.5 h-0.5 bg-white rounded-full animate-meteor"
            style={{
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + (i % 5)}s`,
              boxShadow: "0 0 6px 1px rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-neutral-300">Available for work</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
        >
          {t.profile.introduction} <span className="shimmer-text">{t.profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-neutral-400 font-medium mb-6"
        >
          {t.profile.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {t.profile.about}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4"
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

      <a
        href="#experience"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
