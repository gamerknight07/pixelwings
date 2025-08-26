import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export const Pricing = () => {
  const plans = [
    {
      title: "Web Development",
      description: "A high-converting landing page designed to drive results.",
      price: "₹29,999",
      period: "/project",
      features: [
        "Responsive Website Design",
        "Mobile-First Approach",
        "SEO Optimization",
        "Contact Form Integration",
        "Social Media Integration",
        "Analytics Setup",
        "Content Management System",
        "Security Implementation",
        "3 Months Support"
      ]
    },
    {
      title: "App Development",
      description: "Flutter & Cross‑Platform Mobile Applications",
      price: "₹79,999",
      period: "/project",
      features: [
        "iOS & Android Development",
        "Cross-platform Solutions",
        "Custom UI/UX Design",
        "User Authentication",
        "Push Notifications",
        "Ongoing revisions",
        "App Store Optimization",
        "API Development",
        "Performance Optimization"
      ],
      featured: true
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital presence management",
      price: "₹15,999",
      period: "/project",
      features: [
        "Social Media Management",
        "Content Strategy",
        "SEO Optimization",
        "Email Marketing Campaigns",
        "Google Ads Management",
        "Analytics & Reporting",
        "Lead Generation Strategy",
        "Brand Voice Development"
      ]
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-black" style={{ fontFamily: 'Sansation, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Pricing
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4">
            Transparent pricing, no surprises. Choose a plan that fits your needs and scale up whenever you're ready.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-gray-800/50 backdrop-blur-sm border-2 transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer group ${plan.featured
                ? 'border-blue-400 lg:scale-105 shadow-xl shadow-blue-500/20 bg-gradient-to-b from-blue-900/30 to-gray-800/50'
                : 'border-gray-600/50 hover:border-blue-400/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/10'
                }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/30">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-6 sm:pb-8 pt-8 sm:pt-10 px-4 sm:px-6">
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                  {plan.title}
                </CardTitle>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2">
                  {plan.description}
                </p>
                <div className="flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-base sm:text-lg text-gray-400 ml-2">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6 pb-6 sm:pb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start sm:items-center">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-3 mt-0.5 sm:mt-0 shrink-0" />
                    <span className="text-sm sm:text-base text-gray-200 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}

                <Link to="/contact"><Button
                  className={`w-full mt-6 sm:mt-8 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300 ${plan.featured
                    ? 'bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-900 hover:to-blue-500 text-white shadow-lg shadow-blue-500/30 transform hover:scale-105'
                    : 'bg-gray-700 hover:bg-gray-600 text-white shadow-md shadow-gray-700/50 hover:shadow-lg hover:shadow-gray-600/50 transform hover:scale-105 border border-gray-600 hover:border-gray-500'
                    }`}
                >
                  Get Started
                </Button></Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};