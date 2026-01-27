import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BusinessSection from "@/components/BusinessSection";
import CredentialsSection from "@/components/CredentialsSection";
import DispatchSection from "@/components/DispatchSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BusinessSection />
      <CredentialsSection />
      <DispatchSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
