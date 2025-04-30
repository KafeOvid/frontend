import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import { GlobeIcon, ClockIcon } from "lucide-react";

export const DivWrapper = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <div className="w-full sm:w-6/12 relative overflow-hidden rounded-lg group">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          alt="Different Mother's Day celebrations around the world"
          src="https://images.unsplash.com/photo-1519834024312-6ed0dfc82e2c?q=80&w=2069&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-800/40 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge
              variant="outline"
              className="rounded-full border-pink-200 bg-pink-500/30 text-white px-3 py-0.5 text-xs backdrop-blur-sm"
            >
              <GlobeIcon className="h-3 w-3 mr-1" /> #Traditions
            </Badge>
            <Separator
              orientation="vertical"
              className="h-4 w-0.5 bg-white/30 hidden sm:block"
            />
            <span className="text-xs text-white/80 flex items-center">
              <ClockIcon className="h-3 w-3 mr-1 text-pink-200" />
              6 minutes reading
            </span>
          </div>
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight mb-2">
            Mother's Day Around the World: Global Celebrations and Traditions
          </h2>
          <p className="text-white/80 text-xs sm:text-sm mb-4 line-clamp-2 sm:line-clamp-3">
            Whether you're curious about international customs or planning to celebrate with a global twist, discover how Mother's Day is honored across different cultures and countries...
          </p>
          <Button
            variant="default"
            className="bg-white text-pink-700 hover:bg-pink-50 text-xs rounded-full"
          >
            Read more
          </Button>
        </div>
      </div>
      
      <div className="w-full sm:w-6/12 flex flex-col justify-between gap-4">
        <div className="h-[180px] relative overflow-hidden rounded-lg group">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            alt="Handwritten Mother's Day cards and letters"
            src="https://images.unsplash.com/photo-1527689638836-411945a2b57c?q=80&w=2070&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-800/50"></div>
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h3 className="text-white text-base sm:text-lg font-bold mb-2">
              Heartfelt Messages: What to Write in Your Mother's Day Card
            </h3>
            <Button variant="link" className="text-white p-0 h-auto text-xs underline underline-offset-2">
              Read the guide →
            </Button>
          </div>
        </div>
        
        <div className="h-[180px] relative overflow-hidden rounded-lg group">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            alt="Mother's Day DIY crafts and projects"
            src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=2070&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-800/70 to-purple-900/50"></div>
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h3 className="text-white text-base sm:text-lg font-bold mb-2">
              DIY Mother's Day Gifts: Handmade Treasures She'll Love
            </h3>
            <Button variant="link" className="text-white p-0 h-auto text-xs underline underline-offset-2">
              Get inspired →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
