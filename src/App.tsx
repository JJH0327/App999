import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, ArrowRight, Phone, Mail, MapPin, Building } from 'lucide-react';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import AppTypes from './components/AppTypes';
import Process from './components/Process';
import Pricing from './components/Pricing';
import WhoWeHelp from './components/WhoWeHelp';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PaymentModal from './components/PaymentModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import RefundPolicy from './components/RefundPolicy';

function App() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showRefundPolicy, setShowRefundPolicy] = useState(false);

  const handleGetStarted = () => {
    setShowPaymentModal(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">App$999</div>
          <div className="hidden md:flex space-x-8">
            <a href="#why-choose-us" className="hover:text-blue-600 transition-colors">Why Us</a>
            <a href="#app-types" className="hover:text-blue-600 transition-colors">App Types</a>
            <a href="#process" className="hover:text-blue-600 transition-colors">Process</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          </div>
          <button 
            onClick={handleGetStarted}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            Get Started
          </button>
        </div>
      </nav>

      <main>
        <Hero onGetStarted={handleGetStarted} />
        <WhyChooseUs />
        <AppTypes onGetStarted={handleGetStarted} />
        <Process onGetStarted={handleGetStarted} />
        <Pricing onGetStarted={handleGetStarted} />
        <WhoWeHelp onGetStarted={handleGetStarted} />
        <FAQ />
        <CTA onGetStarted={handleGetStarted} />
        <Footer 
          onPrivacyPolicyClick={() => setShowPrivacyPolicy(true)}
          onTermsOfServiceClick={() => setShowTermsOfService(true)}
          onRefundPolicyClick={() => setShowRefundPolicy(true)}
        />
      </main>

      {showPaymentModal && (
        <PaymentModal onClose={() => setShowPaymentModal(false)} />
      )}

      {showPrivacyPolicy && (
        <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
      )}

      {showTermsOfService && (
        <TermsOfService onClose={() => setShowTermsOfService(false)} />
      )}

      {showRefundPolicy && (
        <RefundPolicy onClose={() => setShowRefundPolicy(false)} />
      )}
    </div>
  );
}

export default App;