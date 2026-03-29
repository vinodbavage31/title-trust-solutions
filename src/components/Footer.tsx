const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-navy py-10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <a href="#" className="font-display text-sm font-bold text-primary-foreground/60 tracking-tight">
        ClearPath<span className="text-accent">Title</span>
      </a>
      <ul className="flex items-center gap-6">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-primary-foreground/30 text-xs hover:text-primary-foreground/60 transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-primary-foreground/25 text-xs">
        © {new Date().getFullYear()} ClearPathTitle. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
