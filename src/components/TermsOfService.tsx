import React from 'react';
import { X } from 'lucide-react';

interface TermsOfServiceProps {
  onClose: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Terms of Service</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-sm text-gray-500 mb-4">Effective Date: October 27, 2023</p>
            
            <p>By using the services of <strong>Meaningful Technology UAB</strong> ("we," "us," or "our"), you agree to these Terms of Service.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1. Services Provided</h3>
            <p>We offer mobile app development services, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Custom app design and development.</li>
              <li>Deployment to the App Store and Google Play Store.</li>
              <li>Ongoing support and maintenance for $200/month.</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2. Payment Terms</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>A one-time fee of <strong>$999</strong> is required to start app development.</li>
              <li>Ongoing support is billed monthly at <strong>$200/month</strong>.</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">3. Intellectual Property</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>You retain ownership of your app idea and content.</li>
              <li>We retain ownership of any pre-existing tools, code, or templates used in development.</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">4. Responsibilities</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>You agree to provide accurate information and timely feedback during the development process.</li>
              <li>We will deliver the app within <strong>14 days</strong> of project initiation, subject to your timely cooperation.</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">5. Limitation of Liability</h3>
            <p>We are not liable for:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Delays caused by third-party platforms (e.g., App Store or Google Play review processes).</li>
              <li>Losses arising from app usage or market performance.</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">6. Termination</h3>
            <p>Either party may terminate the agreement with written notice. Refunds will be handled as per our Refund Policy.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">7. Governing Law</h3>
            <p>These terms are governed by the laws of <strong>Lithuania</strong>.</p>
            
            <p className="mt-6">For questions, contact us at <strong>contact@meaningfultech.solutions</strong>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;