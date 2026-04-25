import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const footerLinks = [
  { icon: FiMail, href: "mailto:mounishan@example.com", label: "Email" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/your-linkedin", label: "LinkedIn" },
  { icon: FiGithub, href: "https://github.com/your-github", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <p className="font-display text-lg font-semibold text-white">Mounishan</p>
          <p className="mt-2 text-sm text-slate-400">
            Electronics and Communication Engineering Student | Web Developer | IoT Enthusiast
          </p>
        </div>
        <div className="flex items-center gap-3">
          {footerLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={item.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
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

