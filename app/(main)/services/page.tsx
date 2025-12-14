import React from 'react';
import { Wrench, Lightbulb, Shield, Zap, Headphones, Home } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-indigo-600" />,
      title: "Smart Home Consultation",
      description: "Expert assessment of your home and lifestyle to design the perfect smart home solution tailored to your needs."
    },
    {
      icon: <Wrench className="w-12 h-12 text-indigo-600" />,
      title: "Professional Installation",
      description: "Complete installation and setup of all your smart home devices with seamless integration and optimal placement."
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-indigo-600" />,
      title: "Lighting Design",
      description: "Custom lighting solutions that enhance ambiance, improve energy efficiency, and integrate with your smart home ecosystem."
    },
    {
      icon: <Shield className="w-12 h-12 text-indigo-600" />,
      title: "Security Integration",
      description: "Comprehensive security systems with smart cameras, sensors, and monitoring that provide peace of mind."
    },
    {
      icon: <Zap className="w-12 h-12 text-indigo-600" />,
      title: "Energy Management",
      description: "Smart climate control and energy monitoring solutions to reduce costs while maintaining comfort."
    },
    {
      icon: <Headphones className="w-12 h-12 text-indigo-600" />,
      title: "Ongoing Support",
      description: "Lifetime support and maintenance to keep your smart home running smoothly with regular updates and troubleshooting."
    }
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-16 px-4 md:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Our Smart Home Services
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive solutions to transform your house into an intelligent, efficient, and secure smart home
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">
            Schedule a free consultation with our smart home experts today. We will assess your needs and create a customized solution that fits your lifestyle and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors">
              Book Free Consultation
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900 font-semibold py-3 px-8 rounded-full text-lg transition-colors">
              View Our Solutions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;