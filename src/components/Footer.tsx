import React from 'react';
import { Phone, Mail, MapPin, Building, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onPrivacyPolicyClick: () => void;
  onTermsOfServiceClick: () => void;
  onRefundPolicyClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ 
  onPrivacyPolicyClick, 
  onTermsOfServiceClick, 
  onRefundPolicyClick 
}) => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">App$999</h3>
            <p className="text-gray-400">
              We build beautiful, functional mobile apps in just 2 weeks at an unbeatable price.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#why-choose-us" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#app-types" className="text-gray-400 hover:text-white transition-colors">App Types</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-400" />
                <span>+37068184772</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <span>contact@meaningfultech.solutions</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-gray-400" />
                <span>Vilnius, Lithuania</span>
              </li>
              <li className="flex items-center">
                <Building size={16} className="mr-2 text-gray-400" />
                <span>Meaningful Technology UAB</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={onPrivacyPolicyClick} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={onTermsOfServiceClick} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={onRefundPolicyClick} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Refund Policy
                </button>
              </li>
            </ul>
            <p className="text-gray-500 text-sm mt-4">
              Org no. 306726441
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} App$999. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;