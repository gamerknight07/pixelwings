import { Card, CardContent } from "@/components/ui/card";
import { GitBranch, Figma, Hash, Search, Bell, Settings, Globe, Database, Shield, Code, Layers, Monitor } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Features = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [collaborationVisible, setCollaborationVisible] = useState(false);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const collaborationRef = useRef(null);

  const collaborationIcons = [
    { icon: GitBranch, color: "text-white" },
    { icon: Globe, color: "text-white" },
    { icon: Database, color: "text-white" },
    { icon: Shield, color: "text-white" },
    { icon: Code, color: "text-white" },
    { icon: Layers, color: "text-white" },
    { icon: Monitor, color: "text-white" },
    { icon: Search, color: "text-white" },
    { icon: Settings, color: "text-white" },
    { icon: Hash, color: "text-white" },
    { icon: Bell, color: "text-white" },
    { icon: Figma, color: "text-white" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current && entry.isIntersecting) {
            setHeaderVisible(true);
          } else if (entry.target === collaborationRef.current && entry.isIntersecting) {
            setCollaborationVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (collaborationRef.current) observer.observe(collaborationRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (collaborationRef.current) observer.unobserve(collaborationRef.current);
    };
  }, []);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    cardRefs.current.forEach(card => {
      if (card) cardObserver.observe(card);
    });

    return () => {
      cardRefs.current.forEach(card => {
        if (card) cardObserver.unobserve(card);
      });
    };
  }, []);

  return (
    <>
      <section className="min-h-screen bg-black text-white py-12 sm:py-16 lg:py-24 overflow-hidden" style={{ fontFamily: 'Sansation, sans-serif' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div
            ref={headerRef}
            className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ease-out ${headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-16'
              }`}
          >
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2 sm:mb-4 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`} style={{ transitionDelay: headerVisible ? '200ms' : '0ms' }}>
              Innovative software solutions
            </h1>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 sm:mb-8 text-gray-300 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`} style={{ transitionDelay: headerVisible ? '400ms' : '0ms' }}>
              and design excellence
            </h2>
            <p className={`text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4 transition-all duration-800 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: headerVisible ? '600ms' : '0ms' }}>
              Our skilled team crafts intuitive, high-performance applications with exceptional user experiences.
              From concept to execution, we push boundaries and set new standards in technology and design.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Scale as you grow */}
            <Card
              ref={el => cardRefs.current[0] = el}
              className={`bg-black/100 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-700 ease-out ${visibleCards.includes(0)
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
                }`}
            >
              <CardContent className="p-4 sm:p-6">
                <h3 className={`text-lg sm:text-xl font-medium mb-2 text-white transition-all duration-500 ease-out ${visibleCards.includes(0) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`} style={{ transitionDelay: visibleCards.includes(0) ? '300ms' : '0ms' }}>
                  Scale as you grow
                </h3>
                <p className={`text-gray-400 mb-4 sm:mb-6 text-sm leading-relaxed transition-all duration-500 ease-out ${visibleCards.includes(0) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`} style={{ transitionDelay: visibleCards.includes(0) ? '400ms' : '0ms' }}>
                  Upgrade anytime—whether you need a landing page or a website.
                </p>

                {/* Chart Container */}
                <div className={`flex items-end justify-between mb-4 h-24 sm:h-32 transition-all duration-600 ease-out ${visibleCards.includes(0) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`} style={{ transitionDelay: visibleCards.includes(0) ? '500ms' : '0ms' }}>
                  {/* Bar Chart */}
                  <div className="flex items-end space-x-1 sm:space-x-2 flex-1">
                    {[8, 12, 14, 16, 20].map((height, index) => (
                      <div
                        key={index}
                        className={`bg-blue-500 w-4 sm:w-6 rounded-t transition-all duration-700 hover:bg-blue-400 ${visibleCards.includes(0) ? `h-${height} sm:h-${height + 4}` : 'h-0'
                          }`}
                        style={{
                          transitionDelay: visibleCards.includes(0) ? `${600 + index * 100}ms` : '0ms',
                          height: visibleCards.includes(0) ? `${height * 0.25}rem` : '0px'
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Perfect Pie Chart */}
                  <div className="ml-3 sm:ml-4">
                    <div className="relative w-10 sm:w-12 h-10 sm:h-12">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="#1f2937"
                          strokeWidth="2"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          strokeDasharray="60 40"
                          strokeDashoffset={visibleCards.includes(0) ? "0" : "100"}
                          className="transition-all duration-1000 ease-in-out"
                          style={{ transitionDelay: visibleCards.includes(0) ? '700ms' : '0ms' }}
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="2"
                          strokeDasharray="25 75"
                          strokeDashoffset={visibleCards.includes(0) ? "-60" : "-100"}
                          className="transition-all duration-1000 ease-in-out"
                          style={{ transitionDelay: visibleCards.includes(0) ? '900ms' : '0ms' }}
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="#eab308"
                          strokeWidth="2"
                          strokeDasharray="15 85"
                          strokeDashoffset={visibleCards.includes(0) ? "-85" : "-100"}
                          className="transition-all duration-1000 ease-in-out"
                          style={{ transitionDelay: visibleCards.includes(0) ? '1100ms' : '0ms' }}
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className={`text-xl sm:text-2xl font-bold text-white transition-all duration-500 ease-out ${visibleCards.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`} style={{ transitionDelay: visibleCards.includes(0) ? '1200ms' : '0ms' }}>
                  +42%
                </div>
              </CardContent>
            </Card>

            {/* Rapid turnaround */}
            <Card
              ref={el => cardRefs.current[1] = el}
              className={`bg-black/100 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-700 ease-out ${visibleCards.includes(1)
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              <CardContent className="p-4 sm:p-6">
                <h3 className={`text-lg sm:text-xl font-medium mb-2 text-white transition-all duration-500 ease-out ${visibleCards.includes(1) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`} style={{ transitionDelay: visibleCards.includes(1) ? '300ms' : '0ms' }}>
                  Rapid turnaround
                </h3>
                <p className={`text-gray-400 mb-4 sm:mb-6 text-sm leading-relaxed transition-all duration-500 ease-out ${visibleCards.includes(1) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`} style={{ transitionDelay: visibleCards.includes(1) ? '400ms' : '0ms' }}>
                  Most design requests are completed within 48 hours or less.
                </p>

                {/* Project notifications */}
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { icon: GitBranch, title: "New Project", time: "Today, 11:02AM" },
                    { icon: Figma, title: "New Figma file", time: "Today, 11:12AM" }
                  ].map((notification, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 bg-zinc-700/50 p-4 rounded-lg hover:bg-zinc-800/70 transition-all duration-500 ease-out ${visibleCards.includes(1)
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-12'
                        }`}
                      style={{ transitionDelay: visibleCards.includes(1) ? `${500 + index * 150}ms` : '0ms' }}
                    >
                      <div className="w-8 sm:w-10 h-8 sm:h-10 bg-black rounded flex items-center justify-center flex-shrink-0">
                        <notification.icon className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-xs sm:text-sm font-medium truncate">{notification.title}</div>
                        <div className="text-gray-400 text-xs">{notification.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Unlimited requests */}
            <Card
              ref={el => cardRefs.current[2] = el}
              className={`bg-black/100 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-700 ease-out ${visibleCards.includes(2)
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
                }`}
              style={{ transitionDelay: '400ms' }}
            >
              <CardContent className="p-4 sm:p-6">
                <h3 className={`text-lg sm:text-xl font-medium mb-2 text-white transition-all duration-500 ease-out ${visibleCards.includes(2) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`} style={{ transitionDelay: visibleCards.includes(2) ? '300ms' : '0ms' }}>
                  Unlimited requests
                </h3>
                <p className={`text-gray-400 mb-4 sm:mb-6 text-sm leading-relaxed transition-all duration-500 ease-out ${visibleCards.includes(2) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`} style={{ transitionDelay: visibleCards.includes(2) ? '400ms' : '0ms' }}>
                  Submit as many design requests as you need, one at a time.
                </p>

                {/* Enhanced Chat messages with avatars */}
                <div className="space-y-3 sm:space-y-4">
                  <div className={`flex items-start space-x-2 sm:space-x-3 transition-all duration-600 ease-out ${visibleCards.includes(2)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-16'
                    }`} style={{ transitionDelay: visibleCards.includes(2) ? '500ms' : '0ms' }}>
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="User avatar"
                      className="w-8 sm:w-10 h-8 sm:h-10 rounded-full flex-shrink-0"
                    />
                    <div className="bg-zinc-800/60 p-2 sm:p-3 rounded-lg rounded-tl-none max-w-[85%]">
                      <p className="text-white text-xs sm:text-sm leading-relaxed">Hello, could you update the logo on our website?</p>
                    </div>
                  </div>

                  <div className={`flex items-start space-x-2 sm:space-x-3 flex-row-reverse transition-all duration-600 ease-out ${visibleCards.includes(2)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-16'
                    }`} style={{ transitionDelay: visibleCards.includes(2) ? '700ms' : '0ms' }}>
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Support avatar"
                      className="w-8 sm:w-10 h-8 sm:h-10 mx-2 rounded-full flex-shrink-0"
                    />
                    <div className="bg-blue-600 p-2 sm:p-3 rounded-lg rounded-tr-none max-w-[85%]">
                      <p className="text-white text-xs sm:text-sm leading-relaxed">Sure, just let me send it to the team!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Seamless collaboration - Full width card */}
          <Card
            ref={collaborationRef}
            className={`bg-black/100 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-800 ease-out ${collaborationVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-16 scale-95'
              }`}
          >
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                <div className={`order-2 lg:order-1 space-y-4 transition-all duration-700 ease-out ${collaborationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                  }`} style={{ transitionDelay: collaborationVisible ? '300ms' : '0ms' }}>
                  <h3 className="text-2xl sm:text-3xl font-medium text-white">Seamless collaboration</h3>
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                    Work directly with our expert designers via Slack, Trello, or Notion.
                    Get updates, share feedback, and launch faster than ever. We
                    ensure smooth and fast communication.
                  </p>
                </div>

                {/* Scrolling Tools Container - Split into two rows */}
                <div className={`order-1 lg:order-2 space-y-4 transition-all duration-700 ease-out ${collaborationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                  }`} style={{ transitionDelay: collaborationVisible ? '500ms' : '0ms' }}>
                  {/* First Row */}
                  <div className="relative overflow-hidden">
                    {/* Blur gradient overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-black/100 via-black/10 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-black/100 via-black/10 to-transparent z-10 pointer-events-none"></div>

                    <div className={`flex space-x-6 sm:space-x-8 ${collaborationVisible ? 'animate-scroll' : ''}`}>
                      {/* First set of icons (first 6) */}
                      {collaborationIcons.slice(0, 6).map((item, index) => (
                        <div
                          key={`first-row-first-${index}`}
                          className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14 bg-black rounded-lg flex items-center justify-center hover:bg-zinc-700/80 transition-all duration-300 cursor-pointer group"
                        >
                          <item.icon className={`w-5 sm:w-6 h-5 sm:h-6 ${item.color} transition-colors duration-300`} />
                        </div>
                      ))}

                      {/* Duplicate set for seamless loop (first 6) */}
                      {collaborationIcons.slice(0, 6).map((item, index) => (
                        <div
                          key={`first-row-second-${index}`}
                          className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14 bg-black rounded-lg flex items-center justify-center hover:bg-zinc-700/80 transition-all duration-300 cursor-pointer group"
                        >
                          <item.icon className={`w-5 sm:w-6 h-5 sm:h-6 ${item.color} transition-colors duration-300`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Second Row - Reverse direction */}
                  <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-black/100 via-black/10 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-black/100 via-black/10 to-transparent z-10 pointer-events-none"></div>

                    <div className={`flex space-x-6 sm:space-x-8 ${collaborationVisible ? 'animate-scroll-reverse' : ''}`}>
                      {/* First set of icons (last 6) */}
                      {collaborationIcons.slice(6).map((item, index) => (
                        <div
                          key={`second-row-first-${index}`}
                          className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14 bg-black rounded-lg flex items-center justify-center hover:bg-zinc-700/80 transition-all duration-300 cursor-pointer group"
                        >
                          <item.icon className={`w-5 sm:w-6 h-5 sm:h-6 ${item.color} transition-colors duration-300`} />
                        </div>
                      ))}

                      {/* Duplicate set for seamless loop (last 6) */}
                      {collaborationIcons.slice(6).map((item, index) => (
                        <div
                          key={`second-row-second-${index}`}
                          className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14 bg-black rounded-lg flex items-center justify-center hover:bg-zinc-700/80 transition-all duration-300 cursor-pointer group"
                        >
                          <item.icon className={`w-5 sm:w-6 h-5 sm:h-6 ${item.color} transition-colors duration-300`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-reverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll {
            animation: scroll 25s linear infinite;
          }

          .animate-scroll-reverse {
            animation: scroll-reverse 25s linear infinite;
          }

          .animate-scroll:hover,
          .animate-scroll-reverse:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </>
  );
};