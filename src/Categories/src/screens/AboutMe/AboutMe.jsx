import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon,
    HeartIcon,
  } from "lucide-react";
  import React from "react";
  import { Button } from "../../components/ui/button";
  import { Card, CardContent } from "../../components/ui/card";
  import { Separator } from "../../components/ui/separator";
  
  export const AboutMe = () => {
    // Social media icons data
    const socialIcons = [
      { icon: <InstagramIcon className="w-8 h-8" />, bg: "bg-gradient-to-br from-pink-600 to-purple-700" },
      { icon: <FacebookIcon className="w-8 h-8" />, bg: "bg-gradient-to-br from-pink-600 to-purple-700" },
      { icon: <TwitterIcon className="w-8 h-8" />, bg: "bg-gradient-to-br from-pink-600 to-purple-700" },
      { icon: <HeartIcon className="w-8 h-8" />, bg: "bg-gradient-to-br from-pink-600 to-purple-700" },
    ];
  
    // InstagramIcon posts data
    const instagramPosts = [
      { id: 1, likes: 1231, comments: 543 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
    ];
  
    // Footer navigation links
    const footerLinks = ["Home", "About me", "Categories", "Contact"];
  
    return (
      <div className="bg-white flex flex-row justify-center w-full overflow-hidden">
        <div className="bg-white w-[1920px] relative">
          {/* Decorative elements */}
          <div className="absolute top-20 left-20 w-40 h-40 bg-pink-50 rounded-full opacity-50 -z-10"></div>
          <div className="absolute bottom-80 right-20 w-32 h-32 bg-purple-50 rounded-full opacity-40 -z-10"></div>
        
          {/* Hero Section */}
          <section className="relative w-full h-[935px]">
            <img
              className="w-full h-[900px] object-cover"
              alt="Background photo"
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2080&auto=format&fit=crop"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30"></div>

            <div className="absolute w-[1440px] h-[39px] top-10 left-60 z-10">
              <div className="absolute w-8 h-8 top-1 left-0">
                <img
                  className="absolute w-8 h-[25px] top-[2px] left-0"
                  alt="Shape"
                  src="https://c.animaapp.com/ma2oc67fstT3dj/img/shape.svg"
                />
              </div>

              <h1 className="absolute -top-px left-[590px] [font-family:'Cormorant_Garamond',Helvetica] font-bold text-white text-[38px] text-center tracking-[0] leading-[normal] drop-shadow-lg">
                Mother's Day Tribute Blog
              </h1>

              <div className="absolute w-8 h-8 top-1 left-[1408px] bg-[url(https://c.animaapp.com/ma2oc67fstT3dj/img/shape-7.svg)] bg-[100%_100%]" />
            </div>

            <h2 className="absolute w-[706px] top-[670px] left-[607px] font-heading-1 font-[number:var(--heading-1-font-weight)] text-white text-[length:var(--heading-1-font-size)] text-center tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)] drop-shadow-lg">
              My name is <br />
              <span className="text-pink-200">Jaspreet Bhamrai</span>
            </h2>

            <div className="absolute w-[304px] h-16 top-[871px] left-[808px] flex">
              {socialIcons.map((item, index) => (
                <div
                  key={index}
                  className={`${item.bg} w-16 h-16 flex items-center justify-center ${index > 0 ? "ml-4" : ""} transition-transform duration-300 hover:scale-110 rounded-full shadow-lg`}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </section>
  
          {/* Quote Section */}
          <section className="flex flex-col items-center mt-10">
            <Separator className="w-[706px] bg-gradient-to-r from-pink-200 to-purple-200" />
  
            <blockquote className="w-[706px] my-10 font-blockquote font-[number:var(--blockquote-font-weight)] [font-style:var(--blockquote-font-style)] text-pink-700 text-[length:var(--blockquote-font-size)] text-center tracking-[var(--blockquote-letter-spacing)] leading-[var(--blockquote-line-height)]">
              A mother's love is the fuel that enables ordinary human beings to do the impossible.
            </blockquote>
  
            <Separator className="w-[706px] bg-gradient-to-r from-pink-200 to-purple-200" />
          </section>
  
          {/* About Me Content */}
          <section className="flex flex-col items-center">
            <p className="w-[704px] mt-10 font-paragraph font-[number:var(--paragraph-font-weight)] text-gray-700 text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
              For as long as I can remember, I've been captivated by the profound influence of mothers in our lives. Their wisdom, strength, and unconditional love shape who we become. This Mother's Day, I want to celebrate these extraordinary women who make our world better through their unwavering support and guidance.
            </p>
  
            <div className="flex mt-10 gap-[30px]">
              <div className="w-[460px] h-[612px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt="Mother and child"
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2070&auto=format&fit=crop"
                />
              </div>
              <div className="w-[460px] h-[612px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt="Mother and daughter"
                  src="https://images.unsplash.com/photo-1556910585-09baa3a3998e?q=80&w=2070&auto=format&fit=crop"
                />
              </div>
            </div>
  
            <div className="w-[704px] mt-10 bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl shadow-md">
              <h3 className="font-heading-3 text-pink-700 mb-4 relative inline-block">
                Motherhood Wisdom
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-pink-400 to-pink-200"></span>
              </h3>
              <p className="font-paragraph font-[number:var(--paragraph-font-weight)] text-gray-700 text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Lessons from mothers that guide us through life:
                <br /><br />
                <span className="flex items-center"><HeartIcon className="h-4 w-4 text-pink-500 mr-2" /> Trust your intuition. Mothers often remind us that our inner voice is a powerful guide.</span>
                <br />
                <span className="flex items-center"><HeartIcon className="h-4 w-4 text-pink-500 mr-2" /> Embrace imperfection. The beauty of motherhood lies in finding joy within the messy moments.</span>
                <br />
                <span className="flex items-center"><HeartIcon className="h-4 w-4 text-pink-500 mr-2" /> Practice patience. Good things take time, whether it's raising children or pursuing dreams.</span>
                <br />
                <span className="flex items-center"><HeartIcon className="h-4 w-4 text-pink-500 mr-2" /> Find strength in vulnerability. Being open about challenges creates deeper connections.</span>
                <br />
                <span className="flex items-center"><HeartIcon className="h-4 w-4 text-pink-500 mr-2" /> Celebrate small victories. Every step forward deserves recognition.</span>
                <br /><br />
                These timeless lessons remind us that a mother's influence extends far beyond childhood, shaping our perspectives and approaches to life's challenges and joys. Their wisdom becomes the foundation upon which we build our own lives and potentially pass on to future generations.
              </p>
            </div>
          </section>
  
          {/* Instagram Section */}
          <section className="w-full mt-16">
            <Card className="w-[460px] h-[78px] ml-60 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl shadow-lg">
              <CardContent className="flex items-center justify-between p-0 h-full px-6">
                <h3 className="[font-family:'Open_Sans',Helvetica] font-bold text-white text-[21px] tracking-[0] leading-8 whitespace-nowrap">
                  Mother's Day Memories
                </h3>
                <InstagramIcon className="w-8 h-8 text-white" />
              </CardContent>
            </Card>
  
            <div className="flex w-full flex-wrap justify-center gap-4 mt-6">
              {instagramPosts.map((post, index) => (
                <div key={index} className="relative w-80 h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                  <img
                    className="w-full h-full object-cover"
                    alt="Instagram post"
                    src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1591538069667-3854c47ea508' : '1620925618705-35769460b10d'}?q=80&w=2070&auto=format&fit=crop`}
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-purple-900/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <HeartIcon className="h-12 w-12 mb-2 mx-auto text-white" />
                      <span className="text-lg font-semibold">Celebrate Mothers</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
  
          {/* Footer */}
          <footer className="w-full h-[130px] mt-16 bg-gradient-to-r from-pink-50 to-purple-50 flex items-center justify-between px-60">
            <div className="w-64 h-[63px] overflow-hidden">
              <h2 className="[font-family:'Cormorant_Garamond',Helvetica] font-bold text-pink-700 text-[32px] text-center tracking-[0] leading-[normal]">
                Mother's Day Tribute
              </h2>
              <p className="font-caption font-[number:var(--caption-font-weight)] text-gray-600 text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                Copyrights © 2024. All Rights Reserved.
              </p>
            </div>
  
            <nav className="w-[385px] h-[26px] overflow-hidden">
              <ul className="flex justify-end space-x-8">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Button
                      variant="link"
                      className="p-0 h-auto font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-pink-700 hover:text-pink-900 text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)] transition-colors"
                    >
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </footer>
        </div>
      </div>
    );
  };
  