import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="A balanced stack across interfaces, logic, and electronics."
        description="These are the technologies and tools I use to move from concept to execution with confidence."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-2xl text-cyan-200 shadow-glow">
                <Icon />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-white">
                {skill.title}
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-300 transition group-hover:border-cyan-300/30 group-hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

