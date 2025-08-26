import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Check,
    ArrowRight,
    Clock,
    RotateCcw,
    Code,
    ChevronRight,
    Star,
    Award,
    Smartphone,
    Palette
} from "lucide-react";

export const ServicePages = () => {
    const [activeService, setActiveService] = useState('web-development');
    const [isVisible, setIsVisible] = useState(false);

    const services = [
        {
            id: 'web-development',
            name: 'Web Development',
            icon: Code,
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2072&q=80',
            price: '$2,999',
            shortDesc: 'Custom responsive websites',
            fullDescription: 'Transform your digital presence with cutting-edge web solutions. I create responsive, fast-loading websites that engage users and drive conversions.',
            features: [
                'Responsive Design for All Devices',
                'Modern UI/UX Implementation',
                'SEO Optimization Built-in',
                'Performance Optimization',
                'Cross-browser Compatibility',
                'Content Management System',
                'E-commerce Integration',
                'Analytics & Tracking Setup'
            ],
            technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
            deliveryTime: '2-4 weeks',
            revisions: 'Unlimited',
            detailedInfo: {
                process: ['Discovery & Planning', 'Design & Wireframing', 'Development & Testing', 'Launch & Support'],
                portfolio: [
                    'E-commerce Platform - 300% increase in sales',
                    'SaaS Dashboard - Improved user engagement by 150%',
                    'Corporate Website - 50% faster loading times'
                ],
                testimonials: [
                    { name: 'Sarah Johnson', role: 'CEO, TechStart', text: 'Outstanding work! Our new website exceeded all expectations.' }
                ]
            }
        },
        {
            id: 'mobile-development',
            name: 'Mobile Development',
            icon: Smartphone,
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=2072&q=80',
            price: '$4,499',
            shortDesc: 'Native and cross-platform apps',
            fullDescription: 'Build powerful mobile applications that deliver exceptional user experiences across iOS and Android platforms with cutting-edge native and cross-platform solutions.',
            features: [
                'Native iOS & Android Development',
                'Cross-platform React Native Solutions',
                'App Store Optimization',
                'Push Notifications Integration',
                'Offline Functionality',
                'Payment Gateway Integration',
                'Social Media Integration',
                'Analytics & Performance Monitoring'
            ],
            technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase', 'MongoDB'],
            deliveryTime: '3-6 weeks',
            revisions: 'Unlimited',
            detailedInfo: {
                process: ['Requirements Analysis', 'UI/UX Design', 'Development & Testing', 'App Store Submission'],
                portfolio: [
                    'Fitness App - 100k+ downloads in 6 months',
                    'E-commerce Mobile App - 45% increase in mobile sales',
                    'Social Platform - 250k active users'
                ],
                testimonials: [
                    { name: 'Mike Chen', role: 'CTO, FitTech', text: 'The mobile app exceeded our expectations and user engagement goals.' }
                ]
            }
        },
        {
            id: 'ui-ux-design',
            name: 'UI/UX Design',
            icon: Palette,
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2072&q=80',
            price: '$1,999',
            shortDesc: 'User-centered design solutions',
            fullDescription: 'Create stunning, intuitive user experiences that convert visitors into customers through research-driven design and modern aesthetics.',
            features: [
                'User Research & Analysis',
                'Wireframing & Prototyping',
                'Visual Design & Branding',
                'Responsive Design Systems',
                'Usability Testing',
                'Design System Creation',
                'Accessibility Compliance',
                'Interactive Prototypes'
            ],
            technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Zeplin'],
            deliveryTime: '1-3 weeks',
            revisions: 'Unlimited',
            detailedInfo: {
                process: ['Research & Discovery', 'Wireframing', 'Visual Design', 'Prototyping & Testing'],
                portfolio: [
                    'SaaS Platform Redesign - 200% increase in user engagement',
                    'E-commerce UX Overhaul - 85% reduction in cart abandonment',
                    'Mobile App Design - 4.8 star rating improvement'
                ],
                testimonials: [
                    { name: 'Lisa Rodriguez', role: 'Product Manager, CloudCorp', text: 'The design transformation was incredible. Our users love the new interface.' }
                ]
            }
        }
    ];

    const currentService = services.find((s) => s.id === activeService) || services[0];

    useEffect(() => {
        setIsVisible(false);
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, [activeService]);

    const ServiceIcon = currentService.icon;

    const Sidebar = ({ services, activeService, setActiveService }) => (
        <div className="h-full bg-gray-950 border-r border-gray-800 p-6 sticky top-0">
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-100 mb-2">Our Services</h2>
                <p className="text-gray-400 text-sm">Choose a service to explore</p>
            </div>

            <nav className="space-y-2">
                {services.map((service) => {
                    const IconComponent = service.icon;
                    const isActive = activeService === service.id;

                    return (
                        <button
                            key={service.id}
                            onClick={() => setActiveService(service.id)}
                            className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group ${isActive
                                ? 'bg-indigo-600 text-white shadow-lg'
                                : 'hover:bg-gray-800 text-gray-300 hover:text-white'
                                }`}
                        >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${isActive
                                ? 'bg-indigo-500/30'
                                : 'bg-gray-700 group-hover:bg-gray-600'
                                }`}>
                                <IconComponent className={`w-5 h-5 ${isActive ? 'text-white' : 'text-indigo-400'}`} />
                            </div>

                            <div className="text-left flex-1">
                                <div className={`font-semibold text-sm ${isActive ? 'text-white' : ''}`}>
                                    {service.name}
                                </div>
                                <div className={`text-xs ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>
                                    {service.shortDesc}
                                </div>
                            </div>

                            <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-90 text-white' : 'text-gray-500'
                                }`} />
                        </button>
                    );
                })}
            </nav>
        </div>
    );

    return (
        <section className="py-16 bg-gray-950 text-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8 min-h-[800px]">
                    {/* Sidebar */}
                    <div className="lg:w-80 lg:flex-shrink-0">
                        <Sidebar
                            services={services}
                            activeService={activeService}
                            setActiveService={setActiveService}
                        />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 relative">
                        {/* Background Image */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            <img
                                src={currentService.image}
                                alt={`${currentService.name} Background`}
                                className={`w-full h-full object-cover transition-all duration-1000 ${isVisible ? 'scale-100 opacity-40' : 'scale-110 opacity-0'
                                    }`}
                            />
                            <div className="absolute inset-0 bg-black/70" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-8 lg:p-12 xl:p-16 h-full flex items-center">
                            <div className="w-full max-w-6xl mx-auto">
                                <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
                                    {/* Left Column */}
                                    <div className={`space-y-8 transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                                        }`}>
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
                                                    <ServiceIcon className="w-8 h-8 text-white" />
                                                </div>
                                                <div>
                                                    <h2 className="text-3xl xl:text-4xl font-bold leading-tight text-white">
                                                        {currentService.name}
                                                    </h2>
                                                    <p className="text-lg text-gray-300 mt-1">{currentService.shortDesc}</p>
                                                </div>
                                            </div>
                                            <p className="text-lg xl:text-xl text-gray-300 leading-relaxed font-medium">
                                                {currentService.fullDescription}
                                            </p>
                                        </div>

                                        {/* Key Stats */}
                                        <div className="grid grid-cols-3 gap-6">
                                            <div className="text-center">
                                                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-2">
                                                    <Clock className="w-6 h-6 text-indigo-400" />
                                                </div>
                                                <div className="text-xl font-bold text-white">{currentService.deliveryTime}</div>
                                                <div className="text-sm text-gray-400">Delivery</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-2">
                                                    <RotateCcw className="w-6 h-6 text-indigo-400" />
                                                </div>
                                                <div className="text-xl font-bold text-white">{currentService.revisions}</div>
                                                <div className="text-sm text-gray-400">Revisions</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-2">
                                                    <Star className="w-6 h-6 text-indigo-400" />
                                                </div>
                                                <div className="text-xl font-bold text-white">4.9</div>
                                                <div className="text-sm text-gray-400">Rating</div>
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg">
                                                Start Project - {currentService.price}
                                                <ArrowRight className="w-5 h-5 ml-2" />
                                            </Button>
                                            <Button variant="outline" size="lg" className="border-gray-600 text-gray-200 hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-xl">
                                                View Portfolio
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div className={`space-y-6 transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                                        }`} style={{ transitionDelay: '200ms' }}>

                                        {/* Features */}
                                        <Card className="bg-gray-900/95 border-gray-800 text-gray-200 backdrop-blur-sm">
                                            <CardHeader>
                                                <CardTitle className="text-xl flex items-center gap-2 text-white">
                                                    <Check className="w-5 h-5 text-indigo-400" />
                                                    What's Included
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="grid gap-3">
                                                    {currentService.features.slice(0, 6).map((feature, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/80 border border-gray-700"
                                                        >
                                                            <div className="w-5 h-5 bg-indigo-500/20 rounded-full flex items-center justify-center mt-0.5">
                                                                <Check className="w-3 h-3 text-indigo-400" />
                                                            </div>
                                                            <span className="text-sm">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>

                                        {/* Tech Stack */}
                                        <Card className="bg-gray-900/95 border-gray-800 text-gray-200 backdrop-blur-sm">
                                            <CardHeader>
                                                <CardTitle className="text-lg text-white">Technology Stack</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex flex-wrap gap-2">
                                                    {currentService.technologies.map((tech, idx) => (
                                                        <Badge key={idx} className="bg-gray-800/80 text-gray-200 border-gray-700 hover:bg-gray-700 px-3 py-1.5 text-xs">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>

                                        {/* Process */}
                                        <Card className="bg-gray-900/95 border-gray-800 text-gray-200 backdrop-blur-sm">
                                            <CardHeader>
                                                <CardTitle className="text-lg text-white">Our Process</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="space-y-3">
                                                    {currentService.detailedInfo.process.map((step, idx) => (
                                                        <div key={idx} className="flex items-center gap-3">
                                                            <div className="w-7 h-7 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 font-bold text-xs">
                                                                {idx + 1}
                                                            </div>
                                                            <span className="text-sm">{step}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                {/* Portfolio */}
                                <div className="mt-12">
                                    <Card className="bg-gray-900/95 border-gray-800 text-gray-200 backdrop-blur-sm">
                                        <CardHeader>
                                            <CardTitle className="text-xl text-white flex items-center gap-2">
                                                <Award className="w-5 h-5 text-indigo-400" />
                                                Success Stories
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                {currentService.detailedInfo.portfolio.map((project, idx) => (
                                                    <div key={idx} className="p-4 rounded-lg bg-gray-800/80 border border-gray-700">
                                                        <p className="text-sm">{project}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};