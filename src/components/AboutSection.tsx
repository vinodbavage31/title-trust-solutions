const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-[0.8fr_1fr] gap-12 lg:gap-20 items-start">
        <div>
          <p className="text-accent text-xs font-semibold tracking-label uppercase mb-4">Who I Am</p>
          <h2 className="text-[1.75rem] md:text-[2.25rem] leading-[1.2] text-foreground">
            I've Built My Career on Getting Titles Right
          </h2>
        </div>
        <div className="space-y-5">
          <p className="text-muted-foreground leading-[1.8] text-[0.9375rem]">
            I'm not a data-entry operator running automated searches. I'm a title search professional who reads every deed, follows every chain, and flags every risk — so you don't have to.
          </p>
          <p className="text-muted-foreground leading-[1.8] text-[0.9375rem]">
            My background spans residential and commercial title work across multiple US counties. I've worked directly with title companies, closing attorneys, and investors who need results they can act on — not just raw data. When I hand you a report, it's ready for underwriting.
          </p>
          <div className="pt-4 flex flex-wrap gap-x-8 gap-y-3">
            {["Chain of Title", "Ownership Verification", "Lien & Judgment Search", "Legal Description Review"].map((skill) => (
              <span key={skill} className="text-foreground text-sm font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
