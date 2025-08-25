import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden" style={{ fontFamily: 'Sansation, sans-serif' }} >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')"
        }}
      />

      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(200_100%_50%_/_0.1),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(240_100%_60%_/_0.1),transparent)] pointer-events-none" />

      <div className="absolute inset-0 bg-black bg-opacity-30" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <Badge variant="secondary" className="mb-6 bg-success/20 text-success border-success/30">
          <div className="w-2 h-2 bg-success rounded-full mr-2" />
          Think Smart. Build Fast
        </Badge>

        <h2 className="text-4xl md:text-6xl font-bold text-text-hero mb-6">
          Let's work together
        </h2>

        <p className="text-xl text-text-subtitle max-w-3xl mx-auto mb-8">
          Join our subscription service and get your dream website designed and launched by experts.
          Start today, scale tomorrow!
        </p>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow animate-glow-pulse"
        >
          <Link to="/contact">Book your free intro call</Link>
        </Button>
      </div>
    </section>
  );
};