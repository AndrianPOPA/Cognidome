import ContactForm from '@/components/forms/ContactForm';
import React from 'react';

const HelpPage = () => {
  const faqs = [
    {
      question: "How do I set up my new smart home devices?",
      answer: "Each product comes with a quick start guide. For detailed setup instructions, visit our Support section or schedule a professional installation with our certified technicians."
    },
    {
      question: "What smart home platforms are compatible with Cognidome products?",
      answer: "Our products are compatible with all major smart home platforms including Amazon Alexa, Google Assistant, Apple HomeKit, and Samsung SmartThings."
    },
    {
      question: "Do you offer installation services?",
      answer: "Yes, we provide professional installation services for all our smart home solutions. Our certified technicians ensure seamless integration and optimal performance."
    },
    {
      question: "What is your return policy for smart home products?",
      answer: "We offer a 30-day return policy for all unopened products. For opened or installed products, please contact our support team for assistance."
    },
    {
      question: "How can I get technical support after purchase?",
      answer: "We provide lifetime technical support for all our products. Contact us via phone, email, or schedule a support visit through our website."
    }
  ];

  return (
    <div className="px-4 py-8 lg:px-16 lg:py-12 bg-blue-50 dark:bg-blue-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Help Center
        </h1>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{faq.question}</h3>
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Contact Support</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Cannot find what you are looking for? Our smart home experts are here to help.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default HelpPage;