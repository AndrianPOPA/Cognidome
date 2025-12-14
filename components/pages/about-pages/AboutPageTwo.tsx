import Image from "next/image";
import React from "react";
import { Home, Users, Zap, Eye, Target } from 'lucide-react';

const AboutPageTwo = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-16 items-center">
        {/* Left Column: Introduction */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Founded in 2018, Cognidome emerged from a simple idea: making smart home technology accessible and intuitive for everyone. What started as a small team of tech enthusiasts has grown into a leading provider of smart home solutions.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            We believe that technology should enhance your life, not complicate it. Our mission is to create seamless, intelligent home environments that provide comfort, security, and energy efficiency through innovative automation solutions.
          </p>
        </div>

      
      </div>

      {/* Additional Sections */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Mission */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              To empower homeowners with intelligent, intuitive smart home solutions that enhance comfort, security, and energy efficiency while simplifying daily life through cutting-edge automation technology.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Values</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Innovation in smart home technology</li>
              <li>Customer-centric solutions</li>
              <li>Environmental responsibility</li>
              <li>Professional excellence</li>
              <li>Transparent communication</li>
            </ul>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              To be the leading provider of smart home solutions, creating intelligent living spaces that anticipate needs, reduce environmental impact, and provide unparalleled convenience for modern families.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageTwo;