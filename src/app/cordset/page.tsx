"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { coordSets } from "@/data/coordsets";
export default function CoordSetsPage() {
  const [wishlist, setWishlist] = useState<any[]>([]);

  // Load wishlist
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

  // Toggle Wishlist
  const toggleWishlist = (e: React.MouseEvent, item: any) => {
    e.preventDefault();
    e.stopPropagation();

    const uniqueId = `coord-${item.id}`;
    let updatedWishlist = [...wishlist];

    const index = updatedWishlist.findIndex(
      (i) => i.wishlistId === uniqueId
    );

    if (index > -1) {
      updatedWishlist.splice(index, 1);
    } else {
      updatedWishlist.push({ ...item, wishlistId: uniqueId });
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  const isInWishlist = (id: number) =>
    wishlist.some((item) => item.wishlistId === `coord-${id}`);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-light text-gray-800 tracking-wide uppercase">
            Stylish <span className="text-pink-600 font-semibold">Co-Ord Sets</span>
          </h1>
          <div className="h-1 w-20 bg-pink-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {coordSets.map((coord) => (
            <div key={coord.id} className="relative group">

              {/* Wishlist Button */}
              <button
                onClick={(e) => toggleWishlist(e, coord)}
                className="absolute top-4 right-4 z-20 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all active:scale-90"
              >
                <FiHeart
                  className={`text-xl transition-colors ${
                    isInWishlist(coord.id)
                      ? "fill-pink-600 text-pink-600"
                      : "text-gray-400"
                  }`}
                />
              </button>

              {/* Card */}
              <Link href={`/coordsets/${coord.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">

                  {/* Image */}
                  <div className="relative w-full h-72 overflow-hidden bg-gray-100">
                    <Image
                      src={coord.image}
                      alt={coord.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col grow">
                    <h2 className="text-lg font-bold text-gray-800 group-hover:text-pink-600 transition-colors leading-tight">
                      {coord.title}
                    </h2>

                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-2xl font-black text-gray-900">
                        ₹{coord.price}
                      </span>

                      <span className="text-xs font-bold px-2 py-1 bg-pink-50 text-pink-600 rounded">
                        TRENDING
                      </span>
                    </div>
                  </div>

                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}