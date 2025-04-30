import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { UtensilsCrossedIcon, ClockIcon } from "lucide-react";

export const Article1 = () => {
  return (
    <article className="flex flex-col gap-3 sm:gap-4 w-full bg-white rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {/* Image */}
        <div className="w-full sm:w-1/3 h-[180px] sm:h-[220px] rounded-md overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            alt="Homemade breakfast for Mother's Day with pancakes, berries and coffee"
            src="https://images.unsplash.com/photo-1590137876181-2a5a7e340308?q=80&w=2128&auto=format&fit=crop"
          />
        </div>

        {/* Content */}
        <div className="w-full sm:w-2/3">
          <div className="space-y-2 sm:space-y-3">
            {/* Meta info */}
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="rounded-full border-pink-300 bg-pink-50 hover:bg-pink-100 text-pink-700 px-2 py-0.5 text-xs font-medium"
              >
                <UtensilsCrossedIcon className="w-3 h-3 mr-1" /> #Recipes
              </Badge>
              <Separator
                orientation="vertical"
                className="h-4 w-0.5 bg-pink-200"
              />
              <span className="text-xs text-gray-500 flex items-center">
                <ClockIcon className="w-3 h-3 mr-1 text-pink-400" />
                5 minutes reading
              </span>
            </div>

            {/* Title */}
            <h3 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-bold text-gray-800 leading-tight hover:text-pink-700 transition-colors duration-300">
              Easy Mother's Day Breakfast Recipes to Make Her Morning Special
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 line-clamp-4">
              Start Mother's Day right with these simple yet impressive breakfast recipes. From fluffy pancakes topped with fresh berries to savory avocado toast with a twist, these recipes are perfect for surprising mom with breakfast in bed...
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button 
          className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 text-white text-xs px-4 py-2"
        >
          View Recipe
        </Button>
      </div>
    </article>
  );
};
