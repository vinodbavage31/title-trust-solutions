import { Target, Clock, MapPin, Eye } from "lucide-react";

const reasons = [
  { icon: Target, title: "Precision You Can Underwrite", desc: "My reports meet the standards title companies and attorneys expect. Every finding is verified, every gap is flagged." },
  { icon: Clock, title: "Deadlines Met, Every Time", desc: "Most searches delivered in 24–48 hours. Rush orders available when your closing can't wait." },
  { icon: MapPin, title: "Deep US County Knowledge", desc: "Experienced across multiple counties and states. I know where to look and what recording quirks to watch for." },
  { icon: Eye, title: "Nothing Gets Past Me", desc: "Unreleased mortgages, judgment hits, broken chains — I catch the issues that automated tools miss." },
];

const WhyMeSection = () => (
  <section id="why-me" className="py-20 md:py-28 bg-navy">
    <div className="container">
      <div className="grid lg:grid-cols-[0.8fr_1fr] gap-12 lg:gap-20 items-start mb-14">
        <div>
          <p className="text-accent text-xs font-semibold tracking-label uppercase mb-4">Why Work With Me</p>
          <h2 className="text-[1.75rem] md:text-[2.25rem] leading-[1.2] text-primary-foreground">
            I Treat Every Search Like My Reputation Depends on It — Because It Does
          </h2>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {reasons.map((r, i) => (
          <div key={r.title} className="relative pl-5 border-l border-primary-foreground/10">
            <span className="text-accent/25 font-display text-2xl mb-3 block">0{i + 1}</span>
            <h3 className="font-display text-[1.0625rem] text-primary-foreground mb-2">{r.title}</h3>
            <p className="text-primary-foreground/40 text-sm leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyMeSection;
