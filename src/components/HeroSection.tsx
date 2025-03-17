
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Modern Education Management <span className="text-brand-blue">Simplified</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              A comprehensive platform connecting students, teachers, and administrators for a seamless educational experience.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-brand-green" />
                <span className="text-gray-700">Streamline administrative tasks</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-brand-green" />
                <span className="text-gray-700">Enhance communication between stakeholders</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-brand-green" />
                <span className="text-gray-700">Track academic progress in real-time</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-brand-blue hover:bg-opacity-90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                Schedule Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-xl shadow-xl overflow-hidden animate-float">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="School System Dashboard" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-0 right-0 -z-10 w-full h-full bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
