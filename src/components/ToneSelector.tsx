
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Briefcase, MessageCircle, Zap, Crown } from 'lucide-react';

interface ToneSelectorProps {
  selectedTone: string;
  onToneChange: (tone: string) => void;
  compact?: boolean;
}

const tones = [
  {
    id: 'supportive',
    name: 'Supportive',
    description: 'Warm, empathetic, understanding',
    icon: Heart,
    color: 'bg-red-50 border-red-200 text-red-800',
    example: 'I hear you, and what you\'re feeling makes complete sense.'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Clinical, evidence-based, structured',
    icon: Briefcase,
    color: 'bg-blue-50 border-blue-200 text-blue-800',
    example: 'Based on evidence-based practices, I can recommend...'
  },
  {
    id: 'casual',
    name: 'Casual',
    description: 'Friendly, relaxed, approachable',
    icon: MessageCircle,
    color: 'bg-green-50 border-green-200 text-green-800',
    example: 'Hey man, that sounds really tough, but you\'re not alone.'
  },
  {
    id: 'youthful',
    name: 'Youthful',
    description: 'Energetic, modern, relatable',
    icon: Zap,
    color: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    example: 'Dude, major props for being brave enough to talk about this!'
  },
  {
    id: 'mature',
    name: 'Mature',
    description: 'Respectful, experienced, thoughtful',
    icon: Crown,
    color: 'bg-purple-50 border-purple-200 text-purple-800',
    example: 'I appreciate you sharing this. Life\'s challenges can feel overwhelming...'
  }
];

const ToneSelector: React.FC<ToneSelectorProps> = ({ selectedTone, onToneChange, compact = false }) => {
  if (compact) {
    return (
      <div className="flex space-x-2">
        {tones.map((tone) => {
          const Icon = tone.icon;
          return (
            <Button
              key={tone.id}
              variant={selectedTone === tone.id ? "default" : "outline"}
              size="sm"
              onClick={() => onToneChange(tone.id)}
              className="text-xs"
            >
              <Icon className="h-3 w-3 mr-1" />
              {tone.name}
            </Button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-700 text-center">
        Choose Liam's Communication Style
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {tones.map((tone) => {
          const Icon = tone.icon;
          const isSelected = selectedTone === tone.id;
          
          return (
            <Card
              key={tone.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-50'
              }`}
              onClick={() => onToneChange(tone.id)}
            >
              <CardContent className="p-3 text-center">
                <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${
                  isSelected ? 'bg-blue-500' : 'bg-gray-200'
                }`}>
                  <Icon className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <h4 className="font-medium text-sm text-gray-900 mb-1">{tone.name}</h4>
                <p className="text-xs text-gray-600 mb-2">{tone.description}</p>
                {isSelected && (
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                    Selected
                  </Badge>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      {selectedTone && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg border">
          <p className="text-xs text-gray-600 mb-1">Example response:</p>
          <p className="text-sm text-gray-800 italic">
            "{tones.find(t => t.id === selectedTone)?.example}"
          </p>
        </div>
      )}
    </div>
  );
};

export default ToneSelector;
