import { CheckCircle } from "lucide-react";
import profileImg from "@/assets/naveen-profile.png";

const expertise = [
  "Current Owner Search",
  "Chain of Title Analysis",
  "Lien & Judgment Verification",
  "Detailed Property Analysis",
  "Tax & Assessment Review",
  "Legal Description Review",
];

const AboutSection = () => (
  <section id="about" className="py-24 md:py-36 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Column */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-2xl overflow-hidden shadow-soft border-4 border-background ring-1 ring-border">
              <img
                src={profileImg}
                alt="Naveen — Title Search Professional"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-5 -right-5 bg-navy text-primary-foreground rounded-xl px-5 py-3 shadow-hover">
              <p className="text-cyan font-display text-xl font-bold">1.6+</p>
              <p className="text-primary-foreground/60 text-xs">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div>
          <p className="text-accent text-xs font-semibold tracking-label uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-[2.5rem] leading-tight font-display font-bold text-foreground mb-6">
            Precision-Driven Title Search Professional You Can Count On
          </h2>

          <div className="space-y-4 mb-8">
            <p className="text-muted-foreground leading-relaxed">
              I'm a dedicated Title Search Processor with hands-on experience in property research and real estate documentation. I specialize in delivering accurate, clear, and well-structured title reports that help clients make confident property decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've worked directly with real estate professionals and title companies, ensuring every report meets the highest standards of accuracy and reliability. In title search work, even small errors can create big problems — that's why I focus on thorough research, attention to detail, and timely delivery.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm committed to building long-term professional relationships through consistent quality, clear communication, and reliable support for every project. If you need a skilled and trustworthy title search specialist, I'm ready to assist.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {expertise.map((item) => (
              <span key={item} className="text-foreground text-sm font-medium flex items-center gap-2">
                <CheckCircle size={15} className="text-accent shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
