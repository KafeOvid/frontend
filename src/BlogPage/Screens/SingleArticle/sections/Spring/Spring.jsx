import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Spring = () => {
  const springContent = {
    title: "Spring in Japan",
    image: "https://c.animaapp.com/ma2ahgbcADcfey/img/pic-2.png",
    paragraphs: [
      "Spring in Japan lasts from about mid-March to May, depending on the location. The weather in spring is notoriously fickle, with temperatures ranging from approximately 40 to 65 °F (4 to 18 °C). On some days you may still want your winter coat, while on other days you may not even need a sweater.",
      "Spring is Japan's most famous season, and is symbolized by the iconic sakura (cherry blossoms), which typically bloom sometime between the second half of March, and the first half of April (sakura bloom schedules, too, vary significantly depending on location).",
      "The best time to visit Japan to see the cherry blossoms is in April and May, when the trees are in full bloom and the flowers are at their pinkest.",
      "Without a shadow of a doubt, we receive far more inquiries for travel to Japan around cherry blossom season than for any other time of year. In fact, it is such a popular time to visit that we are often forced to stop even considering new inquiries months and months in advance.",
      "While the beauty of the cherry blossoms in bloom is undeniably alluring, whether or not flower viewing in Japan is worth the potential downsides is not quite as clear!",
    ],
  };

  return (
    <section className="w-full max-w-[954px] mx-auto">
      <Card className="border-none shadow-none">
        <img
          className="w-full h-auto max-h-[449px] object-cover"
          alt="Spring in Japan landscape"
          src={springContent.image}
        />
        <CardContent className="px-0 pt-10">
          <h2 className="font-heading-2 text-x03-dark text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] mb-6">
            {springContent.title}
          </h2>
          <div className="font-paragraph text-x03-dark text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)]">
            {springContent.paragraphs.map((paragraph, index) => (
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
