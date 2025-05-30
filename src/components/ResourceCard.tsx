
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  action: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  action 
}) => {
  return (
    <Card className={`${color} border-2 hover:shadow-md transition-all duration-200 hover:scale-105`}>
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
          <Icon className="h-6 w-6 text-gray-700" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full border-gray-300 hover:bg-white"
        >
          {action}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
