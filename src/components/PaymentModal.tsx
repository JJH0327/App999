import React, { useState } from 'react';
import { X } from 'lucide-react';

interface PaymentModalProps {
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  const [selectedService, setSelectedService] = useState<{price: number, description: string} | null>(null);
  
  const selectService = (price: number, description: string) => {
    setSelectedService({ price, description });
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Choose Your Service</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
          
          <div 
            className={`mb-4 p-4 border rounded-xl cursor-pointer transition-all ${
              selectedService?.price === 999 ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => selectService(999, 'Only App Development')}
          >
            <div className="font-bold text-lg">$999 - Only App Development</div>
            <div className="text-gray-600">Get your app built and launched in 2 weeks</div>
          </div>
          
          <div 
            className={`mb-4 p-4 border rounded-xl cursor-pointer transition-all ${
              selectedService?.price === 1499 ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => selectService(1499, 'UI Design & App Development')}
          >
            <div className="font-bold text-lg">$1499 - UI Design & App Development</div>
            <div className="text-gray-600">Custom UI design plus full app development</div>
          </div>
          
          <div 
            className={`mb-4 p-4 border rounded-xl cursor-pointer transition-all ${
              selectedService?.price === 199 ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => selectService(199, 'Monthly Tech Support')}
          >
            <div className="font-bold text-lg">$199 - Monthly Tech Support</div>
            <div className="text-gray-600">Ongoing maintenance, updates, and new features</div>
          </div>
          
          {selectedService && (
            <form className="mt-8">
              <h3 className="text-xl font-bold mb-4">Customer Details</h3>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name:
                </label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address:
                </label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message:
                </label>
                <textarea 
                  id="message" 
                  placeholder="Any additional details..." 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                ></textarea>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Complete Your Payment</h3>
              <p className="mb-4 font-medium">
                You selected: {selectedService.description} - ${selectedService.price}
              </p>
              
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number:
                </label>
                <input 
                  type="text" 
                  id="cardNumber" 
                  placeholder="1234 5678 9012 3456" 
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date:
                  </label>
                  <input 
                    type="text" 
                    id="expiry" 
                    placeholder="MM/YY" 
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                    CVV:
                  </label>
                  <input 
                    type="text" 
                    id="cvv" 
                    placeholder="123" 
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors"
              >
                Pay Now
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;