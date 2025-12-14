import React from "react";
import { Home, Wrench, Zap, Headphones } from "lucide-react";

const BenefitsSection = ({ textCenter }: { textCenter: boolean }) => {
  return (
    <section className="py-16 bg-blue-50 dark:bg-blue-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {!textCenter ? (
          <div className="flex flex-wrap items-center justify-center md:justify-between mb-12">
            <h2 className="text-3xl md:text-5xl !text-center md:text-start font-bold text-gray-900 dark:text-white border-l-4 p-2 border-l-indigo-500">
              Why Choose Cognidome?
            </h2>
          </div>
        ) : (
          <h2 className="text-3xl md:text-5xl font-bold text-start md:text-center text-gray-900 dark:text-white mb-12 border-l-4 border-l-indigo-500 w-fit mx-auto p-2">
            Why Choose Cognidome?
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center space-y-4 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <Home size={48} className="text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Expert Consultation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Professional smart home planning tailored to your lifestyle and budget.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <Wrench size={48} className="text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Professional Installation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Certified technicians ensure seamless setup and integration of all devices.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <Zap size={48} className="text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Energy Efficiency
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Smart solutions designed to reduce energy consumption and lower bills.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <Headphones size={48} className="text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Lifetime Support
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Ongoing support and maintenance to keep your smart home running smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;