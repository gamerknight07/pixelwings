// components/ServiceCard.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Clock, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface Service {
    id: string;
    name: string;
    icon: React.ComponentType<any>;
    image: string;
    price: string;
    shortDesc: string;
    fullDescription: string;
    features: string[];
    technologies: string[];
    deliveryTime: string;
    revisions: string;
}

interface ServiceCardProps {
    service: Service;
    index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
    const isReversed = index % 2 === 1;
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Trigger when element is 20% visible for smoother transitions
                    if (entry.intersectionRatio > 0.2) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold: [0, 0.2, 0.5, 0.8, 1],
                rootMargin: '-5% 0px -5% 0px'
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <Card
            ref={cardRef}
            className={`group relative overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-700 bg-gradient-to-br from-background via-background to-background/95 ${isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
                }`}
            style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                transitionDuration: '800ms',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }}
        >
            {/* Subtle background pattern */}
            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),transparent)] transition-opacity duration-700 ${isVisible ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'
                }`} />

            <div className={`grid lg:grid-cols-2 gap-0 ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image Section */}
                <div className={`relative overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative">
                        <img
                            src={service.image}
                            alt={`${service.name} - Professional Service Preview`}
                            className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out ${isVisible
                                ? 'scale-100 opacity-100'
                                : 'scale-110 opacity-0'
                                }`}
                            style={{
                                transitionDelay: isVisible ? `${(index * 150) + 200}ms` : '0ms'
                            }}
                        />

                        {/* Enhanced gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-60'
                            }`} />

                        {/* Professional grid overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Premium Price Badge */}
                        <div className={`absolute top-6 right-6 transform group-hover:scale-105 transition-all duration-500 ${isVisible
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-8 opacity-0'
                            }`}
                            style={{
                                transitionDelay: isVisible ? `${(index * 150) + 400}ms` : '0ms'
                            }}>
                            <div className="bg-background/95 backdrop-blur-md rounded-2xl px-5 py-3 border border-border/50 shadow-lg ring-1 ring-primary/10">
                                <div className="text-center">
                                    <span className="block text-xs text-text-muted font-medium tracking-wide uppercase">Starting at</span>
                                    <span className="text-primary font-bold text-lg tracking-tight">{service.price}</span>
                                </div>
                            </div>
                        </div>

                        {/* Corner accent */}
                        <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/20 to-transparent transition-opacity duration-700 ${isVisible ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'
                            }`} />
                    </div>
                </div>

                {/* Content Section */}
                <div className={`p-8 lg:p-12 xl:p-16 ${isReversed ? 'lg:order-1' : ''} relative`}>
                    <CardHeader className="p-0 mb-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className={`relative transition-all duration-700 ease-out ${isVisible
                                ? 'translate-y-0 opacity-100 scale-100'
                                : 'translate-y-8 opacity-0 scale-75'
                                }`}
                                style={{
                                    transitionDelay: isVisible ? `${(index * 150) + 300}ms` : '0ms'
                                }}>
                                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-500">
                                    <service.icon className="w-7 h-7 text-primary-foreground" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="flex-1">
                                <CardTitle className={`text-2xl xl:text-3xl font-bold text-foreground group-hover:text-primary transition-all duration-700 leading-tight mb-2 ${isVisible
                                    ? 'translate-x-0 opacity-100'
                                    : 'translate-x-8 opacity-0'
                                    }`}
                                    style={{
                                        transitionDelay: isVisible ? `${(index * 150) + 350}ms` : '0ms'
                                    }}>
                                    {service.name}
                                </CardTitle>
                            </div>
                        </div>

                        <CardDescription className={`text-base xl:text-lg text-text-subtitle leading-relaxed font-medium transition-all duration-700 ease-out ${isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-4 opacity-0'
                            }`}
                            style={{
                                transitionDelay: isVisible ? `${(index * 150) + 400}ms` : '0ms'
                            }}>
                            {service.fullDescription}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-8">
                        {/* Key Features */}
                        <div className={`transition-all duration-700 ease-out ${isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-6 opacity-0'
                            }`}
                            style={{
                                transitionDelay: isVisible ? `${(index * 150) + 500}ms` : '0ms'
                            }}>
                            <h4 className="font-bold text-foreground mb-5 text-lg flex items-center gap-2">
                                <Check className="w-5 h-5 text-primary" />
                                What's Included
                            </h4>
                            <div className="grid grid-cols-1 gap-3">
                                {service.features.slice(0, 6).map((feature, idx) => (
                                    <div key={idx}
                                        className={`flex items-start gap-3 p-2 rounded-lg hover:bg-card/50 transition-all duration-500 ${isVisible
                                            ? 'translate-x-0 opacity-100'
                                            : 'translate-x-4 opacity-0'
                                            }`}
                                        style={{
                                            transitionDelay: isVisible ? `${(index * 150) + 600 + (idx * 50)}ms` : '0ms'
                                        }}
                                    >
                                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <Check className="w-3 h-3 text-primary" />
                                        </div>
                                        <span className="text-text-subtitle font-medium leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className={`transition-all duration-700 ease-out ${isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-6 opacity-0'
                            }`}
                            style={{
                                transitionDelay: isVisible ? `${(index * 150) + 700}ms` : '0ms'
                            }}>
                            <h4 className="font-bold text-foreground mb-4 text-lg">Technology Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {service.technologies.map((tech, idx) => (
                                    <Badge
                                        key={idx}
                                        variant="secondary"
                                        className={`text-xs font-semibold px-3 py-2 bg-card border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-500 rounded-full ${isVisible
                                            ? 'scale-100 opacity-100'
                                            : 'scale-75 opacity-0'
                                            }`}
                                        style={{
                                            transitionDelay: isVisible ? `${(index * 150) + 800 + (idx * 30)}ms` : '0ms'
                                        }}
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className={`grid grid-cols-2 gap-6 p-6 bg-gradient-to-r from-card/50 to-card/30 rounded-2xl border border-border/30 backdrop-blur-sm transition-all duration-700 ease-out ${isVisible
                            ? 'translate-y-0 opacity-100 scale-100'
                            : 'translate-y-8 opacity-0 scale-95'
                            }`}
                            style={{
                                transitionDelay: isVisible ? `${(index * 150) + 900}ms` : '0ms'
                            }}>
                            <div className={`text-center transition-all duration-500 ${isVisible
                                ? 'translate-x-0 opacity-100'
                                : '-translate-x-4 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: isVisible ? `${(index * 150) + 950}ms` : '0ms'
                                }}>
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <Clock className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-sm text-text-muted font-medium block mb-1">Delivery Time</span>
                                <p className="font-bold text-foreground text-lg">{service.deliveryTime}</p>
                            </div>
                            <div className={`text-center transition-all duration-500 ${isVisible
                                ? 'translate-x-0 opacity-100'
                                : 'translate-x-4 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: isVisible ? `${(index * 150) + 1000}ms` : '0ms'
                                }}>
                                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <RotateCcw className="w-5 h-5 text-accent" />
                                </div>
                                <span className="text-sm text-text-muted font-medium block mb-1">Revisions</span>
                                <p className="font-bold text-foreground text-lg">{service.revisions}</p>
                            </div>
                        </div>

                        {/* Enhanced CTA Buttons */}
                        <div className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 ease-out ${isVisible
                            ? 'translate-y-0 opacity-100 scale-100'
                            : 'translate-y-8 opacity-0 scale-95'
                            }`}
                            style={{
                                transitionDelay: isVisible ? `${(index * 150) + 1100}ms` : '0ms'
                            }}>
                            <Button
                                size="lg"
                                className="flex-1 group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-500 py-6 rounded-2xl font-semibold text-base"
                            >
                                <Link to="/servicedetails">Start Your Project</Link>
                                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                            </Button>
                        </div>
                    </CardContent>
                </div>
            </div>
        </Card>
    );
};