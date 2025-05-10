import {
  GraduationCap,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-6 w-6 text-brand-blue" />
              <span className="text-lg font-bold text-brand-blue">
                academicore.system
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Empowering educational institutions with modern tools for better
              learning outcomes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-brand-blue transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-brand-blue transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-brand-blue transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-brand-blue transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Product standout
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Updates
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Webinars
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} academicore.system. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-brand-blue transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-brand-blue transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-brand-blue transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
