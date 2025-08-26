import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const ServicesHero = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio > 0.3) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold: [0, 0.3, 0.7, 1],
                rootMargin: '-10% 0px -10% 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
                style={{ fontFamily: 'Sansation, sans-serif' }}
            >
                {/* Blurred Background Image */}
                <div className={`absolute inset-0 transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 scale-100'
                    : 'opacity-70 scale-110'
                    }`}>
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                            filter: 'blur(8px) brightness(0.7)',
                            transform: 'scale(1.1)' // Prevents blur edge artifacts
                        }}
                    />
                    {/* Optional dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black bg-opacity-30" />
                </div>

                <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-2 bg-gray-900/80 border border-gray-700 rounded-full px-4 py-2 mb-12 backdrop-blur-sm transition-all duration-700 ease-out ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-8'
                        }`}>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-gray-300 text-sm font-medium">Professional Services</span>
                    </div>

                    {/* Main heading */}
                    <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight transition-all duration-2000 ease-out delay-900 ${isVisible
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-12 scale-95'
                        }`}>
                        Our Services
                    </h1>

                    {/* Subtitle */}
                    <p className={`text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-2000 ease-out delay-900 ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                        }`}>
                        Comprehensive digital solutions tailored to transform your business and
                        <br className="hidden md:block" />
                        accelerate growth through innovative technology and creative expertise.
                    </p>

                    {/* CTA section */}
                    <div className={`flex flex-col md:flex-row items-center justify-center gap-8 transition-all duration-2100 ease-out delay-900 ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-12'
                        }`}>
                        {/* CTA Button */}
                        <Link to="/contact">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-white shadow-glow transition-all duration-300 hover:scale-105"
                            >
                                Book your free intro call
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Subtle bottom gradient */}
                <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-800 ${isVisible ? 'opacity-100' : 'opacity-60'
                    }`} />
            </section>
        </>
    );
};