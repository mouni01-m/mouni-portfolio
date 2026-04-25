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
        description="This section is designed to highlight your momentum as a student builder. Replace these with your exact certifications, hackathons, and achievements when ready."
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
              className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-xl text-cyan-200">
                  <Icon />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">{item.title}</h3>
              </div>
              <div className="mt-6 space-y-4">
                {item.points.map((point) => (
                  <p
                    key={point}
                    className="rounded-2xl border border-white/6 bg-slate-950/40 px-5 py-4 text-slate-300"
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

