"use client";

import Image from "next/image";
import Link from "next/link";

type Banner = {
  id: number;
  label: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
};

const banners: Banner[] = [
  {
    id: 1,
    label: "Exclusive",
    title: "Wedding Collection",
    description:
      "Experience the artistry of traditional Indian craftsmanship, reimagined for the modern bride. Elegant designs, rich fabrics, and timeless styles await you.",
    image: "/hroimg/post.png",
    buttonText: "Explore Collection",
    link: "/collection",
  },
];

export default function PosterBanner() {
  return (
    <section className="relative w-full bg-gray-50 py-6 md:py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative overflow-hidden rounded-2xl shadow-xl"
          >
            
            {/* IMAGE */}
            <div className="relative w-full h-[clamp(260px,40vw,440px)]">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/20" />
            </div>

            {/* TEXT */}
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="px-6 max-w-3xl">

                <p className="text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase text-white/80 mb-3">
                  {banner.label}
                </p>

                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  {banner.title}
                </h2>

                <p className="text-xs line-clamp-2 sm:text-sm md:text-base text-white/85 max-w-xl mx-auto leading-relaxed px-4 sm:px-0">


                  {banner.description}
                </p>

                <Link
                  href={banner.link}
                  className="inline-block mt-6 px-4 py-3 md:px-8 md:py-4 bg-[#f9f5f0] text-[#4a3c2b] font-semibold uppercase tracking-wider rounded-lg shadow-lg hover:scale-105 hover:bg-[#efe4d8] transition duration-300"
                >
                  {banner.buttonText}
                </Link>

              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
