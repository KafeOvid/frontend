import { InstagramIcon, HeartIcon, MessageCircleIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const InstagramSection = () => {
  const [visiblePosts, setVisiblePosts] = useState([]);
  
  // Data for Instagram posts - updated with Mother's Day themed images
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1588673523898-4410a520f9e9?q=80&w=2070&auto=format&fit=crop",
      showStats: true,
      likes: 1231,
      comments: 543,
      alt: "Mother's Day gift box with flowers and card"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1622637795105-1250b8edc094?q=80&w=2071&auto=format&fit=crop",
      showStats: false,
      alt: "Mother and daughter embracing"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1645597936317-95be29f2725a?q=80&w=2070&auto=format&fit=crop",
      showStats: false,
      alt: "Mother's Day breakfast setup with flowers"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2080&auto=format&fit=crop",
      showStats: false,
      alt: "Mother and child holding hands with flowers"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1555529902-5425c3e5aded?q=80&w=1974&auto=format&fit=crop",
      showStats: false,
      alt: "Mother's Day pink roses bouquet"
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      // On small screens show only first 3 posts
      if (window.innerWidth < 640) {
        setVisiblePosts(instagramPosts.slice(0, 3));
      } else {
        setVisiblePosts(instagramPosts);
      }
    };
    
    // Initial check
    handleResize();
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative w-full py-10 sm:py-16 md:py-20 bg-gradient-to-b from-white to-pink-50">
      {/* Decorative elements - hidden on small screens */}
      <div className="absolute top-0 left-0 w-full h-12 sm:h-16 md:h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="hidden sm:block absolute top-20 left-10 w-10 sm:w-16 h-10 sm:h-16 bg-pink-100 rounded-full opacity-50"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-16 sm:w-24 h-16 sm:h-24 bg-purple-100 rounded-full opacity-50"></div>
      
      <div className="flex flex-col items-center px-4">
        {/* Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-pink-600 to-purple-600 px-4 sm:px-6 py-3 sm:py-5 w-full max-w-[280px] sm:max-w-[360px] md:max-w-[460px] h-[60px] sm:h-[70px] md:h-[78px] mb-6 sm:mb-10 md:mb-[78px] rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <h3 className="font-['Open_Sans',Helvetica] font-bold text-white text-base sm:text-lg md:text-[21px] leading-6 sm:leading-8">
            Mother's Day Memories
          </h3>
          <InstagramIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
        </div>

        {/* Instagram Posts Grid */}
        <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-6xl mx-auto">
          {visiblePosts.map((post) => (
            <Card
              key={post.id}
              className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-80 lg:h-80 rounded-xl border-0 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              <CardContent className="p-0 relative">
                <img
                  className="w-full h-full object-cover"
                  alt={post.alt}
                  src={post.image}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-purple-900/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
                      <div className="flex flex-col items-center">
                        <HeartIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 mb-1 sm:mb-2" />
                        <span className="text-sm sm:text-base md:text-lg font-semibold">
                          {post.id === 1 ? post.likes?.toLocaleString() : '♥'}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <MessageCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 mb-1 sm:mb-2" />
                        <span className="text-sm sm:text-base md:text-lg font-semibold">
                          {post.id === 1 ? post.comments : '♥'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {post.showStats && (
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 flex items-center gap-2 sm:gap-3 md:gap-4 bg-white/20 backdrop-blur-md p-1 sm:p-2 rounded-full px-2 sm:px-3 md:px-4">
                    <div className="flex items-center">
                      <HeartIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-pink-500 mr-0.5 sm:mr-1" />
                      <span className="text-white text-xs sm:text-sm md:text-base font-semibold">{post.likes?.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <MessageCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white mr-0.5 sm:mr-1" />
                      <span className="text-white text-xs sm:text-sm md:text-base font-semibold">{post.comments}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View More Button - only on mobile */}
        <div className="mt-6 sm:hidden">
          <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            View All Mother's Day Photos
          </button>
        </div>
      </div>
    </section>
  );
};
