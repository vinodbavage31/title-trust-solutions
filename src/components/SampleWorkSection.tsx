import { FileText, ArrowRight } from "lucide-react";

const SampleWorkSection = () => (
  <section id="sample-work" className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left - preview mock */}
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-navy py-20 flex flex-col items-center">
            <FileText size={32} className="text-accent/60 mb-4" strokeWidth={1.5} />
            <p className="text-primary-foreground font-display text-lg">Sample Title Report</p>
            <p className="text-primary-foreground/35 text-sm mt-1">Full Chain of Title — Residential</p>
          </div>
          <div className="p-5 bg-background">
            <div className="space-y-2">
              {["Property Address & Legal Description", "Chain of Title Summary (30 Years)", "Mortgage & Lien Schedule", "Exception Notes & Flags"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-muted-foreground text-xs">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - CTA */}
        <div>
          <p className="text-accent text-xs font-semibold tracking-label uppercase mb-4">See the Quality First</p>
          <h2 className="text-[1.75rem] md:text-[2.25rem] leading-[1.2] text-foreground mb-5">
            Don't Take My Word for It — Review a Real Report
          </h2>
          <p className="text-muted-foreground text-[0.9375rem] leading-[1.8] mb-8">
            I'll send you an actual sample title search report — not a marketing PDF. See exactly how I organize findings, flag risks, and present the chain of title. If the quality speaks for itself, we'll talk about your next order.
          </p>
          <a href="#contact" className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors">
            Request Your Free Sample
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default SampleWorkSection;
