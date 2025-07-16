import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactAction = () => {
    const link = document.createElement('a');
    link.href = 'mailto:omenabyte@outlook.com';
    link.target = '_blank';
    link.click();
  };

  const telegramAction = () => {
    window.open('https://t.me/omenabyte_bot', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="absolute inset-0 bg-[url('/images/premium-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-bounce"></div>
      </div>

      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <img 
              src="/Omenabyte-logo.png" 
              alt="Omenabyte Digital Solutions" 
              className="h-32 md:h-40 lg:h-48 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-tight">
          OMENABYTE
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-gray-300 leading-relaxed">
          Digital Solutions
        </h2>
        {/* Tagline */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white">
              Digital Precision. Creative Brilliance.
            </p>
            <Sparkles className="h-6 w-6 text-yellow-400 ml-2" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Premium digital studio specializing in graphic art, web design, video content, and social media management.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={contactAction}
            className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold text-lg rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25 flex items-center"
          >
            Hire Me
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={telegramAction}
            className="px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-semibold text-lg rounded-xl hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            Message on Telegram
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;