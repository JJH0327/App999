import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WhoWeHelpProps {
  onGetStarted: () => void;
}

const WhoWeHelp: React.FC<WhoWeHelpProps> = ({ onGetStarted }) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Help</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether You're a Startup, Entrepreneur, or Business – We've Got You Covered!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-2xl text-center">
            <div className="text-4xl mb-4">🔹</div>
            <h3 className="text-xl font-bold mb-3">Startups</h3>
            <p className="text-gray-700">
              Launch your MVP fast and attract investors. Get to market quickly and start validating your idea with real users.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Startups" 
              className="mt-6 rounded-lg w-full h-48 object-cover"
            />
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl text-center">
            <div className="text-4xl mb-4">🔹</div>
            <h3 className="text-xl font-bold mb-3">Businesses</h3>
            <p className="text-gray-700">
              Build a custom app to grow your brand. Enhance customer experience and streamline your operations with a tailored solution.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
              alt="Businesses" 
              className="mt-6 rounded-lg w-full h-48 object-cover"
            />
          </div>
          
          <div className="bg-blue-50 p-8 rounded-2xl text-center">
            <div className="text-4xl mb-4">🔹</div>
            <h3 className="text-xl font-bold mb-3">Entrepreneurs</h3>
            <p className="text-gray-700">
              No tech skills? No problem. We bring your idea to life. Focus on your business while we handle the technical aspects.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Entrepreneurs" 
              className="mt-6 rounded-lg w-full h-48 object-cover"
            />
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium mb-6">
            🚀 Your vision, our expertise – let's build something amazing together!
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

export default WhoWeHelp;