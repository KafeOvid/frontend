import React from "react";
import { FlowerIcon } from "lucide-react";

export const Footer = () => {
  // Navigation links data for easy mapping
  const navLinks = [
    { text: "Home", href: "#" },
    { text: "Mother's Day", href: "#" },
    { text: "Categories", href: "#" },
    { text: "Contact", href: "#" },
  ];

  return (
    <footer className="w-full py-4 xs:py-5 sm:py-6 md:py-8 bg-white">
      <div className="container mx-auto px-3 xs:px-4 flex flex-col md:flex-row justify-between items-center gap-3 xs:gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pink-100 rounded-full flex items-center justify-center">
            <FlowerIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-pink-600" />
          </div>
          <div className="space-y-1 xs:space-y-2 text-center md:text-left">
            <h2 className="[font-family:'Cormorant_Garamond',Helvetica] font-bold text-x03-dark text-[22px] xs:text-[24px] sm:text-[28px] md:text-[32px] leading-normal">
              Mother's Day Special
            </h2>
            <p className="font-caption font-[number:var(--caption-font-weight)] text-x04-gray text-[10px] xs:text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
              Copyrights © 2023. All Rights Reserved.
            </p>
          </div>
        </div>

        <nav className="mt-3 xs:mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center md:justify-end space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-x04-gray text-[10px] xs:text-xs sm:text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] whitespace-nowrap [font-style:var(--subtitle-2-font-style)] hover:text-pink-600 transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
