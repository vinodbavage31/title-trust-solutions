const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Sample Work", href: "#sample-work" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-navy border-t border-navy-light py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-primary-foreground/50 text-sm">
        © {new Date().getFullYear()} TitleSearchPro. All rights reserved.
      </p>
      <ul className="flex items-center gap-6">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-primary-foreground/50 text-sm hover:text-primary-foreground transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
