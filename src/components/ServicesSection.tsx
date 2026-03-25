import { FileSearch, FileText, AlertTriangle, Users } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Title Search",
    desc: "Comprehensive 20–40 year chain of title research, tracing ownership history through county and state records.",
  },
  {
    icon: FileText,
    title: "Title Report Preparation",
    desc: "Professionally formatted reports summarizing findings, exceptions, and relevant documents for underwriting review.",
  },
  {
    icon: AlertTriangle,
    title: "Encumbrance & Lien Check",
    desc: "Identification of mortgages, judgments, tax liens, easements, and other encumbrances affecting property transfer.",
  },
  {
    icon: Users,
    title: "Ownership Research",
    desc: "Verification of current and historical ownership, vesting details, and legal descriptions for due diligence.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32 bg-card">
    <div className="container">
      <div className="max-w-md mb-16">
        <p className="text-accent text-xs font-semibold tracking-label uppercase mb-4">Services</p>
        <h2 className="text-3xl md:text-[2.5rem] leading-tight text-foreground">
          What I Offer
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
        {services.map((s) => (
          <div key={s.title} className="bg-background p-8 md:p-10">
            <s.icon size={20} className="text-accent mb-5" strokeWidth={1.5} />
            <h3 className="font-display text-xl text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
