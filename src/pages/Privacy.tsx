
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Lock, Eye, Database, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600">Your privacy and data protection</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-blue-500" />
                <span>Information We Collect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Chat Data</h4>
                <p className="text-gray-700">
                  When you interact with Liam, we may collect your messages and conversation history to provide personalized mental health support and improve our services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                <p className="text-gray-700">
                  If you provide consent, we may collect your email address or phone number to offer proactive wellness check-ins and emergency support.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Personal Preferences</h4>
                <p className="text-gray-700">
                  We may store your preferred name and communication preferences to personalize your experience with our platform.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-green-500" />
                <span>How We Use Your Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Provide personalized mental health support and guidance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Monitor conversation patterns to identify potential mental health concerns</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Offer proactive wellness check-ins when concerning patterns are detected</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Connect you with appropriate mental health resources and professionals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Improve our AI mental health support capabilities</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-red-500" />
                <span>Data Security & Protection</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Encryption</h4>
                <p className="text-gray-700">
                  All data is encrypted both in transit and at rest using industry-standard encryption protocols.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Access Controls</h4>
                <p className="text-gray-700">
                  Access to your personal information is strictly limited to authorized personnel who need it to provide support services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Third-Party Sharing</h4>
                <p className="text-gray-700">
                  We never share your personal information or conversation data with third parties for marketing or commercial purposes.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-purple-500" />
                <span>Proactive Contact Policy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                If you consent to proactive contact, our trained mental health professionals may reach out to you in the following circumstances:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Detection of crisis language or immediate safety concerns</li>
                <li>• Identification of concerning patterns in conversation history</li>
                <li>• Scheduled wellness check-ins based on your preferences</li>
                <li>• Follow-up after connecting you with mental health resources</li>
              </ul>
              <p className="text-gray-700">
                You can withdraw consent for proactive contact at any time by contacting our support team.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Access Your Data</h4>
                  <p className="text-gray-700 text-sm">Request a copy of all personal information we have about you.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Delete Your Data</h4>
                  <p className="text-gray-700 text-sm">Request complete deletion of your personal information and conversation history.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Correct Your Data</h4>
                  <p className="text-gray-700 text-sm">Update or correct any inaccurate personal information we have on file.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Withdraw Consent</h4>
                  <p className="text-gray-700 text-sm">Change your privacy preferences or withdraw consent for data processing at any time.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy or wish to exercise your privacy rights, please contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">privacy@menshealthfoundation.ca</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">1-833-456-4566</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center py-6">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
