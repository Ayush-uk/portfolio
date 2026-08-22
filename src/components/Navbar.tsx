"use client";

import { useEffect, useState } from "react";
import { Code2, Star, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Props = { terminalMode: boolean; setTerminalMode: (v: boolean) => void };

const Navbar = ({ terminalMode, setTerminalMode }: Props) => {
  const [stars, setStars] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/repos/Ayush-uk/portfolio")
      .then((res) => res.json())
      .then((data) => typeof data.stargazers_count === "number" && setStars(data.stargazers_count))
      .catch(() => undefined);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-300 sm:px-6 ${terminalMode ? "py-0" : scrolled ? "py-3" : "py-5"}`}>
      <nav className={`mx-auto flex max-w-6xl items-center justify-between border px-3 py-2.5 transition-all ${terminalMode ? "border-green-500/30 bg-black text-green-400" : scrolled ? "border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-xl" : "border-transparent"}`}>
        <a href="/" className="group flex items-center gap-3" aria-label="Ayush home">
          <span className={`grid size-9 place-items-center border ${terminalMode ? "border-green-500/40" : "border-[var(--border)] bg-[var(--surface)]"}`}><Code2 size={18} className={terminalMode ? "text-green-400" : "text-blue-500"} /></span>
          <span className="font-mono text-sm font-bold tracking-[0.18em] text-white">AYUSH<span className="text-[var(--foreground-subtle)]">.DEV</span></span>
        </a>
        <div className="flex items-center gap-2">
          <a href="https://github.com/Ayush-uk/portfolio" target="_blank" rel="noreferrer" className="hidden items-center gap-2 border border-[var(--border)] px-3 py-2 text-xs font-semibold text-[var(--foreground-subtle)] transition hover:border-blue-500/50 hover:text-white sm:flex" aria-label="Open portfolio GitHub repository">
            <FaGithub size={16} /> {stars !== null && <><Star size={13} className="fill-yellow-500 text-yellow-500" /> {stars}</>}
          </a>
          <button onClick={() => setTerminalMode(!terminalMode)} className={`grid size-9 place-items-center border transition ${terminalMode ? "border-green-500/50 bg-green-500/10 text-green-400" : "border-[var(--border)] text-[var(--foreground-subtle)] hover:border-blue-500/60 hover:text-white"}`} title="Toggle terminal mode" aria-label="Toggle terminal mode"><Terminal size={18} /></button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
