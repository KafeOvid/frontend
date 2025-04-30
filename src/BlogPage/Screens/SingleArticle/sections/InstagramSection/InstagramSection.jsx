import { InstagramIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../../components/ui/card";

export const InstagramSection = () => {
  // Instagram post data for mapping
  const instagramPosts = [
    {
      id: 1,
      image: "https://c.animaapp.com/ma27v9itOgqSys/img/rectangle-copy-10.png",
      showStats: true,
      likes: 1231,
      comments: 543,
    },
    {
      id: 2,
      image: "https://c.animaapp.com/ma27v9itOgqSys/img/rectangle-copy-10.png",
      showStats: false,
    },
    {
      id: 3,
      image: "https://c.animaapp.com/ma27v9itOgqSys/img/rectangle-copy-10.png",
      showStats: false,
    },
    {
      id: 4,
      image: "https://c.animaapp.com/ma27v9itOgqSys/img/rectangle-copy-10.png",
      showStats: false,
    },
    {
      id: 5,
      image: "https://c.animaapp.com/ma27v9itOgqSys/img/rectangle-copy-10.png",
      showStats: false,
    },
  ];

  return (
    <section className="relative w-full py-20">
      <div className="flex flex-col items-center">
        {/* Header */}
        <div className="flex items-center justify-between bg-black px-3 py-5 w-[460px] h-[78px] mb-[78px]">
          <h3 className="font-['Open_Sans',Helvetica] font-bold text-white text-[21px] leading-8">
            Follow me on Instagram
          </h3>
          <InstagramIcon className="w-8 h-8 text-white" />
        </div>

        {/* Instagram Posts Grid */}
        <div className="flex flex-row flex-wrap justify-center">
          {instagramPosts.map((post) => (
            <Card
              key={post.id}
              className="w-80 h-80 rounded-none border-0 overflow-hidden"
            >
              <CardContent className="p-0 relative">
                <img
                  className="w-full h-full object-cover"
                  alt="Instagram post"
                  src={post.image}
                />

                {post.showStats && (
                  <div className="absolute w-32 h-[62px] top-[129px] left-24 flex justify-between">
                    <div className="relative w-[46px] h-[62px] overflow-hidden">
                      <div className="absolute top-[37px] left-0 font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-white text-[length:var(--subtitle-2-font-size)] text-center tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] whitespace-nowrap [font-style:var(--subtitle-2-font-style)]">
                        {post.likes.toLocaleString()}
                      </div>
                      <div className="absolute w-8 h-7 top-0 left-[7px] bg-[url(https://c.animaapp.com/ma27v9itOgqSys/img/shape-2.svg)] bg-[100%_100%]" />
                    </div>

                    <div className="relative w-8 h-[62px] overflow-hidden">
                      <div className="top-[37px] left-0 text-white absolute font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[length:var(--subtitle-2-font-size)] text-center tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] whitespace-nowrap [font-style:var(--subtitle-2-font-style)]">
                        {post.comments}
                      </div>
                      <div className="absolute w-8 h-7 top-0 left-0 bg-[url(https://c.animaapp.com/ma27v9itOgqSys/img/shape-1.svg)] bg-[100%_100%]" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
