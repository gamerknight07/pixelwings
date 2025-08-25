import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { CTA } from "@/components/home/CTA";
import { Story } from "@/components/about/Story";

const AboutUs = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <Story />
      <CTA />
      <Footer />
    </div>
  );
};

export default AboutUs;