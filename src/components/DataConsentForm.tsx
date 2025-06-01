
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Phone, Mail, CheckCircle } from 'lucide-react';

interface DataConsentFormProps {
  onComplete: (consentData: ConsentData | null) => void;
}

export interface ConsentData {
  allowDataStorage: boolean;
  allowProactiveContact: boolean;
  contactMethod: 'email' | 'phone' | '';
  contactValue: string;
  preferredName: string;
}

const DataConsentForm: React.FC<DataConsentFormProps> = ({ onComplete }) => {
  const [allowDataStorage, setAllowDataStorage] = useState(false);
  const [allowProactiveContact, setAllowProactiveContact] = useState(false);
  const [contactMethod, setContactMethod] = useState<'email' | 'phone' | ''>('');
  const [contactValue, setContactValue] = useState('');
  const [preferredName, setPreferredName] = useState('');

  const handleSubmit = () => {
    const consentData: ConsentData = {
      allowDataStorage,
      allowProactiveContact,
      contactMethod,
      contactValue,
      preferredName
    };
    onComplete(consentData);
  };

  const handleSkip = () => {
    onComplete(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/30 flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/50">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Help Us Support You Better
          </CardTitle>
          <p className="text-gray-600 leading-relaxed">
            Before you start chatting with Liam, we'd like to understand how we can best support your mental health journey. 
            Your privacy is our priority - all information is optional and securely handled.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="preferredName" className="text-sm font-medium text-gray-700">
                Preferred Name (Optional)
              </Label>
              <Input
                id="preferredName"
                value={preferredName}
                onChange={(e) => setPreferredName(e.target.value)}
                placeholder="What would you like Liam to call you?"
                className="mt-1"
              />
            </div>

            <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-200/50">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="dataStorage"
                  checked={allowDataStorage}
                  onCheckedChange={(checked) => setAllowDataStorage(checked as boolean)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label htmlFor="dataStorage" className="text-sm font-medium text-gray-800 cursor-pointer">
                    Allow secure data storage for personalized support
                  </Label>
                  <p className="text-xs text-gray-600 mt-1">
                    We'll securely store your conversation patterns to provide more personalized mental health insights and track your progress over time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50/50 p-4 rounded-lg border border-green-200/50">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="proactiveContact"
                  checked={allowProactiveContact}
                  onCheckedChange={(checked) => setAllowProactiveContact(checked as boolean)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label htmlFor="proactiveContact" className="text-sm font-medium text-gray-800 cursor-pointer">
                    Allow proactive wellness check-ins
                  </Label>
                  <p className="text-xs text-gray-600 mt-1">
                    Our care team may reach out if we notice concerning patterns or to offer additional support resources.
                  </p>
                </div>
              </div>

              {allowProactiveContact && (
                <div className="mt-4 space-y-3">
                  <div className="flex space-x-4">
                    <Button
                      type="button"
                      variant={contactMethod === 'email' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setContactMethod('email')}
                      className="flex items-center space-x-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </Button>
                    <Button
                      type="button"
                      variant={contactMethod === 'phone' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setContactMethod('phone')}
                      className="flex items-center space-x-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Phone</span>
                    </Button>
                  </div>

                  {contactMethod && (
                    <Input
                      value={contactValue}
                      onChange={(e) => setContactValue(e.target.value)}
                      placeholder={
                        contactMethod === 'email' 
                          ? "your.email@example.com" 
                          : "555-123-4567"
                      }
                      type={contactMethod === 'email' ? 'email' : 'tel'}
                      className="mt-2"
                    />
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <Heart className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-800">Your Privacy Matters</p>
                <p className="text-xs text-gray-600 mt-1">
                  All data is encrypted, securely stored, and never shared with third parties. 
                  You can change these preferences or delete your data at any time.
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <Button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Continue to Chat
            </Button>
            <Button
              onClick={handleSkip}
              variant="outline"
              className="px-8"
            >
              Skip for Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataConsentForm;
