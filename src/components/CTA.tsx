import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onGetStarted: () => void;
}

const CTA: React.FC<CTAProps> = ({ onGetStarted }) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          📢 Stop Waiting – Turn Your Idea into a Live App Today!
        </h2>
        <p className="text-xl mb-8">
          🚀 Only $999 | Delivered in 2 Weeks | Full Support Available
        </p>
        <button 
          onClick={onGetStarted}
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg flex items-center space-x-2 mx-auto transition-colors"
        >
          <span>Get Started Now</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CTA;