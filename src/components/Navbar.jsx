import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "../data/portfolio";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href) => (event) => {
    event.preventDefault();
    setIsOpen(false);

    window.history.pushState(null, "", href);

    window.setTimeout(
      () => {
        const target = document.querySelector(href);
        if (!target) return;

        const navOffset = 96;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - navOffset;
        window.scrollTo({ top: targetTop, behavior: "smooth" });
      },
      isOpen ? 260 : 0,
    );
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-40 px-4 pt-4"
    >
      <nav className="mx-auto max-w-7xl rounded-xl border border-[#3B82F6]/35 bg-[#111C2F] px-4 py-3 shadow-card sm:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="font-display text-lg font-semibold tracking-[0.2em] text-[#F8FAFC]"
            onClick={handleNavClick("#home")}
          >
            MOUNISHAN<span className="text-[#22D3EE]">.</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick(item.href)}
                className="text-sm font-medium text-[#E2E8F0] transition hover:text-[#22D3EE]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={handleNavClick("#contact")}
              className="hidden rounded-lg border border-[#22D3EE]/40 bg-[#3B82F6]/15 px-4 py-2 text-sm font-semibold text-[#F8FAFC] transition hover:bg-[#3B82F6]/30 md:inline-flex"
            >
              Let&apos;s Talk
            </a>
            <button
              type="button"
              aria-label="Toggle navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#3B82F6]/30 bg-[#0F172A] text-[#F8FAFC] md:hidden"
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
              <div className="mt-4 space-y-2 border-t border-[#3B82F6]/25 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-[#E2E8F0] transition hover:bg-[#3B82F6]/10 hover:text-[#F8FAFC]"
                    onClick={handleNavClick(item.href)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 inline-flex rounded-lg border border-[#22D3EE]/40 bg-[#3B82F6]/15 px-4 py-2 text-sm font-semibold text-[#F8FAFC]"
                  onClick={handleNavClick("#contact")}
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
