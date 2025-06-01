import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Send, MessageCircle, Phone, Users, AlertTriangle, ExternalLink, Sparkles, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import ToneSelector from './ToneSelector';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
  onToneChange: (tone: string) => void;
}

interface ChatHeaderProps {
  selectedTone: string;
  onBack: () => void;
  onToneChange: (tone: string) => void;
  currentResourcePlan: ResourcePlan | null;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ selectedTone, onBack, onToneChange, currentResourcePlan }) => {
  const [showResourcePlan, setShowResourcePlan] = useState(false);

  return (
    <div className="bg-white/95 backdrop-blur-xl shadow-lg border-b border-blue-100/50 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onBack}
              className="hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-green-50 px-4 py-2 rounded-2xl border border-blue-100/50">
              <div className="relative">
                <Avatar className="w-12 h-12 ring-2 ring-blue-200/50 ring-offset-2 ring-offset-white">
                  <AvatarImage src="/lovable-uploads/b277bfb0-6f11-4d9a-b1ea-2b1285189a74.png" alt="Liam" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white font-bold text-lg">
                    L
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm">
                  <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5 animate-pulse"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="font-bold text-lg text-gray-900">Liam</h2>
                  <Sparkles className="w-4 h-4 text-blue-500" />
                </div>
                <Badge variant="secondary" className="text-xs bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 font-medium">
                  {selectedTone.charAt(0).toUpperCase() + selectedTone.slice(1)} Mode • Online
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {currentResourcePlan && (
              <Collapsible open={showResourcePlan} onOpenChange={setShowResourcePlan}>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200 text-purple-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 hover:border-purple-300 transition-all duration-300 font-semibold"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Your Resource Plan</span>
                    {showResourcePlan ? 
                      <ChevronUp className="w-4 h-4" /> : 
                      <ChevronDown className="w-4 h-4" />
                    }
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-bold text-purple-900 flex items-center">
                        <Sparkles className="w-5 h-5 mr-2" />
                        Your Personalized Resource Plan
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-2">Summary</h4>
                        <p className="text-purple-700">{currentResourcePlan.summary}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-2">Key Advice</h4>
                        <ul className="space-y-2">
                          {currentResourcePlan.keyAdvice.map((advice, idx) => (
                            <li key={idx} className="flex items-start text-purple-700">
                              <span className="text-purple-500 mr-2 font-bold">•</span>
                              {advice}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-purple-800 mb-2">Recommended Resources</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {currentResourcePlan.recommendedLinks.map((link, idx) => (
                            <div key={idx} className="bg-white/70 rounded-lg p-3 border border-purple-200 hover:bg-white/90 transition-all duration-300">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="p-0 h-auto text-left w-full justify-start hover:bg-transparent"
                                onClick={() => window.open(link.url, '_blank')}
                              >
                                <div>
                                  <div className="font-medium text-purple-800 flex items-center mb-1">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    {link.title}
                                  </div>
                                  <div className="text-purple-600 text-sm">{link.description}</div>
                                </div>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-purple-800 mb-2">Next Steps</h4>
                        <ol className="space-y-2">
                          {currentResourcePlan.nextSteps.map((step, idx) => (
                            <li key={idx} className="flex items-start text-purple-700">
                              <span className="text-purple-500 mr-3 font-bold bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center text-xs">{idx + 1}</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            )}
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200/50 shadow-sm">
              <ToneSelector selectedTone={selectedTone} onToneChange={onToneChange} compact />
            </div>
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

const ChatInterface: React.FC<ChatInterfaceProps> = ({ selectedTone, onBack, onToneChange }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: getWelcomeMessage(selectedTone),
      sender: 'liam',
      timestamp: new Date(),
      tone: selectedTone
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentResourcePlan, setCurrentResourcePlan] = useState<ResourcePlan | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Update welcome message when tone changes
    setMessages(prev => [
      {
        id: '1',
        content: getWelcomeMessage(selectedTone),
        sender: 'liam',
        timestamp: new Date(),
        tone: selectedTone
      },
      ...prev.slice(1)
    ]);
  }, [selectedTone]);

  function getWelcomeMessage(tone: string): string {
    const welcomeMessages = {
      supportive: "Hey there! I'm Liam, and I'm really glad you're here. Taking this step to reach out shows real strength. I'm here to listen, support you, and help connect you with the right resources. What's on your mind today?",
      professional: "Hello, I'm Liam, your mental health support companion. I'm here to provide you with evidence-based guidance and connect you with appropriate professional resources. How can I assist you today?",
      casual: "Hey! I'm Liam - think of me as that friend who's always got your back. No judgment here, just real talk and genuine support. What's going on, man?",
      youthful: "What's up! I'm Liam, and I'm stoked you're here. Mental health is just as important as physical health, and talking about it is actually pretty awesome. What's happening in your world?",
      mature: "Good day. I'm Liam, and I understand that reaching out can take considerable courage, especially for men of our generation. I respect your experience and am here to provide thoughtful support. What would you like to discuss?"
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
      'better off dead', 'harm myself'
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

  const generateLiamResponse = (userMessage: string, tone: string): string => {
    const isCrisis = detectCrisisKeywords(userMessage);
    
    if (isCrisis) {
      return "I'm really concerned about what you're sharing with me. Your safety is the most important thing right now. Please consider reaching out to a crisis counselor immediately at 1-833-456-4566. They're available 24/7 and can provide immediate support. You don't have to go through this alone - there are people who want to help you right now.";
    }

    const hasAnxiety = detectAnxietyKeywords(userMessage);
    const hasDepression = detectDepressionKeywords(userMessage);

    let baseResponse = "";
    
    if (hasAnxiety && hasDepression) {
      baseResponse = "I hear that you're dealing with both anxiety and depression symptoms. That can feel really overwhelming, but please know that these are common experiences and there are effective ways to address them.";
    } else if (hasAnxiety) {
      baseResponse = "It sounds like you're experiencing some anxiety symptoms. Those feelings can be really challenging to deal with, but there are proven strategies and assessments that can help you understand what you're going through.";
    } else if (hasDepression) {
      baseResponse = "What you're describing sounds like it could be related to depression. Those feelings are valid and more common than you might think, especially among men who often don't talk about these experiences.";
    }

    if (hasAnxiety || hasDepression) {
      const toneAdditions = {
        supportive: " I want you to know that reaching out shows real strength, and I'm here to help you find the right resources.",
        professional: " I recommend taking a proper assessment to better understand your symptoms and connect with appropriate professional support.",
        casual: " The good news is there are some solid tools and people who can help you work through this stuff.",
        youthful: " There are some really helpful assessments that can give you insight into what you're experiencing and point you toward the right support.",
        mature: " I encourage you to consider a proper assessment, which can provide valuable insight and help guide you toward the most appropriate support."
      };
      baseResponse += toneAdditions[tone as keyof typeof toneAdditions] || toneAdditions.supportive;
      return baseResponse;
    }

    const responses = {
      supportive: [
        "I hear you, and what you're feeling makes complete sense. Many men go through similar experiences, and it takes real courage to talk about it.",
        "Thank you for sharing that with me. Your feelings are valid, and I want you to know that there are people and resources that can help.",
        "I'm glad you felt comfortable enough to open up about this. Let's explore some ways we can get you the support you deserve."
      ],
      professional: [
        "Based on what you've shared, I can connect you with evidence-based resources and qualified professionals who specialize in this area.",
        "Your concerns align with common mental health challenges that many Canadian men face. There are established treatment protocols that can be very effective.",
        "I recommend we connect you with a licensed mental health professional who can provide personalized assessment and treatment options."
      ],
      casual: [
        "Man, that sounds really tough. But you know what? You're not alone in this - a lot of guys deal with similar stuff, they just don't always talk about it.",
        "I get it, life can throw some serious curveballs. The good news is there are some really solid people and resources that can help you work through this.",
        "Thanks for being real with me. Let's figure out how to get you connected with some people who can actually make a difference."
      ],
      youthful: [
        "Dude, first off - major props for being brave enough to talk about this stuff. That's actually super mature and shows you're taking charge of your mental health.",
        "I totally get that this feels overwhelming right now. But here's the thing - there are amazing resources and people who can help you navigate this.",
        "You're already doing something awesome by reaching out. Let's connect you with some people who really know their stuff and can help you feel better."
      ],
      mature: [
        "I appreciate you sharing this with me. Life's challenges can indeed feel overwhelming, particularly when we feel we should handle everything on our own.",
        "Your experience resonates with many men who've walked similar paths. There's wisdom in seeking support, and it shows maturity and self-awareness.",
        "Let me connect you with resources that respect your experience and can provide the thoughtful, professional support you deserve."
      ]
    };

    const toneResponses = responses[tone as keyof typeof responses] || responses.supportive;
    return toneResponses[Math.floor(Math.random() * toneResponses.length)];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

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

    setTimeout(() => {
      const suggestedActions = getSuggestedActions(inputValue);
      const resourcePlan = generateResourcePlan(inputValue, selectedTone);
      
      // Update the current resource plan in the header
      setCurrentResourcePlan(resourcePlan);
      
      const liamResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateLiamResponse(inputValue, selectedTone),
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

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/30">
      <ChatHeader 
        selectedTone={selectedTone} 
        onBack={onBack} 
        onToneChange={onToneChange} 
        currentResourcePlan={currentResourcePlan}
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
              <div className="flex items-center space-x-3 mb-3">
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
