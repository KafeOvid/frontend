import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from "lucide-react";

export const RightPanel = () => {
  // Social media icons data
  const socialIcons = [
    {
      icon: <FacebookIcon className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 text-white" />,
      alt: "Facebook",
    },
    {
      icon: <TwitterIcon className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 text-white" />,
      alt: "Twitter",
    },
    {
      icon: <InstagramIcon className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 text-white" />,
      alt: "Instagram",
    },
    {
      icon: <YoutubeIcon className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 text-white" />,
      alt: "Youtube",
    },
  ];

  // Destinations data - updated for Mother's Day theme
  const destinations = [
    { name: "Mother's Day Recipes" },
    { name: "Gift Ideas" },
    { name: "Family Activities" },
    { name: "Celebration Tips" },
  ];

  return (
    <div className="flex flex-col gap-4 xs:gap-5 sm:gap-6 md:gap-8 w-full max-w-full md:max-w-[300px]">
      {/* Author Profile Card */}
      <Card className="border border-pink-200 rounded-none relative pt-14 xs:pt-16 shadow-sm hover:shadow-md transition-all">
        <CardContent className="p-3 xs:p-4 sm:p-5 md:p-6">
          <Avatar className="w-16 xs:w-20 sm:w-22 md:w-24 h-16 xs:h-20 sm:h-22 md:h-24 absolute -top-8 xs:-top-10 sm:-top-11 md:-top-12 left-1/2 transform -translate-x-1/2 rounded-full border border-pink-300">
            <img
              className="object-cover w-full h-full"
              alt="Avatar"
              src="https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            />
          </Avatar>

          <div className="flex flex-col items-center gap-2 xs:gap-3 md:gap-4">
            <h3 className="font-['Cormorant_Garamond'] text-base xs:text-lg sm:text-xl font-bold text-pink-800">
              Sarah Johnson
            </h3>

            <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 text-center leading-relaxed">
              As a mother of three and a passionate blogger, I've dedicated my life to celebrating 
              motherhood in all its forms. My journey has taught me that being a mother is the most 
              rewarding adventure - filled with love, challenges, and countless precious moments worth sharing.
            </p>

            <div className="mt-1 md:mt-2">
              <h4 className="text-[10px] xs:text-xs sm:text-sm font-medium text-center mb-1.5 xs:mb-2 md:mb-3">
                Follow me
              </h4>

              <div className="flex justify-center gap-1.5 xs:gap-2">
                {socialIcons.map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-pink-700 flex items-center justify-center hover:bg-pink-800 transition-colors"
                  >
                    {icon.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Destinations Section - Updated to Categories for Mother's Day */}
      <div className="flex flex-col gap-2 xs:gap-3">
        <h2 className="font-['Cormorant_Garamond'] text-base xs:text-lg sm:text-xl font-bold text-pink-800">
          Mother's Day Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-1.5 xs:gap-2">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="w-full h-[50px] xs:h-[60px] sm:h-[75px] md:h-[90px] bg-gradient-to-r from-pink-700 to-pink-500 flex items-center justify-center group cursor-pointer hover:from-pink-800 hover:to-pink-600 transition-colors"
            >
              <div className="flex flex-col items-center gap-1.5 xs:gap-2">
                <div className="w-8 xs:w-9 sm:w-10 md:w-12 h-px bg-white"></div>
                <h4 className="text-white text-xs xs:text-sm sm:text-base font-medium">
                  {destination.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Card */}
      <Card className="border border-pink-200 rounded-none shadow-sm hover:shadow-md transition-all">
        <CardContent className="p-3 xs:p-4 sm:p-5 md:p-6">
          <div className="space-y-2 xs:space-y-3 md:space-y-4">
            <div className="text-center">
              <h3 className="font-['Cormorant_Garamond'] text-base xs:text-lg sm:text-xl font-bold text-pink-800">
                Mother's Day Newsletter
              </h3>
              <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mt-1 md:mt-2">
                Subscribe to receive exclusive Mother's Day content, celebration ideas, and gift guides!
              </p>
            </div>

            <div className="space-y-2 xs:space-y-3 md:space-y-4">
              <div>
                <label className="text-[10px] xs:text-xs font-medium text-gray-900">
                  Email address
                </label>
                <Input
                  type="email"
                  placeholder="example@"
                  className="border-0 border-b border-pink-300 rounded-none px-0 text-xs xs:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              <Button className="w-full h-8 xs:h-9 sm:h-10 md:h-12 bg-pink-700 text-white rounded-none hover:bg-pink-800 transition-colors text-[10px] xs:text-xs sm:text-sm">
                Subscribe
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Special Mother's Day Ideas Card */}
      <Card className="border border-pink-200 rounded-none shadow-sm hover:shadow-md transition-all">
        <CardContent className="p-3 xs:p-4 sm:p-5 md:p-6">
          <div className="space-y-2 xs:space-y-3 md:space-y-4">
            <div>
              <h3 className="font-['Cormorant_Garamond'] text-base xs:text-lg sm:text-xl font-bold text-pink-800">
                Mother's Day Plans?
              </h3>
              <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mt-1">
                Find the perfect way to celebrate Mom
              </p>
            </div>

            <div className="space-y-2 xs:space-y-3 md:space-y-4">
              <div>
                <label className="text-[10px] xs:text-xs font-medium text-gray-900">
                  Activity type
                </label>
                <Input
                  placeholder="Brunch, Spa Day, etc."
                  className="border-0 border-b border-pink-300 rounded-none px-0 text-xs xs:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              <Input
                type="date"
                placeholder="Date"
                className="border-0 border-b border-pink-200 rounded-none px-0 text-xs xs:text-sm text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
              />

              <Input
                type="time"
                placeholder="Time"
                className="border-0 border-b border-pink-200 rounded-none px-0 text-xs xs:text-sm text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
              />

              <Button className="w-full h-8 xs:h-9 sm:h-10 md:h-12 bg-pink-700 text-white rounded-none hover:bg-pink-800 transition-colors text-[10px] xs:text-xs sm:text-sm">
                Find Ideas
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
