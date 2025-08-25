import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { LogoBanner } from "@/components/home/LogoBanner";
import { Pricing } from "@/components/home/Pricing";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LogoBanner />
      <Features />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
