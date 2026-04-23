"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Link from "next/link";

const heroSlides = [
  {
    id: 1,
    title: "Wedding Collection", 
    description: " Discover timeless elegance with our handcrafted wedding sarees and lehengas, designed to make every moment unforgettable.",
    image: "/slid.png",
  },
  {
    id: 2,
    title: "Elegant Dresses",
    description: "Elevate your style with our elegant and trendy dresses.",
    image: "/img2.jpg",
  },
  {
    id: 3,
    title: "Party Wear",
    description: "Stand out at any party with our latest collection.",
    image: "/img1.jpg",
  },
];

export default function HeroSlider() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => setSwiperReady(true), []);

  return (
    <section className="relative bg-white ">
      {/* ===== Hero Slider ===== */}
      <div className="relative h-[55vh] sm:h-[60vh] md:h-[70vh] w-full overflow-hidden">
        {swiperReady && (
          <Swiper
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={1200}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            pagination={{
              clickable: true,
              renderBullet: (_, className) =>
                `<span class="${className} w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/80 hover:bg-white transition-all"></span>`,
            }}
            className="relative z-10 h-full w-full"
          >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id} className="relative overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  priority
                />
               <div className="absolute inset-0 bg-linear-to-r from-sky-900/40 via-blue-900/30 to-transparent" />

                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-6 sm:px-12">
                  {/* Title */}
                  <h2 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight text-balance">
                    {slide.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-4 md:mt-2 text-primary-foreground/80 mb-4 text-white text-sm md:text-base leading-relaxed max-w-lg mx-auto line-clamp-2">
                    {slide.description}
                  </p>

                  {/* Shop Now Button */}
                  <Link
                    href="/button/shop"
                    className="font-hero bg-transparent border border-white text-white font-semibold px-6 py-2 rounded-md text-sm sm:text-base md:text-base text-center hover:bg-white/10 transition-all"
                  >
                    Shop Now
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 p-3 shadow-xl transition-all hover:scale-110 hover:shadow-2xl md:flex items-center justify-center bg-white/20 rounded-full"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          ref={nextRef}
          className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 p-3 shadow-xl transition-all hover:scale-110 hover:shadow-2xl md:flex items-center justify-center bg-white/20 rounded-full"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* ===== Cart Section ===== */}
      
    </section>
  );
}
