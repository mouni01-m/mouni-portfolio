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
        className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="relative mx-auto w-full max-w-none lg:mx-0 lg:h-full"
        >
          <div className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -right-6 bottom-10 h-40 w-40 rounded-full bg-emerald-300/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 p-3 shadow-card h-full">
            <div className="relative overflow-hidden rounded-[24px] bg-slate-950/20 aspect-[3/4] min-h-[28rem]">
              <img
                src="/profile-photo.jpg"
                alt="Portrait of Mounishan"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-[linear-gradient(180deg,rgba(6,8,22,0.05),rgba(6,8,22,0.42))]" />
            </div>
            <div className="pointer-events-none absolute inset-3 rounded-[24px] ring-1 ring-inset ring-white/10" />
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 backdrop-blur-md">
              <p className="font-display text-xl font-bold text-white">Mounishan M</p>
              <p className="mt-1 text-sm text-cyan-100/80">ECE Student</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:h-full">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl h-full">
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
          {[
            "Blends engineering fundamentals with modern web execution.",
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
