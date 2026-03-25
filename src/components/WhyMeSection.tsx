import { Target, Clock, MapPin, Eye } from "lucide-react";

const reasons = [
  { icon: Target, title: "High Accuracy", desc: "Every search is meticulously reviewed to ensure complete and error-free results." },
  { icon: Clock, title: "Fast Turnaround", desc: "Efficient processes mean you get results quickly — without sacrificing quality." },
  { icon: MapPin, title: "US Title Records Expertise", desc: "Deep familiarity with county clerks, recorders' offices, and state-level property databases." },
  { icon: Eye, title: "Detail-Oriented Analysis", desc: "No stone left unturned — I examine every recorded document that could impact the title." },
];

const WhyMeSection = () => (
  <section id="why-me" className="py-20 md:py-28 bg-navy">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">Advantages</p>
        <h2 className="text-3xl md:text-4xl text-primary-foreground">Why Choose Me</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r) => (
          <div key={r.title} className="text-center">
            <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5">
              <r.icon size={24} className="text-accent" />
            </div>
            <h3 className="font-display text-lg text-primary-foreground mb-2">{r.title}</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyMeSection;
