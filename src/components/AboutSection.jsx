import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About Me"
        title="An ECE student turning circuit ideas into working systems."
        description="I work across embedded systems, communication fundamentals, sensor integration, and software-assisted prototyping."
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="relative mx-auto w-full max-w-none lg:mx-0 lg:h-full"
        >
          <div className="tech-card relative h-full overflow-hidden p-3">
            <div className="relative aspect-[3/4] min-h-[28rem] overflow-hidden rounded-lg bg-[#0F172A]">
              <img
                src="/profile-photo.jpg"
                alt="Portrait of Mounishan"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-lg bg-[linear-gradient(180deg,rgba(15,23,42,0.05),rgba(15,23,42,0.62))]" />
            </div>
            <div className="pointer-events-none absolute inset-3 rounded-lg ring-1 ring-inset ring-[#3B82F6]/25" />
            <div className="absolute bottom-7 left-7 right-7 rounded-lg border border-[#3B82F6]/30 bg-[#0F172A] px-5 py-4">
              <p className="font-display text-xl font-bold text-[#F8FAFC]">Mounishan M</p>
              <p className="mt-1 text-sm text-[#22D3EE]">ECE Student</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:h-full">
          <div className="tech-card h-full p-8">
            <p className="text-lg leading-9 text-[#E2E8F0]">
              I&apos;m Mounishan, an Electronics and Communication Engineering student
              at SRM IST Ramapuram with a 9.86 CGPA and a strong interest in core
              ECE industries. My work spans embedded systems, digital signal and
              communication fundamentals, sensor interfacing, and hardware-software
              integration.
            </p>
            <p className="mt-6 text-lg leading-9 text-[#E2E8F0]">
              Through internships in electronics manufacturing, AI, web development,
              and industrial training, I&apos;ve built practical exposure to production
              workflows, Python-based problem solving, and real-world engineering
              environments.
            </p>
          </div>
          {[
            "Strong fundamentals in embedded systems, circuit design, and communication systems.",
            "Hands-on with Arduino, Firebase, Multisim, sensors, soldering, and hardware debugging.",
            "Active leader through DCDC, NSS, Leo Club, hackathons, and technical competitions.",
          ].map((line, index) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="tech-card p-6"
            >
              <span className="text-sm uppercase tracking-[0.28em] text-[#22D3EE]">
                0{index + 1}
              </span>
              <p className="mt-4 text-lg leading-8 text-[#E2E8F0]">{line}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
