
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/chat');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/25fe395b-beb5-478e-ad30-c2363a173a8c.png" 
            alt="Canadian Men's Health Foundation" 
            className="w-12 h-12 object-contain"
          />
          <span className="text-white font-bold text-xl">CMHF</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-white/80">
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Help</a>
          <button 
            onClick={handleGetStarted}
            className="hover:text-white transition-colors"
          >
            Get Started
          </button>
        </nav>
      </header>

      {/* Main content - Split layout */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-[80vh]">
        {/* Left side - Liam's large image */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Glow effect behind Liam */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 blur-3xl scale-75"></div>
            
            {/* Liam's image - large and centered */}
            <img 
              src="/lovable-uploads/43d6626d-43e6-4819-b569-29400860e958.png" 
              alt="Liam - Your AI Mental Health Companion" 
              className="relative w-full max-w-lg h-auto object-contain drop-shadow-2xl"
            />
            
            {/* Speech bubble */}
            <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-xs lg:max-w-sm">
              <p className="text-gray-800 font-medium text-sm lg:text-base">
                Ready to talk about what's on your mind? I'm here to listen and support you.
              </p>
              {/* Speech bubble tail */}
              <div className="absolute bottom-[-8px] left-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white/95"></div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 flex items-center justify-center lg:justify-start px-6 lg:px-12">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The AI companion
              <br />
              <span className="text-cyan-300">who cares</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              Always here to listen and support you. 
              Always on your side. Join Canadian men 
              building better mental health with Liam!
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={handleGetStarted}
                size="lg"
                className="w-full lg:w-auto bg-white text-blue-700 hover:bg-gray-100 font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Start Talking with Liam
              </Button>
              
              <p className="text-sm text-white/70">
                Free, confidential, and available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
    </div>
  );
};

export default Landing;
