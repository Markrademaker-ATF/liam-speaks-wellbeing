
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Shield, Users, MessageCircle, Clock, Target, Zap, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Understanding",
      description: "Liam uses advanced artificial intelligence specifically trained on men's mental health patterns, challenges, and needs. It can recognize emotional cues, understand context, and provide relevant support based on your unique situation.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Empathetic Communication",
      description: "Our AI companion responds with genuine care and understanding, adapting its communication style to match your emotional state and preferences. Whether you need direct advice or gentle support, Liam adjusts accordingly.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Safe & Confidential Space",
      description: "All conversations with Liam are completely confidential. You can share your thoughts, feelings, and concerns without judgment in a secure environment designed to protect your privacy.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Personalized Guidance",
      description: "Based on your age, circumstances, and needs, Liam provides tailored advice, coping strategies, and resource recommendations that are specifically relevant to your situation.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Mental health challenges don't follow a schedule. Liam is available whenever you need support - whether it's 3 AM or during a lunch break, immediate help is always accessible.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Zap,
      title: "Instant Resource Connection",
      description: "When you need professional help, Liam can instantly connect you with crisis support, counselors, support groups, or other mental health resources in your area.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const usageSteps = [
    {
      step: 1,
      title: "Share Your Information",
      description: "Start by telling Liam your age range and what brings you to seek support. This helps personalize the experience."
    },
    {
      step: 2,
      title: "Choose Your Style",
      description: "Select or let Liam suggest a communication style that feels comfortable for you - whether casual, supportive, professional, or mature."
    },
    {
      step: 3,
      title: "Start the Conversation",
      description: "Begin chatting with Liam about whatever is on your mind. Share as much or as little as you're comfortable with."
    },
    {
      step: 4,
      title: "Receive Personalized Support",
      description: "Get tailored advice, coping strategies, and resource recommendations based on your specific needs and situation."
    },
    {
      step: 5,
      title: "Access Resources",
      description: "When appropriate, Liam will connect you with professional support, crisis resources, or specialized services."
    }
  ];

  const benefits = [
    "Reduces stigma around seeking mental health support",
    "Provides immediate access to guidance and resources",
    "Helps identify when professional intervention is needed",
    "Offers coping strategies tailored to men's experiences",
    "Creates a judgment-free space for emotional expression",
    "Connects you with Canadian-specific mental health resources"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-blue-700 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 px-3 py-1 font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              Available 24/7
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-green-900 bg-clip-text mb-6">
            Understanding Liam
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Your AI mental health companion designed specifically for Canadian men. 
            Learn how Liam works, how to use it effectively, and how the Canadian Men's Health Foundation can support your mental wellness journey.
          </p>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/b277bfb0-6f11-4d9a-b1ea-2b1285189a74.png" 
              alt="Liam AI Companion" 
              className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </div>

        {/* What is Liam Section */}
        <section className="mb-20">
          <Card className="bg-white/90 backdrop-blur-md border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-green-50 pb-8">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">What is Liam?</CardTitle>
              <CardDescription className="text-lg text-gray-600 max-w-4xl mx-auto">
                Liam is an advanced AI mental health companion created by the Canadian Men's Health Foundation. 
                It's specifically designed to understand and address the unique mental health challenges that Canadian men face.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How to Use Liam Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Use Liam for Your Mental Health</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting started with Liam is simple. Follow these steps to make the most of your mental health support experience.
            </p>
          </div>
          
          <div className="space-y-8">
            {usageSteps.map((step, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-md border border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Benefits of Using Liam</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Discover how Liam can support your mental health journey and overall wellbeing.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Canadian Men's Health Foundation Support */}
        <section className="mb-20">
          <Card className="bg-white/90 backdrop-blur-md border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="text-center bg-gradient-to-r from-blue-900 to-green-900 text-white py-12">
              <CardTitle className="text-3xl font-bold mb-4">How Canadian Men's Health Foundation Supports You</CardTitle>
              <CardDescription className="text-xl text-blue-100 max-w-4xl mx-auto">
                We're committed to improving the mental health and wellbeing of Canadian men through comprehensive support and resources.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Our Comprehensive Approach</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Professional Network</h4>
                        <p className="text-gray-600">Access to licensed therapists and counselors specialized in men's mental health across Canada.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Crisis Support</h4>
                        <p className="text-gray-600">24/7 crisis intervention services with immediate connection to emergency mental health support.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Heart className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Peer Support Communities</h4>
                        <p className="text-gray-600">Connect with other Canadian men sharing similar experiences in supportive group settings.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Brain className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Educational Resources</h4>
                        <p className="text-gray-600">Comprehensive mental health education, tools, and self-help resources tailored for men.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Our Support?</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Evidence-based mental health approaches</li>
                    <li>• Understanding of male-specific mental health challenges</li>
                    <li>• Integration with Canadian healthcare system</li>
                    <li>• Cultural sensitivity to Canadian men's experiences</li>
                    <li>• Ongoing research and program development</li>
                    <li>• Community-focused support networks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Mental Health Journey?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Take the first step towards better mental health with Liam and the support of the Canadian Men's Health Foundation.
              </p>
              <Link to="/">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Start Your Journey with Liam
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
