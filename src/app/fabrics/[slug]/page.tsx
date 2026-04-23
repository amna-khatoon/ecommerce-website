"use client";

import { fabrics } from "@/data/fabrics";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FiHeart, FiShoppingCart, FiTruck, FiInfo } from "react-icons/fi";
import {
  MdArrowRightAlt,
  MdOutlineDiamond,
  MdOutlineFitScreen,
} from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";

export default function FabricDetailPage() {
  const params = useParams();
  const slug = String(params.slug);

  const fabric = fabrics.find((f) => f.slug === slug);

  if (!fabric) return notFound();

  const [qty, setQty] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedSize, setSelectedSize] = useState(fabric.sizes?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(fabric.colors?.[0] || "");

  // Wishlist state sync
  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      const wishlist = JSON.parse(stored);
      setIsWishlisted(
        wishlist.some((item: any) => item.wishlistId === `fabric-${fabric.id}`),
      );
    }
  }, [fabric.id]);

  const displayQty = qty.toString().padStart(2, "0");

  const formatPrice = (price: string) =>
    `₹${Number(price).toLocaleString("en-IN")}`;

  const stars = "⭐".repeat(Math.round(fabric.rating));

  // --- HANDLERS ---
  const handleAddToCart = () => {
    const storedCart = localStorage.getItem("cart");
    let cart = storedCart ? JSON.parse(storedCart) : [];

    const existingItemIndex = cart.findIndex(
      (item: any) =>
        item.id === fabric.id &&
        item.type === "fabric" &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor,
    );

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += qty;
    } else {
      cart.push({
        ...fabric,
        type: "fabric",
        quantity: qty,
        selectedSize,
        selectedColor,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    alert(`${fabric.title} added to cart!`);
  };

  const toggleWishlist = () => {
    const stored = localStorage.getItem("wishlist");
    let wishlist = stored ? JSON.parse(stored) : [];
    const uniqueId = `fabric-${fabric.id}`;

    const index = wishlist.findIndex((i: any) => i.wishlistId === uniqueId);
    if (index > -1) {
      wishlist.splice(index, 1);
      setIsWishlisted(false);
    } else {
      wishlist.push({ ...fabric, wishlistId: uniqueId });
      setIsWishlisted(true);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  return (
    <main className="min-h-screen bg-pink-50/80">
      {/* FABRIC SECTION */}
      <section className="py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {/* LEFT: IMAGE */}
          <div className="relative w-full h-80 md:h-125 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <Image
              src={fabric.image}
              alt={fabric.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>

          {/* RIGHT: INFO SECTION */}
          <div className="flex flex-col">
            {/* TITLE + WISHLIST */}
            <div className="flex justify-between items-start gap-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                {fabric.title}
              </h1>
              <button
                onClick={toggleWishlist}
                className={`w-10 h-10 flex items-center justify-center rounded-md border transition-all shadow-sm ${
                  isWishlisted
                    ? "bg-pink-100 border-pink-300"
                    : "bg-white border-gray-300 hover:border-black"
                }`}
              >
                <FiHeart
                  size={22}
                  className={
                    isWishlisted ? "fill-red-600 text-red-600" : "text-gray-400"
                  }
                />
              </button>
            </div>

            {/* PRICE */}
            <div className="flex items-baseline gap-3 mt-3">
              <span className="text-3xl font-bold text-red-800">
                {formatPrice(fabric.price)}
              </span>
              <span className="text-gray-400 line-through text-lg">
                ₹{Number(fabric.price) + 500}
              </span>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                SAVE 20%
              </span>
            </div>

            {/* RATING */}
            <div className="flex flex-wrap items-center gap-2 mt-2 text-sm sm:text-base">
              <span>
                {fabric.rating} {stars}
              </span>
              <span className="text-blue-600">
                See all {fabric.reviews} reviews
              </span>
            </div>

            {/* COLOR SELECTION */}
            {fabric.colors?.length > 0 && (
              <div className="mt-6">
                <p className="font-medium mb-2 text-sm sm:text-base">
                  Available Colors
                </p>
                <div className="flex gap-3">
                  {fabric.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-sm border transition ${
                        selectedColor === c
                          ? "border-black scale-110"
                          : "border-gray-200"
                      }`}
                      style={{ background: c.toLowerCase() }}
                      title={c}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* LENGTH SELECTION (Meters) */}
            {fabric.sizes?.length > 0 && (
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900 text-sm sm:text-base">
                    Select Length
                  </p>
                  <button className="text-xs text-red-700 hover:underline font-medium">
                    Measurement Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {fabric.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-5 py-2 rounded-sm border text-sm transition-all ${
                        selectedSize === s
                          ? "border-black bg-red-900 text-white"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* FIT & SHIPPING INFO */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <MdOutlineFitScreen className="text-gray-500 w-5 h-5" />
                <span className="font-medium">Fit:</span> {fabric.fit}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <FiTruck className="text-gray-500 w-5 h-5" />
                <span className="font-medium">Shipping:</span> {fabric.shipping}
              </div>
            </div>

            {/* CUSTOM SIZE LOGIN */}
            <div className="mt-4 w-full">
              <Link
                href="/login"
                className="w-full bg-white text-gray-700 font-semibold py-2 sm:py-3 rounded-sm shadow-sm flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-sm sm:text-base transition"
              >
                Login to get Custom Size
              </Link>
            </div>

            {/* QUANTITY & ACTIONS */}
            <div className="mt-4">
              <div className="flex w-32 sm:w-36 border border-gray-300 rounded-sm overflow-hidden bg-white">
                <button
                  onClick={() => qty > 1 && setQty(qty - 1)}
                  className="flex-1 py-1 text-lg font-semibold border-r border-gray-300 bg-gray-50 hover:bg-gray-100 transition"
                >
                  -
                </button>
                <span className="flex-1 text-center py-1 bg-white font-semibold text-sm sm:text-base">
                  {displayQty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="flex-1 py-1 text-lg font-semibold border-l border-gray-300 bg-gray-50 hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 w-full">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 py-2 sm:py-3 rounded-sm font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Add To Cart <FiShoppingCart size={18} />
              </button>
              <button className="flex-1 bg-red-900 text-white border border-red-900 hover:bg-red-700 py-2 sm:py-3 rounded-sm font-medium flex items-center justify-center gap-2 text-sm sm:text-base">
                Buy Now <MdArrowRightAlt size={18} />
              </button>
            </div>

            {/* BADGES */}
           <div className="mt-4 flex flex-col gap-4">
              {/* Box 1 */}
              <div className="w-full flex flex-col items-center justify-center bg-orange-100 rounded-md p-3 text-center shadow-sm text-sm sm:text-base">
                <AiOutlineGlobal className="text-red-800 w-5 h-5 mb-1" />
                <h3 className="font-semibold uppercase text-gray-600">
                  International Delivery
                </h3>
                <p className="text-red-600 mt-1">Get your order in 2 days</p>
              </div>

              {/* Box 2 */}
              <div className="w-full flex flex-col items-center justify-center bg-orange-100 rounded-md p-3 text-center shadow-sm text-sm sm:text-base">
                <MdOutlineDiamond className="text-red-800 w-5 h-5 mb-1" />
                <h3 className="font-semibold uppercase text-gray-600">
                  Premium Material
                </h3>
                <p className="text-red-600 mt-1">Premium Material</p>
              </div>
            </div>

            {/* DETAILS ACCORDION */}
            <div className="mt-10 space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 mb-2 uppercase text-xs tracking-widest">
                  Description
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {fabric.description}
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 mb-2 uppercase text-xs tracking-widest">
                  Fabric & Care
                </h3>
                <ul className="text-gray-600 text-sm space-y-1 list-disc ml-5">
                  {fabric.fabric.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUGGESTED SECTION */}
      <section className="py-12 bg-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-red-800 text-xl font-medium tracking-[5px] uppercase mb-10">
            Suggested For You
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fabrics
              .filter((f) => f.slug !== slug)
              .slice(0, 4)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/fabrics/${p.slug}`}
                  className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition"
                >
                  <div className="relative aspect-3/4">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 truncate group-hover:text-red-800 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-red-700 font-bold mt-1">
                      {formatPrice(p.price)}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
