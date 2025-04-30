import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Winter = () => {
  const winterContent = `Winter in Japan lasts from about December to mid-March, depending on the location. Winters are cold, with temperatures ranging from approximately 30 to 45 °F (-1 to 7 °C).

Yes, it is cold, but if you can get past this basic fact (which is a potential "dealbreaker" for some), you'll find that winter is in fact one of the best times to experience Japan all for yourself.

Aside from a few exceptions (described below), Japan – like many other destinations around the world – tends to receive fewer travelers during the cold winter season. This is partly because most people prefer to visit at more well-known times (such as cherry blossom season), and also in part because not everyone is able to utilize vacation days to visit at this time of year.

This is unfortunate – especially if you are keen to experience Japan with fewer tourists around!

In the mountains of Japan, snowfall is especially plentiful, making Japan an incredible ski and snowboarding destination. The most well-known places to enjoy Japan's legendary powder are Hokkaido and the Japan Alps (the latter played host to the 1998 Winter Olympic Games).

One of the best parts of visiting Japan in winter is the chance to really enjoy Japanese onsen (hot springs).

While onsen can certainly also be enjoyed at other times of the year, nothing compares to sitting in a mountain onsen, surrounded by a white landscape with snow falling on you as you soak. It's one of the quintessential Japanese experiences, and not to be missed.`;

  return (
    <section className="w-full max-w-[954px] mx-auto my-12">
      <Card className="border-none shadow-none">
        <CardContent className="p-0">
          <img
            className="w-full h-auto object-cover rounded-lg"
            alt="Winter scene in Japan"
            src="https://c.animaapp.com/ma2ahgbcADcfey/img/pic-2.png"
          />

          <div className="mt-10">
            <h2 className="font-heading-2 text-x03-dark text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] mb-6">
              Winter in Japan
            </h2>

            <div className="font-paragraph text-x03-dark text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)]">
              {winterContent.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
