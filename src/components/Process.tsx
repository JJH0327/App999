import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProcessProps {
  onGetStarted: () => void;
}

const Process: React.FC<ProcessProps> = ({ onGetStarted }) => {
  return (
    <section id="process" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How It Works – Your App in Just 3 Simple Steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-2xl relative">
            <div className="absolute -top-5 -left-5 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <h3 className="text-xl font-bold mb-4">Share Your Idea</h3>
            <p className="text-gray-700">
              Tell us what you need, and we'll design the roadmap. We'll work closely with you to understand your vision and goals.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Share your idea" 
              className="mt-6 rounded-lg w-full h-48 object-cover"
            />
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl relative">
            <div className="absolute -top-5 -left-5 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <h3 className="text-xl font-bold mb-4">We Build Your App</h3>
            <p className="text-gray-700">
              Our experts develop a high-quality app in just 14 days. We handle everything from design to development to testing.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="We build your app" 
              className="mt-6 rounded-lg w-full h-48 object-cover"
            />
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl relative">
            <div className="absolute -top-5 -left-5 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <h3 className="text-xl font-bold mb-4">Launch & Grow</h3>
            <p className="text-gray-700">
              Your app goes live, and we provide ongoing support! We'll help you navigate the app stores and start growing your user base.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80" 
              alt="Launch and grow" 
              className="mt-6 rounded-lg w-full h-48 object-cover"
            />
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium mb-6">
            💡 Have an idea? Let's make it a reality in 2 weeks!
          </p>
          <button 
            onClick={onGetStarted}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 mx-auto transition-colors"
          >
            <span>Get Started Now</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;