"use client";

import { Linkedin } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { content } from "@/content/portfolio";

export default function Footer() {
  const { locale } = useLang();
  const t = content[locale];

  return (
    <footer className="py-10 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
        <a
          href={t.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-cyan-400 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Mahmoud Chater</span>
        </p>
        <p className="text-slate-500 text-xs">
          Technicien Support Informatique N2/N3
        </p>
      </div>
    </footer>
  );
}
