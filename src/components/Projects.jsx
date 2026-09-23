import { motion } from "framer-motion";
import { CarFront, MousePointerClick, Swords, Map, ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "./BrandIcons";
import { projects } from "../data";
import SectionHeader from "./SectionHeader";

const iconMap = {
  "carfront": CarFront,
  "mousepointer": MousePointerClick,
  "swords": Swords,
  "map": Map,
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow="Portfolio" title="My Projects" subtitle="Check out my latest work" />

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon] || Sparkles;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-300 overflow-hidden"
              >
              {/* Glow effect on hover */}
              <div className="absolute -inset-px bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} />
                  </div>
                  <div className="flex gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-primary-500/40 transition-all"
                        aria-label={link.label}
                      >
                        {link.label === "Source" ? <Github size={15} /> : <ExternalLink size={15} />}
                      </a>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-1.5">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-neutral-800/60 text-neutral-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
