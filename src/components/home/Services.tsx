import { TrendingUp, MousePointer, Heart, TabletSmartphone, Code, Figma, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

export const Services = () => {
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
          animation: infiniteScroll 20s linear infinite;
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

        /* Mobile blur edges */
        @media (max-width: 768px) {
          .scroll-blur-container::before,
          .scroll-blur-container::after {
            width: 60px;
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
        @media (min-width: 769px) {
          .scroll-blur-container::before,
          .scroll-blur-container::after {
            width: 120px;
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
      `}</style>

      <section id="services" className="py-12 md:py-16 lg:py-24 bg-black text-white relative overflow-hidden" style={{ fontFamily: 'Sansation, sans-serif' }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
              Our team believes you deserve<br className="hidden sm:block" />
              <span className="sm:hidden">you deserve </span>only the best.
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              We are committed to delivering top-quality solutions, ensuring<br className="hidden md:block" />
              <span className="md:hidden">ensuring </span>you get the best in innovation, design, and functionality.
            </p>
          </div>

          {/* Service Categories - Responsive Infinite Scroll */}
          <div className="flex justify-center mb-12 md:mb-16 lg:mb-20">
            <div className="scroll-blur-container w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
              <div className="scrolling-container">
                <div className="flex animate-infinite-scroll space-x-4 md:space-x-6">
                  {extendedServices.map((service) => {
                    const IconComponent = service.icons;
                    return (
                      <div
                        key={service.uniqueId}
                        className="flex items-center space-x-2 md:space-x-3 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-3 md:py-4 whitespace-nowrap transition-all duration-300 flex-shrink-0 cursor-pointer"
                      >

                        <div className="w-6 h-6 md:w-7 md:h-7 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <Link to="/servicedetails"> <span className="text-xs sm:text-sm font-medium">{service.name}</span></Link>

                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Design Showcase Gallery */}
          <div className="relative max-w-6xl mx-auto mb-16 md:mb-20 lg:mb-24 px-4 sm:px-0">
            {/* Decorative plants - Hidden on mobile, visible on larger screens */}
            <div className="hidden lg:block absolute -left-16 -bottom-4 w-24 h-32 opacity-70 z-0">
              <div className="w-full h-full bg-gradient-to-t from-green-700 via-green-600 to-green-500 rounded-t-full transform rotate-12"></div>
              <div className="absolute top-3 left-4 w-6 h-16 bg-gradient-to-t from-green-600 to-green-400 rounded-t-full transform -rotate-12"></div>
              <div className="absolute top-1 right-3 w-4 h-12 bg-gradient-to-t from-green-600 to-green-400 rounded-t-full transform rotate-45"></div>
            </div>

            <div className="hidden lg:block absolute -right-16 -bottom-4 w-20 h-28 opacity-70 z-0">
              <div className="w-full h-full bg-gradient-to-t from-green-700 via-green-600 to-green-500 rounded-t-full transform -rotate-12"></div>
              <div className="absolute top-3 right-4 w-4 h-12 bg-gradient-to-t from-green-600 to-green-400 rounded-t-full transform rotate-12"></div>
            </div>

            {/* Mac Monitor Frame - Responsive */}
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl md:rounded-t-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-700">
              {/* Screen Bezel */}
              <div className="bg-black rounded-xl md:rounded-2xl p-1">
                {/* Actual Screen with Design Images */}
                <div className="bg-gray-50 rounded-lg md:rounded-xl min-h-[250px] sm:min-h-[300px] md:min-h-[400px] relative overflow-hidden">
                  {/* Main Design Showcase */}
                  <img
                    src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80"
                    alt="Design workspace with creative tools and plants"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg md:rounded-xl"
                  />

                  {/* Overlay for better contrast */}
                  <div className="absolute inset-0 bg-black/20 rounded-lg md:rounded-xl"></div>
                </div>
              </div>

              {/* Mac Stand - Responsive */}
              <div className="flex justify-center mt-3 md:mt-4">
                <div className="w-16 sm:w-20 md:w-24 h-4 sm:h-5 md:h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl md:rounded-b-2xl shadow-lg"></div>
              </div>
              <div className="flex justify-center mt-1">
                <div className="w-28 sm:w-32 md:w-40 h-2 sm:h-2.5 md:h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Stats - Responsive Layout */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-12 lg:space-x-20">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex flex-col sm:flex-row items-center justify-center mb-4 md:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 group-hover:bg-gray-700 transition-colors duration-300">
                      <StatIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};