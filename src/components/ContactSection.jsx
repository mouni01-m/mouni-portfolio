import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import { socialLinks } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const iconMap = {
  Email: FiMail,
  LinkedIn: FiLinkedin,
  GitHub: FiGithub,
};

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );

    window.location.href = `mailto:mounishan@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something thoughtful and technically strong."
        description="Reach out for internship opportunities, collaborations, freelance work, or simply to connect over technology and product ideas."
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
        >
          <h3 className="font-display text-2xl font-bold text-white">Contact Channels</h3>
          <p className="mt-4 text-slate-300">
            Replace the placeholder links below with your real contact details.
          </p>
          <div className="mt-8 space-y-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.label];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                    <Icon />
                  </span>
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
        >
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="input-field"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                className="input-field"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                value={form.message}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, message: event.target.value }))
                }
                className="input-field resize-none"
                placeholder="Tell me about the opportunity or project..."
              />
            </div>
            <button type="submit" className="primary-button justify-center">
              Send Message
              <FiSend />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

