import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/home/CTA";
import { ServicePages } from "@/components/Services/ServicePages";
import { ServicesHero } from "@/components/Services/ServicesHero";


const ServicesDetails = () => {

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <ServicesHero />
            <ServicePages />
            <CTA />
            <Footer />
        </div>
    );
};

export default ServicesDetails;