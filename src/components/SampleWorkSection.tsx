import { FileText, Download } from "lucide-react";

const SampleWorkSection = () => (
  <section id="sample-work" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">Portfolio</p>
        <h2 className="text-3xl md:text-4xl text-foreground">Sample Work</h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          {/* Mock report preview */}
          <div className="bg-navy p-8 flex flex-col items-center justify-center min-h-[260px]">
            <FileText size={48} className="text-accent mb-4" />
            <p className="text-primary-foreground font-display text-xl mb-1">Sample Title Report</p>
            <p className="text-primary-foreground/60 text-sm">Full Chain of Title — Residential Property</p>
          </div>

          <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              Full sample report available on request. Contact me to receive a detailed example of my work.
            </p>
            <a
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
              Request Sample
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SampleWorkSection;
