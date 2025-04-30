import React from "react";
import Group from "./Group/Group";
import Footer from "./Footer/Footer";
import GroupCopy from "./GroupCopy/GroupCopy";
import GroupCopyWrapper from "./GroupCopyWrapper/GroupCopyWrapper";
import InstagramSection from "./InstagramSection/InstagramSection";
import { HeartIcon } from "lucide-react";

const Categories = () => {
  return (
    <div
      className="bg-white flex flex-col items-center w-full overflow-hidden"
      data-model-id="0:748"
    >
      <div className="bg-white w-full max-w-[1920px] relative">
        {/* Decorative elements */}
        <div className="absolute top-40 left-20 w-32 h-32 bg-pink-50 rounded-full opacity-50 -z-10"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-purple-50 rounded-full opacity-40 -z-10"></div>
      
        {/* Header */}
        <header className="flex justify-between items-center w-full max-w-[1440px] mx-auto py-10 px-60 relative z-10">
          <div className="w-8 h-8">
            <img
              className="w-8 h-[25px] mt-[2px]"
              alt="Shape"
              src="https://c.animaapp.com/ma2oglaoiQHy3U/img/shape.svg"
            />
          </div>

          <h1 className="font-['Cormorant_Garamond',Helvetica] font-bold text-pink-700 text-[38px] text-center drop-shadow-sm">
            Mother's Day Tribute Blog
          </h1>

          <div className="w-8 h-8 bg-[url(https://c.animaapp.com/ma2oglaoiQHy3U/img/shape-1.svg)] bg-[100%_100%]" />
        </header>

        {/* Categories Title */}
        <div className="w-full max-w-[1440px] mx-auto px-60 mt-10">
          <h2 className="font-heading-1 font-[number:var(--heading-1-font-weight)] text-pink-800 text-[length:var(--heading-1-font-size)] leading-[var(--heading-1-line-height)] tracking-[var(--heading-1-letter-spacing)] [font-style:var(--heading-1-font-style)] relative inline-block">
            Categories
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-pink-400 to-pink-200"></span>
            <HeartIcon className="absolute -top-6 -right-10 h-8 w-8 text-pink-300" />
          </h2>
        </div>

        {/* Main Content Sections */}
        <main className="flex flex-col w-full">
          <Group />
          <GroupCopy />
          <GroupCopyWrapper />
          <InstagramSection />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Categories;
