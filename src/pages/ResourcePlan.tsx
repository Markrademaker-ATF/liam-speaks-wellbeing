
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Phone, FileText, User } from 'lucide-react';
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
    summary: "Based on our conversation, the following recommendations may help support your mental health and wellbeing. These are suggestions to consider as part of your personal care plan.",
    keyAdvice: [
      "Consider establishing regular check-ins with yourself about your mental state",
      "Explore stress management techniques that work for your lifestyle",
      "Maintain connections with supportive people in your life",
      "Consider professional support if symptoms persist or worsen"
    ],
    recommendedLinks: [
      {
        title: "Men's Mental Health Resources",
        url: "https://menshealthfoundation.ca/mental-health/",
        description: "Evidence-based mental health information and support services"
      },
      {
        title: "24/7 Crisis Support Line",
        url: "tel:1-833-456-4566",
        description: "Professional crisis intervention available 24 hours"
      }
    ],
    nextSteps: [
      "Review these recommendations carefully",
      "Discuss any concerns with a healthcare provider if needed",
      "Consider implementing one or two suggestions to start",
      "Monitor your wellbeing and adjust as necessary"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">
                    Mental Health Resource Plan
                  </h1>
                  <p className="text-sm text-gray-600">Personal Recommendations</p>
                </div>
              </div>
            </div>
            
            <Badge variant="outline" className="text-gray-700 border-gray-300">
              Confidential
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white border border-gray-200 shadow-sm">
          {/* Header Section */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Personal Care Recommendations</h2>
              <div className="text-sm text-gray-500">
                Date: {new Date().toLocaleDateString()}
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <User className="w-4 h-4 mr-2" />
              Prepared by: Liam (AI Mental Health Assistant)
            </div>
          </div>
          
          <div className="p-6 space-y-8">
            {/* Assessment Summary */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                Assessment Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">{currentResourcePlan.summary}</p>
            </div>

            {/* Recommendations */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                Clinical Recommendations
              </h3>
              <div className="space-y-3">
                {currentResourcePlan.keyAdvice.map((advice, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-gray-100 text-gray-700 text-xs font-medium rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-gray-700">{advice}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                Recommended Resources
              </h3>
              <div className="space-y-4">
                {currentResourcePlan.recommendedLinks.map((link, idx) => (
                  <div key={idx} className="border border-gray-200 p-4 bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1 flex items-center">
                          {link.url.startsWith('tel:') ? (
                            <Phone className="w-4 h-4 mr-2 text-gray-600" />
                          ) : (
                            <ExternalLink className="w-4 h-4 mr-2 text-gray-600" />
                          )}
                          {link.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">{link.description}</p>
                        <p className="text-xs text-gray-500 font-mono">
                          {link.url.startsWith('tel:') ? link.url.replace('tel:', '') : link.url}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(link.url, '_blank')}
                        className="ml-4 text-gray-600 border-gray-300 hover:bg-gray-100"
                      >
                        {link.url.startsWith('tel:') ? 'Call' : 'Visit'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                Suggested Next Steps
              </h3>
              <div className="space-y-3">
                {currentResourcePlan.nextSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-gray-600 text-white text-xs font-medium rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="border-t border-gray-200 pt-6">
              <div className="bg-gray-50 p-4 border-l-4 border-gray-400">
                <p className="text-xs text-gray-600 leading-relaxed">
                  <strong>Disclaimer:</strong> This resource plan is generated by an AI assistant and is intended for informational purposes only. 
                  It should not replace professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare 
                  providers regarding mental health concerns. If you are experiencing a mental health emergency, contact emergency 
                  services immediately.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 border-t border-gray-200">
              <Button 
                onClick={() => navigate('/')}
                className="bg-gray-600 hover:bg-gray-700 text-white"
              >
                Continue with Liam
              </Button>
              <Button 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
                onClick={() => window.print()}
              >
                <FileText className="w-4 h-4 mr-2" />
                Print Plan
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResourcePlan;
