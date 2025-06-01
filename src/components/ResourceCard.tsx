
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  action: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  action 
}) => {
  return (
    <Card className="bg-white border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <Button 
          variant="outline" 
          size="lg"
          className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 font-semibold transition-all duration-200"
        >
          {action}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
