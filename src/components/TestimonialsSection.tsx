import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Fast, accurate, and incredibly thorough. This is the only title searcher I trust with my investment deals.",
    name: "Client Name",
    role: "Real Estate Investor",
    company: "Company Name",
  },
  {
    quote: "The reports are underwriter-ready every single time. We've cut our review time in half since we started working together.",
    name: "Client Name",
    role: "Title Officer",
    company: "Title Company",
  },
  {
    quote: "Catches things that other searchers miss. Saved us from a costly closing error on a commercial property.",
    name: "Client Name",
    role: "Closing Attorney",
    company: "Law Firm",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 md:py-32 bg-card">
    <div className="container">
      <div className="text-center max-w-xl mx-auto mb-16">
        <p className="text-accent text-xs font-semibold tracking-label uppercase mb-3">Client Feedback</p>
        <h2 className="text-3xl md:text-[2.5rem] leading-tight font-display font-bold text-foreground">
          What Clients Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-background rounded-xl p-7 md:p-8 shadow-card flex flex-col border border-border/60">
            <Quote size={20} className="text-accent/30 mb-4" />
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="text-accent fill-accent" />
              ))}
            </div>
            <blockquote className="text-foreground text-[0.9375rem] leading-relaxed mb-6 flex-1">
              "{t.quote}"
            </blockquote>
            <div className="border-t border-border pt-4">
              <p className="text-foreground text-sm font-semibold">{t.name}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{t.role}, {t.company}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-muted-foreground/50 text-xs mt-8 text-center italic">
        * Placeholder testimonials — will be replaced with real client feedback
      </p>
    </div>
  </section>
);

export default TestimonialsSection;
