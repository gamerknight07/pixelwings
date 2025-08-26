import { useEffect, useRef, useState } from 'react';

export const ContactHero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.2,
                rootMargin: '0px'
            }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <section
                ref={heroRef}
                className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
                style={{ fontFamily: 'Sansation, sans-serif' }}
            >
                {/* Blurred Background Image */}
                <div className="absolute inset-0">
                    <div
                        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                            }`}
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                            filter: 'blur(8px) brightness(0.7)',
                            transform: 'scale(1.1)' // Prevents blur edge artifacts
                        }}
                    />
                    {/* Optional dark overlay for better text readability */}
                    <div
                        className={`absolute inset-0 bg-black transition-opacity duration-1000 ease-out ${isVisible ? 'bg-opacity-30' : 'bg-opacity-50'
                            }`}
                    />
                </div>

                <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
                    {/* Badge */}
                    <div
                        className={`inline-flex items-center gap-2 bg-gray-900/80 border border-gray-700 rounded-full px-4 py-2 mb-12 backdrop-blur-sm transition-all duration-700 ease-out ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-8'
                            }`}
                        style={{
                            transitionDelay: isVisible ? '200ms' : '0ms'
                        }}
                    >
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-gray-300 text-sm font-medium">Think Smart. Build Fast</span>
                    </div>

                    {/* Main heading */}
                    <h1
                        className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight transition-all duration-800 ease-out ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-12'
                            }`}
                        style={{
                            transitionDelay: isVisible ? '400ms' : '0ms'
                        }}
                    >
                        Contact Us
                    </h1>

                    {/* Subtitle */}
                    <p
                        className={`text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-800 ease-out ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-12'
                            }`}
                        style={{
                            transitionDelay: isVisible ? '600ms' : '0ms'
                        }}
                    >
                        We'd love to hear from you! Reach out for any questions,
                        <br className="hidden md:block" />
                        inquiries, or to start working together on your next project.
                    </p>
                </div>

                {/* Subtle bottom gradient */}
                <div
                    className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        transitionDelay: isVisible ? '800ms' : '0ms'
                    }}
                />
            </section>
        </>
    );
};