
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/chat');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/30 via-slate-900/40 to-blue-900/50"></div>
      
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-400/25 rounded-full blur-xl animate-pulse delay-500"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
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
      <div className="relative z-10 flex flex-col lg:flex-row min-h-[calc(100vh-120px)]">
        {/* Left side - Liam's large image */}
        <div className="flex-1 flex items-end justify-center relative">
          <div className="relative w-full h-full flex items-end justify-center">
            {/* Glow effect behind Liam */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-t from-blue-400/30 via-blue-500/20 to-transparent rounded-full blur-3xl"></div>
            
            {/* Liam's image - updated to use new image */}
            <img 
              src="/lovable-uploads/026d27c2-2cca-4ae6-811e-3fdd1dbc7ce7.png" 
              alt="Liam - Your AI Mental Health Companion" 
              className="relative w-full max-w-2xl lg:max-w-4xl h-auto object-contain drop-shadow-2xl"
              style={{ marginBottom: '0' }}
            />
            
            {/* Speech bubble - repositioned for larger Liam */}
            <div className="absolute top-8 right-4 lg:top-12 lg:right-12 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-sm border border-white/20">
              <p className="text-gray-800 font-medium text-base lg:text-lg">
                Ready to talk about what's on your mind? I'm here to listen and support you.
              </p>
              {/* Speech bubble tail */}
              <div className="absolute bottom-[-8px] left-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white/95"></div>
            </div>
          </div>
        </div>

        {/* Right side - Content with larger text */}
        <div className="flex-1 flex items-center justify-center lg:justify-start px-6 lg:px-12">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              The AI companion
              <br />
              <span className="text-cyan-300 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">who cares</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed">
              Always here to listen and support you. 
              Always on your side. Join Canadian men 
              building better mental health with Liam!
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={handleGetStarted}
                size="lg"
                className="w-full lg:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-5 px-16 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-xl border-0"
              >
                Start Talking with Liam
              </Button>
              
              <p className="text-base text-white/70">
                Free, confidential, and available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Landing;
