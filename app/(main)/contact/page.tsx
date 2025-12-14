import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

const ContactPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-4 md:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Cognidome
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Have questions about our smart home solutions? Our team is here to help you create the perfect intelligent living space.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="flex-shrink-0 w-6 h-6 text-indigo-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="flex-shrink-0 w-6 h-6 text-indigo-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">info@cognidome.com</p>
                  <p className="text-gray-600 dark:text-gray-300">support@cognidome.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="flex-shrink-0 w-6 h-6 text-indigo-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Office</h3>
                  <p className="text-gray-600 dark:text-gray-300">123 Smart Street</p>
                  <p className="text-gray-600 dark:text-gray-300">Tech City, TC 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="flex-shrink-0 w-6 h-6 text-indigo-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Business Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9AM - 6PM</p>
                  <p className="text-gray-600 dark:text-gray-300">Saturday: 10AM - 4PM</p>
                  <p className="text-gray-600 dark:text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Visit Our Showroom
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Experience our smart home solutions firsthand at our interactive showroom. See demos of our latest products and speak with our experts.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Schedule a visit to explore complete smart home setups and get personalized recommendations for your space.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Send Us a Message
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;