import { Search, FileCheck, ShieldCheck, Send, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Order Received & Scope Defined",
    desc: "You send the property details. I confirm the scope — full search, current owner, update, or date range — and set the timeline.",
  },
  {
    icon: FileCheck,
    title: "County Records Research",
    desc: "I access county recorder, clerk, and assessor records to trace every conveyance, mortgage, lien, and recorded instrument in the chain.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Analysis & Verification",
    desc: "Every document is cross-checked. I identify gaps, unreleased mortgages, judgment hits, tax delinquencies, and vesting discrepancies.",
  },
  {
    icon: Send,
    title: "Report Delivered",
    desc: "You receive a clean, organized report with a full chain summary, exception notes, and supporting documents — ready for underwriting.",
  },
  {
    icon: CheckCircle,
    title: "Revisions & Support",
    desc: "Questions after delivery? I'm available to clarify findings, pull additional documents, or update the search. Your deal doesn't wait.",
  },
];

const ProcessSection = () => (
  <section id="process" className="py-24 md:py-32 bg-card">
    <div className="container">
      <div className="text-center max-w-xl mx-auto mb-16">
        <p className="text-accent text-xs font-semibold tracking-label uppercase mb-3">How It Works</p>
        <h2 className="text-3xl md:text-[2.5rem] leading-tight font-display font-bold text-foreground mb-4">
          From Order to Closing — Here's Exactly What Happens
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          No black box. You'll know where your search stands at every step.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[22px] top-[48px] bottom-0 w-px bg-border" />
              )}

              <div className="shrink-0 relative z-10">
                <div className="w-[44px] h-[44px] rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <step.icon size={18} className="text-accent" strokeWidth={1.8} />
                </div>
              </div>

              <div className="pt-1">
                <p className="text-accent text-xs font-semibold tracking-label uppercase mb-1.5">Step {i + 1}</p>
                <h3 className="font-display text-base font-bold text-foreground mb-1.5">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
