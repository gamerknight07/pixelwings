import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";

export const Hero = () => {
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
        {/* Geometric background pattern */}
        <div
          className={`absolute inset-0 opacity-50 transition-all duration-1200 ease-out ${isVisible ? 'scale-100 opacity-50' : 'scale-110 opacity-0'
            }`}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Diagonal lines pattern */}
        <div
          className={`absolute inset-0 opacity-20 transition-all duration-1200 ease-out ${isVisible ? 'scale-100 opacity-20' : 'scale-105 opacity-0'
            }`}
          style={{
            transitionDelay: isVisible ? '100ms' : '0ms'
          }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `
                            repeating-linear-gradient(
                                45deg,
                                transparent,
                                transparent 100px,
                                rgba(255,255,255,0.05) 100px,
                                rgba(255,255,255,0.05) 101px
                            )
                        `
          }} />
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
            Building Your Brand
            <br />
            <span
              className={`text-gray-400 transition-all duration-800 ease-out ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
              style={{
                transitionDelay: isVisible ? '600ms' : '0ms'
              }}
            >
              for the Digital Future
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-800 ease-out ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
              }`}
            style={{
              transitionDelay: isVisible ? '800ms' : '0ms'
            }}
          >
            We craft stunning websites and powerful
            <br className="hidden md:block" />
            mobile apps that <span className="text-white font-medium">bring your ideas to life.</span>
          </p>

          {/* CTA section */}
          <div
            className={`flex flex-col md:flex-row items-center justify-center gap-8 transition-all duration-700 ease-out ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
              }`}
            style={{
              transitionDelay: isVisible ? '1000ms' : '0ms'
            }}
          >
            {/* CTA Button */}
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 hover:scale-105"
              >
                Book your free intro call
              </Button>
            </Link>
          </div>
        </div>

        {/* Subtle bottom gradient */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            transitionDelay: isVisible ? '1200ms' : '0ms'
          }}
        />
      </section>
    </>
  );
};