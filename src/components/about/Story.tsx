import { useEffect, useRef, useState } from 'react';
import About from "@/assets/About.png"

export const Story = () => {
    const [isVisible, setIsVisible] = useState(false);
    const storyRef = useRef(null);

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

        if (storyRef.current) {
            observer.observe(storyRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section
            ref={storyRef}
            className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30 overflow-hidden"
            style={{ fontFamily: 'Sansation, sans-serif' }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header with animated gradient text */}
                    <div
                        className={`text-center mb-12 sm:mb-16 transition-all duration-800 ease-out ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-8'
                            }`}
                        style={{
                            transitionDelay: isVisible ? '200ms' : '0ms'
                        }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-white from-primary via-accent to-primary bg-clip-text text-transparent">
                            Our Story
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-text-subtitle max-w-2xl mx-auto px-4">
                            Building digital excellence, one project at a time
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        {/* Content Section with modern styling */}
                        <div
                            className={`space-y-4 sm:space-y-6 order-2 lg:order-1 transition-all duration-800 ease-out ${isVisible
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-12'
                                }`}
                            style={{
                                transitionDelay: isVisible ? '400ms' : '0ms'
                            }}
                        >
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6 relative">
                                From Vision to Reality
                                <div className="absolute -bottom-2 left-0 w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                            </h3>

                            <div className="space-y-4 sm:space-y-6">
                                <div
                                    className={`group transition-all duration-600 ease-out ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4'
                                        }`}
                                    style={{
                                        transitionDelay: isVisible ? '600ms' : '0ms'
                                    }}
                                >
                                    <p className="text-sm sm:text-base lg:text-lg text-text-subtitle leading-relaxed transition-all duration-300 group-hover:text-foreground/80">
                                        Founded in 2019, PixelWings Solutions emerged from a simple belief:
                                        every business deserves a digital presence that truly represents their vision and drives results.
                                    </p>
                                </div>

                                <div
                                    className={`group transition-all duration-600 ease-out ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4'
                                        }`}
                                    style={{
                                        transitionDelay: isVisible ? '700ms' : '0ms'
                                    }}
                                >
                                    <p className="text-sm sm:text-base lg:text-lg text-text-subtitle leading-relaxed transition-all duration-300 group-hover:text-foreground/80">
                                        What started as a small team of passionate creatives has grown into a full-service
                                        digital agency trusted by <span className="font-semibold text-primary">300+</span> founders and established businesses worldwide.
                                    </p>
                                </div>

                                <div
                                    className={`group transition-all duration-600 ease-out ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4'
                                        }`}
                                    style={{
                                        transitionDelay: isVisible ? '800ms' : '0ms'
                                    }}
                                >
                                    <p className="text-sm sm:text-base lg:text-lg text-text-subtitle leading-relaxed transition-all duration-300 group-hover:text-foreground/80">
                                        Today, we continue to push boundaries, embrace new technologies, and deliver
                                        solutions that not only meet but exceed our clients' expectations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3D Image Container */}
                        <div
                            className={`relative group order-1 lg:order-2 max-w-md mx-auto lg:max-w-none transition-all duration-800 ease-out ${isVisible
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-12'
                                }`}
                            style={{
                                transitionDelay: isVisible ? '500ms' : '0ms'
                            }}
                        >
                            {/* Background layers for depth - hidden on mobile for performance */}
                            <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl sm:rounded-3xl transform rotate-2 sm:rotate-3 transition-transform duration-500 group-hover:rotate-3 sm:group-hover:rotate-6"></div>
                            <div className="hidden sm:block absolute inset-0 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-2xl sm:rounded-3xl transform -rotate-1 sm:-rotate-2 transition-transform duration-500 group-hover:-rotate-2 sm:group-hover:-rotate-3"></div>

                            {/* Main image container with 3D effects */}
                            <div className="relative w-full aspect-square sm:aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2">
                                {/* Glassmorphism overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 sm:from-white/10 to-transparent backdrop-blur-sm z-10"></div>

                                <div className="w-full h-full bg-gray from-primary/15 via-accent/15 to-primary/25 sm:from-primary/20 sm:via-accent/20 sm:to-primary/30 flex items-center justify-center relative">
                                    {/* Image */}
                                    <div className="w-full h-full z-20 relative flex items-center justify-center p-4 sm:p-6">
                                        <img
                                            src={About}
                                            alt="About PixelWings Solutions"
                                            className="w-full h-full object-contain max-w-full max-h-full
                                                rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements - smaller on mobile */}
                            <div
                                className={`absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 bg-white from-accent to-primary rounded-full opacity-40 sm:opacity-60 animate-bounce delay-300 transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-0'
                                    }`}
                                style={{
                                    transitionDelay: isVisible ? '900ms' : '0ms'
                                }}
                            ></div>
                            <div
                                className={`absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-4 sm:w-6 h-4 sm:h-6 bg-white from-primary to-accent rounded-full opacity-30 sm:opacity-40 animate-pulse delay-700 transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-0'
                                    }`}
                                style={{
                                    transitionDelay: isVisible ? '1000ms' : '0ms'
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};