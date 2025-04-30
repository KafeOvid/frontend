import React from "react";

const Footer = () => {
  const navLinks = [
    { title: "Home", href: "#" },
    { title: "About me", href: "#" },
    { title: "Categories", href: "#" },
    { title: "Contact", href: "#" },
  ];

  return (
    <footer className="w-full py-8 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-6 md:mb-0">
          <h2 className="font-['Cormorant_Garamond',Helvetica] font-bold text-x03-dark text-[32px] leading-normal">
            Personal Travel
          </h2>
          <p className="font-caption font-[number:var(--caption-font-weight)] text-x04-gray text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
            Copyrights © 2020. All Rights Reserved.
          </p>
        </div>

        <nav>
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-x04-gray text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] whitespace-nowrap [font-style:var(--subtitle-2-font-style)] hover:text-black transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
