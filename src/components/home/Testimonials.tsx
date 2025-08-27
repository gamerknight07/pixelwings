import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Carter",
      role: "E-commerce Founder",
      content: "We've seen a significant improvement on our conversion rate after switching to their service. Highly recommend!",
      image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Mike Chen",
      role: "SaaS CEO",
      content: "The best decision we made for our startup—the experience was fast, reliable, and they always deliver stunning designs!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Jake Thompson",
      role: "Marketing Director",
      content: "A game changer! We get professional-quality design work on demand. The designs are great and always delivered faster than we expect.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Sarah Lin",
      role: "Agency Owner",
      content: "They've made scaling design output effortless for our agency. Their designers are responsive, quick to iterate, and always nail the brief.",
      image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const Tools = [
    "Figma", "AWS", "Dart", "Flutter", "React", "Express", "Figma", "AWS", "Dart", "Flutter", "React", "Express"
  ];

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll for testimonials on mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        nextTestimonial();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile, isPaused]);

  // Scrolling animation for company logos
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setScrollPosition(prev => prev + 0.5);
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10" style={{ fontFamily: 'Sansation, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 sm:mb-8 text-gray-200 leading-tight px-2">
            Don't take our word for it
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto leading-relaxed px-2">
            See what our happy clients have to say about<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>our subscription-based web design services.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className="relative max-w-5xl mx-auto mb-20 sm:mb-24 md:mb-28 px-2 sm:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsMobile ? setIsPaused(false) : setIsPaused(false)}
        >
          <div className="bg-gray-800/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 relative border border-gray-700/30 shadow-2xl">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
              <Quote className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white/80" />
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed mb-10 sm:mb-12 md:mb-14 text-white/95 max-w-4xl mx-auto px-2">
                {testimonials[currentIndex].content}
              </p>

              {/* Author */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 px-2">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full overflow-hidden shadow-lg ring-2 ring-white/20">
                    {testimonials[currentIndex].image ? (
                      <img
                        src={testimonials[currentIndex].image}
                        alt={`${testimonials[currentIndex].name} profile`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm md:text-base">
                          {testimonials[currentIndex].name
                            .split(' ')
                            .map(word => word[0])
                            .join('')
                            .toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-white text-lg sm:text-base md:text-lg lg:text-xl">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-300 text-base sm:text-sm md:text-base lg:text-lg">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows - Hidden on mobile, auto-advance instead */}
            {!isMobile && (
              <>
                <button
                  onClick={prevTestimonial}
                  className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700/50 hover:bg-gray-600/70 transition-all duration-300 flex items-center justify-center group border border-gray-600/30"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-colors" />
                </button>

                <button
                  onClick={nextTestimonial}
                  className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700/50 hover:bg-gray-600/70 transition-all duration-300 flex items-center justify-center group border border-gray-600/30"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-colors" />
                </button>
              </>
            )}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 sm:mt-10 space-x-2 sm:space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-white w-6 sm:w-8'
                  : 'bg-gray-500 hover:bg-gray-400 w-2'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos with Scroll Effect */}
        <div
          className="relative overflow-hidden py-2 sm:py-4 px-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex items-center space-x-8 sm:space-x-12 md:space-x-16 transition-opacity duration-300 ${isPaused ? 'opacity-60' : 'opacity-40'
              }`}
            style={{
              transform: `translateX(-${scrollPosition % (Tools.length * (isMobile ? 100 : 140) / 2)}px)`,
              width: `${Tools.length * (isMobile ? 100 : 140)}px`
            }}
          >
            {Tools.map((company, index) => (
              <div
                key={index}
                className={`text-gray-400 text-sm sm:text-base md:text-lg font-medium tracking-wide whitespace-nowrap flex-shrink-0 transition-colors duration-200 py-2 ${isPaused ? 'text-gray-300' : 'text-gray-400'
                  }`}
                style={{
                  minWidth: isMobile ? '100px' : '140px',
                  textAlign: 'center'
                }}
              >
                {company}
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-20 sm:w-32 md:w-40 h-full bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 sm:w-32 md:w-40 h-full bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};