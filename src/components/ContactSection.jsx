import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from "react-icons/fi";
import { socialLinks } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const iconMap = {
  Email: FiMail,
  Phone: FiPhone,
  LinkedIn: FiLinkedin,
  GitHub: FiGithub,
};

export function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const whatsappMessage = encodeURIComponent(
      `New portfolio enquiry\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    );

    window.open(`https://wa.me/919655082924?text=${whatsappMessage}`, "_blank", "noreferrer");
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
          className="tech-card p-7"
        >
          <h3 className="font-display text-2xl font-bold text-[#F8FAFC]">Contact Channels</h3>
          <p className="mt-4 text-[#E2E8F0]">
            Connect through email, phone, LinkedIn, or GitHub for internships,
            collaborations, and project discussions.
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
                  className="flex items-center gap-4 rounded-lg border border-[#3B82F6]/25 bg-[#0F172A]/80 px-5 py-4 text-[#E2E8F0] transition hover:border-[#22D3EE]/50 hover:text-[#F8FAFC]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#3B82F6]/20 text-[#22D3EE]">
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
          className="tech-card p-7"
        >
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#F8FAFC]">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="input-field"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#F8FAFC]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input-field"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#F8FAFC]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="input-field resize-none"
                placeholder="Tell me about the opportunity or project..."
                required
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
