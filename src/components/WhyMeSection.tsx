import { Target, Clock, MapPin, Eye } from "lucide-react";

const reasons = [
  { icon: Target, title: "High Accuracy", desc: "Meticulously reviewed searches with complete, error-free results." },
  { icon: Clock, title: "Fast Turnaround", desc: "Efficient processes deliver quality results on tight timelines." },
  { icon: MapPin, title: "US Records Expertise", desc: "Deep familiarity with county clerks and state recording systems." },
  { icon: Eye, title: "Detail-Oriented", desc: "Every recorded document is examined for potential title impact." },
];

const WhyMeSection = () => (
  <section id="why-me" className="py-24 md:py-32 bg-navy">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-accent text-xs font-semibold tracking-label uppercase mb-4">Advantages</p>
        <h2 className="text-3xl md:text-[2.5rem] leading-tight text-primary-foreground">Why Choose Me</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {reasons.map((r, i) => (
          <div key={r.title} className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <span className="text-accent/30 font-display text-4xl mr-4">0{i + 1}</span>
              <r.icon size={20} className="text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg text-primary-foreground mb-2">{r.title}</h3>
            <p className="text-primary-foreground/45 text-sm leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyMeSection;
