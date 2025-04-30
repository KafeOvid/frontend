import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TheBasics = () => {
  const contentData = {
    introduction:
      "Looking for a succinct summary before you dive into the details?\n\nThe best time to visit Japan is generally considered to be between March and May, or October and November. However, it depends on your interests and what you're planning to do during your trip. While many travelers prefer to avoid the heat and humidity of summer, or cold of winter, you might be an exception if you're interested in summer matsuri (festivals) or winter onsen (hot springs), skiing, and snowboarding.\n\nWe delve into much more detail below, but to start here is a brief introduction to Japan's seasons.",
    seasons:
      "Spring in Japan is famous for the cherry blossom season, and if you're lucky — and don't mind the crowds — you may experience hanami (cherry-blossom viewing) in all its glory. This romantic time of year is popular for honeymoons in Japan.\nSummer is arguably the most festive time of year, with colorful matsuri (festivals) throughout the country, the chance to hike in the mountains, and lovely coastal areas where you can enjoy the sea.\nFall in Japan is another magical (and highly popular) time of year, with brilliant autumn colors and crisp, pleasant temperatures.\nWinter in Japan offers amazing seafood, incredible onsen (hot springs) experiences, not to mention some of the best powder in the world for skiing and snowboarding.\nAnd if you don't have time to read the full article, but are looking for a sense of which month would be best for you, here is a brief overview to help you decide when to visit.",
  };

  return (
    <section className="w-full max-w-[958px] mx-auto my-16">
      <div className="flex flex-col gap-8">
        <img
          className="w-full h-auto object-cover rounded-lg"
          alt="Japanese landscape"
          src="https://c.animaapp.com/ma2ahgbcADcfey/img/pic-2.png"
        />

        <div className="px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col gap-6">
          <h2 className="font-heading-2 text-x03-dark text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
            Japanese Seasons 101: The Basics
          </h2>

          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <p className="font-paragraph text-x03-dark text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)] whitespace-pre-line">
                {contentData.introduction}
              </p>
            </CardContent>
          </Card>

          <h3 className="font-subtitle-1 text-x03-dark text-[length:var(--subtitle-1-font-size)] tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] [font-style:var(--subtitle-1-font-style)]">
            Summary of Japan&apos;s Seasons
          </h3>

          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <p className="font-paragraph text-x03-dark text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)] whitespace-pre-line">
                {contentData.seasons}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
