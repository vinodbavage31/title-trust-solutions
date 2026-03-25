import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Me", href: "#why-me" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md">
      <div className="container flex items-center justify-between h-[72px]">
        <a href="#" className="text-primary-foreground font-display text-lg tracking-tight">
          TitleSearch<span className="text-accent font-semibold">Pro</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[13px] font-medium text-primary-foreground/60 hover:text-primary-foreground tracking-wide uppercase transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="text-[13px] font-medium bg-accent text-accent-foreground px-5 py-2 rounded tracking-wide hover:bg-accent/90 transition-colors">
              Get in Touch
            </a>
          </li>
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy border-t border-primary-foreground/10 pb-6">
          <ul className="container flex flex-col gap-5 pt-5">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-primary-foreground/70 text-sm font-medium">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="inline-block text-sm bg-accent text-accent-foreground px-5 py-2 rounded font-medium">
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
