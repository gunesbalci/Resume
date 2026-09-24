import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "../data";
import { cn } from "../lib/utils";
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map((n) => n.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-white">
          {profile.name.split(" ")[0]}
          <span className="text-primary-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                active === item.href.slice(1)
                  ? "text-primary-400"
                  : "text-neutral-400 hover:text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1.5 text-xs font-semibold rounded-full border border-primary-500/30 text-primary-400 hover:bg-primary-500/10 transition-all flex items-center gap-1.5"
          >
            {lang === 'en' ? '🇹🇷 TR' : '🇬🇧 EN'}
          </button>

          <button
            className="md:hidden text-neutral-300 p-2 rounded-lg hover:bg-white/5 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-md border-b border-white/5">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
