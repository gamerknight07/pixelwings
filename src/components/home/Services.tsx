import { TrendingUp, MousePointer, Heart, TabletSmartphone, Code, Figma, Megaphone } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Services = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef(null);

  const service = [
    { name: "App Development", icons: TabletSmartphone },
    { name: "Web Development", icons: Code },
    { name: "UI/UX Design", icons: Figma },
    { name: "Digital Marketing", icons: Megaphone },
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "30%",
      label: "More conversions"
    },
    {
      icon: MousePointer,
      value: "50%",
      label: "More engagement"
    },
    {
      icon: Heart,
      value: "99%",
      label: "Customer satisfaction"
    }
  ];

  // Create extended services array for seamless infinite scroll with unique keys
  const extendedServices = [
    ...service.map((s, i) => ({ ...s, uniqueId: `set1-${i}` })),
    ...service.map((s, i) => ({ ...s, uniqueId: `set2-${i}` })),
    ...service.map((s, i) => ({ ...s, uniqueId: `set3-${i}` }))
  ];

  const collageImages = [
    {
      src: "https://images.unsplash.com/photo-1570841398972-8aaa69ec72f2?w=1000&auto=format&fit=crop&q=60",
      alt: "Creative workspace with design tools",
      className: "row-span-2 col-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Modern web development interface",
      className: "col-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Developer coding on laptop",
      className: "col-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "UI/UX design mockups",
      className: "col-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Mobile app development",
      className: "col-span-1"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?q=80&w=1032&auto=format&fit=crop",
      alt: "Digital marketing analytics",
      className: "col-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop",
      alt: "Digital Analytics",
      className: "col-span-2"
    }
  ];

  // Scroll trigger setup
  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.1, 0.3, 0.5, 0.7, 1],
      rootMargin: "-10% 0px -10% 0px"
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const elementId = entry.target.getAttribute('data-animate');
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setVisibleElements(prev => new Set(prev).add(elementId));
        } else if (!entry.isIntersecting || entry.intersectionRatio <= 0.1) {
          setVisibleElements(prev => {
            const newSet = new Set(prev);
            newSet.delete(elementId);
            return newSet;
          });
        }
      });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    const elementsToObserve = document.querySelectorAll('[data-animate]');
    elementsToObserve.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const getAnimationClass = (elementId, animationType = 'fadeInUp') => {
    const isVisible = visibleElements.has(elementId);

    const animations = {
      fadeInUp: isVisible
        ? 'opacity-100 transform translate-y-0'
        : 'opacity-0 transform translate-y-8',
      fadeInDown: isVisible
        ? 'opacity-100 transform translate-y-0'
        : 'opacity-0 transform -translate-y-8',
      fadeInLeft: isVisible
        ? 'opacity-100 transform translate-x-0'
        : 'opacity-0 transform -translate-x-8',
      fadeInRight: isVisible
        ? 'opacity-100 transform translate-x-0'
        : 'opacity-0 transform translate-x-8',
      scaleIn: isVisible
        ? 'opacity-100 transform scale-100'
        : 'opacity-0 transform scale-95',
      slideInUp: isVisible
        ? 'opacity-100 transform translate-y-0'
        : 'opacity-0 transform translate-y-12',
    };

    return `transition-all duration-700 ease-out ${animations[animationType] || animations.fadeInUp}`;
  };

  return (
    <>
      <style>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-infinite-scroll {
          animation: infiniteScroll 25s linear infinite;
          will-change: transform;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }

        .scrolling-container {
          width: max-content;
        }

        .scroll-blur-container {
          position: relative;
          overflow: hidden;
        }

        .scroll-blur-container::before,
        .scroll-blur-container::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          z-index: 10;
          pointer-events: none;
        }

        /* Small mobile blur edges */
        @media (max-width: 480px) {
          .scroll-blur-container::before,
          .scroll-blur-container::after {
            width: 40px;
          }
          
          .scroll-blur-container::before {
            left: 0;
            background: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0) 100%);
          }

          .scroll-blur-container::after {
            right: 0;
            background: linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0) 100%);
          }
        }

        /* Mobile blur edges */
        @media (min-width: 481px) and (max-width: 768px) {
          .scroll-blur-container::before,
          .scroll-blur-container::after {
            width: 60px;
          }
          
          .scroll-blur-container::before {
            left: 0;
            background: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0) 100%);
          }

          .scroll-blur-container::after {
            right: 0;
            background: linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0) 100%);
          }
        }

        /* Tablet blur edges */
        @media (min-width: 769px) and (max-width: 1024px) {
          .scroll-blur-container::before,
          .scroll-blur-container::after {
            width: 80px;
          }
          
          .scroll-blur-container::before {
            left: 0;
            background: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%);
          }

          .scroll-blur-container::after {
            right: 0;
            background: linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%);
          }
        }

        /* Desktop blur edges */
        @media (min-width: 1025px) {
          .scroll-blur-container::before,
          .scroll-blur-container::after {
            width: 120px;
          }
          
          .scroll-blur-container::before {
            left: 0;
            background: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0) 100%);
          }

          .scroll-blur-container::after {
            right: 0;
            background: linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0) 100%);
          }
        }

        .collage-item {
          transition: all 0.3s ease;
        }

        .collage-item:hover {
          transform: scale(1.02);
          z-index: 10;
        }

        .collage-item img {
          transition: all 0.3s ease;
        }

        .collage-item:hover img {
          brightness: 1.1;
        }

        /* Enhanced responsive typography */
        @media (max-width: 375px) {
          .main-heading {
            font-size: 1.75rem !important;
            line-height: 1.2 !important;
          }
        }

        @media (min-width: 376px) and (max-width: 480px) {
          .main-heading {
            font-size: 2rem !important;
            line-height: 1.25 !important;
          }
        }

        /* Custom scroll animations */
        .animate-on-scroll {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stagger-animation-1 {
          transition-delay: 100ms;
        }
        
        .stagger-animation-2 {
          transition-delay: 200ms;
        }
        
        .stagger-animation-3 {
          transition-delay: 300ms;
        }
        
        .stagger-animation-4 {
          transition-delay: 400ms;
        }
        
        .stagger-animation-5 {
          transition-delay: 500ms;
        }
        
        .stagger-animation-6 {
          transition-delay: 600ms;
        }
      `}</style>

      <section id="services" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-black text-white relative overflow-hidden" style={{ fontFamily: 'Sansation, sans-serif' }}>
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
          {/* Header - Enhanced Responsive with Scroll Trigger */}
          <div
            className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 ${getAnimationClass('header', 'fadeInDown')}`}
            data-animate="header"
          >
            <h2 className="main-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight px-1 sm:px-2">
              Our team believes you deserve<br className="hidden xs:block" />
              <span className="xs:hidden">you deserve </span>only the best.
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
              We are committed to delivering top-quality solutions, ensuring<br className="hidden md:block" />
              <span className="md:hidden">ensuring </span>you get the best in innovation, design, and functionality.
            </p>
          </div>

          {/* Service Categories - Enhanced Responsive Infinite Scroll with Scroll Trigger */}
          <div
            className={`flex justify-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 ${getAnimationClass('services', 'scaleIn')}`}
            data-animate="services"
          >
            <div className="scroll-blur-container w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
              <div className="scrolling-container">
                <div className="flex animate-infinite-scroll space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8">
                  {extendedServices.map((service) => {
                    const IconComponent = service.icons;
                    return (
                      <div
                        key={service.uniqueId}
                        className="flex items-center space-x-2 sm:space-x-3 backdrop-blur-sm px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 whitespace-nowrap transition-all duration-300 flex-shrink-0 cursor-pointer hover:bg-gray-800/30 rounded-xl"
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white rounded-full flex items-center justify-center">
                          <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                        </div>
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium hover:text-gray-300 transition-colors">
                          {service.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Photo Collage Gallery - Enhanced Responsive with Scroll Trigger */}
          <div
            className={`relative max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 px-2 sm:px-4 lg:px-0 ${getAnimationClass('gallery', 'fadeInUp')}`}
            data-animate="gallery"
          >
            {/* Photo Collage Grid */}
            <div className="relative">
              {/* Mobile Layout - Enhanced with better spacing */}
              <div className="grid grid-cols-1 gap-3 sm:gap-4 md:hidden">
                {collageImages.slice(0, 6).map((image, index) => (
                  <div
                    key={index}
                    className={`collage-item relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl ${getAnimationClass(`mobile-image-${index}`, 'fadeInLeft')}`}
                    data-animate={`mobile-image-${index}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-40 sm:h-48 md:h-56 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl sm:rounded-2xl"></div>
                  </div>
                ))}
              </div>

              {/* Tablet Layout - 2x3 grid */}
              <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 auto-rows-fr">
                {collageImages.slice(0, 6).map((image, index) => (
                  <div
                    key={index}
                    className={`collage-item relative overflow-hidden rounded-2xl shadow-xl min-h-[200px] ${getAnimationClass(`tablet-image-${index}`, index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight')}`}
                    data-animate={`tablet-image-${index}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>

                    {/* Optional overlay text for first image */}
                    {index === 0 && (
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold mb-1">Our Creative Process</h3>
                        <p className="text-xs text-gray-200">Bringing ideas to life</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop Layout - Enhanced Grid collage */}
              <div className="hidden lg:grid grid-cols-4 grid-rows-3 gap-3 lg:gap-4 h-[450px] lg:h-[500px] xl:h-[600px]">
                {collageImages.map((image, index) => (
                  <div
                    key={index}
                    className={`collage-item relative overflow-hidden rounded-2xl shadow-xl ${image.className} ${getAnimationClass(`desktop-image-${index}`, 'scaleIn')} ${index < 6 ? `stagger-animation-${index + 1}` : ''}`}
                    data-animate={`desktop-image-${index}`}
                  >  
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>

                    {/* Enhanced overlay text for main image */}
                    {index === 0 && (
                      <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 text-white">
                        <h3 className="text-lg lg:text-xl xl:text-2xl font-bold mb-1 lg:mb-2">Our Creative Process</h3>
                        <p className="text-xs lg:text-sm text-gray-200 max-w-xs">Bringing ideas to life through design and technology</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats - Enhanced Responsive Layout with Scroll Trigger */}
          <div
            className={`flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16 2xl:space-x-20 ${getAnimationClass('stats', 'slideInUp')}`}
            data-animate="stats"
          >
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={index}
                  className={`text-center group w-full sm:w-auto ${getAnimationClass(`stat-${index}`, 'fadeInUp')} ${index < 3 ? `stagger-animation-${(index + 1) * 2}` : ''}`}
                  data-animate={`stat-${index}`}
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4 md:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gray-800 rounded-full flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 md:mr-4 lg:mr-5 group-hover:bg-gray-700 transition-colors duration-300 shadow-lg">
                      <StatIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg font-medium px-2">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};