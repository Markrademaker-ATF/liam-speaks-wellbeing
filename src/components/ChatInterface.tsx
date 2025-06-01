import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Send, MessageCircle, Phone, Users, AlertTriangle, ExternalLink } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import ToneSelector from './ToneSelector';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'liam';
  timestamp: Date;
  tone?: string;
  suggestedActions?: Array<{
    label: string;
    url: string;
    type: 'assessment' | 'support' | 'group';
  }>;
}

interface ChatInterfaceProps {
  selectedTone: string;
  onBack: () => void;
  onToneChange: (tone: string) => void;
}

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

  const getSuggestedActions = (userMessage: string): Array<{label: string; url: string; type: 'assessment' | 'support' | 'group'}> => {
    const actions = [];
    
    if (detectAnxietyKeywords(userMessage)) {
      actions.push({
        label: "Take Anxiety Assessment",
        url: "https://menshealthfoundation.ca/mindfit-toolkit/anxiety-assessment/",
        type: 'assessment' as const
      });
    }
    
    if (detectDepressionKeywords(userMessage)) {
      actions.push({
        label: "Take Depression Assessment",
        url: "https://menshealthfoundation.ca/mindfit-toolkit/depression-assessment/",
        type: 'assessment' as const
      });
    }

    // Always include general support options
    actions.push({
      label: "Get Professional Support",
      url: "tel:1-833-456-4566",
      type: 'support' as const
    });

    return actions;
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
    } else {
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
    }

    // Add tone-specific additions
    const toneAdditions = {
      supportive: " I want you to know that reaching out shows real strength, and I'm here to help you find the right resources.",
      professional: " I recommend taking a proper assessment to better understand your symptoms and connect with appropriate professional support.",
      casual: " The good news is there are some solid tools and people who can help you work through this stuff.",
      youthful: " There are some really helpful assessments that can give you insight into what you're experiencing and point you toward the right support.",
      mature: " I encourage you to consider a proper assessment, which can provide valuable insight and help guide you toward the most appropriate support."
    };

    if (hasAnxiety || hasDepression) {
      baseResponse += toneAdditions[tone as keyof typeof toneAdditions] || toneAdditions.supportive;
    }

    return baseResponse || (
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
    );
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

    // Check for crisis keywords
    if (detectCrisisKeywords(inputValue)) {
      toast({
        title: "Crisis Support Available",
        description: "We've detected you may need immediate help. Crisis counselors are available 24/7 at 1-833-456-4566",
        variant: "destructive",
      });
    }

    // Simulate Liam's response
    setTimeout(() => {
      const suggestedActions = getSuggestedActions(inputValue);
      
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
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm border-b p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/lovable-uploads/b277bfb0-6f11-4d9a-b1ea-2b1285189a74.png" alt="Liam" />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white font-bold">
                  L
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold text-gray-900">Liam</h2>
                <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                  {selectedTone.charAt(0).toUpperCase() + selectedTone.slice(1)} Mode
                </Badge>
              </div>
            </div>
          </div>
          
          <ToneSelector selectedTone={selectedTone} onToneChange={onToneChange} compact />
        </div>
      </div>

      {/* Crisis Banner */}
      <div className="bg-red-50 border-b border-red-200 p-3">
        <div className="max-w-4xl mx-auto flex items-center justify-center space-x-2 text-sm text-red-800">
          <AlertTriangle className="h-4 w-4" />
          <span>In crisis? Call 1-833-456-4566 for immediate support</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-900 shadow-sm border'
                }`}
              >
                {message.sender === 'liam' && (
                  <div className="flex items-center space-x-2 mb-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="/lovable-uploads/b277bfb0-6f11-4d9a-b1ea-2b1285189a74.png" alt="Liam" />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-xs font-bold">
                        L
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium text-gray-600">Liam</span>
                  </div>
                )}
                <p className="text-sm">{message.content}</p>
                {message.sender === 'liam' && message.suggestedActions && (
                  <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
                    <p className="text-xs font-medium text-gray-600 mb-2">Suggested next steps:</p>
                    <div className="flex flex-wrap gap-2">
                      {message.suggestedActions.map((action, index) => (
                        <Button
                          key={index}
                          size="sm"
                          variant={action.type === 'assessment' ? "default" : "outline"}
                          className={`text-xs ${
                            action.type === 'assessment' 
                              ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                              : 'border-blue-200 text-blue-700 hover:bg-blue-50'
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
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-900 shadow-sm border max-w-xs lg:max-w-md px-4 py-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src="/lovable-uploads/b277bfb0-6f11-4d9a-b1ea-2b1285189a74.png" alt="Liam" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-xs font-bold">
                      L
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium text-gray-600">Liam</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t p-4">
        <div className="max-w-4xl mx-auto flex space-x-3">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            className="flex-1"
          />
          <Button onClick={handleSendMessage} disabled={!inputValue.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
