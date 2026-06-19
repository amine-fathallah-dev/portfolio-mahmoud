"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/lib/i18n";
import { content } from "@/content/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function Hero() {
  const { locale } = useLang();
  const t = content[locale];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  const roles = t.hero.roles;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const current = roles[roleIndex];

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          55
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          30
        );
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex, roles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid-bg opacity-40 pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6,182,212,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            {locale === "fr" ? "Disponible pour de nouvelles opportunités" : "Available for new opportunities"}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-slate-900 dark:text-white mb-4 tracking-tight"
        >
          MAHMOUD{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            CHATER
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          variants={fadeUp}
          className="h-10 flex items-center justify-center mb-6"
        >
          <span className="font-mono text-xl sm:text-2xl text-cyan-400 font-medium">
            {displayed}
            <span className="cursor-blink text-cyan-300">|</span>
          </span>
        </motion.div>

        {/* Pitch */}
        <motion.p
          variants={fadeUp}
          className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {t.hero.pitch}
        </motion.p>

        {/* Badges */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {t.hero.badges.map((badge) => (
            <Badge key={badge} variant="outline" className="text-xs px-3 py-1">
              {badge}
            </Badge>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="gap-2 font-semibold">
            <a href="/cv-mahmoud-chater.pdf" download>
              <Download size={18} />
              {t.hero.ctaCv}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 font-semibold">
            <a href="#contact">
              {t.hero.ctaContact}
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <a href="#about" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-slate-400 dark:text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <ArrowDown size={22} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
