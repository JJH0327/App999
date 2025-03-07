import React from 'react';
import { Check } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Fastest & Most Affordable Mobile App Development Service
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-8">
              Building an app shouldn't take months or cost thousands of dollars. We simplify the process so that anyone can turn their idea into a real, market-ready product in just 2 weeks.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">End-to-End Development</h3>
                  <p className="text-gray-600">From concept to launch, we handle everything.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">No Tech Knowledge Needed</h3>
                  <p className="text-gray-600">We translate your ideas into reality.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Quality & Performance</h3>
                  <p className="text-gray-600">Sleek, fast, and user-friendly apps.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Post-Launch Support</h3>
                  <p className="text-gray-600">Updates, bug fixes & feature enhancements for only $200/month.</p>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-lg font-medium">
              Your success is our mission. Let's get your app live and make money – fast!
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="App development team" 
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg p-4">
              <div className="text-sm font-medium">Development Time</div>
              <div className="text-2xl font-bold text-blue-600">2 Weeks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;