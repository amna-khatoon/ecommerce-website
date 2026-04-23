"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag, ChevronRight, Heart, Minus, Plus } from "lucide-react";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("wishlist");
      if (stored) {
        try {
          // Quantity handle karne ke liye initial state set karein
          const parsed = JSON.parse(stored).map((item: any) => ({
            ...item,
            quantity: item.quantity || 1,
          }));
          setWishlist(parsed);
        } catch (error) {
          console.error("Failed to parse wishlist:", error);
        }
      }
    }
  }, []);

  // Quantity Update Logic
  const updateQuantity = (uniqueId: string, delta: number) => {
    const updated = wishlist.map((item) => {
      if (item.wishlistId === uniqueId) {
        const newQty = Math.max(1, (item.quantity || 1) + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const removeItem = (uniqueId: string) => {
    const updated = wishlist.filter((item) => item.wishlistId !== uniqueId);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  return (
    <section className="min-h-screen bg-[#F8F9FB] py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                    My <span className="text-pink-600">Wishlist</span>
                </h1>
                <p className="text-gray-500 text-sm mt-2 font-medium bg-white w-fit px-3 py-1 rounded-full shadow-sm border border-gray-100">
                    ✨ {wishlist.length} Exclusive items saved
                </p>
            </div>
            <Link href="/" className="text-sm font-bold text-gray-900 hover:text-pink-600 flex items-center gap-1 transition-all group">
                Continue Shopping 
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-[3rem] shadow-xl shadow-gray-200/40 border border-gray-50">
            <div className="bg-pink-50 w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Heart className="text-pink-400 fill-pink-200" size={56} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Your wishlist is lonely</h2>
            <p className="text-gray-400 mt-2 mb-10 max-w-xs mx-auto text-lg">
                Add items you love so you don't miss out on them.
            </p>
            <Link href="/" className="bg-gray-900 text-white px-12 py-5 rounded-2xl font-bold hover:bg-pink-600 transition-all shadow-2xl hover:shadow-pink-200">
                Start Exploring
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {wishlist.map((item) => (
              <div
                key={item.wishlistId || item.id} 
                className="group bg-white p-5 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500 border border-transparent hover:border-pink-50 flex flex-col sm:flex-row items-center gap-6"
              >
                {/* Image Section */}
                <div className={`relative flex-shrink-0 w-full sm:w-40 h-44 ${item.bg || 'bg-gray-50'} rounded-[2rem] overflow-hidden`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-extrabold text-gray-900 leading-tight">
                        {item.title}
                    </h3>
                    <button
                      onClick={() => removeItem(item.wishlistId)}
                      className="p-3 rounded-full bg-red-50 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm"
                      title="Remove Item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                  
                  <p className="text-pink-600 font-black text-2xl mb-6">
                      {item.price}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    {/* Quantity Selector - Dribbble Style */}
                    <div className="flex items-center bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
                        <button 
                          onClick={() => updateQuantity(item.wishlistId, -1)}
                          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm hover:bg-pink-50 hover:text-pink-600 transition-colors"
                        >
                            <Minus size={16} strokeWidth={3} />
                        </button>
                        <span className="w-12 text-center font-bold text-gray-800 text-lg">
                            {item.quantity || 1}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.wishlistId, 1)}
                          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm hover:bg-pink-50 hover:text-pink-600 transition-colors"
                        >
                            <Plus size={16} strokeWidth={3} />
                        </button>
                    </div>

                    <Link
                      href={`/product/${item.slug}`}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-3 hover:bg-gray-900 text-white px-8 py-4 rounded-2xl bg-pink-600 transition-all font-bold shadow-lg hover:shadow-pink-100 active:scale-95"
                    >
                      <ShoppingBag size={20} />
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </section>
  );
}