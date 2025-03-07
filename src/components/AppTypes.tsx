import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AppTypesProps {
  onGetStarted: () => void;
}

const AppTypes: React.FC<AppTypesProps> = ({ onGetStarted }) => {
  const appTypes = [
    {
      icon: '📱',
      title: 'E-commerce Apps',
      items: ['Online stores & marketplaces', 'Subscription-based shopping', 'Dropshipping solutions']
    },
    {
      icon: '💬',
      title: 'Social Networking Apps',
      items: ['Messaging & chat apps', 'Community & forum platforms', 'Dating apps']
    },
    {
      icon: '📅',
      title: 'Booking & Appointment Apps',
      items: ['Salon & spa booking', 'Medical & doctor appointment scheduling', 'Consultant & coaching session bookings']
    },
    {
      icon: '🚗',
      title: 'On-Demand Service Apps',
      items: ['Ride-sharing & Transportation', 'Food & grocery delivery', 'Home Services (plumbing, cleaning, repairs)']
    },
    {
      icon: '🏋️',
      title: 'Fitness & Wellness Apps',
      items: ['Workout & exercise tracking', 'Meditation & mental wellness', 'Nutrition & meal planning']
    },
    {
      icon: '🎓',
      title: 'Educational & E-Learning Apps',
      items: ['Online courses & tutoring', 'Language learning apps', 'Skill development platforms']
    },
    {
      icon: '💼',
      title: 'Productivity & Business Apps',
      items: ['Task management & collaboration tools', 'CRM & business automation', 'Financial tracking & invoicing']
    },
    {
      icon: '🎟️',
      title: 'Event & Ticketing Apps',
      items: ['Concert & festival ticket sales', 'Virtual event platforms', 'Conference & networking apps']
    }
  ];

  return (
    <section id="app-types" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Apps We Build</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whatever Your Idea, We Can Build It!
          </p>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            We develop apps for various industries and needs. Here's a detailed breakdown:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {appTypes.map((type, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{type.icon}</div>
              <h3 className="text-xl font-bold mb-3">{type.title}</h3>
              <ul className="space-y-2">
                {type.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium mb-6">
            💡 Got a unique idea? Let's bring it to life!
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

export default AppTypes;