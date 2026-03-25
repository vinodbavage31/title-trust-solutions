import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Linkedin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container">
        {/* CTA banner */}
        <div className="bg-navy rounded-lg p-8 md:p-12 mb-16 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-primary-foreground mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/50 text-sm md:text-base max-w-lg mx-auto mb-6">
            Send me your property details and I'll have a quote back to you within hours — not days. First order? Request a free sample report to see the quality before you commit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact-form" className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded text-sm font-semibold hover:bg-accent/90 transition-colors">
              Request Free Sample
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div id="contact-form" className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 max-w-4xl">
          {/* Form */}
          <div>
            <p className="text-accent text-xs font-semibold tracking-label uppercase mb-4">Get in Touch</p>
            <h2 className="text-[1.75rem] md:text-[2.25rem] leading-[1.2] text-foreground mb-8">
              Send Me Your Project Details
            </h2>

            {submitted ? (
              <div className="border border-accent/20 rounded-lg p-10 text-center">
                <p className="text-foreground font-display text-xl mb-2">Message Received</p>
                <p className="text-muted-foreground text-sm">I'll review your request and respond within a few hours. If urgent, reach me directly on WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-foreground text-xs font-semibold tracking-label uppercase mb-2">Name</label>
                  <input required type="text" placeholder="Your full name" className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-foreground text-xs font-semibold tracking-label uppercase mb-2">Email</label>
                  <input required type="email" placeholder="you@company.com" className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-foreground text-xs font-semibold tracking-label uppercase mb-2">Message</label>
                  <textarea required rows={4} placeholder="Property address, county, type of search needed..." className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none" />
                </div>
                <button type="submit" className="group bg-accent text-accent-foreground px-7 py-3.5 rounded text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors inline-flex items-center gap-2">
                  Send Message
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
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
                <a href="mailto:hello@titlesearchpro.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors text-sm">
                  <Mail size={15} className="text-accent shrink-0" />
                  hello@titlesearchpro.com
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors text-sm">
                  <MessageCircle size={15} className="text-accent shrink-0" />
                  WhatsApp — Quick Response
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors text-sm">
                  <Linkedin size={15} className="text-accent shrink-0" />
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
