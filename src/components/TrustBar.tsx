const logos = [
  "Title Company A",
  "Real Estate Group B", 
  "Investment Firm C",
  "Law Offices D",
  "Mortgage Corp E",
];

const TrustBar = () => (
  <section className="py-12 md:py-16 bg-card border-y border-border">
    <div className="container">
      <p className="text-muted-foreground/50 text-xs font-semibold tracking-label uppercase text-center mb-8">
        Trusted by Title Companies, Investors & Law Firms Across the US
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
        {logos.map((name) => (
          <div key={name} className="h-8 px-4 bg-muted/60 rounded flex items-center justify-center">
            <span className="text-muted-foreground/40 text-xs font-medium tracking-wide uppercase">{name}</span>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground/40 text-[11px] mt-6 text-center italic">
        Client logos will appear here
      </p>
    </div>
  </section>
);

export default TrustBar;
