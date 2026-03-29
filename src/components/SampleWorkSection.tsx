import { FileText, ArrowRight, CheckCircle2 } from "lucide-react";

const items = [
  "Property Address & Legal Description",
  "Chain of Title Summary (30 Years)",
  "Mortgage & Lien Schedule",
  "Exception Notes & Risk Flags",
];

const SampleWorkSection = () => (
  <section id="sample-work" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Preview mock */}
        <div className="bg-card rounded-xl shadow-card overflow-hidden border border-border/60">
          <div className="bg-navy py-16 flex flex-col items-center">
            <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4">
              <FileText size={28} className="text-cyan" strokeWidth={1.5} />
            </div>
            <p className="text-primary-foreground font-display text-lg font-bold">Sample Title Report</p>
            <p className="text-primary-foreground/40 text-sm mt-1">Full Chain of Title — Residential</p>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 size={15} className="text-accent shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div>
          <p className="text-accent text-xs font-semibold tracking-label uppercase mb-3">See the Quality First</p>
          <h2 className="text-3xl md:text-[2.5rem] leading-tight font-display font-bold text-foreground mb-5">
            Don't Take My Word for It — Review a Real Report
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'll send you an actual sample title search report — not a marketing PDF. See exactly how I organize findings, flag risks, and present the chain of title. If the quality speaks for itself, we'll talk about your next order.
          </p>
          <a href="#contact" className="group inline-flex items-center gap-2.5 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg text-sm font-bold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20">
            Request Your Free Sample
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default SampleWorkSection;
