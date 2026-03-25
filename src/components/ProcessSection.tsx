import { Search, FileCheck, ShieldCheck, Send, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Order Received & Scope Defined",
    desc: "You send the property details. I confirm the scope — full search, current owner, update, or specific date range — and set the timeline.",
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
    desc: "You receive a clean, organized report with a full chain summary, exception notes, and supporting documents — ready for underwriting or review.",
  },
  {
    icon: CheckCircle,
    title: "Revisions & Support",
    desc: "Questions after delivery? I'm available to clarify findings, pull additional documents, or update the search as needed. Your deal doesn't wait.",
  },
];

const ProcessSection = () => (
  <section id="process" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="max-w-lg mb-14 md:mb-16">
        <p className="text-accent text-xs font-semibold tracking-label uppercase mb-4">How It Works</p>
        <h2 className="text-[1.75rem] md:text-[2.25rem] leading-[1.2] text-foreground mb-4">
          From Order to Closing — Here's Exactly What Happens
        </h2>
        <p className="text-muted-foreground text-[0.9375rem] leading-[1.7]">
          No black box. You'll know where your search stands at every step.
        </p>
      </div>

      <div className="relative">
        {/* Vertical line connector - desktop only */}
        <div className="hidden md:block absolute left-[23px] top-8 bottom-8 w-px bg-border" />

        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-1 md:gap-0">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex gap-5 md:gap-8 md:pb-10 last:pb-0">
              {/* Step indicator */}
              <div className="shrink-0 relative z-10">
                <div className="w-[46px] h-[46px] rounded-full bg-card border border-border flex items-center justify-center">
                  <step.icon size={18} className="text-accent" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="pt-2 pb-2">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-accent/40 text-xs font-semibold tracking-label uppercase">Step {i + 1}</span>
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
