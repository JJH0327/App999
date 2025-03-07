import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Build Your Mobile App in Just 2 Weeks – Only $999!
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
              From Idea to Market – No Tech Background? No Problem!
            </h2>
            <p className="text-lg text-gray-700">
              Have a game-changing app idea but don't know where to start? We help entrepreneurs and businesses launch fully functional mobile apps in just 14 days – at an unbeatable price of $999!
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-blue-600 text-xl mb-2">🚀</div>
                <div className="font-medium">Fast & Reliable</div>
                <div className="text-sm text-gray-600">Your app, built & launched in 2 weeks.</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-blue-600 text-xl mb-2">💰</div>
                <div className="font-medium">Affordable</div>
                <div className="text-sm text-gray-600">No more huge upfront costs. Only $999.</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-blue-600 text-xl mb-2">🔧</div>
                <div className="font-medium">Ongoing Support</div>
                <div className="text-sm text-gray-600">Monthly updates & new features for just $200/month.</div>
              </div>
            </div>
            <p className="text-gray-700">
              Don't let budget or tech barriers stop you from launching the next big thing. Start your journey today!
            </p>
            <button 
              onClick={onGetStarted}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg flex items-center space-x-2 transition-colors"
            >
              <span>Get Started Now</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute inset-0 w-40 h-40 mx-auto my-auto bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Mobile app development" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 w-48">
                <div className="text-sm font-medium">App Development</div>
                <div className="text-2xl font-bold text-blue-600">$999</div>
                <div className="text-xs text-gray-500">Launch in 2 weeks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;