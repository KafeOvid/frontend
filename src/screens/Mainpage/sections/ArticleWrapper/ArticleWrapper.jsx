import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { HeartIcon, ClockIcon, CalendarIcon } from "lucide-react";

export const ArticleWrapper = () => {
  const articleData = {
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2080&auto=format&fit=crop",
    category: "Celebrations",
    readingTime: "8 minutes reading",
    title: "Mother's Day Celebration Guide:\nIdeas for a Memorable Day",
    description:
      "Planning the perfect Mother's Day celebration can be both exciting and challenging. Discover our comprehensive guide to creating meaningful experiences, from breakfast in bed to special outings that will make mom feel truly appreciated and loved...",
  };

  return (
    <section className="flex flex-col md:flex-row items-center gap-3 xs:gap-4 sm:gap-5 md:gap-[30px] w-full max-w-[1073px] mx-auto py-4 xs:py-6 sm:py-8 md:py-10 px-2 xs:px-3 sm:px-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-md xs:rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative w-full md:w-[460px] h-[160px] xs:h-[200px] sm:h-[260px] md:h-[340px] lg:h-[400px]">
        <img
          className="w-full h-full object-cover rounded-md xs:rounded-lg shadow-md hover:scale-105 transition-all duration-500"
          alt="Mother's Day celebration with family"
          src={articleData.image}
        />
        {/* Decorative element - hidden on smaller screens */}
        <div className="hidden sm:block absolute -bottom-3 xs:-bottom-4 -right-3 xs:-right-4 w-8 xs:w-12 sm:w-16 md:w-24 h-8 xs:h-12 sm:h-16 md:h-24 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 -z-10"></div>
        {/* Mother's Day theme decorative element */}
        <div className="absolute -top-2 xs:-top-3 -left-2 xs:-left-3 w-8 xs:w-10 sm:w-12 md:w-14 h-8 xs:h-10 sm:h-12 md:h-14 rounded-full bg-pink-100 flex items-center justify-center z-10 border-2 border-pink-300 shadow-md">
          <CalendarIcon className="w-4 xs:w-5 sm:w-6 md:w-7 h-4 xs:h-5 sm:h-6 md:h-7 text-pink-500" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 xs:gap-3 sm:gap-4 md:gap-6 w-full md:w-[583px] mt-3 xs:mt-4 md:mt-0">
        <div className="flex flex-col items-start gap-1.5 xs:gap-2 w-full">
          <div className="flex flex-wrap items-center gap-1.5 xs:gap-2 sm:gap-3">
            <Badge
              variant="outline"
              className="rounded-full border-pink-300 bg-pink-50 hover:bg-pink-100 text-pink-700 px-1.5 xs:px-2 sm:px-4 py-0.5 sm:py-1 text-[10px] xs:text-xs sm:text-sm font-medium flex items-center"
            >
              <HeartIcon className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 mr-0.5 xs:mr-1" /> #{articleData.category}
            </Badge>

            <div className="hidden sm:block w-1 h-1 bg-pink-300 rounded-sm" />

            <span className="font-paragraph text-gray-500 flex items-center text-[10px] xs:text-xs sm:text-sm">
              <ClockIcon className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 mr-0.5 xs:mr-1 text-pink-400" />
              {articleData.readingTime}
            </span>
          </div>

          <h2 className="font-heading-2 text-gray-800 text-base xs:text-xl sm:text-2xl md:text-[length:var(--heading-2-font-size)] leading-tight sm:leading-[var(--heading-2-line-height)] tracking-[var(--heading-2-letter-spacing)] hover:text-pink-700 transition-colors duration-300">
            {articleData.title.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < articleData.title.split("\n").length - 1 && <br className="hidden sm:block" />}
              </React.Fragment>
            ))}
          </h2>

          <p className="font-subtitle-2 text-gray-600 text-xs xs:text-sm sm:text-base md:text-[length:var(--subtitle-2-font-size)] leading-relaxed sm:leading-[var(--subtitle-2-line-height)] tracking-[var(--subtitle-2-letter-spacing)]">
            {articleData.description}
          </p>
        </div>

        <Button className="w-[100px] xs:w-full sm:w-[140px] md:w-[155px] h-8 xs:h-10 sm:h-12 md:h-[55px] bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 text-white transition-all duration-300 shadow-md hover:shadow-lg text-[10px] xs:text-xs sm:text-sm uppercase tracking-wider">
          Read more
        </Button>
      </div>
    </section>
  );
};
