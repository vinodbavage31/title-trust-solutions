import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Sample Work", href: "#sample-work" },
  { label: "Why Me", href: "#why-me" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-navy-light">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-primary-foreground font-display text-xl tracking-tight">
          TitleSearch<span className="text-accent">Pro</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="text-sm bg-accent text-accent-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
              Get in Touch
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-navy-light pb-4">
          <ul className="container flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-primary-foreground/80 text-sm">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
