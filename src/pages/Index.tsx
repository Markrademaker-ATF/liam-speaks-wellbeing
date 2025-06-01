import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MessageCircle, Heart, Shield, Users, Phone, Mail, ChevronDown } from 'lucide-react';
import ChatInterface from '@/components/ChatInterface';
import ToneSelector from '@/components/ToneSelector';
import ResourceCard from '@/components/ResourceCard';

const Index = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedTone, setSelectedTone] = useState('supportive');

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/25fe395b-beb5-478e-ad30-c2363a173a8c.png" 
                alt="Canadian Men's Health Foundation" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Canadian Men's Health Foundation</h1>
                <p className="text-sm text-gray-600">Mental Health Support</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center space-x-2 border-blue-200 text-blue-700 hover:bg-blue-50">
                    <span>Take Action</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white shadow-lg border border-gray-200 z-50">
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://menshealthfoundation.ca/mens-health-check/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold">Men's Health Check</span>
                        <span className="text-sm text-gray-600">Learn Your Health Risks</span>
                      </div>
                    </a>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://menshealthfoundation.ca/mindfit-toolkit/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold">MindFit Toolkit</span>
                        <span className="text-sm text-gray-600">Explore Mental Health Tools</span>
                      </div>
                    </a>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://menshealthfoundation.ca/dont-change-much-podcast/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold">Don't Change Much Podcast</span>
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
                      className="cursor-pointer"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold">Never Alone: June 2025</span>
                        <span className="text-sm text-gray-600">Men's Health Month</span>
                      </div>
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Available 24/7
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <section className="relative bg-gradient-to-r from-slate-800 via-blue-900 to-slate-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                STRONGER
                <br />
                <span className="text-orange-400">TOGETHER</span>
              </h2>
              <p className="text-xl text-gray-200 max-w-md">
                We provide men and their families with practical tools and expert advice to live healthier.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-cyan-300">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">•</span>
                  </div>
                  <h3 className="text-2xl font-bold">NEVER AL<span className="text-orange-400">O</span>NE</h3>
                </div>
                <p className="text-gray-200 text-lg">
                  Join guys talking about the tough stuff and getting tools to build better mental health during Men's Health Month.
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
                  onClick={() => setShowChat(true)}
                >
                  JOIN THE MOVEMENT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            You're Not Alone in This Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Meet Liam, your personal mental health companion. Get support, resources, and connect with the right people when you need it most.
          </p>
          
          {/* Liam Introduction Card */}
          <Card className="max-w-2xl mx-auto mb-8 border-2 border-blue-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Avatar className="w-16 h-16 mx-auto mb-4">
                <AvatarImage src="/lovable-uploads/b277bfb0-6f11-4d9a-b1ea-2b1285189a74.png" alt="Liam" />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-xl font-bold">
                  L
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl text-blue-900">Meet Liam</CardTitle>
              <CardDescription className="text-lg">
                Your AI mental health companion, trained to understand and support Canadian men's mental health needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-semibold text-blue-800">Empathetic</span>
                  <p className="text-blue-600 mt-1">Understanding and compassionate</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <span className="font-semibold text-green-800">Adaptive</span>
                  <p className="text-green-600 mt-1">Adjusts tone to your needs</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-semibold text-purple-800">Connected</span>
                  <p className="text-purple-600 mt-1">Links you to real support</p>
                </div>
              </div>
              
              <ToneSelector selectedTone={selectedTone} onToneChange={setSelectedTone} />
              
              <Button 
                onClick={() => setShowChat(true)}
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Conversation with Liam
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>

        {/* Crisis Banner */}
        <Card className="bg-red-50 border-red-200 border-2">
          <CardContent className="p-6 text-center">
            <Phone className="h-8 w-8 text-red-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-red-900 mb-2">In Crisis? Get Immediate Help</h3>
            <p className="text-red-700 mb-4">
              If you're having thoughts of self-harm or suicide, please reach out immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="destructive" size="lg" className="bg-red-600 hover:bg-red-700">
                Call Crisis Line: 1-833-456-4566
              </Button>
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                Chat with Crisis Counselor
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Contact Us</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>1-833-456-4566</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>support@menshealthfoundation.ca</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Mental Health Resources</a></li>
                <li><a href="#" className="hover:text-blue-600">Support Groups</a></li>
                <li><a href="#" className="hover:text-blue-600">Crisis Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">About</h4>
              <p className="text-gray-600 text-sm">
                Dedicated to improving the mental health and wellbeing of Canadian men through support, resources, and community.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
