import { Code, Smartphone, Monitor, TrendingUp, TabletSmartphone, Figma, Megaphone } from "lucide-react";
import webDevImage from "@/assets/web-development.jpg";
import mobileDevImage from "@/assets/mobile-development.jpg";
import digitalMarketing from "@/assets/digitalMarketing.jpg";
import uiUxDesign from "@/assets/uiUxDesign.jpg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesHero } from "@/components/Services/ServicesHero";
import { ServiceCard } from "@/components/Services/ServiceCard";
import { ServicesCTA } from "@/components/Services/ServicesCTA";
import { ServicesItem } from "@/components/Services/ServicesItem";
import { LogoBanner } from "@/components/home/LogoBanner";

const Services = () => {
  const service = [
    {
      id: "web-development",
      name: "Web Application Development",
      icon: Code,
      image: webDevImage,
      price: "Starting from ₹29,999",
      shortDesc: "Custom web applications built with modern technologies",
      fullDescription: "Transform your business with cutting-edge web applications that deliver exceptional user experiences. Our team specializes in creating scalable, secure, and performance-optimized web solutions using the latest technologies including React, Next.js, Node.js, and cloud infrastructure.",
      features: [
        "Responsive Design & Mobile Optimization",
        "Custom API Development & Integration",
        "Database Design & Management",
        "Performance Optimization & SEO",
        "Security Implementation & SSL",
        "Cloud Deployment & Hosting Setup",
        "Ongoing Maintenance & Support",
        "Progressive Web App (PWA) Features"
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "AWS", "TypeScript"],
      deliveryTime: "4-8 weeks",
      revisions: "Unlimited"
    },
    {
      id: "ui-ux-design",
      name: "UI/UX Design",
      icon: Monitor, // or use Palette, Figma icon based on your icon library
      image: uiUxDesign,
      price: "Starting from ₹19,999",
      shortDesc: "User-centered design solutions that drive engagement",
      fullDescription: "Create intuitive and engaging user experiences that delight your customers and drive business results. Our UI/UX design team combines research, strategy, and creativity to deliver designs that are not only beautiful but also functional and user-friendly across all devices and platforms.",
      features: [
        "User Research & Persona Development",
        "Information Architecture & Wireframing",
        "Interactive Prototyping & Testing",
        "Visual Design & Style Systems",
        "Mobile-First Responsive Design",
        "Accessibility & Usability Testing",
        "Design System Creation",
        "Handoff Documentation for Developers"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Miro"],
      deliveryTime: "2-6 weeks",
      revisions: "Unlimited design iterations"
    },
    {
      id: "mobile-development",
      name: "Mobile App Development",
      icon: Smartphone,
      image: mobileDevImage,
      price: "Starting from ₹79,999",
      shortDesc: "Native and cross-platform mobile applications",
      fullDescription: "Create powerful mobile applications that engage users across iOS and Android platforms. We develop native and cross-platform solutions using React Native, Flutter, and native technologies to ensure optimal performance and user experience.",
      features: [
        "Native iOS & Android Development",
        "Cross-Platform Solutions",
        "UI/UX Design & Prototyping",
        "App Store Optimization",
        "Push Notifications & Analytics",
        "Backend Integration & APIs",
        "App Store Submission Support",
        "Post-Launch Updates & Maintenance"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store Connect"],
      deliveryTime: "6-12 weeks",
      revisions: "5 major revisions"
    },
    {
      id: "digital-marketing",
      name: "Digital Marketing",
      icon: TrendingUp,
      image: digitalMarketing,
      price: "Starting from ₹15,999",
      shortDesc: "Data-driven marketing strategies that boost your online presence",
      fullDescription: "Accelerate your business growth with comprehensive digital marketing solutions that drive real results. Our expert team combines strategic planning, creative content, and advanced analytics to maximize your ROI across all digital channels and connect you with your target audience.",
      features: [
        "Social Media Management & Strategy",
        "Search Engine Optimization (SEO)",
        "Google Ads & PPC Campaign Management",
        "Content Marketing & Copywriting",
        "Email Marketing Automation",
        "Analytics & Performance Tracking",
        "Brand Reputation Management",
        "Lead Generation & Conversion Optimization"
      ],
      technologies: ["Google Analytics", "Google Ads", "Facebook Business", "Mailchimp", "SEMrush", "Hootsuite"],
      deliveryTime: "2-4 weeks setup + ongoing",
      revisions: "Strategy refinements included"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <ServicesHero />
        <ServicesItem />

        {/* Services Grid */}
        <section className="bg-background">
          <div className="container mx-auto px-6">
            <div className="grid gap-8">
              {service.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <LogoBanner />
        <ServicesCTA />
        <Footer />
      </div>
    </>
  );
};

export default Services;