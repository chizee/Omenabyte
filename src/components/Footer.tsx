import React from 'react';
import { Heart, Mail, MessageCircle, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:omenabyte@outlook.com',
      label: 'Email'
    },
    {
      icon: MessageCircle,
      href: 'https://t.me/omenabyte_bot',
      label: 'Telegram'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/omenabyte',
      label: 'Instagram'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/omenabyte',
      label: 'Twitter'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/Omenabyte-logo.png" 
                alt="Omenabyte" 
                className="h-12 w-auto mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">OMENABYTE</h3>
                <p className="text-gray-400 text-sm">Digital Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Premium digital studio specializing in graphic art, web design, video content, and social media management. Digital Precision. Creative Brilliance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Portfolio', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">
                39 Alfred Rewane Rd<br />
                Ikoyi, Lagos 100231<br />
                Lagos, Nigeria
              </p>
              <p className="text-gray-400 text-sm">
                +234 904 918 4412
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-yellow-600 rounded-lg transition-colors duration-300 group"
                    aria-label={link.label}
                  >
                    <IconComponent className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
                Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Omenabyte Digital Solutions
              </p>
              <p className="text-gray-500 text-xs mt-1">
                © {currentYear} Omenabyte. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;