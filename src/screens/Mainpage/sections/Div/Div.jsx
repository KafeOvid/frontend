import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { BadgeCheck, Star, Calendar } from "lucide-react";

export const Div = () => {
  const featuresData = [
    {
      icon: <BadgeCheck className="h-5 w-5 text-pink-500" />,
      title: "Curated Gift Ideas",
      description: "Handpicked selections for every type of mom",
      image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?q=80&w=2067&auto=format&fit=crop"
    },
    {
      icon: <Star className="h-5 w-5 text-pink-500" />,
      title: "Special Celebration Tips",
      description: "Creative ways to make her day memorable",
      image: "https://images.unsplash.com/photo-1620743964447-1b12b0b5a405?q=80&w=2067&auto=format&fit=crop"
    },
    {
      icon: <Calendar className="h-5 w-5 text-pink-500" />,
      title: "Plan Ahead",
      description: "Easy planning guides for the perfect day",
      image: "https://images.unsplash.com/photo-1557592150-c6ffdd5faae1?q=80&w=2070&auto=format&fit=crop"
    }
  ];
  
  return (
    <div className="w-full bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 shadow-md">
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-bold text-pink-800 mb-3">
          Make This Mother's Day Special
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From thoughtful gifts to meaningful celebrations, discover everything you need to create a perfect Mother's Day experience that shows how much you care.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuresData.map((feature, index) => (
          <Card key={index} className="relative overflow-hidden border-pink-100 hover:shadow-md transition-all duration-300 h-64">
            <div 
              className="absolute inset-0 w-full h-full opacity-15"
              style={{
                backgroundImage: `url(${feature.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            <CardContent className="relative z-10 p-5 flex flex-col items-center text-center h-full bg-white/90">
              <div className="bg-pink-100 p-3 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full px-8 py-2 text-white shadow-md">
          Explore Mother's Day Ideas
        </Button>
      </div>
    </div>
  );
};
