import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { socialLinks } from "../data/portfolio";

const iconMap = {
  Email: FiMail,
  Phone: FiPhone,
  LinkedIn: FiLinkedin,
  GitHub: FiGithub,
};

export function Footer() {
  return (
    <footer className="border-t border-[#3B82F6]/25 bg-[#0F172A]/80 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <p className="font-display text-lg font-semibold text-[#F8FAFC]">Mounishan M</p>
          <p className="mt-2 text-sm text-[#E2E8F0]">
            Electronics and Communication Engineering Student | Embedded Systems | IoT
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((item) => {
            const Icon = iconMap[item.label];
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={item.label}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#3B82F6]/30 bg-[#111C2F] text-[#E2E8F0] transition hover:border-[#22D3EE]/50 hover:text-[#F8FAFC]"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
