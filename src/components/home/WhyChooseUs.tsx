import { FileText, Users, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const reasons = [
    {
      icon: FileText,
      title: "Creative, Custom Designs",
      description: "Unique web and app solutions crafted for your brand."
    },
    {
      icon: Users,
      title: "End-to-End Development",
      description: "From idea to launch, we handle it all."
    },
    {
      icon: Zap,
      title: "Rapid delivery",
      description: "Reliable service with no compromise on quality."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current) {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          } else {
            // Handle individual cards
            const cardIndex = cardRefs.current.indexOf(entry.target);
            if (cardIndex !== -1 && entry.isIntersecting) {
              setVisibleCards(prev => {
                if (!prev.includes(cardIndex)) {
                  return [...prev, cardIndex];
                }
                return prev;
              });
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-black text-white overflow-hidden"
      style={{ fontFamily: 'Sansation, sans-serif' }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
          }`}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2 sm:mb-4">
            Why choose us?
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
            We make web design simple, fast, and scalable<br />
            with a subscription model that puts you in control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`text-center transition-all duration-700 ease-out ${visibleCards.includes(index)
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
                }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className={`w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mx-auto mb-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-110 hover:rotate-3 ${visibleCards.includes(index) ? 'animate-pulse-subtle' : ''
                }`}>
                <reason.icon className="w-10 h-10 text-white/80" strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {reason.title}
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;