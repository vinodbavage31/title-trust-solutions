import { FileText } from "lucide-react";

const SampleWorkSection = () => (
  <section id="sample-work" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-accent text-xs font-semibold tracking-label uppercase mb-4">Portfolio</p>
        <h2 className="text-3xl md:text-[2.5rem] leading-tight text-foreground mb-16">Sample Work</h2>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-navy py-16 flex flex-col items-center">
            <FileText size={36} className="text-accent/70 mb-5" strokeWidth={1.5} />
            <p className="text-primary-foreground font-display text-lg">Sample Title Report</p>
            <p className="text-primary-foreground/40 text-sm mt-1">Full Chain of Title — Residential Property</p>
          </div>

          <div className="p-6 bg-background text-center">
            <p className="text-muted-foreground text-sm mb-5">
              Sample report available on request.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2.5 rounded text-sm font-medium hover:bg-accent/90 transition-colors">
              Request Sample
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SampleWorkSection;
