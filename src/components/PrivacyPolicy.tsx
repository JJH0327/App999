import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Privacy Policy</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-sm text-gray-500 mb-4">Effective Date: October 27, 2023</p>
            
            <p>At <strong>Meaningful Technology UAB</strong> ("we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1. Information We Collect</h3>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and payment details when you sign up for our services.</li>
              <li><strong>Technical Information:</strong> IP address, browser type, operating system, and usage data through cookies and analytics tools.</li>
              <li><strong>App-Specific Information:</strong> Details about your app idea, features, and requirements.</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2. How We Use Your Information</h3>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and improve our services.</li>
              <li>Communicate with you about your app development process.</li>
              <li>Process payments and manage subscriptions.</li>
              <li>Send updates, promotions, and support-related messages.</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">3. Sharing Your Information</h3>
            <p>We do not sell or rent your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Service Providers:</strong> Third-party vendors who assist in app development, payment processing, or analytics.</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety.</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">4. Data Security</h3>
            <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">5. Your Rights</h3>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt-out of marketing communications.</li>
              <li>Request a copy of your data.</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">6. Changes to This Policy</h3>
            <p>We may update this Privacy Policy periodically. Any changes will be posted on this page.</p>
            
            <p className="mt-6">For questions, contact us at <strong>contact@meaningfultech.solutions</strong>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;