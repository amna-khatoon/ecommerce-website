"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

type Product = {
  id: number;
  category: string;
  price: string;
  image: string;
  bg: string;
};

const products: Product[] = [
  { id: 1, category: "Saree", price: "₹7,000/-", image: "/wom1.png", bg: "bg-purple-200" },
  { id: 2, category: "Kurtha", price: "₹7,000/-", image: "/wom2.png", bg: "bg-pink-200" },
  { id: 3, category: "Saree", price: "₹7,000/-", image: "/wom3.png", bg: "bg-green-100" },
  { id: 4, category: "Lehenga", price: "₹8,500/-", image: "/wom4.png", bg: "bg-orange-200" },
  { id: 5, category: "Gown", price: "₹9,000/-", image: "/wom5.png", bg: "bg-gray-200" },
  { id: 6, category: "Anarkali", price: "₹6,500/-", image: "/wom6.png", bg: "bg-red-200" },
];

export default function BestSelling() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    
    <section className="w-full py-5 bg-purple-50">
      
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <h2 className="text-center text-pink-500 text-xl md:text-3xl font-light tracking-[8px] mb-5 uppercase">
          BEST SELLING
        </h2>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute -left-6 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-black p-2 text-white shadow-lg hover:scale-110 transition lg:flex"
        >
          <ArrowLeft size={20} />
        </button>

        <button
          ref={nextRef}
          className="absolute -right-6 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-black p-2 text-white shadow-lg hover:scale-110 transition lg:flex"
        >
          <ArrowRight size={20} />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          speed={800}
          spaceBetween={20}
          grabCursor
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>

              <div className="group rounded-md bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

                {/* Image */}
                <div
                  className={`relative h-65 md:h-75 w-full ${product.bg} overflow-hidden rounded-t-md`}
                >
                  <Image
                    src={product.image}
                    alt={product.category}
                    fill
                    sizes="(max-width:768px) 50vw, (max-width:1200px) 25vw, 300px"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="py-4 px-3">
                  <h3 className="text-base font-semibold tracking-wide text-black/80 group-hover:text-pink-600 transition">
                    {product.category}
                  </h3>

                  <p className="mt-1 text-gray-700 font-medium">
                    {product.price}
                  </p>
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <Link href="/category">

            <button className="group relative flex items-center gap-3 px-6 py-3 text-sm font-semibold tracking-[3px] uppercase border border-black overflow-hidden transition-all duration-300">
              
              {/* Hover bg */}
              <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

              {/* Text */}
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition">
                Shop Now
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" size={18} />
              </span>

            </button>

          </Link>
        </div>

      </div>
    </section>
  );
}
