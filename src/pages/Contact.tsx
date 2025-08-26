import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactUs } from "@/components/contact/ContactUs";
import { ContactHero } from "@/components/contact/ContactHero";


const Contact = () => {

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <ContactHero />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Contact;