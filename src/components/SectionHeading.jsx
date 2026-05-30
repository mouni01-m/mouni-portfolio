import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      <span className="mb-4 inline-flex rounded-lg border border-[#3B82F6]/35 bg-[#111C2F] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#22D3EE]">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold text-[#38BDF8] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[#FFFFFF] sm:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
