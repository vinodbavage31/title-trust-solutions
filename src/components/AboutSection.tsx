const skills = ["Chain of Title", "Ownership Verification", "Lien & Judgment Search", "Legal Description Review"];

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 bg-card">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <p className="text-accent text-xs font-semibold tracking-label uppercase mb-3">Who I Am</p>
          <h2 className="text-3xl md:text-[2.5rem] leading-tight font-display font-bold text-foreground">
            I've Built My Career on Getting Titles Right
          </h2>
        </div>
        <div className="space-y-5">
          <p className="text-muted-foreground leading-relaxed">
            I'm not a data-entry operator running automated searches. I'm a title search professional who reads every deed, follows every chain, and flags every risk — so you don't have to.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My background spans residential and commercial title work across multiple US counties. I've worked directly with title companies, closing attorneys, and investors who need results they can act on — not just raw data. When I hand you a report, it's ready for underwriting.
          </p>
          <div className="pt-4 grid grid-cols-2 gap-3">
            {skills.map((skill) => (
              <span key={skill} className="text-foreground text-sm font-medium flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
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
