"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export default function RecentlySection() {
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      try {
        setWishlist(JSON.parse(stored));
      } catch (e) {
        console.error("Wishlist parse error", e);
      }
    }
  }, []);

  // Fix: Unique Key (Type + ID) use karein taaki collision na ho
  const toggleWishlist = (e: React.MouseEvent, item: any, type: 'cat' | 'prod') => {
    e.preventDefault();
    e.stopPropagation();

    const uniqueId = `${type}-${item.id}`; // Example: "cat-1" or "prod-1"
    let updatedWishlist = [...wishlist];
    const index = updatedWishlist.findIndex((i) => i.wishlistId === uniqueId);

    if (index > -1) {
      updatedWishlist.splice(index, 1);
    } else {
      // Item ke saath uska unique wishlistId bhi save karein
      updatedWishlist.push({ ...item, wishlistId: uniqueId });
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  // Check karne ke liye bhi uniqueId use karein
  const isInWishlist = (id: number | string, type: 'cat' | 'prod') => 
    wishlist.some((item) => item.wishlistId === `${type}-${id}`);

  return (
    <section className="w-full bg-gray-50 py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* --- CATEGORIES SECTION --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mb-12">
          {categories.map((item) => (
            <div key={item.id} className="relative group">
              <button
                onClick={(e) => toggleWishlist(e, item, 'cat')}
                className="absolute top-3 right-3 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition"
              >
                <FiHeart
                  className={`text-xl transition-colors ${
                    isInWishlist(item.id, 'cat') ? "fill-pink-600 text-pink-600" : "text-gray-400"
                  }`}
                />
              </button>

              <Link href={`/product/${item.slug}`}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2 cursor-pointer h-full">
                  <div className={`relative w-full h-60 ${item.bg}`}>
                    <Image src={item.image} alt={item.title} fill className="object-contain p-5 group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="px-4 py-3">
                    <h4 className="text-sm font-semibold group-hover:text-pink-600">{item.title}</h4>
                    <p className="text-lg font-bold mt-1">{item.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* --- RECENTLY VIEWED SECTION --- */}
        <h2 className="text-center mb-10 text-pink-500 font-light tracking-[0.2em] uppercase text-lg md:text-xl">
          Recently Viewed
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map((item) => (
            <div key={item.id} className="relative group">
              <button
                onClick={(e) => toggleWishlist(e, item, 'prod')}
                className="absolute top-3 right-3 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition"
              >
                <FiHeart
                  className={`text-xl transition-colors ${
                    isInWishlist(item.id, 'prod') ? "fill-pink-600 text-pink-600" : "text-gray-400"
                  }`}
                />
              </button>

              <Link href={`/product/${item.slug}`}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2 cursor-pointer h-full">
                  <div className={`relative w-full h-60 sm:h-75 ${item.bg}`}>
                    <Image src={item.image} alt={item.title} fill className="object-contain p-5 group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="px-4 py-3">
                    <h4 className="text-sm font-semibold group-hover:text-pink-600 truncate">{item.title}</h4>
                    <p className="text-lg font-bold mt-1">{item.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}