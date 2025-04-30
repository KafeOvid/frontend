import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

// Import all section components
import { Autumn } from "./sections/Autumn/Autumn";
import { Footer } from "./sections/Footer/Footer";
import { InstagramSection } from "./sections/InstagramSection/InstagramSection";
import { Spring } from "./sections/Spring/Spring";
import { Summer } from "./sections/Summer/Summer";
import { TheBasics } from "./sections/TheBasics/TheBasics";
import { Winter } from "./sections/Winter";

export const SingleArticle = () => {
  // Data for related articles
  const relatedArticles = [
    {
      category: "#Guides",
      readingTime: "8 minutes reading",
      title: "Coventry City Guide Including Coventry Hotels",
      description:
        "The diseases most commonly seen in travellers are diarrhoea, malaria (if you travel in a malaria-infested area), accidents (when travelling by automobile or swimming), wound infections and…",
      image: "https://c.animaapp.com/ma2ahgbcADcfey/img/pic-2.png",
    },
    {
      category: "#Guides",
      readingTime: "6 minutes reading",
      title: "Planning a Trip to Japan in the Time of Covid",
      description:
        "Whether you're just daydreaming for the moment, or planning a trip for the future, we've compiled essential information about visiting Japan in the time of Covid-19...",
      image: "https://c.animaapp.com/ma2ahgbcADcfey/img/pic-2.png",
    },
    {
      category: "#Guides",
      readingTime: "10 minutes reading",
      title: "How to Choose an African Safari (That's Right for You)",
      description:
        "In my time exploring the heart of Africa, I have come to realize that there's a different type of safari for every kind of traveler. To fashion your own dream African adventure, it's all about pinpointing…",
      image: "https://c.animaapp.com/ma2ahgbcADcfey/img/pic-2.png",
    },
  ];

  // Navigation items
  const navItems = [
    { text: "Overview", isBold: true },
    { text: "The Basics", isBold: false },
    { text: "Spring in Japan", isBold: false },
    { text: "Summer in Japan", isBold: false },
    { text: "Fall in Japan", isBold: false },
    { text: "Winter in Japan", isBold: false },
  ];

  return (
    <article className="w-full">
      {/* Hero Section */}
      <header className="w-full h-[900px] relative bg-[url(https://c.animaapp.com/ma2ahgbcADcfey/img/pic-2.png)] bg-cover bg-center">
        {/* Top Navigation */}
        <div className="absolute top-0 left-0 right-0 pt-10">
          <div className="w-full px-8 flex justify-between items-center">
            <div className="w-8 h-8">
              <img
                className="w-8 h-[25px] mt-[3px]"
                alt="Shape"
                src="https://c.animaapp.com/ma2ahgbcADcfey/img/shape.svg"
              />
            </div>

            <h1 className="font-['Cormorant_Garamond',Helvetica] font-bold text-black text-[32px] text-center">
              Personal Travel Blog
            </h1>

            <div className="w-8 h-8 bg-[url(https://c.animaapp.com/ma2ahgbcADcfey/img/shape-3.svg)] bg-[100%_100%]" />
          </div>
        </div>

        {/* Article Title */}
        <div className="absolute w-full top-[670px] left-1/2 -translate-x-1/2 text-center px-4">
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-6xl font-bold text-black max-w-[900px] mx-auto">
            When Is The Best Time <br />
            of Year To Visit Japan?
          </h2>
        </div>

        {/* Article Meta */}
        <div className="absolute w-full top-[855px] left-1/2 -translate-x-1/2 flex justify-between items-center px-4 max-w-[900px] mx-auto">
          <div className="flex items-center gap-3">
            <span className="text-black">Travels</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-gray-600">8 minutes reading</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-gray-600">25.01.2021</span>
          </div>

          <div className="flex gap-2">
            {/* Social Media Buttons */}
            <Button
              variant="default"
              size="icon"
              className="w-8 h-8 p-0 bg-black rounded-none"
            >
              <div className="bg-[url(https://c.animaapp.com/ma2ahgbcADcfey/img/shape-5.svg)] w-4 h-4 bg-[100%_100%]" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="w-8 h-8 p-0 bg-black rounded-none"
            >
              <div className="bg-[url(https://c.animaapp.com/ma2ahgbcADcfey/img/shape-2.svg)] w-4 h-4 bg-[100%_100%]" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="w-8 h-8 p-0 bg-black rounded-none"
            >
              <img
                className="w-4 h-4"
                alt="Icon"
                src="https://c.animaapp.com/ma2ahgbcADcfey/img/icon-1.svg"
              />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="w-8 h-8 p-0 bg-black rounded-none"
            >
              <img
                className="w-4 h-4"
                alt="Icon"
                src="https://c.animaapp.com/ma2ahgbcADcfey/img/icon.svg"
              />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full bg-white">
        <div className="w-full px-4 md:px-8 flex justify-center">
          {/* Sidebar Navigation */}
          <aside className="hidden xl:block w-[300px] sticky top-8 self-start mt-[68px] mr-8">
            <nav className="font-['Open_Sans'] text-black text-base leading-6">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index} className={item.isBold ? "font-bold" : ""}>
                    • {item.text}
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Article Content */}
          <div className="flex-1 max-w-[900px]">
            <div className="w-full">
              <Separator className="h-0.5 mt-16 bg-[#dce3e6]" />

              <blockquote className="mt-10 text-xl md:text-2xl text-center italic">
                The good news for travelers is that there is no single best time
                of year to travel to Japan — yet this makes it difficult to
                decide when to visit, as each of Japan's seasons has its own special highlights.
              </blockquote>

              <div className="mt-16 font-['Open_Sans'] text-black text-base leading-7">
                Japan is truly a year-round destination, and Japanese culture is
                remarkable in its profound appreciation of the changing of the
                seasons. As you'll see when you visit, each season — and
                even sub-season! — is celebrated with seasonal foods, and often
                matsuri (festivals). Because of this, we typically recommend
                taking advantage of any chance to visit Japan.
                <br />
                <br />
                On the other hand, if your dates are flexible it's worth
                thinking about which time of year you might enjoy most. After
                all, some travelers hate the cold — or the heat and humidity of
                summer — while others will do whatever it takes to avoid crowds!
                (When planning a trip to Japan, a key question to ask yourself
                is: would you rather have better weather, or fewer tourists
                around?)
                <br />
                <br />
                Because there is so much to consider, we've put together
                this comprehensive guide on the best time to travel to Japan,
                including information on the seasons, weather, national holidays
                to look out for, and more.
              </div>

              <TheBasics />
              <Spring />
              <Summer />
              <Autumn />
              <Winter />

              {/* Related Articles */}
              <section className="mt-16 w-full">
                <h2 className="text-3xl font-bold mb-8">
                  Interesting Articles to Read
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {relatedArticles.map((article, index) => (
                    <Card key={index} className="rounded-none border-none">
                      <CardContent className="p-0">
                        <img
                          className="w-full aspect-[16/9] object-cover"
                          alt="Article thumbnail"
                          src={article.image}
                        />
                        <div className="p-4">
                          <div className="flex items-center gap-3 text-sm mb-4">
                            <span>{article.category}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span className="text-gray-600">{article.readingTime}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                          <p className="text-gray-600 mb-4">{article.description}</p>
                          <Button className="w-[155px] h-[55px] bg-black text-white rounded-none">
                            Read more
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <InstagramSection />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </article>
  );
};
