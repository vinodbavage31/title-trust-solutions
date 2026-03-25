import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import SampleWorkSection from "@/components/SampleWorkSection";
import WhyMeSection from "@/components/WhyMeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <TrustBar />
    <AboutSection />
    <ServicesSection />
    <ProcessSection />
    <SampleWorkSection />
    <WhyMeSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
