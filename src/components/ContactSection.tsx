import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">Let's Connect</p>
          <h2 className="text-3xl md:text-4xl text-foreground">Contact Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
                <p className="text-foreground font-medium text-lg mb-2">Thank you!</p>
                <p className="text-muted-foreground text-sm">Your message has been received. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-foreground text-sm font-medium mb-1.5">Name</label>
                  <input required type="text" placeholder="Your full name" className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" />
                </div>
                <div>
                  <label className="block text-foreground text-sm font-medium mb-1.5">Email</label>
                  <input required type="email" placeholder="you@company.com" className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" />
                </div>
                <div>
                  <label className="block text-foreground text-sm font-medium mb-1.5">Message</label>
                  <textarea required rows={5} placeholder="Tell me about your project..." className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none" />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center gap-6">
            <p className="text-muted-foreground leading-relaxed">
              Whether you need a one-time title search or ongoing support for your pipeline, I'm here to help. Reach out through the form or connect with me directly.
            </p>

            <div className="space-y-4">
              <a href="mailto:hello@titlesearchpro.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <Mail size={18} className="text-accent" />
                <span className="text-sm">hello@titlesearchpro.com</span>
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <MessageCircle size={18} className="text-accent" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <Linkedin size={18} className="text-accent" />
                <span className="text-sm">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
