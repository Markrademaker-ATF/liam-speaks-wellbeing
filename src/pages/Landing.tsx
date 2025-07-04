import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Landing = () => {
  const navigate = useNavigate();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const chatExample = [
    {
      sender: 'user',
      text: "Hey Liam, I've been feeling really overwhelmed at work lately. I can't seem to focus and I'm constantly stressed.",
      delay: 1000
    },
    {
      sender: 'liam',
      text: "I hear you, and I'm really glad you reached out. Work stress can feel overwhelming, especially when it affects your ability to focus. That sounds really challenging. Can you tell me a bit more about what's been making work feel so stressful lately?",
      delay: 2000
    },
    {
      sender: 'user',
      text: "It's just everything piling up. My manager keeps giving me more projects, and I feel like I can never catch up. I'm working late every night but still falling behind.",
      delay: 1500
    },
    {
      sender: 'liam',
      text: "That sounds incredibly exhausting. It makes complete sense that you'd feel overwhelmed when you're constantly trying to keep up with an ever-growing workload. Working late every night and still feeling behind can create a really draining cycle. Have you been able to talk to your manager about the workload, or does that feel difficult right now?",
      delay: 2500
    }
  ];

  useEffect(() => {
    if (currentMessageIndex < chatExample.length) {
      const message = chatExample[currentMessageIndex];
      const timer = setTimeout(() => {
        setIsTyping(true);
        let index = 0;
        setCurrentText('');
        
        const typeWriter = setInterval(() => {
          if (index < message.text.length) {
            setCurrentText(message.text.slice(0, index + 1));
            index++;
          } else {
            clearInterval(typeWriter);
            setIsTyping(false);
            setTimeout(() => {
              setCurrentMessageIndex(prev => prev + 1);
            }, 1000);
          }
        }, 30);

        return () => clearInterval(typeWriter);
      }, message.delay);

      return () => clearTimeout(timer);
    } else {
      // Reset animation after all messages
      setTimeout(() => {
        setCurrentMessageIndex(0);
        setCurrentText('');
      }, 3000);
    }
  }, [currentMessageIndex]);

  const handleGetStarted = () => {
    navigate('/chat');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  const handlePrivacy = () => {
    navigate('/privacy');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-950/60 to-blue-950/70"></div>
      
      {/* Robot and human hands background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: `url('/lovable-uploads/4e50589d-fce6-4e72-b6af-20a4541ee195.png')`
        }}
      ></div>
      
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
          <button 
            onClick={handleAbout}
            className="hover:text-white transition-colors"
          >
            About
          </button>
          <button 
            onClick={handlePrivacy}
            className="hover:text-white transition-colors"
          >
            Privacy
          </button>
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
        {/* Left side - Liam's larger image */}
        <div className="flex-1 flex items-end justify-center lg:justify-center relative lg:pr-0">
          <div className="relative w-full h-full flex items-end justify-center lg:justify-end">
            {/* Glow effect behind Liam */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-t from-blue-400/30 via-blue-500/20 to-transparent rounded-full blur-3xl"></div>
            
            {/* Liam's image - increased by 1.2x scale */}
            <img 
              src="/lovable-uploads/92635255-459e-4483-8970-921d2fd2a707.png" 
              alt="Liam - Your AI Mental Health Companion" 
              className="relative w-full max-w-4xl lg:max-w-6xl h-auto object-contain drop-shadow-2xl lg:translate-x-20 scale-[1.2]"
              style={{ marginBottom: '0' }}
            />
          </div>
        </div>

        {/* Right side - Content with smaller text */}
        <div className="flex-1 flex items-center justify-center lg:justify-start px-6 lg:px-12">
          <div className="max-w-2xl text-center lg:text-left lg:ml-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Meet Liam, your
              <br />
              <span className="text-cyan-300 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Care Companion</span>
              <br />
              <span className="text-2xl lg:text-3xl leading-tight">here to assist with your health and well-being</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-white/90 mb-10 leading-relaxed">
              Always here to listen and support you. 
              Always on your side. Join Canadian men 
              building better mental health with Liam!
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={handleGetStarted}
                size="lg"
                className="w-full lg:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-6 px-20 rounded-full text-2xl transition-all duration-300 transform hover:scale-105 shadow-xl border-0"
              >
                Start Talking with Liam
              </Button>
              
              <p className="text-lg text-white/70">
                Free, confidential, and available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section - moved up */}
      <div className="relative z-10 py-16 px-6 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Average
              <br />
              <span className="text-cyan-300">Reduction</span>
            </h2>
            <p className="text-xl text-white/80">in symptoms after Therabot (Chat Function) (per user)</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Major Depressive Disorder */}
            <div className="text-center">
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                Major Depressive
                <br />
                Disorder
              </h3>
              <div className="flex flex-col items-center mb-4">
                <div className="text-6xl lg:text-7xl font-bold text-cyan-300 mb-4">51%</div>
                <svg 
                  className="w-16 h-16 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={3} 
                    d="M19 14l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Generalized Anxiety Disorder */}
            <div className="text-center">
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                Generalized Anxiety
                <br />
                Disorder
              </h3>
              <div className="flex flex-col items-center mb-4">
                <div className="text-6xl lg:text-7xl font-bold text-cyan-300 mb-4">31%</div>
                <svg 
                  className="w-16 h-16 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={3} 
                    d="M19 14l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Eating Disorders */}
            <div className="text-center">
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                Eating Disorders
              </h3>
              <div className="flex flex-col items-center mb-4">
                <div className="text-6xl lg:text-7xl font-bold text-cyan-300 mb-4">19%</div>
                <svg 
                  className="w-16 h-16 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={3} 
                    d="M19 14l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Study Link */}
          <div className="text-center mt-12">
            <p className="text-white/70 mb-4">Based on clinical research from Dartmouth College</p>
            <a 
              href="https://home.dartmouth.edu/news/2025/03/first-therapy-chatbot-trial-yields-mental-health-benefits"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyan-300 hover:text-cyan-200 transition-colors text-lg underline"
            >
              View Full Study Results
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Chat Example Section - moved down */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              See Liam in Action
            </h2>
            <p className="text-xl text-white/80">Real conversations, real support</p>
          </div>
          
          {/* Chat Interface */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-2xl">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/20">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/lovable-uploads/92635255-459e-4483-8970-921d2fd2a707.png" alt="Liam" />
                <AvatarFallback>L</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-white font-semibold">Liam</h3>
                <p className="text-green-400 text-sm flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Online
                </p>
              </div>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {chatExample.slice(0, currentMessageIndex + 1).map((message, index) => (
                <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.sender === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white/90 text-gray-800'
                  }`}>
                    {index === currentMessageIndex ? (
                      <div>
                        {currentText}
                        {isTyping && <span className="animate-pulse">|</span>}
                      </div>
                    ) : (
                      message.text
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && currentMessageIndex < chatExample.length && (
                <div className="flex justify-start">
                  <div className="bg-white/90 text-gray-800 px-4 py-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
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
