import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "What types of apps do you build?",
      answer: "We specialize in building a diverse range of mobile applications tailored to your specific needs. These include e-commerce apps, social networking apps, booking and reservation apps, productivity tools, educational apps, healthcare apps, and entertainment apps. Each app we build is customized to your business or project needs to help you achieve your specific goals."
    },
    {
      question: "What if I don't have any technical knowledge?",
      answer: "No need to worry! Our team handles everything for you. From the initial idea to the app's launch, we manage the entire process. We will work closely with you to understand your goals and vision, then take care of design, development, launch, and ongoing support. You don't need to worry about the technical aspects – we've got it covered."
    },
    {
      question: "How do I know my app will be high quality?",
      answer: "We take pride in delivering top-tier quality. We follow industry best practices, place heavy emphasis on user experience, optimize performance, conduct rigorous quality assurance testing, and provide post-launch support. Your app will be fast, responsive, and optimized for a smooth user experience."
    },
    {
      question: "What happens after my app is launched?",
      answer: "Once your app is live, the journey doesn't end. We offer a $200/month support plan that covers ongoing updates, bug fixes and maintenance, feature upgrades, and analytics & reporting. This support plan ensures that your app remains fresh, functional, and ahead of the competition."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is simple: Click the 'Get Started' button on our website, share your app idea, schedule a consultation, review our proposal and planning, and then we'll begin development. We make the process as easy as possible for you, providing support at every step along the way."
    },
    {
      question: "How long does it take to develop an app?",
      answer: "We can build and launch your app in just 2 weeks—from design to deployment on the App Store and Google Play Store. However, the App Store and Play Store review process can take up to 2 weeks, which is beyond our control. Overall, your app will be live and available to users in 30 working days or less."
    },
    {
      question: "How much does it cost to build an app?",
      answer: "We offer a flat rate of $999 to build your app. This includes custom UI/UX design, development for iOS, Android, or both, and deployment to the App Store and Google Play Store. After launch, we provide ongoing tech support for just $200/month, which covers updates, bug fixes, maintenance, and adding new features."
    },
    {
      question: "Will my app be available on both iOS and Android?",
      answer: "Yes! We offer cross-platform development to ensure that your app is available on both iOS and Android. If you have a preference for one platform initially, we can start with that and then expand to the other platform later. We use the best tools and frameworks (like Flutter or React Native) to ensure that your app functions seamlessly across both platforms."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ</h2>
          <p className="text-xl text-gray-600">
            Frequently Asked Questions
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;