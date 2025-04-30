import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Autumn = () => {
  const autumnText = [
    "Autumn in Japan lasts from about mid-September to early December, depending on the location. Fall is widely considered to be the most pleasant time (weather-wise) to visit Japan, with temperatures ranging from approximately 50 to 70 °F (10 to 21 °C).",
    "Apart from its comfortable temperatures and generally clear weather (particularly in later autumn), fall is perhaps most famous for the vibrancy of the changing foliage (koyo).",
    "While autumn technically begins in late September, it's still usually quite warm (sometimes very hot) at this time of year, but with the arrival of October the fall definitively gets underway.",
    "With the pleasant change in weather, tourists also begin pouring in to enjoy the lovely temperatures, making October a very popular travel season in Japan. But its popularity doesn't compare to November's, when the peak autumn travel season begins. By November, autumn is in full swing, and throughout Japan you can begin to witness the fall foliage.",
    "Due to the popularity of October and November, if you would like to try and avoid tourists to the extent possible, you may wish to consider early December, when you may still catch some of the koyo, though likely with fewer tourists around.",
  ];

  return (
    <section className="w-full max-w-[954px] mx-auto my-12">
      <Card className="border-none shadow-none">
        <div className="w-full mb-8">
          <img
            className="w-full h-auto object-cover rounded-lg"
            alt="Autumn scenery in Japan"
            src="https://c.animaapp.com/ma2ahgbcADcfey/img/pic-2.png"
          />
        </div>

        <CardContent className="px-4 md:px-6">
          <h2 className="font-heading-2 text-x03-dark text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] mb-6">
            Fall in Japan
          </h2>

          <div className="font-paragraph text-x03-dark text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)]">
            {autumnText.map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
