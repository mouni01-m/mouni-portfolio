import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "../data/portfolio";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-40 px-4 pt-4"
    >
      <nav className="mx-auto max-w-7xl rounded-[28px] border border-white/10 bg-slate-950/60 px-4 py-3 shadow-card backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="font-display text-lg font-semibold tracking-[0.2em] text-white"
            onClick={closeMenu}
          >
            MOUNISHAN<span className="text-cyan-300">.</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20 md:inline-flex"
            >
              Let&apos;s Talk
            </a>
            <button
              type="button"
              aria-label="Toggle navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100"
                  onClick={closeMenu}
                >
                  Let&apos;s Talk
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
