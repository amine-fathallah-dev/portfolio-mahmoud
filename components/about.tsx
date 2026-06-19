"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { content } from "@/content/portfolio";

function AnimatedCounter({ target, duration = 1800 }: { target: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState("0");

  useEffect(() => {
    if (!inView) return;

    // If target is not a pure number, just reveal it directly
    const num = parseInt(target.replace(/\D/g, ""), 10);
    const suffix = target.replace(/\d/g, "");
    if (isNaN(num)) {
      setValue(target);
      return;
    }

    let start = 0;
    const step = Math.ceil(num / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, num);
      setValue(`${start}${suffix}`);
      if (start >= num) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{inView ? value : "0"}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const { locale } = useLang();
  const t = content[locale];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Section heading */}
        <motion.div variants={fadeUp} className="mb-12">
          <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-3 block">
            &gt; whoami
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            {t.about.heading}
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Body text */}
          <motion.p
            variants={fadeUp}
            className="text-slate-600 dark:text-slate-400 text-base leading-relaxed"
          >
            {t.about.body}
          </motion.p>

          {/* Stats grid */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-4"
          >
            {t.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-6 text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="font-display font-bold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500 mb-2">
                  <AnimatedCounter target={stat.value} />
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
