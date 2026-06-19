"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { content } from "@/content/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const LANG_FLAGS: Record<string, string> = {
  Français: "🇫🇷",
  French: "🇫🇷",
  Anglais: "🇬🇧",
  English: "🇬🇧",
  Arabe: "🇹🇳",
  Arabic: "🇹🇳",
};

export default function Education() {
  const { locale } = useLang();
  const t = content[locale];

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 relative"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.03) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="mb-12">
            <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-3 block">
              &gt; education --list
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              {t.education.heading}
            </h2>
            <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
          </motion.div>

          {/* Education cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {t.education.items.map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card p-6 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <GraduationCap size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-slate-500 dark:text-slate-500 mb-1.5">
                      {edu.period}
                    </p>
                    <h3 className="font-display font-semibold text-slate-900 dark:text-white text-sm leading-snug mb-1">
                      {edu.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">{edu.school}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <Languages size={18} className="text-cyan-400" />
              <h3 className="font-display font-semibold text-slate-900 dark:text-white text-lg">
                {t.education.languagesHeading}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {t.education.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="glass-card px-5 py-3 flex items-center gap-2.5 hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <span className="text-xl" role="img" aria-label={lang.name}>
                    {LANG_FLAGS[lang.name] ?? "🌐"}
                  </span>
                  <div>
                    <p className="text-slate-900 dark:text-white text-sm font-semibold">{lang.name}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
