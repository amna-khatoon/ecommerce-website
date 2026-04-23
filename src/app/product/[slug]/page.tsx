"use client";

import { products } from "@/data/products";
import { categories } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState, useEffect } from "react"; // useEffect add kiya
import { FiHeart, FiTruck, FiShoppingCart } from "react-icons/fi";
import {
  MdArrowRightAlt,
  MdOutlineFitScreen,
  MdOutlineDiamond,
} from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";

export default function ProductPage() {
  const params = useParams();
  const slug = String(params.slug);

  const product = products.find((p) => p.slug === slug);
  const category = categories.find((c) => c.slug === slug);

  const data = product ?? category;

  // Hooks (Must be at top)
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (data) {
      setSize(data.sizes?.[0] || "");
      setColor(data.colors?.[0] || "");

      // Check if already in wishlist
      const stored = localStorage.getItem("wishlist");
      if (stored) {
        const wishlist = JSON.parse(stored);
        setIsWishlisted(wishlist.some((item: any) => item.wishlistId === `prod-${data.id}`));
      }
    }
  }, [data]);

  if (!data) return notFound();
  if (!mounted) return null;

  const displayQty = qty.toString().padStart(2, "0");
  const formatPrice = (price: string) =>
    `₹${Number(price.replace(/[^0-9]/g, "")).toLocaleString("en-IN")}`;

  const relatedProducts = products.filter((p) => p.slug !== slug).slice(0, 4);
  const stars = "⭐".repeat(Math.round(data.rating));

  // --- ADD TO CART ---
  const handleAddToCart = (e: React.MouseEvent, item: any) => {
    e.preventDefault();
    const storedCart = localStorage.getItem("cart");
    let cart = storedCart ? JSON.parse(storedCart) : [];

    const existingItemIndex = cart.findIndex(
      (cartItem: any) =>
        cartItem.id === item.id &&
        cartItem.selectedSize === size &&
        cartItem.selectedColor === color
    );

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += qty;
    } else {
      cart.push({
        ...item,
        quantity: qty,
        selectedSize: size,
        selectedColor: color,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    alert(`${item.title} added to cart!`);
  };

  // --- WISHLIST LOGIC (Fixed) ---
  const toggleWishlist = () => {
    const stored = localStorage.getItem("wishlist");
    let wishlist = stored ? JSON.parse(stored) : [];
    const uniqueId = `prod-${data.id}`; // data use kiya

    const index = wishlist.findIndex((i: any) => i.wishlistId === uniqueId);

    if (index > -1) {
      // Remove from wishlist
      wishlist.splice(index, 1);
      setIsWishlisted(false);
    } else {
      // Add to wishlist
      wishlist.push({ ...data, wishlistId: uniqueId });
      setIsWishlisted(true);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  return (
    <main className="min-h-screen bg-pink-50/80">
      <section className="py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          
          {/* IMAGE */}
          <div className={`relative w-full h-80 md:h-125 rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm`}>
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>

          {/* INFO */}
          <div className="flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                {data.title}
              </h1>
              <button 
                onClick={toggleWishlist}
                className={`w-10 h-10 flex items-center justify-center rounded-md border transition-all shadow-sm ${
                  isWishlisted ? "bg-pink-100 border-pink-300" : "bg-white border-gray-300 hover:border-black"
                }`}
              >
                <FiHeart 
                  size={22} 
                  className={isWishlisted ? "fill-red-600 text-red-600" : "text-gray-400"} 
                />
              </button>
            </div>

          {/* PRICE SECTION */}
<div className="flex items-baseline gap-3 mt-3">
  {/* Current Price (Formatted) */}
  <span className="text-3xl font-bold text-red-800">
    {formatPrice(data.price)}
  </span>

  {/* Original Price (Cut/Strike-through) */}
  <span className="text-gray-400 line-through text-lg">
    ₹{(
      Number(data.price.replace(/[^0-9]/g, "")) + 500
    ).toLocaleString("en-IN")}
  </span>

  {/* Discount Badge */}
  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
    SAVE 20%
  </span>
</div>

             {/* RATING */}
            <div className="flex flex-wrap items-center gap-2 mt-2 text-sm sm:text-base">
              <span>
                {data.rating} {stars}
              </span>
              <span className="text-blue-600">
                See all {data.reviews} reviews
              </span>
            </div>

            {/* COLOR */}
            {data.colors?.length > 0 && (
              <div className="mt-6">
                <p className="font-medium mb-2 text-sm">Available Colors</p>
                <div className="flex gap-3">
                  {data.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className={`w-8 h-8 rounded-sm border transition-all ${
                        color === c ? "border-black scale-110 shadow-md" : "border-gray-200"
                      }`}
                      style={{ background: c.toLowerCase() }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* SIZE */}
            {data.sizes?.length > 0 && (
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900 text-sm sm:text-base">
                    Size
                  </p>
                  <button className="text-xs sm:text-sm text-red-700 hover:underline font-medium">
                    See sizing chart
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-4 sm:px-5 py-1 sm:py-2 rounded-sm border text-sm sm:text-base transition ${
                        size === s
                          ? "border-black bg-red-900 text-white"
                          : "border-gray-300"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* FIT */}
            <div className="mt-4 flex flex-wrap gap-2 items-center text-sm sm:text-base">
              <MdOutlineFitScreen className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
              <h3 className="font-medium text-gray-900">Fit</h3>
              <p className="text-gray-500">{data.fit}</p>
            </div>

            {/* SHIPPING */}
            <div className="mt-2 flex flex-wrap gap-2 items-center text-sm sm:text-base">
              <FiTruck className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
              <h3 className="font-medium text-gray-900">Shipping</h3>
              <p className="text-gray-500">{data.shipping}</p>
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

            {/* QUANTITY */}
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
                onClick={(e) => handleAddToCart(e, data)}
                className="flex-1 bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 py-2 sm:py-3 rounded-sm font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Add To Cart <FiShoppingCart size={18} />
              </button>
             <Link
  href="/buy-now"
  className="flex-1 bg-red-900 text-white border border-red-900 hover:bg-red-800 py-2 sm:py-3 rounded-sm font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
>
  Buy Now <MdArrowRightAlt size={18} />
</Link>
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

            {/* DESCRIPTION */}
            <div className="mt-6 space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {data.description}
                </p>
              </div>
              {data.fabric && (
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Fabric & Care
                  </h3>
                  <ul className="text-gray-600 text-sm sm:text-base list-disc ml-5 space-y-1">
                    {data.fabric.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="py-12 bg-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-red-800 text-xl font-medium tracking-[5px] uppercase mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/product/${p.slug}`} className="bg-white rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition">
                <div className={`relative aspect-3/4 ${p.bg}`}>
                  <Image src={p.image} alt={p.title} fill className="object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 truncate">{p.title}</h3>
                  <p className="text-red-700 font-bold mt-1">{formatPrice(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}