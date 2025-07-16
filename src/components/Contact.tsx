import React from 'react';
import { Mail, MessageCircle, Phone, Instagram, Twitter, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'omenabyte@outlook.com',
      action: () => window.open('mailto:omenabyte@outlook.com', '_blank'),
      primary: true
    },
    {
      icon: MessageCircle,
      label: 'Telegram',
      value: '@omenabyte_bot',
      action: () => window.open('https://t.me/omenabyte_bot', '_blank'),
      primary: true
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 904 918 4412',
      action: () => window.open('tel:+2349049184412', '_blank')
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@omenabyte',
      action: () => window.open('https://instagram.com/omenabyte', '_blank')
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      value: '@omenabyte',
      action: () => window.open('https://twitter.com/omenabyte', '_blank')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to elevate your brand? Get in touch and let's create something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div
                    key={index}
                    onClick={method.action}
                    className={`group flex items-center p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      method.primary 
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 shadow-lg'
                        : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <div className={`p-3 rounded-xl mr-4 ${
                      method.primary 
                        ? 'bg-white/20'
                        : 'bg-yellow-500 text-white'
                    }`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className={`font-semibold text-lg ${
                        method.primary 
                          ? 'text-white'
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {method.label}
                      </h4>
                      <p className={`${
                        method.primary 
                          ? 'text-white/90'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {method.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Business Hours */}
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white flex items-center">
                <MapPin className="h-5 w-5 text-yellow-500 mr-2" />
                Business Hours
              </h4>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM (WAT)</p>
                <p><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM (WAT)</p>
                <p><span className="font-semibold">Sunday:</span> Available for urgent projects</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Our Location
            </h3>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Omenabyte Digital Solutions
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    39 Alfred Rewane Rd<br />
                    Ikoyi, Lagos 100231<br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 border border-gray-200 dark:border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.774621985654!2d3.4329!3d6.4488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf537f9be93b5%3A0x3a7e6df7e8fdf3c8!2s39%20Alfred%20Rewane%20Rd%2C%20Ikoyi%20100271%2C%20Lagos!5e0!3m2!1sen!2sng!4v1630000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Omenabyte Digital Solutions Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;