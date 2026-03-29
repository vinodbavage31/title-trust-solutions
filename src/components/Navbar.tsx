import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Me", href: "#why-me" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/60">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-lg font-bold text-foreground tracking-tight">
          ClearPath<span className="text-accent">Title</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="text-sm font-semibold bg-accent text-accent-foreground px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-colors">
              Get a Quote
            </a>
          </li>
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border pb-6">
          <ul className="container flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground text-sm font-medium block py-1">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#contact" onClick={() => setOpen(false)} className="inline-block text-sm bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-semibold">
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
