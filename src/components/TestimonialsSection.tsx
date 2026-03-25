import { Star } from "lucide-react";

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
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="max-w-lg mb-14">
        <p className="text-accent text-xs font-semibold tracking-label uppercase mb-4">Client Feedback</p>
        <h2 className="text-[1.75rem] md:text-[2.25rem] leading-[1.2] text-foreground">
          What Clients Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="border border-border rounded-lg p-7 md:p-8 flex flex-col">
            <div className="flex gap-0.5 mb-5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="text-accent fill-accent" />
              ))}
            </div>
            <blockquote className="text-foreground text-[0.9375rem] leading-[1.7] mb-6 flex-1">
              "{t.quote}"
            </blockquote>
            <div className="border-t border-border pt-5">
              <p className="text-foreground text-sm font-medium">{t.name}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{t.role}, {t.company}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-muted-foreground/60 text-xs mt-8 text-center italic">
        * Placeholder testimonials — will be replaced with real client feedback
      </p>
    </div>
  </section>
);

export default TestimonialsSection;
