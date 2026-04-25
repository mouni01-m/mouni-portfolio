import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { heroRoles, stats } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";
import { GlassCard } from "./GlassCard";

export function HeroSection() {
  const typedRole = useTypewriter(heroRoles);

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 pb-24 pt-14 sm:px-6 lg:px-8"
    >
      <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <span className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-sky-200/80">
             Portfolio
          </span>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            Mounishan M
            <span className="mt-4 block bg-gradient-to-r from-sky-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Building sleek digital and embedded experiences.
            </span>
          </h1>
          <div className="mt-6 h-8 text-lg font-semibold text-cyan-200 sm:text-2xl">
            {typedRole}
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-cyan-200 align-middle" />
          </div>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I&apos;m an Electronics and Communication Engineering student focused on
            creating high-impact web interfaces, IoT systems, and problem-solving
            experiences that feel both technically sharp and visually refined.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="primary-button">
              View Projects
              <FiArrowRight />
            </a>
            <a href="/Mounishan-Resume.pdf" className="secondary-button" download>
              Download Resume
              <FiDownload />
            </a>
            <a href="#contact" className="secondary-button">
              Contact Me
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -left-8 top-8 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -right-8 bottom-4 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl" />
          <GlassCard className="relative overflow-hidden p-7 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
            <div className="relative">
              <div className="grid gap-5">
                <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                        Focus Areas
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-bold text-white">
                        Code. Circuits. Creativity.
                      </h3>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200 shadow-glow">
                      <span className="text-lg font-bold">01</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[22px] border border-white/10 bg-white/5 p-5 text-center"
                    >
                      <p className="font-display text-3xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-[24px] border border-white/10 bg-gradient-to-r from-cyan-400/10 via-slate-900 to-emerald-400/10 p-6">
                  <p className="text-sm leading-7 text-slate-300">
                    Open to internships, recruiter conversations, and freelance
                    opportunities across frontend development, IoT prototyping, and
                    technical product building.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

