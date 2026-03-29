import { Target, Clock, MapPin, Eye } from "lucide-react";

const reasons = [
  { icon: Target, title: "Precision You Can Underwrite", desc: "My reports meet the standards title companies and attorneys expect. Every finding is verified, every gap is flagged." },
  { icon: Clock, title: "Deadlines Met, Every Time", desc: "Most searches delivered in 24–48 hours. Rush orders available when your closing can't wait." },
  { icon: MapPin, title: "Deep US County Knowledge", desc: "Experienced across multiple counties and states. I know where to look and what recording quirks to watch for." },
  { icon: Eye, title: "Nothing Gets Past Me", desc: "Unreleased mortgages, judgment hits, broken chains — I catch the issues that automated tools miss." },
];

const WhyMeSection = () => (
  <section id="why-me" className="py-24 md:py-32 bg-navy relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />

    <div className="container relative z-10">
      <div className="text-center max-w-xl mx-auto mb-16">
        <p className="text-cyan text-xs font-semibold tracking-label uppercase mb-3">Why Work With Me</p>
        <h2 className="text-3xl md:text-[2.5rem] leading-tight font-display font-bold text-primary-foreground">
          I Treat Every Search Like My Reputation Depends on It
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reasons.map((r) => (
          <div key={r.title} className="bg-primary-foreground/5 border border-primary-foreground/8 rounded-xl p-6 hover:bg-primary-foreground/8 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-4">
              <r.icon size={18} className="text-cyan" strokeWidth={1.8} />
            </div>
            <h3 className="font-display text-base font-bold text-primary-foreground mb-2">{r.title}</h3>
            <p className="text-primary-foreground/45 text-sm leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyMeSection;
