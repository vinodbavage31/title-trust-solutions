const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-navy py-10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-primary-foreground/30 text-xs tracking-wide">
        © {new Date().getFullYear()} TitleSearchPro. All rights reserved.
      </p>
      <ul className="flex items-center gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-primary-foreground/30 text-xs tracking-wide hover:text-primary-foreground/60 transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
