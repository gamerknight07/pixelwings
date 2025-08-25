import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactUs } from "@/components/contact/ContactUs";


const Contact = () => {

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Contact;