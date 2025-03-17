
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-brand-blue" />
            <span className="text-xl font-bold text-brand-blue">school.system</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-brand-blue transition-colors">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-brand-blue transition-colors">Benefits</a>
            <a href="#testimonials" className="text-gray-600 hover:text-brand-blue transition-colors">Testimonials</a>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
              Login
            </Button>
            <Button className="bg-brand-blue hover:bg-opacity-90 text-white">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-600 hover:text-brand-blue transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a 
                href="#benefits" 
                className="text-gray-600 hover:text-brand-blue transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Benefits
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-600 hover:text-brand-blue transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors w-full">
                  Login
                </Button>
                <Button className="bg-brand-blue hover:bg-opacity-90 text-white w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
