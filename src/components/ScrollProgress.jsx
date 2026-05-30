import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-slate-100"
      style={{ scaleX }}
    />
  );
}
