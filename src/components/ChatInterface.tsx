import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Send, MessageCircle, Phone, Users, AlertTriangle, ExternalLink, Sparkles, FileText, Zap, Shield } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';
import DataConsentForm, { ConsentData } from './DataConsentForm';

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

interface SuggestedAction {
  label: string;
  url: string;
  type: 'assessment' | 'support' | 'group';
}

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'liam';
  timestamp: Date;
  tone?: string;
  suggestedActions?: SuggestedAction[];
}

interface ChatInterfaceProps {
  selectedTone: string;
  onBack: () => void;
}

interface ChatHeaderProps {
  selectedTone: string;
  onBack: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ selectedTone, onBack }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-white via-blue-50/30 to-green-50/30 backdrop-blur-xl shadow-xl border-b border-gradient-to-r from-blue-200/30 to-green-200/30 sticky top-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-green-600/5"></div>
      <div className="relative max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onBack}
              className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-300 rounded-xl border border-transparent hover:border-blue-200/50 hover:shadow-md hover:scale-105"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back
            </Button>
            
            <div className="flex items-center space-x-5 bg-gradient-to-r from-white/80 via-blue-50/50 to-green-50/50 backdrop-blur-md px-6 py-3 rounded-3xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
                <Avatar className="relative w-14 h-14 ring-3 ring-white/70 ring-offset-2 ring-offset-transparent shadow-lg">
                  <AvatarImage src="/lovable-uploads/b277bfb0-6f11-4d9a-b1ea-2b1285189a74.png" alt="Liam" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white font-bold text-lg">
                    L
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-3 border-white shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5 animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-3">
                  <h2 className="font-bold text-xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Liam
                  </h2>
                  <div className="flex items-center space-x-1">
                    <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
                    <Zap className="w-3 h-3 text-green-500" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-gradient-to-r from-green-100/80 to-emerald-100/80 text-green-800 border border-green-200/50 font-medium px-3 py-1 rounded-full shadow-sm"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    {selectedTone.charAt(0).toUpperCase() + selectedTone.slice(1)} Mode
                  </Badge>
                  <span className="text-xs text-gray-500 font-medium">AI Mental Health Companion</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="group flex items-center space-x-2 bg-gradient-to-r from-purple-50/80 to-indigo-50/80 backdrop-blur-sm border-purple-200/50 text-purple-700 hover:bg-gradient-to-r hover:from-purple-100/90 hover:to-indigo-100/90 hover:border-purple-300/70 transition-all duration-300 font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105"
              onClick={() => navigate('/resource-plan')}
            >
              <FileText className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Your Resource Plan</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="group flex items-center space-x-2 bg-gradient-to-r from-gray-50/80 to-slate-50/80 backdrop-blur-sm border-gray-200/50 text-gray-700 hover:bg-gradient-to-r hover:from-gray-100/90 hover:to-slate-100/90 hover:border-gray-300/70 transition-all duration-300 font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105"
              onClick={() => navigate('/privacy')}
            >
              <Shield className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Privacy</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MessageCardProps {
  message: Message;
}

