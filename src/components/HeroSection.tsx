import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "500+", label: "Title Searches Completed" },
  { value: "99.8%", label: "Accuracy Rate" },
  { value: "24–48h", label: "Average Turnaround" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col bg-navy overflow-hidden">
    <img src={heroBg} alt="" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover opacity-10" />
    <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />

    <div className="container relative z-10 flex-1 flex items-center pt-[72px]">
      <div className="w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          <div>
            <div className="w-10 h-[2px] bg-accent mb-8" />
            <h1 className="text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.12] text-primary-foreground mb-6 tracking-tight max-w-[600px]">
              Your Deals Deserve a Clean Title. I Make Sure of It.
            </h1>
            <p className="text-primary-foreground/50 text-base md:text-[1.0625rem] leading-[1.7] mb-10 max-w-[480px]">
              I deliver institutional-grade title search reports that protect your investments and keep your closings on schedule. No guesswork — just verified facts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors">
                Request a Free Sample Report
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#process" className="inline-flex items-center justify-center border border-primary-foreground/15 text-primary-foreground/70 px-7 py-3.5 rounded text-sm font-medium tracking-wide hover:border-primary-foreground/30 hover:text-primary-foreground transition-colors">
                See How It Works
              </a>
            </div>
          </div>

          {/* Right side - trust signal */}
          <div className="hidden lg:block border-l border-primary-foreground/10 pl-12">
            <p className="text-primary-foreground/30 text-xs font-semibold tracking-label uppercase mb-6">Trusted By</p>
            <div className="space-y-5">
              {["Title Companies", "Real Estate Investors", "Law Firms", "Mortgage Lenders"].map((c) => (
                <p key={c} className="text-primary-foreground/50 text-sm">{c}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Stats bar */}
    <div className="relative z-10 border-t border-primary-foreground/8">
      <div className="container">
        <div className="grid grid-cols-3 divide-x divide-primary-foreground/8">
          {stats.map((s) => (
            <div key={s.label} className="py-6 md:py-8 text-center">
              <p className="text-accent font-display text-2xl md:text-3xl mb-1">{s.value}</p>
              <p className="text-primary-foreground/35 text-[11px] md:text-xs tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
