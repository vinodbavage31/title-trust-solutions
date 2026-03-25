import { FileSearch, FileText, AlertTriangle, Users } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Title Search",
    desc: "Comprehensive 20–40 year chain of title research, tracing ownership history through county and state records to ensure a clear and marketable title.",
  },
  {
    icon: FileText,
    title: "Title Report Preparation",
    desc: "Professionally formatted title reports summarizing findings, exceptions, and relevant documents — ready for underwriting or client review.",
  },
  {
    icon: AlertTriangle,
    title: "Encumbrance / Lien Check",
    desc: "Identification of mortgages, judgments, tax liens, easements, and other encumbrances that may affect property transfer or value.",
  },
  {
    icon: Users,
    title: "Property Ownership Research",
    desc: "Verification of current and historical ownership, vesting details, and legal descriptions to support due diligence and investment decisions.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">What I Offer</p>
        <h2 className="text-3xl md:text-4xl text-foreground">Services</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group bg-background border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent/30 transition-all">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
              <s.icon size={22} className="text-primary-foreground" />
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
