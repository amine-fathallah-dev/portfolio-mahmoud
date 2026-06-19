"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { content, type Experience } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const LEVEL_CONFIG: Record<
  Experience["level"],
  { label: string; variant: "vip" | "level" | "n1" }
> = {
  VIP: { label: "VIP", variant: "vip" },
  "N2/N3": { label: "N2/N3", variant: "level" },
  N1: { label: "N1", variant: "n1" },
};

function CardContent({ exp, levelCfg }: {
  exp: Experience;
  levelCfg: { label: string; variant: "vip" | "level" | "n1" };
}) {
  return (
    <>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <p className="font-mono text-xs text-slate-500 dark:text-slate-500 mb-1">{exp.period}</p>
          <h3 className="font-display font-bold text-slate-900 dark:text-white text-base leading-snug">
            {exp.role}
          </h3>
          <p className="text-cyan-400/80 text-sm font-medium mt-0.5">
            {exp.company}
          </p>
        </div>
        <Badge variant={levelCfg.variant} className="flex-shrink-0 text-xs">
          {levelCfg.label}
        </Badge>
      </div>
      <ul className="space-y-1.5 mt-4">
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <span className="text-cyan-500 mt-1 flex-shrink-0">›</span>
            {bullet}
          </li>
        ))}
      </ul>
    </>
  );
}

function ExperienceRow({ exp, index }: { exp: Experience; index: number }) {
  const isLeft = index % 2 === 0;
  const levelCfg = LEVEL_CONFIG[exp.level];

  const cardMotion = {
    initial: { opacity: 0, x: isLeft ? -40 : 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  return (
    <>
      {/* Desktop layout */}
      <div className="hidden lg:grid grid-cols-[1fr_40px_1fr] items-start gap-0 mb-10">
        {isLeft ? (
          <>
            {/* Card left */}
            <motion.div {...cardMotion} className={cn(
              "glass-card p-6 hover:-translate-y-1 transition-transform duration-300",
              exp.current && "border border-cyan-500/30"
            )}>
              <CardContent exp={exp} levelCfg={levelCfg} />
            </motion.div>
            {/* Center dot */}
            <div className="flex flex-col items-center pt-6">
              <div className={cn(
                "w-4 h-4 rounded-full border-2 flex-shrink-0",
                exp.current
                  ? "border-cyan-400 bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                  : "border-slate-300 dark:border-slate-600 bg-slate-200 dark:bg-slate-800"
              )} />
            </div>
            {/* Empty right */}
            <div />
          </>
        ) : (
          <>
            {/* Empty left */}
            <div />
            {/* Center dot */}
            <div className="flex flex-col items-center pt-6">
              <div className={cn(
                "w-4 h-4 rounded-full border-2 flex-shrink-0",
                exp.current
                  ? "border-cyan-400 bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                  : "border-slate-300 dark:border-slate-600 bg-slate-200 dark:bg-slate-800"
              )} />
            </div>
            {/* Card right */}
            <motion.div {...cardMotion} className={cn(
              "glass-card p-6 hover:-translate-y-1 transition-transform duration-300",
              exp.current && "border border-cyan-500/30"
            )}>
              <CardContent exp={exp} levelCfg={levelCfg} />
            </motion.div>
          </>
        )}
      </div>

      {/* Mobile layout */}
      <motion.div
        className="lg:hidden mb-4 pl-6 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        {/* Mobile dot */}
        <div className={cn(
          "absolute left-0 top-6 w-3 h-3 rounded-full border-2 -translate-x-1.5",
          exp.current ? "border-cyan-400 bg-cyan-400" : "border-slate-300 dark:border-slate-600 bg-slate-200 dark:bg-slate-800"
        )} />
        <div className={cn(
          "glass-card p-5",
          exp.current && "border border-cyan-500/30"
        )}>
          <CardContent exp={exp} levelCfg={levelCfg} />
        </div>
      </motion.div>
    </>
  );
}

export default function Timeline() {
  const { locale } = useLang();
  const t = content[locale];
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 30%"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-3 block">
          &gt; history --jobs
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
          {t.experience.heading}
        </h2>
        <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
      </motion.div>

      <div ref={containerRef} className="relative">
        {/* Animated center line — desktop */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800/80">
          <motion.div
            className="w-full bg-gradient-to-b from-cyan-400 to-blue-500 origin-top rounded-full"
            style={{ scaleY, height: "100%" }}
          />
        </div>

        {/* Left line — mobile */}
        <div className="lg:hidden absolute left-3 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800/80" />

        <div>
          {t.experience.items.map((exp, i) => (
            <ExperienceRow key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
