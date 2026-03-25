const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
        <div>
          <p className="text-accent text-xs font-semibold tracking-label uppercase mb-4">About</p>
          <h2 className="text-3xl md:text-[2.5rem] leading-tight text-foreground">
            Dedicated Title Search Analyst
          </h2>
        </div>
        <div>
          <p className="text-muted-foreground leading-[1.8] mb-6">
            With years of hands-on experience analyzing US property records, I specialize in delivering thorough and accurate title search reports. My work spans full chain-of-title research, ownership verification, and encumbrance checks — giving real estate companies, title agencies, and investors the clarity they need to move forward with confidence.
          </p>
          <p className="text-muted-foreground leading-[1.8]">
            Every report reflects a commitment to precision, attention to detail, and deep knowledge of county and state recording systems.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
