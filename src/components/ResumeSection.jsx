import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export function ResumeSection() {
  return (
    <section id="resume" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
        className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl sm:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
              Resume
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
              Looking for a polished candidate profile?
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Download my resume to explore my academic background, project work,
              technical strengths, and readiness for internships, recruiter
              discussions, and freelance opportunities.
            </p>
          </div>
          <a href="/Mounishan-Resume.pdf" className="primary-button" download>
            Download Resume
            <FiDownload />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

