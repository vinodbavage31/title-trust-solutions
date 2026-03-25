import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Linkedin } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div className="container">
        <div className="max-w-md mb-16">
          <p className="text-accent text-xs font-semibold tracking-label uppercase mb-4">Contact</p>
          <h2 className="text-3xl md:text-[2.5rem] leading-tight text-foreground">
            Let's Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 max-w-4xl">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="border border-accent/20 rounded-lg p-10 text-center">
                <p className="text-foreground font-display text-xl mb-2">Thank you</p>
                <p className="text-muted-foreground text-sm">Your message has been received. I'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-foreground text-xs font-semibold tracking-label uppercase mb-2">Name</label>
                  <input required type="text" placeholder="Your full name" className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-foreground text-xs font-semibold tracking-label uppercase mb-2">Email</label>
                  <input required type="email" placeholder="you@company.com" className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-foreground text-xs font-semibold tracking-label uppercase mb-2">Message</label>
                  <textarea required rows={5} placeholder="Tell me about your project..." className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors resize-none" />
                </div>
                <button type="submit" className="bg-accent text-accent-foreground px-7 py-3 rounded text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-end gap-8">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Whether you need a one-time title search or ongoing support for your pipeline, reach out through the form or connect directly.
            </p>

            <div className="space-y-4 pt-2">
              <a href="mailto:hello@titlesearchpro.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors text-sm">
                <Mail size={16} className="text-accent" />
                hello@titlesearchpro.com
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors text-sm">
                <MessageCircle size={16} className="text-accent" />
                WhatsApp
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors text-sm">
                <Linkedin size={16} className="text-accent" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
