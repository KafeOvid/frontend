import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PromoProducts = () => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      title: "Mother's Day Special",
      price: "$29",
      image: "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?q=80&w=2073&auto=format&fit=crop",
      tag: "Best Seller",
    },
    {
      id: 2,
      title: "Gift for Mom",
      price: "$29",
      image: "https://images.unsplash.com/photo-1589458061545-082d35b35b31?q=80&w=1974&auto=format&fit=crop",
      tag: "New",
    },
    {
      id: 3,
      title: "Self-care Bundle",
      price: "$29",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Spa Treatment",
      price: "$29",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
      tag: "Limited",
    },
    {
      id: 5,
      title: "Relaxation Kit",
      price: "$29",
      image: "https://images.unsplash.com/photo-1602910503541-d7986f205c37?q=80&w=2073&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full py-6 sm:py-10 md:py-16 px-3 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto bg-pink-50/90 p-3 sm:p-6 md:p-10 rounded-lg border border-pink-200 shadow-sm">
        <h2 className="font-['Cormorant_Garamond',Helvetica] font-bold text-pink-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-[46px] mb-3 sm:mb-5 md:mb-8 text-center md:text-left">
          Perfect Mother's Day Gifts She'll Love
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 xs:gap-3 sm:gap-4 md:gap-5 justify-items-center">
          {products.map((product) => (
            <Card
              key={product.id}
              className="w-full max-w-[160px] xs:max-w-[140px] sm:max-w-[150px] md:max-w-[165px] p-0 rounded-md border border-pink-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative h-[120px] xs:h-[130px] sm:h-[150px] md:h-[170px] lg:h-[195px]">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    {product.tag && (
                      <div className="absolute top-2 left-0 bg-pink-600 text-white text-[10px] xs:text-xs px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-r shadow-sm">
                        {product.tag}
                      </div>
                    )}
                    
                    <div className="absolute bottom-2 left-0 right-0 text-center px-1 xs:px-2">
                      <div className="font-heading-4 font-bold text-white text-[10px] xs:text-xs sm:text-sm md:text-base leading-tight bg-pink-800/80 p-1 rounded backdrop-blur-sm">
                        {product.title}
                      </div>
                    </div>

                    <div className="absolute w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 top-0 right-0 bg-white rounded-bl-md">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-pink-800 text-center text-xs xs:text-sm sm:text-base">
                        {product.price}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[35px] xs:h-[40px] sm:h-[45px] md:h-[50px] lg:h-[55px] bg-gradient-to-r from-pink-100 to-pink-200 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    className="font-medium text-[10px] xs:text-xs sm:text-sm text-pink-800 hover:text-pink-900 hover:bg-pink-200/50 py-0.5 xs:py-1 h-auto"
                  >
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-4 sm:mt-6 md:mt-8 text-center">
          <Button className="bg-pink-700 hover:bg-pink-800 text-white text-xs sm:text-sm md:text-base font-medium px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-md">
            View All Mother's Day Gifts
          </Button>
        </div>
      </div>
    </section>
  );
};
