
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Phone, Sparkles, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ResourcePlan {
  summary: string;
  keyAdvice: string[];
  recommendedLinks: Array<{
    title: string;
    url: string;
    description: string;
  }>;
  nextSteps: string[];
}

const ResourcePlan = () => {
  const navigate = useNavigate();
  
  // This would typically come from state management or props
  // For now, using a default plan
  const currentResourcePlan: ResourcePlan = {
    summary: "Your personalized mental health resource plan will appear here after chatting with Liam.",
    keyAdvice: [
      "Start a conversation with Liam to receive personalized advice",
      "Share your concerns and feelings openly",
      "Use the assessment tools when recommended",
      "Connect with professional support when needed"
    ],
    recommendedLinks: [
      {
        title: "Men's Mental Health Resources",
        url: "https://menshealthfoundation.ca/mental-health/",
        description: "Comprehensive mental health information and support"
      },
      {
        title: "24/7 Crisis Support",
        url: "tel:1-833-456-4566",
        description: "Immediate support available anytime you need it"
      }
    ],
    nextSteps: [
      "Start your journey by chatting with Liam",
      "Be honest about your feelings and experiences",
      "Follow through on recommended assessments",
      "Consider professional support when suggested"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/')}
                className="hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-900 to-indigo-900 bg-clip-text text-transparent">
                    Your Resource Plan
                  </h1>
                  <p className="text-sm text-gray-600 font-medium">Personalized Mental Health Support</p>
                </div>
              </div>
            </div>
            
            <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 px-3 py-1 font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              Updated Live
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 shadow-2xl rounded-3xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <CardTitle className="text-3xl font-bold flex items-center">
              <Sparkles className="w-8 h-8 mr-3" />
              Your Personalized Resource Plan
            </CardTitle>
            <p className="text-purple-100 text-lg">
              Tailored recommendations based on your conversation with Liam
            </p>
          </CardHeader>
          
          <CardContent className="p-8 space-y-8">
            {/* Summary Section */}
            <div className="bg-white/70 rounded-2xl p-6 border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">1</span>
                </div>
                Summary
              </h3>
              <p className="text-purple-700 text-lg leading-relaxed">{currentResourcePlan.summary}</p>
            </div>

            {/* Key Advice Section */}
            <div className="bg-white/70 rounded-2xl p-6 border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">2</span>
                </div>
                Key Advice
              </h3>
              <ul className="space-y-3">
                {currentResourcePlan.keyAdvice.map((advice, idx) => (
                  <li key={idx} className="flex items-start text-purple-700 text-lg">
                    <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-purple-800 font-bold text-sm">•</span>
                    </div>
                    {advice}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Resources Section */}
            <div className="bg-white/70 rounded-2xl p-6 border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">3</span>
                </div>
                Recommended Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentResourcePlan.recommendedLinks.map((link, idx) => (
                  <Card key={idx} className="bg-white/90 border-purple-200 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto text-left w-full justify-start hover:bg-transparent group-hover:scale-105 transition-transform duration-300"
                        onClick={() => window.open(link.url, '_blank')}
                      >
                        <div className="w-full">
                          <div className="font-bold text-purple-800 flex items-center mb-2 text-lg">
                            {link.url.startsWith('tel:') ? (
                              <Phone className="w-5 h-5 mr-2 text-green-600" />
                            ) : (
                              <ExternalLink className="w-5 h-5 mr-2 text-blue-600" />
                            )}
                            {link.title}
                          </div>
                          <div className="text-purple-600 text-base">{link.description}</div>
                        </div>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Next Steps Section */}
            <div className="bg-white/70 rounded-2xl p-6 border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">4</span>
                </div>
                Next Steps
              </h3>
              <ol className="space-y-3">
                {currentResourcePlan.nextSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start text-purple-700 text-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 shadow-md">
                      <span className="text-white font-bold">{idx + 1}</span>
                    </div>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                onClick={() => navigate('/')}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 hover:from-blue-700 hover:via-purple-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg"
              >
                <Sparkles className="w-5 h-5 mr-3" />
                Continue with Liam
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 py-4 px-8 rounded-2xl font-bold text-lg"
                onClick={() => window.print()}
              >
                <FileText className="w-5 h-5 mr-3" />
                Save Plan
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ResourcePlan;
