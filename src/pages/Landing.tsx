
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[80vh] px-6 lg:px-12">
        {/* Left side - Liam's image and speech bubble */}
        <div className="flex-1 flex justify-center lg:justify-end lg:pr-12 mb-8 lg:mb-0">
          <div className="relative">
            {/* Speech bubble */}
            <div className="absolute -top-20 -left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-xs">
              <p className="text-gray-800 font-medium">
                Ready to talk about what's on your mind? I'm here to listen and support you.
              </p>
              {/* Speech bubble tail */}
              <div className="absolute bottom-[-8px] left-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white/90"></div>
            </div>
            
            {/* Liam's avatar with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl opacity-50 scale-110"></div>
              <Avatar className="relative w-64 h-64 border-4 border-white/30 shadow-2xl">
                <AvatarImage 
                  src="/lovable-uploads/43d6626d-43e6-4819-b569-29400860e958.png" 
                  alt="Liam - Your AI Mental Health Companion" 
                  className="object-cover"
                />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-6xl font-bold">
                  L
                </AvatarFallback>
              </Avatar>
              
              {/* Online indicator */}
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg">
                <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 max-w-lg text-center lg:text-left lg:pl-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The AI companion
            <br />
            <span className="text-cyan-300">who cares</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
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

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
    </div>
  );
};

export default Landing;
