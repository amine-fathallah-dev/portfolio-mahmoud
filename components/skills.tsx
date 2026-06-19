"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { content } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const badgeFade = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Skills() {
  const { locale } = useLang();
  const t = content[locale];

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 relative"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.03) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="mb-12">
            <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-3 block">
              &gt; skills --list
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              {t.skills.heading}
            </h2>
            <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {t.skills.categories.map((cat, catIdx) => (
              <motion.div
                key={cat.id}
                variants={fadeUp}
                transition={{ delay: catIdx * 0.05 }}
                className="glass-card p-5 group hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Terminal header */}
                <div className="mb-4 pb-3 border-b border-slate-200 dark:border-white/5">
                  <span className="font-mono text-xs text-cyan-400/80">
                    &gt; skills --category=
                    <span className="text-cyan-400 font-semibold">{cat.id}</span>
                  </span>
                  <p className="text-slate-900 dark:text-white text-xs font-semibold mt-1 font-display">
                    {cat.label}
                  </p>
                </div>

                {/* Badges */}
                <motion.div
                  className="flex flex-wrap gap-1.5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: catIdx * 0.05,
                      },
                    },
                  }}
                >
                  {cat.skills.map((skill) => (
                    <motion.div key={skill} variants={badgeFade}>
                      <Badge
                        variant="default"
                        className="text-xs cursor-default hover:bg-cyan-500/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
