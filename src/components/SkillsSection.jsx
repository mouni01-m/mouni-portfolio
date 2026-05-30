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
              className="tech-card group p-6 transition"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#3B82F6]/20 text-2xl text-[#22D3EE] shadow-glow">
                <Icon />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-[#F8FAFC]">
                {skill.title}
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="tech-chip transition group-hover:border-[#22D3EE]/50 group-hover:text-[#F8FAFC]"
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
