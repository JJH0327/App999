import React from 'react';
import { X } from 'lucide-react';

interface RefundPolicyProps {
  onClose: () => void;
}

const RefundPolicy: React.FC<RefundPolicyProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Refund Policy</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-sm text-gray-500 mb-4">Effective Date: October 27, 2023</p>
            
            <p>At <strong>Meaningful Technology UAB</strong>, we strive to ensure your satisfaction. If you are unhappy with our services, we offer the following refund policy:</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1. Full Refund</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>If you are dissatisfied with our app development services, you may request a <strong>full refund</strong> of the $999 fee within <strong>7 days</strong> of project delivery.</li>
              <li>To qualify, you must provide a written explanation of your dissatisfaction.</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2. Refund Process</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Submit your refund request to <strong>contact@meaningfultech.solutions</strong>.</li>
              <li>We will review your request and process the refund within <strong>14 business days</strong>.</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">3. Exclusions</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Refunds do not apply to ongoing support plans ($200/month).</li>
              <li>No refunds will be issued after the 7-day refund window.</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">4. Contact Us</h3>
            <p>For questions about our Refund Policy, contact us at <strong>contact@meaningfultech.solutions</strong>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;