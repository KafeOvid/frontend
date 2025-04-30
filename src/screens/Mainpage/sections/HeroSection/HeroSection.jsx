import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { HeartIcon, ChevronLeftIcon, ChevronRightIcon, FlowerIcon } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[350px] xs:h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] bg-[url(https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2080&auto=format&fit=crop)] bg-cover bg-center">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30"></div>
      
      <div className="container mx-auto px-3 xs:px-4 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center pt-3 xs:pt-4 sm:pt-6 md:pt-8">
          <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center">
            <FlowerIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
          </div>

          <h1 className="[font-family:'Cormorant_Garamond',Helvetica] font-bold text-white text-lg xs:text-xl sm:text-2xl md:text-3xl text-center drop-shadow-lg">
            Mother's Day Tribute Blog
          </h1>

          <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center">
            <FlowerIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
          </div>
        </header>

        {/* Main Content Card - Centered on mobile, offset on larger screens */}
        <div className="relative mt-[70px] xs:mt-[100px] sm:mt-[120px] md:mt-[180px] lg:mt-[240px] flex justify-center lg:justify-start">
          <Card className="w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[550px] lg:w-[700px] h-auto sm:h-[320px] md:h-[380px] lg:h-[440px] rounded-lg md:rounded-none shadow-xl bg-white/95 backdrop-blur-sm border-l-4 border-pink-400">
            <CardContent className="p-0">
              <div className="p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 pt-5 xs:pt-6 sm:pt-8 md:pt-10">
                <div className="flex items-center gap-2 xs:gap-3">
                  <HeartIcon className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:w-5 sm:h-5 text-pink-500" />
                  <p className="font-paragraph font-[number:var(--paragraph-font-weight)] text-pink-600 text-xs xs:text-sm sm:text-base md:text-lg tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)]">
                    Stories
                  </p>
                </div>

                <h2 className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 lg:mt-8 font-heading-1 font-[number:var(--heading-1-font-weight)] text-black text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)]">
                  Celebrating the Incredible Journey{" "}
                  <span className="text-pink-600">of Motherhood</span>
                </h2>

                <p className="mt-3 xs:mt-4 sm:mt-5 md:mt-7 lg:mt-9 w-full lg:w-[600px] font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[#5d5e5f] text-xs xs:text-sm sm:text-base md:text-lg tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)]">
                  This Mother's Day, we're sharing heartwarming stories of strength, love, and wisdom from mothers around the world...
                </p>

                <Button className="mt-4 xs:mt-5 sm:mt-6 md:mt-8 lg:mt-10 w-[110px] xs:w-[130px] sm:w-[150px] md:w-[170px] h-8 xs:h-9 sm:h-11 md:h-12 rounded-full md:rounded-none bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-button font-[number:var(--button-font-weight)] text-xs xs:text-sm sm:text-base md:text-lg tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)]">
                  Read more
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls - Hidden on smaller screens */}
          <div className="hidden md:flex absolute top-0 right-0">
            <button className="w-10 h-10 md:w-12 md:h-12 bg-pink-600 flex items-center justify-center transition-all duration-300 hover:bg-pink-700">
              <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            <button className="w-10 h-10 md:w-12 md:h-12 bg-white flex items-center justify-center transition-all duration-300 hover:bg-gray-100">
              <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6 text-pink-800" />
            </button>
          </div>
        </div>
        
        {/* Mobile navigation dots - Only visible on small screens */}
        <div className="flex md:hidden justify-center mt-3 gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-pink-600"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-8 sm:h-10 md:h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};
