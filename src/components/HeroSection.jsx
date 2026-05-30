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
          <span className="mb-6 inline-flex rounded-lg border border-[#3B82F6]/35 bg-[#111C2F] px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#22D3EE]">
             Portfolio
          </span>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-tight text-[#F8FAFC] sm:text-6xl lg:text-7xl">
            Mounishan M
            <span className="mt-4 block bg-gradient-to-r from-[#3B82F6] via-[#22D3EE] to-[#F8FAFC] bg-clip-text text-transparent">
              Building practical electronics, IoT, and embedded solutions.
            </span>
          </h1>
          <div className="mt-6 h-8 text-lg font-semibold text-[#22D3EE] sm:text-2xl">
            {typedRole}
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-[#22D3EE] align-middle" />
          </div>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#E2E8F0] sm:text-lg">
            I&apos;m an Electronics and Communication Engineering student at SRM IST
            Ramapuram, focused on embedded systems, sensor-based IoT projects,
            communication systems, and applied problem solving.
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
          <GlassCard className="relative overflow-hidden p-7 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/12 via-[#111C2F] to-[#0F172A]" />
            <div className="relative">
              <div className="grid gap-5">
                <div className="tech-panel p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-[#E2E8F0]">
                        Focus Areas
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-bold text-[#F8FAFC]">
                        Code. Circuits. Creativity.
                      </h3>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3B82F6]/20 text-[#22D3EE] shadow-glow">
                      <span className="text-lg font-bold">01</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="tech-panel p-5 text-center"
                    >
                      <p className="font-display text-3xl font-bold text-[#F8FAFC]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm text-[#E2E8F0]">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border border-[#3B82F6]/30 bg-gradient-to-r from-[#3B82F6]/15 via-[#0F172A] to-[#2563EB]/10 p-6">
                  <p className="text-sm leading-7 text-[#E2E8F0]">
                    Open to core ECE internships, embedded systems work, IoT
                    prototyping, AI practice projects, and recruiter conversations
                    where hands-on engineering matters.
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
