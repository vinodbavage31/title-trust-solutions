import { FileSearch, FileText, AlertTriangle, Users } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Full Title Search",
    desc: "20–40 year chain of title tracing every conveyance, mortgage, and release. I don't stop until the chain is complete and clean.",
  },
  {
    icon: FileText,
    title: "Title Report Preparation",
    desc: "Underwriter-ready reports with clear summaries, exception schedules, and supporting documents. No ambiguity, no missing pieces.",
  },
  {
    icon: AlertTriangle,
    title: "Lien & Encumbrance Search",
    desc: "Thorough review of judgments, tax liens, HOA obligations, easements, and anything that could cloud your title or delay closing.",
  },
  {
    icon: Users,
    title: "Ownership & Vesting Verification",
    desc: "Current owner confirmation, vesting type analysis, and historical ownership review — critical for investor due diligence.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="text-center max-w-xl mx-auto mb-16">
        <p className="text-accent text-xs font-semibold tracking-label uppercase mb-3">Services</p>
        <h2 className="text-3xl md:text-[2.5rem] leading-tight font-display font-bold text-foreground mb-4">
          Everything You Need to Close with Confidence
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Each service is designed to give you the clarity you need — whether you're closing a single residential deal or running due diligence on a portfolio.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <div key={s.title} className="bg-card rounded-xl p-7 md:p-9 shadow-card hover:shadow-card-hover transition-shadow group">
            <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
              <s.icon size={20} className="text-accent" strokeWidth={1.8} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2.5">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
