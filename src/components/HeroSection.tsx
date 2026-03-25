import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
    <img src={heroBg} alt="" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover opacity-15" />
    <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/70" />

    <div className="container relative z-10 pt-[72px]">
      <div className="max-w-[620px] py-20 md:py-28">
        <div className="w-12 h-[2px] bg-accent mb-8" />
        <h1 className="text-[2.5rem] md:text-[3.25rem] leading-[1.15] text-primary-foreground mb-6 tracking-tight">
          Accurate &amp; Reliable Title Search Services
        </h1>
        <p className="text-primary-foreground/55 text-base md:text-lg leading-relaxed mb-12 max-w-[520px]">
          Helping real estate professionals verify ownership, identify risks, and close deals with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#sample-work" className="inline-flex items-center justify-center bg-accent text-accent-foreground px-7 py-3 rounded text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors">
            Get a Sample Report
          </a>
          <a href="#contact" className="inline-flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/80 px-7 py-3 rounded text-sm font-medium tracking-wide hover:border-primary-foreground/40 hover:text-primary-foreground transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
