import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Phone, Mail, CheckCircle, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DataConsentFormProps {
  onComplete: (consentData: ConsentData | null) => void;
}

export interface ConsentData {
  allowDataStorage: boolean;
  allowProactiveContact: boolean;
  contactMethod: 'email' | 'phone' | '';
  contactValue: string;
  preferredName: string;
  ageRange: string;
  interactionMode: string;
}

const DataConsentForm: React.FC<DataConsentFormProps> = ({ onComplete }) => {
  const navigate = useNavigate();
  const [allowDataStorage, setAllowDataStorage] = useState(false);
  const [allowProactiveContact, setAllowProactiveContact] = useState(false);
  const [contactMethod, setContactMethod] = useState<'email' | 'phone' | ''>('');
  const [contactValue, setContactValue] = useState('');
  const [preferredName, setPreferredName] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [interactionMode, setInteractionMode] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);

  const handleSubmit = () => {
    const consentData: ConsentData = {
      allowDataStorage,
      allowProactiveContact,
      contactMethod,
      contactValue,
      preferredName,
      ageRange,
      interactionMode
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

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <Heart className="w-5 h-5 text-red-500 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">Your Privacy Matters</p>
                  <p className="text-xs text-gray-600 mt-1">
                    All data is encrypted, securely stored, and never shared with third parties. 
                    You can change these preferences or delete your data at any time.
                  </p>
                  <Button
                    variant="link"
                    size="sm"
                    className="text-xs text-blue-600 hover:text-blue-800 p-0 h-auto mt-2"
                    onClick={() => navigate('/privacy')}
                  >
                    Read our full Privacy Policy
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex space-y-4">
              <div>
                <Label htmlFor="ageRange" className="text-sm font-medium text-gray-700">
                  Age Range
                </Label>
                <select
                  id="ageRange"
                  value={ageRange}
                  onChange={(e) => setAgeRange(e.target.value)}
                  className="mt-1"
                >
                  <option value="">Select Age Range</option>
                  <option value="18-24">18-24</option>
                  <option value="25-34">25-34</option>
                  <option value="35-44">35-44</option>
                  <option value="45-54">45-54</option>
                  <option value="55-64">55-64</option>
                  <option value="65+">65+</option>
                </select>
              </div>

              <div>
                <Label htmlFor="interactionMode" className="text-sm font-medium text-gray-700">
                  Interaction Mode
                </Label>
                <select
                  id="interactionMode"
                  value={interactionMode}
                  onChange={(e) => setInteractionMode(e.target.value)}
                  className="mt-1"
                >
                  <option value="">Select Interaction Mode</option>
                  <option value="chat">Chat</option>
                  <option value="advice">Advice</option>
                </select>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="consent"
                checked={consentGiven}
                onChange={(e) => setConsentGiven(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="consent" className="text-sm text-gray-700">
                I understand that this is an AI companion and not a replacement for professional mental health support. 
                I agree to use this service responsibly and seek professional help when needed.
              </label>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <Button
              type="submit"
              disabled={!consentGiven}
              className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Start Chatting
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
