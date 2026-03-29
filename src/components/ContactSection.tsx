import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Linkedin, ArrowRight, Zap } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container">
        {/* CTA banner */}
        <div className="relative bg-navy rounded-2xl p-10 md:p-14 mb-20 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/5 border border-primary-foreground/10 rounded-full px-4 py-1.5 mb-6">
              <Zap size={14} className="text-cyan" />
              <span className="text-primary-foreground/60 text-xs font-medium">Quotes returned within hours</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/50 text-sm md:text-base max-w-lg mx-auto mb-8">
              Send me your property details and I'll have a quote back to you within hours. First order? Request a free sample report to see the quality before you commit.
            </p>
            <a href="#contact-form" className="group inline-flex items-center justify-center gap-2.5 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg text-sm font-bold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20">
              Request Free Sample
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div id="contact-form" className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 max-w-4xl mx-auto">
          {/* Form */}
          <div>
            <p className="text-accent text-xs font-semibold tracking-label uppercase mb-3">Get in Touch</p>
            <h2 className="text-3xl md:text-[2.5rem] leading-tight font-display font-bold text-foreground mb-8">
              Send Me Your Project Details
            </h2>

            {submitted ? (
              <div className="bg-card border border-accent/20 rounded-xl p-10 text-center shadow-card">
                <p className="text-foreground font-display text-xl font-bold mb-2">Message Received</p>
                <p className="text-muted-foreground text-sm">I'll review your request and respond within a few hours. If urgent, reach me directly on WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-foreground text-xs font-semibold tracking-label uppercase mb-2">Name</label>
                  <input required type="text" placeholder="Your full name" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                </div>
                <div>
                  <label className="block text-foreground text-xs font-semibold tracking-label uppercase mb-2">Email</label>
                  <input required type="email" placeholder="you@company.com" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                </div>
                <div>
                  <label className="block text-foreground text-xs font-semibold tracking-label uppercase mb-2">Message</label>
                  <textarea required rows={4} placeholder="Property address, county, type of search needed..." className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none" />
                </div>
                <button type="submit" className="group bg-accent text-accent-foreground px-7 py-3.5 rounded-lg text-sm font-bold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20 inline-flex items-center gap-2.5">
                  Send Message
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-end">
            <div className="space-y-5">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Need a quick quote? Drop me a message on WhatsApp with the property address and search type — I'll respond within the hour during business days.
              </p>

              <div className="space-y-3 pt-3">
                <a href="mailto:hello@titlesearchpro.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors text-sm group">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail size={15} className="text-accent" />
                  </div>
                  hello@titlesearchpro.com
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors text-sm group">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MessageCircle size={15} className="text-accent" />
                  </div>
                  WhatsApp — Quick Response
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors text-sm group">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Linkedin size={15} className="text-accent" />
                  </div>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
