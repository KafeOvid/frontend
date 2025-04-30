import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Summer = () => {
  const summerContent = [
    "Summer in Japan lasts from about June to mid-September, depending on the location. Summers are hot and humid, with temperatures ranging from approximately 70 to 90 °F (21 to 32 °C).",
    "July and August are typically the hottest and most humid times of year, and can be uncomfortable for sightseeing if you are averse to humidity. But despite (or perhaps because of) the torrid climate, summer can also be one of the liveliest times to be in Japan.",
    "Japan has more festivals (matsuri) than almost any other country in the world, and Japanese festivals – in all their color, tradition, and exuberance – are often spectacular.",
    "While there are great ones throughout the year, summertime features many of Japan's best festivals — including Kyoto's Gion Matsuri, Osaka's Tenjin Matsuri, Aomori's Nebuta Matsuri, and the Awa Odori festival in Tokushima, on the island of Shikoku – not to mention countless lively (and delicious) neighborhood matsuri throughout the country.",
    "In addition to matsuri, summer is also renowned for its extraordinary fireworks extravaganzas. Hanabi (fireworks) are taken seriously in Japan, and going to a hanabi taikai is both entertaining and quite culturally immersive. Tokyo's Sumida River Fireworks are especially famous, but throughout the summer fireworks displays take place all around the country.",
  ];

  return (
    <section className="w-full max-w-[954px] mx-auto my-16">
      <Card className="border-none shadow-none">
        <img
          className="w-full h-[449px] object-cover rounded-t-lg"
          alt="Summer in Japan"
          src="https://c.animaapp.com/ma2ahgbcADcfey/img/pic-2.png"
        />
        <CardContent className="px-[123px] pt-10">
          <h2 className="font-heading-2 text-x03-dark text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] mb-6">
            Summer in Japan
          </h2>
          <div className="font-paragraph text-x03-dark text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)]">
            {summerContent.map((paragraph, index) => (
              <p key={index} className={index > 0 ? "mt-6" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
