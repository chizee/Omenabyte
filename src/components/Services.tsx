import React from 'react';
import { services } from '../data/services';
import { Check, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactAction = () => {
    const link = document.createElement('a');
    link.href = 'mailto:omenabyte@outlook.com';
    link.target = '_blank';
    link.click();
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Premium Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-yellow-400 dark:hover:border-yellow-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Subscription Section */}
        <div className={`bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-8 md:p-12 text-center text-white transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Monthly Subscription Plans
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Need recurring content or campaign ads? Ask about our monthly plans. Let's talk – we keep it flexible and affordable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-3">Social Media Management</h4>
              <p className="opacity-90">Monthly content posting and social media strategy</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-3">Campaign Video Ads</h4>
              <p className="opacity-90">Monthly video advertisements for ongoing campaigns</p>
            </div>
          </div>
          
          <button
            onClick={contactAction}
            className="group px-8 py-4 bg-white text-yellow-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center mx-auto"
          >
            Get Custom Quote
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;