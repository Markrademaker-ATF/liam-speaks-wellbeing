
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MessageCircle, Heart, Shield, Users, Phone, Mail, ChevronDown, Sparkles, Brain, Zap, Star } from 'lucide-react';
import ChatInterface from '@/components/ChatInterface';
import ToneSelector from '@/components/ToneSelector';
import ResourceCard from '@/components/ResourceCard';

const Index = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedTone, setSelectedTone] = useState('supportive');
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const resources = [
    {
      title: "Crisis Support",
      description: "Immediate help available 24/7 for urgent mental health situations",
      icon: Phone,
      action: "Call Now: 1-833-456-4566"
    },
    {
      title: "Counselling Services",
      description: "Connect with licensed therapists specialized in men's mental health",
      icon: Users,
      action: "Book Session"
    },
    {
      title: "Peer Support Groups",
      description: "Join supportive communities of men sharing similar experiences",
      icon: Heart,
      action: "Find Groups"
    },
    {
      title: "Mental Health Resources",
      description: "Access educational materials, tools, and self-help resources",
      icon: Shield,
      action: "Browse Resources"
    }
  ];

  const liamFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Understanding",
      description: "Advanced AI trained specifically on men's mental health patterns and needs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Empathetic Responses",
      description: "Responds with genuine care and understanding, adapting to your emotional state",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Instant Connection",
      description: "Immediate access to support resources and professional referrals when needed",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Star,
      title: "Personalized Experience",
      description: "Adapts communication style to match your preferences and comfort level",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  if (showChat) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <ChatInterface 
          selectedTone={selectedTone}
          onBack={() => setShowChat(false)}
          onToneChange={setSelectedTone}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <img 
                  src="/lovable-uploads/25fe395b-beb5-478e-ad30-c2363a173a8c.png" 
                  alt="Canadian Men's Health Foundation" 
                  className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-green-900 bg-clip-text text-transparent">
                  Canadian Men's Health Foundation
                </h1>
                <p className="text-sm text-gray-600 font-medium">Mental Health Support Excellence</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center space-x-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                    <span className="font-semibold">Take Action</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-white/95 backdrop-blur-md shadow-xl border border-gray-200/50 z-50">
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://menshealthfoundation.ca/mens-health-check/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:bg-blue-50 transition-colors duration-200"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-blue-900">Men's Health Check</span>
                        <span className="text-sm text-gray-600">Learn Your Health Risks</span>
                      </div>
                    </a>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://menshealthfoundation.ca/mindfit-toolkit/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:bg-green-50 transition-colors duration-200"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-green-900">MindFit Toolkit</span>
                        <span className="text-sm text-gray-600">Explore Mental Health Tools</span>
                      </div>
                    </a>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://menshealthfoundation.ca/dont-change-much-podcast/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:bg-purple-50 transition-colors duration-200"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-purple-900">Don't Change Much Podcast</span>
                        <span className="text-sm text-gray-600">Listen to Real Stories</span>
                      </div>
                    </a>
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://menshealthfoundation.ca/canadian-mens-health-month/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:bg-orange-50 transition-colors duration-200"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-orange-900">Never Alone: June 2025</span>
                        <span className="text-sm text-gray-600">Men's Health Month</span>
                      </div>
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 px-3 py-1 font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                Available 24/7
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-6xl lg:text-7xl font-bold leading-tight">
                STRONGER
                <br />
                <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text">
                  TOGETHER
                </span>
              </h2>
              <p className="text-xl text-gray-200 max-w-lg leading-relaxed">
                We provide men and their families with practical tools and expert advice to live healthier, more fulfilled lives.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-500 group">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-cyan-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">NEVER AL<span className="text-orange-400">O</span>NE</h3>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Join guys talking about the tough stuff and getting tools to build better mental health during Men's Health Month.
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105"
                  onClick={() => window.open('https://menshealthfoundation.ca/wp-content/uploads/2025/05/Campaign-Toolkit-Mens-Health-Month-2025.pdf', '_blank')}
                >
                  JOIN THE MOVEMENT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Liam - Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full text-sm font-medium text-blue-800 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Introducing Your AI Mental Health Companion
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-green-900 bg-clip-text mb-6">
            Meet Liam
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your personal mental health companion, designed specifically for Canadian men. 
            Get personalized support, resources, and connect with the right people when you need it most.
          </p>
        </div>

        {/* Liam Introduction Card - Enhanced */}
        <div className="relative max-w-5xl mx-auto mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-3xl blur-xl"></div>
          <Card className="relative bg-white/90 backdrop-blur-md border-0 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50"></div>
            <CardHeader className="text-center relative z-10 pb-8">
              <div className="relative mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <Avatar className="relative w-24 h-24 mx-auto border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <AvatarImage src="/lovable-uploads/b277bfb0-6f11-4d9a-b1ea-2b1285189a74.png" alt="Liam" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-2xl font-bold">
                    L
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-900 to-green-900 bg-clip-text">
                Meet Liam
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Your AI mental health companion, trained to understand and support Canadian men's mental health needs with empathy and expertise
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 relative z-10">
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {liamFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group/feature relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover/feature:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover/feature:text-blue-900 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                      {hoveredFeature === index && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl"></div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Tone Selector with enhanced styling */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
                <ToneSelector selectedTone={selectedTone} onToneChange={setSelectedTone} />
              </div>
              
              {/* CTA Button */}
              <div className="text-center">
                <Button 
                  onClick={() => setShowChat(true)}
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 hover:from-blue-700 hover:via-purple-700 hover:to-green-700 text-white font-bold py-4 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Start Your Journey with Liam
                </Button>
                <p className="text-sm text-gray-500 mt-3">
                  Free, confidential, and available 24/7
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resources Grid - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {resources.map((resource, index) => (
            <div key={index} className="transform hover:scale-105 transition-transform duration-300">
              <ResourceCard {...resource} />
            </div>
          ))}
        </div>

        {/* Crisis Banner - Enhanced */}
        <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-8 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">In Crisis? Get Immediate Help</h3>
              <p className="text-red-700 mb-6 text-lg">
                If you're having thoughts of self-harm or suicide, please reach out immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="destructive" size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Crisis Line: 1-833-456-4566
                </Button>
                <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50 hover:border-red-400 transition-all duration-300">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat with Crisis Counselor
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-white border-t mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold text-lg text-white mb-6">Contact Us</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3 hover:text-white transition-colors duration-200">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>1-833-456-4566</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-white transition-colors duration-200">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>support@menshealthfoundation.ca</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg text-white mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:underline">Mental Health Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:underline">Support Groups</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200 hover:underline">Crisis Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg text-white mb-6">About</h4>
              <p className="text-gray-300 leading-relaxed">
                Dedicated to improving the mental health and wellbeing of Canadian men through innovative support, evidence-based resources, and compassionate community.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
