"use client";

import { useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Download, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { content } from "@/content/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function MagneticButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`transition-transform duration-200 ${className ?? ""}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}

export default function Contact() {
  const { locale } = useLang();
  const t = content[locale];

  const buttons = [
    {
      label: t.contact.ctaEmail,
      href: `mailto:${t.contact.email}`,
      icon: Mail,
      variant: "default" as const,
    },
    {
      label: t.contact.ctaPhone,
      href: `tel:${t.contact.phone.replace(/\s/g, "")}`,
      icon: Phone,
      variant: "outline" as const,
    },
    {
      label: t.contact.ctaCv,
      href: "/cv-mahmoud-chater.pdf",
      icon: Download,
      variant: "outline" as const,
      download: true,
    },
    {
      label: t.contact.ctaLinkedin,
      href: t.contact.linkedin,
      icon: Linkedin,
      variant: "secondary" as const,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 relative"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.04) 50%, transparent 100%)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6,182,212,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-3 block">
              &gt; contact --me
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
              {t.contact.heading}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">{t.contact.body}</p>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 text-sm mb-10"
          >
            <MapPin size={15} className="text-cyan-400" />
            {t.contact.location}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {buttons.map((btn) => (
              <MagneticButton key={btn.label}>
                <Button variant={btn.variant} size="lg" asChild className="gap-2.5">
                  <a
                    href={btn.href}
                    download={btn.download ? true : undefined}
                    target={btn.external ? "_blank" : undefined}
                    rel={btn.external ? "noopener noreferrer" : undefined}
                  >
                    <btn.icon size={18} />
                    {btn.label}
                  </a>
                </Button>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
