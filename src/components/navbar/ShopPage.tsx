"use client";

import { shops } from "@/data/shop";
import Link from "next/link";
import React, { useState } from "react";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";

const ShopPage: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // --- ADD TO CART LOGIC ---
  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault(); // Link click ko rokne ke liye
    e.stopPropagation(); // Parent link par jane se rokne ke liye

    // 1. Pehle se saved cart uthayein
    const storedCart = localStorage.getItem("cart");
    let cart = storedCart ? JSON.parse(storedCart) : [];

    // 2. Check karein kya item pehle se hai
    const existingItemIndex = cart.findIndex((item: any) => item.id === product.id);

    if (existingItemIndex > -1) {
      // Agar hai toh quantity badha dein
      cart[existingItemIndex].quantity += 1;
    } else {
      // Agar naya hai toh quantity 1 ke saath add karein
      cart.push({ ...product, quantity: 1 });
    }

    // 3. Wapas save karein aur signal bhejein
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));// Navbar update ke liye
    
    alert(`${product.title} added to cart!`); // Simple confirmation
  };

  return (
    <>
      {/* Header (Same as yours) */}
      {/* <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-8 px-4 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center text-sm mb-4 flex-wrap gap-2">
            <Link href="/" className="hover:text-rose-100 transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-rose-100 transition">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-rose-100 font-medium">All Products</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-3">Luxury Collection</h1>
        </div>
      </div> */}

      <div className="px-4 lg:px-32 py-12">
        <section className="max-w-7xl mx-auto">
          {/* Category Header (Same) */}
         <div className="flex flex-col sm:flex-row sm:items-center mb-10 gap-4">
  <h2 className="w-full text-center font-serif text-2xl sm:text-3xl lg:text-4xl text-red-700">
    SAVED FOR LATER
  </h2>
</div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {shops.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-rose-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Product Image & Link */}
                <Link href={`/product/${product.slug}`} className="block aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`w-full h-full object-contain p-4 transition-transform duration-300 ${
                      hoveredId === product.id ? "scale-105" : "scale-100"
                    }`}
                  />
                </Link>

                {/* Product Info */}
                <div className="p-4 flex flex-col">
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="text-lg font-semibold text-gray-900 truncate mb-1">
                      {product.title}
                    </h3>
                  </Link>

                  <div className="flex items-center justify-between mb-4">
                    <p className="text-rose-600 font-bold">₹{product.price}</p>
                    <div className="flex items-center gap-1 text-amber-400">
                     <button 
                    onClick={(e) => handleAddToCart(e, product)}
                    className=" py-3  text-gray-700  flex items-center justify-center gap-2 font-bold active:scale-95"
                  >
                     <FiShoppingCart />
                  </button>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ShopPage;