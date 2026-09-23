import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { workExperience } from "../data";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow="Career" title="Work Experience" />

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary-500/60 via-white/10 to-transparent" />

          {workExperience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 pb-10 group"
            >
              {/* Dot */}
              <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-primary-500 ring-4 ring-primary-500/20 group-hover:ring-primary-500/40 transition-all" />

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Building2 size={16} className="text-primary-400" />
                      {job.company}
                    </h3>
                    <p className="text-sm text-primary-400 font-medium">{job.role}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500 bg-white/5 px-3 py-1 rounded-full">
                    <Calendar size={12} />
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed mb-3">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
