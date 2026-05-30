import { motion } from "framer-motion";
import { achievements } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Experience & Achievements"
        title="Signals of growth, initiative, and hands-on learning."
        description="A resume-backed snapshot of internships, awards, certifications, volunteering, and club leadership across electronics, AI, web development, and community work."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="tech-card p-7"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#3B82F6]/20 text-xl text-[#22D3EE]">
                  <Icon />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#F8FAFC]">{item.title}</h3>
              </div>
              <div className="mt-6 space-y-4">
                {item.points.map((point) => (
                  <p
                    key={point}
                    className="tech-panel px-5 py-4 text-[#E2E8F0]"
                  >
                    {point}
                  </p>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
