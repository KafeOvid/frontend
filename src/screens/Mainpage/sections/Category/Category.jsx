import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Category = () => {
  const categories = [
    { name: "Stories", icon: "💖" },
    { name: "Health", icon: "🌿" },
    { name: "Inspiration", icon: "✨" },
    { name: "Recipes", icon: "🍰" },
    { name: "Tributes", special: true, icon: "🌹" },
    { name: "Celebrations", icon: "🎉" },
    { name: "Gifts", icon: "🎁" },
  ];

  return (
    <section className="relative w-full py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 xl:px-60">
      <div className="relative">
        {/* Decorative elements - hidden on smaller screens */}
        <div className="hidden sm:block absolute -top-10 -left-10 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-full bg-pink-100 opacity-70"></div>
        <div className="hidden sm:block absolute -bottom-10 -right-10 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 rounded-full bg-purple-100 opacity-70"></div>
      </div>
      
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="font-heading-3 text-pink-800 text-lg sm:text-xl md:text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] relative">
            Explore by category
            <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-1/4 h-0.5 sm:h-1 bg-gradient-to-r from-pink-400 to-pink-200"></span>
          </h2>

          <div className="flex gap-1 sm:gap-2">
            <Button
              variant="default"
              size="icon"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 p-0 bg-pink-600 hover:bg-pink-700 rounded-full transition-all duration-300"
            >
              <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 p-0 bg-pink-600 hover:bg-pink-700 rounded-full transition-all duration-300"
            >
              <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
            </Button>
          </div>
        </div>

        {/* Category cards */}
        <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-[30px] justify-center">
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`${
                category.special
                  ? "w-full sm:w-[220px] md:w-[255px] h-[180px] sm:h-[250px] md:h-[315px] bg-cover bg-center"
                  : "w-[140px] sm:w-[180px] md:w-[215px] h-[140px] sm:h-[180px] md:h-[215px] bg-gradient-to-br from-pink-600 to-purple-700"
              } rounded-lg border-none cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              style={
                category.special
                  ? {
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop)",
                    }
                  : {}
              }
            >
              <CardContent className="flex flex-col items-center justify-center h-full p-0">
                {category.special ? (
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent rounded-lg"></div>
                ) : null}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3">{category.icon}</div>
                  <div className="w-10 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-pink-200 mb-2 sm:mb-3"></div>
                  <div className="font-heading-4 text-white text-sm sm:text-base md:text-[length:var(--heading-4-font-size)] text-center tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)]">
                    {category.name}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
