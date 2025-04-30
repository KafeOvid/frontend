import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const GroupCopyWrapper = () => {
  // Article data for mapping
  const articles = [
    {
      id: 1,
      title: "Coventry City Guide Including Coventry Hotels",
      description:
        "The diseases most commonly seen in travellers are diarrhoea, malaria (if you travel in a malaria-infested area), accidents (when travelling by automobile or swimming), wound infections and…",
      tag: "#Guides",
      readingTime: "8 minutes reading",
      image: "https://c.animaapp.com/ma2oglaoiQHy3U/img/rectangle-copy-10.png",
      imageStyle: "w-full h-[210px]",
    },
    {
      id: 2,
      title: "Planning a Trip to Japan in the Time of Covid",
      description:
        "Whether you're just daydreaming for the moment, or planning a trip for the future, we've compiled essential information about visiting Japan in the time of Covid-19...",
      tag: "#Guides",
      readingTime: "6 minutes reading",
      image: "https://c.animaapp.com/ma2oglaoiQHy3U/img/rectangle-copy-10.png",
      imageStyle: "w-full h-[210px]",
    },
    {
      id: 3,
      title: "How to Choose an African Safari (That's Right for You)",
      description:
        "In my time exploring the heart of Africa, I have come to realize that there's a different type of safari for every kind of traveler. To fashion your own dream African adventure, it's all about pinpointing…",
      tag: "#Guides",
      readingTime: "10 minutes reading",
      image: "https://c.animaapp.com/ma2oglaoiQHy3U/img/rectangle-copy-10.png",
      imageStyle: "w-full h-[210px]",
    },
    {
      id: 4,
      title: "Coventry City Guide Including Coventry Hotels",
      description:
        "The diseases most commonly seen in travellers are diarrhoea, malaria (if you travel in a malaria-infested area), accidents (when travelling by automobile or swimming), wound infections and…",
      tag: "#Guides",
      readingTime: "8 minutes reading",
      image: "https://c.animaapp.com/ma2oglaoiQHy3U/img/rectangle-copy-10.png",
      imageStyle: "w-[210px] h-[210px]",
    },
  ];

  return (
    <section className="w-full py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-x03-dark text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
            Cities
          </h2>

          <div className="flex gap-4">
            <Button
              variant="default"
              size="icon"
              className="w-12 h-12 bg-black rounded-none p-0"
            >
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="w-12 h-12 bg-black rounded-none p-0"
            >
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="border-none shadow-none">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="mb-5">
                  <img
                    className={`object-cover ${article.imageStyle}`}
                    alt="Article thumbnail"
                    src={article.image}
                  />
                </div>

                <div className="flex flex-col gap-6 flex-grow">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="font-paragraph font-[number:var(--paragraph-font-weight)] text-x03-dark text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)]">
                        {article.tag}
                      </span>
                      <div className="w-1 h-1 bg-x05-gray-light rounded-sm" />
                      <span className="font-paragraph font-[number:var(--paragraph-font-weight)] text-x04-gray text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)]">
                        {article.readingTime}
                      </span>
                    </div>

                    <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-x03-dark text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                      {article.title}
                    </h3>

                    <p className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-x04-gray text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)]">
                      {article.description}
                    </p>
                  </div>

                  <Button className="w-[155px] h-[55px] bg-x01-primary rounded-none">
                    <span className="font-button font-[number:var(--button-font-weight)] text-x06-white text-[length:var(--button-font-size)] text-center tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                      Read more
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupCopyWrapper;
