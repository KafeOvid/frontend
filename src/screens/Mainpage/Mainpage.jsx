import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";
import { Article1 } from "./sections/Article1/Article1";
import { Article } from "./sections/Article/Article";
import { ArticleWrapper } from "./sections/ArticleWrapper/ArticleWrapper";
import { Category } from "./sections/Category/Category";
import { Div } from "./sections/Div/Div";
import { DivWrapper } from "./sections/DivWrapper/DivWrapper";
import { Footer } from "./sections/Footer/Footer";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { InstagramSection } from "./sections/InstagramSection/InstagramSection";
import { PromoProducts } from "./sections/PromoProducts/PromoProducts";
import { RightPanel } from "./sections/RightPanel/RightPanel";
import { SectionComponentNode } from "./sections/SectionComponentNode/SectionComponentNode";

export const Mainpage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const paginationItems = [
    { page: 1, active: true },
    { page: 2, active: false },
    { page: 3, active: false },
    { page: 4, active: false },
    { page: 5, active: false },
    { page: "•••", active: false },
    { page: 10, active: false },
    { page: 11, active: false },
    { page: 12, active: false },
    { page: 13, active: false },
    { page: 14, active: false },
  ];

  // For mobile, we'll show fewer pagination items
  const mobilePaginationItems = [
    { page: 1, active: true },
    { page: 2, active: false },
    { page: 3, active: false },
    { page: "•••", active: false },
    { page: 14, active: false },
  ];

  return (
    <div className="bg-white overflow-hidden min-h-screen">
      <HeroSection />
      <Category />

      {/* Main content area */}
      <div className="w-full max-w-[1800px] mx-auto mt-4 md:mt-6 px-4 sm:px-6 md:px-8 relative">
        {/* Decorative elements - hidden on very small screens */}
        <div className="hidden sm:block absolute -top-20 -left-20 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-pink-50 rounded-full opacity-50 -z-10"></div>
        <div className="hidden sm:block absolute top-40 -right-20 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-purple-50 rounded-full opacity-40 -z-10"></div>
        
        <h2 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-0 relative inline-block">
          Mother's Day Tributes
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-400 to-purple-300"></span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-3 md:gap-6 lg:gap-8">
          {/* Left column - Articles */}
          <div className="space-y-3 md:space-y-6 lg:space-y-8 overflow-hidden">
            <Article />
            <ArticleWrapper />
            <DivWrapper />
            <PromoProducts />
            <Div />
            <SectionComponentNode />
            <Article1 />

            {/* Pagination - responsive design */}
            <div className="flex justify-center mt-3 md:mt-6 overflow-x-auto pb-2 md:pb-4">
              <Pagination>
                <PaginationContent className="flex items-center gap-1 md:gap-2">
                  <PaginationItem>
                    <PaginationPrevious
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-pink-600 hover:bg-pink-700 rounded-full p-0 flex items-center justify-center transition-all duration-300"
                      href="#"
                    >
                      <ChevronLeftIcon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                    </PaginationPrevious>
                  </PaginationItem>

                  {/* Show fewer items on small screens */}
                  {(isMobile ? mobilePaginationItems : paginationItems).map((item, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        href="#"
                        className={`w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 rounded-full p-0 flex items-center justify-center text-[10px] xs:text-xs md:text-sm transition-all duration-300 ${
                          item.active
                            ? "bg-pink-600 text-white"
                            : "bg-transparent text-gray-600 hover:bg-pink-100"
                        }`}
                        isActive={item.active}
                      >
                        {item.page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-pink-600 hover:bg-pink-700 rounded-full p-0 flex items-center justify-center transition-all duration-300"
                      href="#"
                    >
                      <ChevronRightIcon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                    </PaginationNext>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>

          {/* Right column - Sidebar */}
          <aside className="w-full px-0 mt-3 lg:mt-0">
            <RightPanel />
          </aside>
        </div>
      </div>

      <InstagramSection />
      <Footer />
    </div>
  );
};
