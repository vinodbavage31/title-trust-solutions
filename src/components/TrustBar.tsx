const logos = [
  "Title Company A",
  "Real Estate Group B",
  "Investment Firm C",
  "Law Offices D",
  "Mortgage Corp E",
];

const TrustBar = () => (
  <section className="py-10 md:py-14 bg-card border-b border-border/60">
    <div className="container">
      <p className="text-muted-foreground/50 text-xs font-medium tracking-label uppercase text-center mb-8">
        Trusted by Title Companies, Investors & Law Firms Across the US
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {logos.map((name) => (
          <div key={name} className="h-10 px-6 bg-background rounded-lg flex items-center justify-center border border-border/60">
            <span className="text-muted-foreground/40 text-xs font-semibold tracking-wide uppercase">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
