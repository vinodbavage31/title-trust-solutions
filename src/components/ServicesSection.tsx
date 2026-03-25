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
  <section id="services" className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="grid lg:grid-cols-[0.8fr_1fr] gap-12 lg:gap-20 items-start mb-14">
        <div>
          <p className="text-accent text-xs font-semibold tracking-label uppercase mb-4">Services</p>
          <h2 className="text-[1.75rem] md:text-[2.25rem] leading-[1.2] text-foreground">
            Everything You Need to Close with Confidence
          </h2>
        </div>
        <p className="text-muted-foreground leading-[1.8] text-[0.9375rem] lg:pt-8">
          Each service is designed to give you the clarity you need — whether you're closing a single residential deal or running due diligence on a portfolio.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
        {services.map((s, i) => (
          <div key={s.title} className="bg-background p-7 md:p-10 group">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-accent/20 font-display text-3xl leading-none mt-[-2px]">0{i + 1}</span>
              <s.icon size={18} className="text-accent mt-1.5 shrink-0" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
