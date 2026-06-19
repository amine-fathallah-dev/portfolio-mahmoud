"use client";

import { Linkedin } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { content } from "@/content/portfolio";

export default function Footer() {
  const { locale } = useLang();
  const t = content[locale];

  return (
    <footer className="py-10 px-4 sm:px-6 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-900 dark:text-white font-semibold">Mahmoud Chater</span>
          </p>
          <p className="text-slate-400 dark:text-slate-600 text-xs mt-0.5">
            Technicien Support Informatique N2/N3
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={t.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 dark:text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <span className="text-slate-400 dark:text-slate-600 text-xs">
            {locale === "fr"
              ? "Construit avec Next.js & Framer Motion"
              : "Built with Next.js & Framer Motion"}
          </span>
        </div>
      </div>
    </footer>
  );
}
