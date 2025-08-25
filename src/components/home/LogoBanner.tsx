import { useState } from 'react';

export const LogoBanner = () => {
  const [failedImages, setFailedImages] = useState(new Set());

  const handleImageError = (logoName, setIndex) => {
    setFailedImages(prev => new Set([...prev, `${logoName}-${setIndex}`]));
  };

  const logos = [
    { name: "App-Dev", logo: "https://images.unsplash.com/photo-1571126770247-9a99e5f7eff7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Process", logo: "https://images.unsplash.com/photo-1603975711481-18b7aaca4caa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8MnwwfHx8Mg%3D%3D" },
    { name: "Graphic", logo: "https://images.unsplash.com/photo-1740174459709-ecb607094a4c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Figma-Design", logo: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3JhcGhpYyUyMERlc2lnbnxlbnwwfDJ8MHx8fDI%3D" },
    { name: "Marketing", logo: "https://images.unsplash.com/photo-1641951820920-c90394aef512?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "App-Des", logo: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29jaWFsJTIwbWVkaWF8ZW58MHwyfDB8fHwy" },
    { name: "Media", logo: "https://images.unsplash.com/photo-1699895143289-958fa10a57c9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ];

  return (
    <section className="py-20 bg-black overflow-hidden" style={{ fontFamily: 'Sansation, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Build with us
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join our platform to grow your business
          </p>
        </div>

        {/* Logo Grid */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-20 h-72 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-72 bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {logos.map((logo, index) => {
                const imageKey = `${logo.name}-first-${index}`;
                const hasImageFailed = failedImages.has(imageKey);

                return (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 flex items-center justify-center w-64 h-60 group cursor-pointer"
                  >
                    <div className="w-56 h-56 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                      {!hasImageFailed ? (
                        <img
                          src={logo.logo}
                          alt={`${logo.name} logo`}
                          className="w-52 h-52 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300"
                          onError={() => handleImageError(logo.name, `first-${index}`)}
                        />
                      ) : (
                        <div className="w-52 h-52 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-600 font-medium text-sm">{logo.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => {
                const imageKey = `${logo.name}-second-${index}`;
                const hasImageFailed = failedImages.has(imageKey);

                return (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 flex items-center justify-center w-64 h-60 group cursor-pointer"
                  >
                    <div className="w-56 h-56 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                      {!hasImageFailed ? (
                        <img
                          src={logo.logo}
                          alt={`${logo.name} logo`}
                          className="w-52 h-52 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300"
                          onError={() => handleImageError(logo.name, `second-${index}`)}
                        />
                      ) : (
                        <div className="w-52 h-52 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-600 font-medium text-sm">{logo.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Third set for ultra-smooth scrolling */}
              {logos.map((logo, index) => {
                const imageKey = `${logo.name}-third-${index}`;
                const hasImageFailed = failedImages.has(imageKey);

                return (
                  <div
                    key={`third-${index}`}
                    className="flex-shrink-0 flex items-center justify-center w-64 h-60 group cursor-pointer"
                  >
                    <div className="w-56 h-56 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                      {!hasImageFailed ? (
                        <img
                          src={logo.logo}
                          alt={`${logo.name} logo`}
                          className="w-52 h-52 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300"
                          onError={() => handleImageError(logo.name, `third-${index}`)}
                        />
                      ) : (
                        <div className="w-52 h-52 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-600 font-medium text-sm">{logo.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-scroll {
          animation: scroll 45s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Hardware acceleration for ultra-smooth scrolling */
        .animate-scroll > div {
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
};