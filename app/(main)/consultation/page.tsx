import React from 'react';
import { Calendar, Phone, Mail, MapPin } from 'lucide-react';

const ConsultationPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-4 md:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Free Smart Home Consultation
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Let our experts design the perfect smart home solution for your lifestyle and budget
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Schedule Your Consultation
          </h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="(123) 456-7890"
              />
            </div>
            
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Preferred Time
              </label>
              <select
                id="time"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option>Morning (9AM - 12PM)</option>
                <option>Afternoon (12PM - 5PM)</option>
                <option>Evening (5PM - 8PM)</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tell us about your home
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Number of rooms, current smart devices, specific needs, etc."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Request Consultation
            </button>
          </form>
        </div>
        
        <div>
          <div className="bg-blue-50 dark:bg-blue-900 rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What to Expect
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Calendar className="flex-shrink-0 w-6 h-6 text-indigo-600 mt-1 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  60-minute in-depth consultation at your home or virtually
                </span>
              </li>
              <li className="flex items-start">
                <Calendar className="flex-shrink-0 w-6 h-6 text-indigo-600 mt-1 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  Personalized smart home assessment and recommendations
                </span>
              </li>
              <li className="flex items-start">
                <Calendar className="flex-shrink-0 w-6 h-6 text-indigo-600 mt-1 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  Custom solution design with budget considerations
                </span>
              </li>
              <li className="flex items-start">
                <Calendar className="flex-shrink-0 w-6 h-6 text-indigo-600 mt-1 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">
                  No-obligation quote for products and installation
                </span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="flex-shrink-0 w-5 h-5 text-indigo-600 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="flex-shrink-0 w-5 h-5 text-indigo-600 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">consult@cognidome.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="flex-shrink-0 w-5 h-5 text-indigo-600 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">123 Smart Street, Tech City, TC 10001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;