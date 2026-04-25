import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About Me"
        title="A student engineer shaping ideas into polished products."
        description="I enjoy the intersection of electronics, software, and design, where technical depth meets user-facing clarity."
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-lg leading-9 text-slate-300">
            I&apos;m Mounishan, an Electronics and Communication Engineering student
            with a strong passion for technology, innovation, and building systems
            that solve meaningful problems. My interests span web development, IoT,
            embedded systems, and digital experiences that feel intuitive, modern,
            and purposeful.
          </p>
          <p className="mt-6 text-lg leading-9 text-slate-300">
            I love turning concepts into working prototypes, whether that means
            designing a responsive interface, developing a connected device
            solution, or exploring intelligent systems through code. I approach
            every project with curiosity, creativity, and a drive to keep learning.
          </p>
        </div>
        <div className="grid gap-6">
          {[
            "Blends engineering fundamentals with modern frontend execution.",
            "Builds with a recruiter-friendly focus on quality, motion, and clarity.",
            "Motivated by innovation, continuous learning, and practical impact.",
          ].map((line, index) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="rounded-[28px] border border-white/10 bg-slate-950/40 p-6"
            >
              <span className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">
                0{index + 1}
              </span>
              <p className="mt-4 text-lg leading-8 text-slate-300">{line}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

