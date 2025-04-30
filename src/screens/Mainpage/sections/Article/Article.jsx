import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { HeartIcon, ClockIcon, GiftIcon } from "lucide-react";

export const Article = () => {
  return (
    <article className="flex flex-col md:flex-row gap-3 xs:gap-4 sm:gap-6 md:gap-8 bg-white rounded-lg xs:rounded-xl p-2 xs:p-3 sm:p-4 shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="w-full md:w-[460px] h-[160px] xs:h-[200px] sm:h-[260px] md:h-[340px] lg:h-[400px] flex-shrink-0 overflow-hidden rounded-md xs:rounded-lg">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          alt="Mother's Day gift arrangement with flowers and presents"
          src="https://images.unsplash.com/photo-1620673399859-be28692636e8?q=80&w=2070&auto=format&fit=crop"
        />
      </div>

      {/* Content */}
      <div className="flex-1 mt-2 xs:mt-3 md:mt-0">
        <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6">
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-1.5 xs:gap-2 sm:gap-4">
            <Badge
              variant="outline"
              className="rounded-full border-pink-300 bg-pink-50 hover:bg-pink-100 text-pink-700 px-1.5 xs:px-2 sm:px-4 py-0.5 sm:py-1 text-[10px] xs:text-xs sm:text-sm font-medium"
            >
              <GiftIcon className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 mr-0.5 xs:mr-1" /> #Gifts
            </Badge>
            <Separator
              orientation="vertical"
              className="h-1 w-1 rounded-full bg-pink-300 hidden sm:block"
            />
            <span className="text-[10px] xs:text-xs sm:text-sm text-gray-500 flex items-center">
              <ClockIcon className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 mr-0.5 xs:mr-1 text-pink-400" />
              10 minutes reading
            </span>
          </div>

          {/* Title */}
          <h2 className="font-['Cormorant_Garamond'] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight hover:text-pink-700 transition-colors duration-300">
            How to Choose a Mother's Day Gift (That's Perfect for Her)
          </h2>

          {/* Description */}
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            In my years of celebrating the wonderful mothers in my life, I've learned that there's a perfect gift for every type of mom. To find that dream Mother's Day present, it's all about understanding her unique personality and interests...
          </p>

          {/* Button */}
          <Button 
            className="w-[100px] xs:w-[120px] sm:w-[140px] md:w-[155px] h-8 xs:h-10 sm:h-12 md:h-[55px] bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 text-white transition-all duration-300 shadow-md hover:shadow-lg text-[10px] xs:text-xs sm:text-sm uppercase tracking-wider"
          >
            Read more
          </Button>
        </div>
      </div>
    </article>
  );
};
