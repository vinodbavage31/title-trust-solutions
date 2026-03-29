import { ArrowRight, Shield } from "lucide-react";

const stats = [
  { value: "500+", label: "Searches Completed" },
  { value: "99.8%", label: "Accuracy Rate" },
  { value: "24–48h", label: "Avg. Turnaround" },
];

const HeroSection = () => (
  <section className="relative min-h-[92vh] flex items-center bg-navy overflow-hidden">
    {/* Gradient orbs */}
    <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-cyan/8 blur-[100px]" />

    <div className="container relative z-10 pt-16">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-primary-foreground/5 border border-primary-foreground/10 rounded-full px-4 py-1.5 mb-8">
          <Shield size={14} className="text-cyan" />
          <span className="text-primary-foreground/60 text-xs font-medium">Trusted by Title Companies & Investors Nationwide</span>
        </div>

        <h1 className="text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.08] font-display font-extrabold text-primary-foreground mb-6 tracking-tight">
          Your Deals Deserve a{" "}
          <span className="text-gradient">Clean Title.</span>
          <br />I Make Sure of It.
        </h1>

        <p className="text-primary-foreground/50 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
          Institutional-grade title search reports that protect your investments and keep closings on schedule. No guesswork — verified facts, every time.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="group inline-flex items-center justify-center gap-2.5 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg text-sm font-bold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20">
            Request a Free Sample Report
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a href="#process" className="inline-flex items-center justify-center border border-primary-foreground/15 text-primary-foreground/70 px-7 py-3.5 rounded-lg text-sm font-medium hover:border-primary-foreground/30 hover:text-primary-foreground transition-colors">
            See How It Works
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-20 md:mt-28 grid grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-primary-foreground/10 border-t border-primary-foreground/8 pt-8">
        {stats.map((s) => (
          <div key={s.label} className="md:px-8 first:pl-0">
            <p className="text-cyan font-display text-2xl md:text-3xl font-bold">{s.value}</p>
            <p className="text-primary-foreground/35 text-xs md:text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
