import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Separator } from "../../../../components/ui/separator";
import { GiftIcon, ClockIcon } from "lucide-react";

export const SectionComponentNode = () => {
  const articleData = {
    image: "https://images.unsplash.com/photo-1620673399859-be28692636e8?q=80&w=2070&auto=format&fit=crop",
    category: "Gift Ideas",
    readingTime: "6 minutes reading",
    title: "Last-Minute Mother's Day Gift Ideas That Show You Care",
    excerpt:
      "Found yourself just days away from Mother's Day without a gift? Don't worry! We've compiled thoughtful, meaningful gift ideas that can be arranged quickly but will make mom feel truly special and appreciated...",
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="w-full md:w-[40%] h-[250px] overflow-hidden rounded-md">
        <img
          src={articleData.image}
          alt="Mother's Day gift arrangement with flowers and presents"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="w-full md:w-[60%] flex flex-col justify-between py-2">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge className="rounded-full bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200">
              <GiftIcon className="w-3 h-3 mr-1" />
              #{articleData.category}
            </Badge>
            <Separator orientation="vertical" className="h-4 w-0.5 bg-pink-200" />
            <span className="text-xs text-gray-500 flex items-center">
              <ClockIcon className="w-3 h-3 mr-1 text-pink-400" />
              {articleData.readingTime}
            </span>
          </div>

          <h3 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-bold text-gray-800 hover:text-pink-700 transition-colors">
            {articleData.title}
          </h3>

          <p className="text-sm text-gray-600 line-clamp-3">
            {articleData.excerpt}
          </p>
        </div>

        <Button className="self-start mt-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full shadow-md px-6 py-2 text-sm">
          Read more
        </Button>
      </div>
    </div>
  );
};