const MessageCard: React.FC<MessageCardProps> = ({ message }) => {
  return (
    <div
      className={`max-w-md lg:max-w-lg group ${
        message.sender === 'user'
          ? 'order-2'
          : 'order-1'
      }`}
    >
      {message.sender === 'liam' && (
        <div className="flex items-center space-x-3 mb-3">
          <Avatar className="w-8 h-8 ring-2 ring-blue-100 ring-offset-1 ring-offset-blue-50">
            <AvatarImage src="/lovable-uploads/b277bfb0-6f11-4d9a-b1ea-2b1285189a74.png" alt="Liam" />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-sm font-bold">
              L
            </AvatarFallback>
          </Avatar>
          <div>
            <span className="text-sm font-semibold text-gray-700">Liam</span>
            <span className="text-xs text-gray-500 ml-2">AI Mental Health Companion</span>
          </div>
        </div>
      )}
      
      <Card className={`transition-all duration-300 hover:shadow-md group-hover:scale-[1.02] ${
        message.sender === 'user'
          ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-600 shadow-blue-100'
          : 'bg-white/90 backdrop-blur-sm text-gray-900 shadow-sm border-gray-200/50 hover:bg-white'
      }`}>
        <CardContent className="p-4">
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
          
          {message.sender === 'liam' && message.suggestedActions && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-600 mb-3 flex items-center">
                <Sparkles className="w-3 h-3 mr-1" />
                Suggested Next Steps
              </p>
              <div className="flex flex-wrap gap-2">
                {message.suggestedActions.map((action, actionIndex) => (
                  <Button
                    key={actionIndex}
                    size="sm"
                    variant={action.type === 'assessment' ? "default" : "outline"}
                    className={`text-xs transition-all duration-300 hover:scale-105 ${
                      action.type === 'assessment' 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-orange-200' 
                        : 'border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300'
                    }`}
                    onClick={() => window.open(action.url, '_blank')}
                  >
                    {action.type === 'assessment' && <ExternalLink className="h-3 w-3 mr-1" />}
                    {action.type === 'support' && <Phone className="h-3 w-3 mr-1" />}
                    {action.type === 'group' && <Users className="h-3 w-3 mr-1" />}
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const ChatInterface: React.FC<ChatInterfaceProps> = ({ selectedTone, onBack }) => {
  const [showConsentForm, setShowConsentForm] = useState(true);
  const [consentData, setConsentData] = useState<ConsentData | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [isSessionInitialized, setIsSessionInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Single initialization effect
  useEffect(() => {
    const initSession = async () => {
      try {
        const result = await initializeSession();
        if (typeof result === 'object') {
          if ('error' in result) {
            console.error('Session initialization failed:', result.message);
            toast({
              title: "Connection Error",
              description: result.message,
              variant: "destructive",
            });
            return;
          }
          
          if ('sessionId' in result && 'userId' in result) {
            console.log('Setting session state:', result);
            setSessionId(result.sessionId);
            setUserId(result.userId);
            setIsSessionInitialized(true);
          }
        }
      } catch (error) {
        console.error('Session initialization error:', error);
        toast({
          title: "Connection Error",
          description: "Failed to initialize chat session. Please try refreshing the page.",
          variant: "destructive",
        });
      }
    };
    initSession();
  }, []); // Only run once when component mounts

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initialize welcome message when consent is completed and tone changes
    if (!showConsentForm && messages.length === 0) {
      setMessages([{
        id: '1',
        content: getWelcomeMessage(selectedTone, consentData?.preferredName),
        sender: 'liam',
        timestamp: new Date(),
        tone: selectedTone
      }]);
    }
  }, [selectedTone, showConsentForm, consentData]);

  const handleConsentComplete = (data: ConsentData | null) => {
    setConsentData(data);
    setShowConsentForm(false);
    
    // Initialize chat with welcome message
    setMessages([{
      id: '1',
      content: getWelcomeMessage(selectedTone, data?.preferredName),
      sender: 'liam',
      timestamp: new Date(),
      tone: selectedTone
    }]);
  };

  function getWelcomeMessage(tone: string, preferredName?: string): string {
    const name = preferredName ? `, ${preferredName}` : '';
    
    const welcomeMessages = {
      supportive: `Hey there${name}! I'm Liam, and I'm really glad you're here. Taking this step to reach out shows real strength. I'm here to listen, support you, and help connect you with the right resources. What's on your mind today?`,
      professional: `Hello${name}, I'm Liam, your mental health support companion. I'm here to provide you with evidence-based guidance and connect you with appropriate professional resources. How can I assist you today?`,
      casual: `Hey${name}! I'm Liam - think of me as that friend who's always got your back. No judgment here, just real talk and genuine support. What's going on, man?`,
      youthful: `What's up${name}! I'm Liam, and I'm stoked you're here. Mental health is just as important as physical health, and talking about it is actually pretty awesome. What's happening in your world?`,
      mature: `Good day${name}. I'm Liam, and I understand that reaching out can take considerable courage, especially for men of our generation. I respect your experience and am here to provide thoughtful support. What would you like to discuss?`
    };
    return welcomeMessages[tone as keyof typeof welcomeMessages] || welcomeMessages.supportive;
  }

  const detectAnxietyKeywords = (message: string): boolean => {
    const anxietyKeywords = [
      'anxious', 'anxiety', 'worried', 'worrying', 'panic', 'nervous',
      'restless', 'overwhelmed', 'stressed', 'stress', 'tension',
      'fear', 'afraid', 'scared', 'racing thoughts', 'can\'t relax',
      'irritable', 'trouble sleeping', 'difficulty concentrating'
    ];
    return anxietyKeywords.some(keyword => 
      message.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const detectDepressionKeywords = (message: string): boolean => {
    const depressionKeywords = [
      'depressed', 'depression', 'sad', 'sadness', 'hopeless', 'worthless',
      'empty', 'numb', 'tired', 'exhausted', 'no energy', 'low energy',
      'lost interest', 'don\'t enjoy', 'no motivation', 'can\'t sleep',
      'sleeping too much', 'appetite', 'weight', 'guilty', 'shame',
      'trouble making decisions', 'can\'t remember', 'isolated', 'alone'
    ];
    return depressionKeywords.some(keyword => 
      message.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const detectCrisisKeywords = (message: string): boolean => {
    const crisisKeywords = [
      'suicide', 'kill myself', 'end it all', 'want to die', 'hurt myself',
      'self-harm', 'cutting', 'overdose', 'can\'t go on', 'no point',
      'better off dead', 'harm myself', 'killing myself', 'suicide attempt',
      'suicide thoughts', 'suicidal thoughts', 'suicidal ideation', 'suicidal intent',
    ];
    return crisisKeywords.some(keyword => 
      message.toLowerCase().includes(keyword.toLowerCase())
    );
  };
  const getSuggestedActions = (userMessage: string): SuggestedAction[] => {
    const actions: SuggestedAction[] = [];
    
    if (detectAnxietyKeywords(userMessage)) {
      actions.push({
        label: "Take Anxiety Assessment",
        url: "https://menshealthfoundation.ca/mindfit-toolkit/anxiety-assessment/",
        type: 'assessment'
      });
    }
    
    if (detectDepressionKeywords(userMessage)) {
      actions.push({
        label: "Take Depression Assessment",
        url: "https://menshealthfoundation.ca/mindfit-toolkit/depression-assessment/",
        type: 'assessment'
      });
    }

    actions.push({
      label: "Get Professional Support",
      url: "tel:1-833-456-4566",
      type: 'support'
    });

    return actions;
  };

  const generateResourcePlan = (userMessage: string, tone: string): ResourcePlan => {
    const hasAnxiety = detectAnxietyKeywords(userMessage);
    const hasDepression = detectDepressionKeywords(userMessage);
    const isCrisis = detectCrisisKeywords(userMessage);

    if (isCrisis) {
      return {
        summary: "Immediate crisis support and safety planning are the top priorities right now.",
        keyAdvice: [
          "Your safety is the most important thing",
          "Reach out to crisis counselors immediately",
          "You don't have to face this alone",
          "There are people trained to help you through this moment"
        ],
        recommendedLinks: [
          {
            title: "24/7 Crisis Support Line",
            url: "tel:1-833-456-4566",
            description: "Immediate phone support available around the clock"
          },
          {
            title: "Crisis Text Line",
            url: "https://www.crisistextline.org/",
            description: "Text-based crisis support when you can't talk"
          }
        ],
        nextSteps: [
          "Call the crisis support line now",
          "Stay with someone you trust",
          "Remove any immediate means of harm",
          "Follow up with a mental health professional"
        ]
      };
    }

    let summary = "Based on our conversation, here's a personalized plan to support your mental health journey.";
    let keyAdvice: string[] = [];
    let recommendedLinks: Array<{title: string; url: string; description: string}> = [];
    let nextSteps: string[] = [];

    if (hasAnxiety && hasDepression) {
      summary = "You're dealing with both anxiety and depression symptoms. This comprehensive plan addresses both areas with proven strategies.";
      keyAdvice = [
        "Acknowledge that these feelings are valid and treatable",
        "Consider professional assessment for both conditions",
        "Practice daily stress management techniques",
        "Connect with others who understand your experience"
      ];
      recommendedLinks = [
        {
          title: "Anxiety Assessment Tool",
          url: "https://menshealthfoundation.ca/mindfit-toolkit/anxiety-assessment/",
          description: "Professional screening to understand your anxiety levels"
        },
        {
          title: "Depression Assessment Tool",
          url: "https://menshealthfoundation.ca/mindfit-toolkit/depression-assessment/",
          description: "Comprehensive screening for depression symptoms"
        },
        {
          title: "Mental Health Resources",
          url: "https://menshealthfoundation.ca/mental-health/",
          description: "Comprehensive mental health support and information"
        }
      ];
      nextSteps = [
        "Complete both assessment tools",
        "Schedule an appointment with a mental health professional",
        "Start a daily mood tracking routine",
        "Explore local support groups"
      ];
    } else if (hasAnxiety) {
      summary = "Your anxiety symptoms are recognized and there are effective ways to manage them.";
      keyAdvice = [
        "Anxiety is treatable with the right strategies",
        "Understanding your triggers is key to management",
        "Regular practice of coping techniques builds resilience",
        "Professional support can accelerate your progress"
      ];
      recommendedLinks = [
        {
          title: "Anxiety Assessment Tool",
          url: "https://menshealthfoundation.ca/mindfit-toolkit/anxiety-assessment/",
          description: "Professional screening to understand your anxiety levels"
        },
        {
          title: "Anxiety Management Techniques",
          url: "https://menshealthfoundation.ca/mental-health/anxiety/",
          description: "Practical strategies for managing anxiety"
        }
      ];
      nextSteps = [
        "Take the anxiety assessment",
        "Practice deep breathing exercises daily",
        "Identify and track your anxiety triggers",
        "Consider speaking with a counselor"
      ];
    } else if (hasDepression) {
      summary = "Depression is a common but treatable condition. This plan focuses on evidence-based approaches to help you feel better.";
      keyAdvice = [
        "Depression is a medical condition, not a personal weakness",
        "Small, consistent steps lead to meaningful change",
        "Professional support can make a significant difference",
        "Recovery is possible with the right tools and support"
      ];
      recommendedLinks = [
        {
          title: "Depression Assessment Tool",
          url: "https://menshealthfoundation.ca/mindfit-toolkit/depression-assessment/",
          description: "Comprehensive screening for depression symptoms"
        },
        {
          title: "Depression Support Resources",
          url: "https://menshealthfoundation.ca/mental-health/depression/",
          description: "Information and support for managing depression"
        }
      ];
      nextSteps = [
        "Complete the depression assessment",
        "Establish a daily routine with small, achievable goals",
        "Connect with supportive people in your life",
        "Explore professional counseling options"
      ];
    } else {
      keyAdvice = [
        "Taking care of your mental health is a sign of strength",
        "Regular check-ins with yourself are important",
        "Building a support network enhances resilience",
        "Professional guidance can help even when things seem okay"
      ];
      recommendedLinks = [
        {
          title: "Men's Mental Health Resources",
          url: "https://menshealthfoundation.ca/mental-health/",
          description: "Comprehensive mental health information and support"
        },
        {
          title: "Professional Support Directory",
          url: "https://menshealthfoundation.ca/find-help/",
          description: "Find qualified mental health professionals"
        }
      ];
      nextSteps = [
        "Continue regular mental health check-ins",
        "Build and maintain supportive relationships",
        "Practice stress management techniques",
        "Stay informed about mental health resources"
      ];
    }

    // Always include crisis support
    recommendedLinks.push({
      title: "24/7 Crisis Support",
      url: "tel:1-833-456-4566",
      description: "Immediate support available anytime you need it"
    });
    return { summary, keyAdvice, recommendedLinks, nextSteps };
  };

  interface GeminiSafetySetting {
    category: string;
    threshold: string;
  }
  
  interface GeminiGenerationConfig {
    temperature?: number;
    topP?: number;
    topK?: number;
    maxOutputTokens?: number;
    stopSequences?: string[];
  }
  
  interface GeminiContentPart {
    text?: string;
    // inlineData?: { mimeType: string; data: string; }; // For multimodal
  }
  
  interface GeminiContent {
    parts: GeminiContentPart[];
    role?: string; // "user" or "model"
  }
  
  interface GeminiApiRequestBody {
    contents: GeminiContent[];
    system_instruction?: GeminiContent; // For newer models and specific use cases
    safetySettings?: GeminiSafetySetting[];
    generationConfig?: GeminiGenerationConfig;
  }
  
  interface GeminiApiResponse {
    candidates?: Array<{
      content?: GeminiContent;
      finishReason?: string;
      index?: number;
      safetyRatings?: Array<{
        category: string;
        probability: string;
        blocked?: boolean;
      }>;
    }>;
    promptFeedback?: {
      blockReason?: string;
      safetyRatings?: Array<{
        category: string;
        probability: string;
      }>;
    };
  }

  const DEFAULT_MODEL_NAME = "gemini-2.0-flash";
  const GEMINI_API_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/";
  const generateSessionId = () => Date.now().toString();
  const generateUserId = () => `user_${Math.floor(Math.random() * 1000000)}`;

  const initializeSession = async () => {
    try {
      const sessionId = generateSessionId();
      const userId = generateUserId();
      const sessionUrl = `https://cmhf-demo-1034025262875.us-central1.run.app/apps/cmhf_ai_demo/users/${userId}/sessions/${sessionId}`;

      const requestBody = {
        state: {
          preferred_language: "English",
          visit_count: 1
        }
      };

      console.log('CMHF API Request - Initialize Session:', {
        url: sessionUrl,
        method: 'POST',
        body: requestBody
      });

      const response = await fetch(sessionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('CMHF API Error - Session Initialization:', {
          status: response.status,
          statusText: response.statusText,
          error: errorText,
          url: sessionUrl
        });
        throw new Error(`Failed to initialize session: ${response.status} ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log('CMHF API Response - Session Initialization:', responseData);

      // Use the session ID and user ID from the response
      return { 
        sessionId: responseData.id, // Use the ID from the response
        userId: responseData.userId // Use the userId from the response
      };
    } catch (error) {
      console.error('CMHF API Error - Session Initialization:', error);
      if (error instanceof Error) {
        return {
          error: true,
          message: error.message
        };
      }
      return {
        error: true,
        message: "Failed to initialize chat session. Please try again."
      };
    }
  };

  const generateLiamResponse = async (userMessage: string, tone: string): Promise<string> => {
    const API_URL = "https://cmhf-demo-1034025262875.us-central1.run.app/run_sse";
    
    // Check if session is initialized
    if (!isSessionInitialized || !sessionId || !userId) {
      console.error('Session not initialized:', { isSessionInitialized, sessionId, userId });
      return "I'm sorry, there was an issue with the chat session. Please try refreshing the page.";
    }

    const isCrisis = detectCrisisKeywords(userMessage);

    if (isCrisis) {
      return "I'm really concerned about what you're sharing with me. Your safety is the most important thing right now. Please consider reaching out to a crisis counselor immediately at 1-833-456-4566. They're available 24/7 and can provide immediate support. You don't have to go through this alone - there are people who want to help you right now.";
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          app_name: "cmhf_ai_demo",
          user_id: userId,
          session_id: sessionId,
          new_message: {
            role: "user",
            parts: [{
              text: `User message: "${userMessage}"`
            }]
          },
          streaming: true
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.error('API error:', response.status, response.statusText, errorBody);
        return "I'm sorry, I'm having trouble connecting right now. Please try again in a moment, or consider reaching out to a professional directly.";
      }
      const apiResponseText = await response.text();
      console.log('API response:', apiResponseText);

      // Split the response by newlines and filter out empty lines
      const responseLines = apiResponseText.split('\n').filter(line => line.trim() !== '');
      
      // Get the last non-empty line which should contain the complete response
      const lastLine = responseLines[responseLines.length - 1];
      
      // Remove 'data: ' prefix if present
      const jsonString = lastLine.startsWith('data: ') ? lastLine.slice(6) : lastLine;
      
      try {
        const data = JSON.parse(jsonString);
        
        // Handle the case where the response contains an error
        if (data.error) {
          console.error('API response error:', data.error);
          return "I'm sorry, there was an issue processing your request. Please try again.";
        }

        // Extract the response text from the content parts
        const responseText = data?.content?.parts?.[0]?.text || 
                            data?.response?.text || 
                            "I'm sorry, I couldn't generate a response at this time. Please try again.";

        // Convert **text** to bold
        const formattedResponse = responseText;
        return formattedResponse;
      } catch (error) {
        console.error('Error parsing API response:', error);
        return "I'm sorry, something went wrong while processing the response. Please try again later.";
      }
    } catch (error) {
      console.error('Error calling API:', error);
      return "I'm sorry, something went wrong while trying to generate a response. Please try again later.";
    }
  };

  // Function to handle sending a message in the chat interface
  const handleSendMessage = async () => {
    // Don't send empty messages
    if (!inputValue.trim()) return;

    // Create a new message object with user input
    const userMessage: Message = {
      id: Date.now().toString(), // Unique ID based on timestamp
      content: inputValue,       // The message text from the input field
      sender: 'user',            // Indicate this is a user message
      timestamp: new Date()      // Current date/time
    };

    // Add the new message to the messages array in state
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    if (detectCrisisKeywords(inputValue)) {
      toast({
        title: "Crisis Support Available",
        description: "We've detected you may need immediate help. Crisis counselors are available 24/7 at 1-833-456-4566",
        variant: "destructive",
      });
    }

    setTimeout(async () => {
      const suggestedActions = getSuggestedActions(inputValue);
      const response = await generateLiamResponse(inputValue, selectedTone);
      const liamResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'liam',
        timestamp: new Date(),
        tone: selectedTone,
        suggestedActions: suggestedActions
      };
      setMessages(prev => [...prev, liamResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (showConsentForm) {
    return <DataConsentForm onComplete={handleConsentComplete} />;
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/30">
      <ChatHeader 
        selectedTone={selectedTone} 
        onBack={onBack} 
      />

      <div className="bg-gradient-to-r from-red-50 via-pink-50 to-red-50 border-b border-red-200/50 p-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-center space-x-3 text-red-800">
          <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center">
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </div>
          <span className="font-medium">Crisis Support Available 24/7</span>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-red-300 text-red-700 hover:bg-red-50 hover:border-red-400 transition-all duration-300"
            onClick={() => window.open('tel:1-833-456-4566')}
          >
            <Phone className="h-3 w-3 mr-2" />
            Call Now
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-1">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MessageCard message={message} />
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="flex items-center space-x3 mb-3">
                <Avatar className="w-8 h-8 ring-2 ring-blue-100 ring-offset-1 ring-offset-blue-50">
                  <AvatarImage src="/lovable-uploads/b277bfb0-6f11-4d9a-b1ea-2b1285189a74.png" alt="Liam" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-sm font-bold">
                    L
                  </AvatarFallback>
                </Avatar>
                <Card className="bg-white/90 backdrop-blur-sm shadow-sm border-gray-200/50">
                  <CardContent className="p-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50 p-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex space-x-4 items-end">
            <div className="flex-1 relative">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here... I'm here to listen and support you."
                className="pr-12 py-4 text-base border-gray-300 focus:border-blue-400 focus:ring-blue-400/20 rounded-2xl bg-white/90 backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <MessageCircle className="h-5 w-5" />
              </div>
            </div>
            <Button 
              onClick={handleSendMessage} 
              disabled={!inputValue.trim()}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Your conversations with Liam are confidential and designed to provide supportive guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
