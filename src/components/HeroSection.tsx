import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center bg-navy overflow-hidden">
    <img
      src={heroBg}
      alt=""
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />

    <div className="container relative z-10 py-32">
      <div className="max-w-2xl">
        <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
          Professional Title Search Services
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-primary-foreground mb-6">
          Accurate &amp; Reliable Title Search Services for Risk-Free Property Transactions
        </h1>
        <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
          Helping real estate professionals verify ownership, identify risks, and close deals with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#sample-work" className="inline-flex items-center justify-center bg-accent text-accent-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
            Get a Sample Report
          </a>
          <a href="#contact" className="inline-flex items-center justify-center border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary-foreground/10 transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
