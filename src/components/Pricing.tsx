import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onGetStarted: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onGetStarted }) => {
  return (
    <section id="pricing" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent Pricing – No Hidden Fees!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-medium">
              Most Popular
            </div>
            <div className="text-2xl font-bold mb-2 flex items-center">
              <span className="text-3xl mr-2">🎯</span>
              App Development
            </div>
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-bold text-blue-600">$999</span>
              <span className="text-gray-500 ml-2">one-time</span>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="ml-3 text-gray-700">Custom mobile app built & launched in 2 weeks.</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="ml-3 text-gray-700">Fully functional with a sleek, professional design.</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="ml-3 text-gray-700">Perfect for startups, businesses & entrepreneurs.</span>
              </div>
            </div>
            
            <button 
              onClick={onGetStarted}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors"
            >
              Get Started
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100">
            <div className="text-2xl font-bold mb-2 flex items-center">
              <span className="text-3xl mr-2">🔄</span>
              Ongoing Support
            </div>
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-bold text-blue-600">$200</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="ml-3 text-gray-700">Bug fixes & performance updates.</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="ml-3 text-gray-700">Add new features anytime.</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="ml-3 text-gray-700">Full tech support whenever you need it.</span>
              </div>
            </div>
            
            <button 
              onClick={onGetStarted}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-xl font-medium transition-colors"
            >
              Add to Your Plan
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium mb-6">
            Your tech journey starts here – without breaking the bank!
          </p>
          <button 
            onClick={onGetStarted}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 mx-auto transition-colors"
          >
            <span>Start Your App Today</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;