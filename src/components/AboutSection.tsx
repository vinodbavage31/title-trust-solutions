import { Award, Search, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: Search, label: "Chain of Title Expert" },
  { icon: ShieldCheck, label: "Ownership Verification" },
  { icon: Award, label: "Encumbrance Analysis" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">About Me</p>
        <h2 className="text-3xl md:text-4xl text-foreground mb-6">
          Dedicated Title Search Analyst
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          With years of hands-on experience analyzing US property records, I specialize in delivering thorough and accurate title search reports. My work spans full chain-of-title research, ownership verification, and encumbrance checks — giving real estate companies, title agencies, and investors the clarity they need to move forward with confidence. Every report I produce reflects a commitment to precision, attention to detail, and deep knowledge of county and state recording systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {highlights.map((h) => (
            <div key={h.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <h.icon size={20} className="text-accent" />
              </div>
              <span className="text-foreground font-medium text-sm">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
