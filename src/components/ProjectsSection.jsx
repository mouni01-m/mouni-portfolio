import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work across software, intelligence, and embedded systems."
        description="Each project reflects a different side of my technical range, from web polish to communication systems and AI experimentation."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-card backdrop-blur-xl"
          >
            <div className={`h-56 bg-gradient-to-br ${project.accent} p-6`}>
              <div className="flex h-full items-end rounded-[24px] border border-white/10 bg-slate-950/45 p-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-200/70">
                    Project Showcase
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-7">
              <p className="text-base leading-8 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="secondary-button">
                  GitHub
                  <FiGithub />
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="primary-button">
                  Live Demo
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

