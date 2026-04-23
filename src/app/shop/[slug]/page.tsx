"use client";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { FiHeart, FiTruck, FiShoppingCart } from "react-icons/fi";
import { MdArrowRightAlt, MdOutlineFitScreen, MdOutlineDiamond } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { shops } from "@/data/shop";
import { products } from "@/data/products";

export default function ProductPage() {
  const params = useParams();
  const slug = String(params.slug);

  const shopdata = shops.find((p) => p.slug === slug);
  const data = shopdata;

  if (!data) return notFound();

  const [size, setSize] = useState(data.sizes?.[0] || "");
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(data.colors?.[0] || "");
  const displayQty = qty.toString().padStart(2, "0");

  const formatPrice = (price: string) =>
    `₹${Number(price.replace(/[^0-9]/g, "")).toLocaleString("en-IN")}`;

  const relatedProducts = products.filter((p) => p.slug !== slug).slice(0, 4);
  const stars = "⭐".repeat(Math.round(data.rating));

  return (
    <main className="min-h-screen bg-pink-50/80 px-4 sm:px-6 lg:px-12 py-8">
      {/* PRODUCT */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {/* IMAGE */}
          <div className={`relative w-full h-80 sm:h-96 md:h-128 rounded-xl ${data.bg}`}>
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-contain p-6 sm:p-10"
              priority
            />
          </div>

          {/* INFO */}
          <div className="flex flex-col">
            {/* TITLE */}
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                {data.title}
              </h1>
              <button className="w-10 h-10 bg-white flex items-center justify-center rounded-md border border-gray-300 hover:border-black hover:scale-110 transition">
                <FiHeart size={22} />
              </button>
            </div>

            {/* PRICE */}
            <p className="text-2xl sm:text-3xl text-red-800 font-bold mt-3">
              {formatPrice(data.price)}
            </p>

            {/* RATING */}
            <div className="flex flex-wrap items-center gap-2 mt-2 text-sm sm:text-base">
              <span>{data.rating} {stars}</span>
              <span className="text-blue-600">See all {data.reviews} reviews</span>
            </div>

            {/* COLOR */}
            {data.colors?.length > 0 && (
              <div className="mt-4 sm:mt-6">
                <p className="font-medium mb-2 text-sm sm:text-base">Color</p>
                <div className="flex gap-2 sm:gap-3 flex-wrap">
                  {data.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className={`w-8 h-8 rounded-sm border ${color === c ? "border-black scale-110" : "border-gray-300"} transition`}
                      style={{ background: c.toLowerCase() }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* SIZE */}
            {data.sizes?.length > 0 && (
              <div className="mt-4 sm:mt-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900 text-sm sm:text-base">Size</p>
                  <button className="text-sm sm:text-base text-red-700 hover:underline font-medium">
                    See sizing chart
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-1">
                  {data.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-4 sm:px-5 py-2 rounded-sm border ${
                        size === s ? "border-black bg-red-900 text-white" : "border-gray-300"
                      } transition text-sm sm:text-base`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* FIT */}
            <div className="mt-4 sm:mt-5 pb-4 flex flex-wrap items-center gap-2 text-sm sm:text-base">
              <MdOutlineFitScreen className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
              <h3 className="font-medium text-gray-900">Fit</h3>
              <p className="text-gray-500">{data.fit}</p>
            </div>

            {/* SHIPPING */}
            <div className="pb-2 flex flex-wrap items-center gap-2 text-sm sm:text-base">
              <FiTruck className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
              <h3 className="font-medium text-gray-900">Shipping</h3>
              <p className="text-gray-500">{data.shipping}</p>
            </div>

            {/* CUSTOM SIZE BUTTON */}
            <div className="mt-4 w-full">
              <Link
                href="/login"
                className="w-full bg-white text-gray-700 font-semibold py-3 rounded-sm transition shadow-sm flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-sm sm:text-base"
              >
                Login to get Custom Size
              </Link>
            </div>

            {/* QUANTITY */}
            <div className="mt-4 sm:mt-6">
              <div className="flex w-full max-w-40 border border-gray-300 rounded-sm overflow-hidden bg-white">
                <button
                  onClick={() => qty > 1 && setQty(qty - 1)}
                  className="flex-1 py-1 text-lg font-semibold border-r border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="flex-1 text-center py-1 bg-white font-semibold text-sm sm:text-base">
                  {displayQty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="flex-1 py-1 font-semibold border-l border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* ADD TO CART / BUY NOW BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-5 w-full">
              <button className="flex-1 bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 py-3 rounded-sm font-semibold flex items-center justify-center gap-2 text-sm sm:text-base">
                Add To Cart <FiShoppingCart size={18} />
              </button>
              <button className="flex-1 bg-red-900 text-white border border-red-900 hover:bg-red-700 py-3 rounded-sm font-medium flex items-center justify-center gap-2 text-sm sm:text-base">
                Buy Now <MdArrowRightAlt size={18} />
              </button>
            </div>

            {/* INFO BOXES */}
            <div className="mt-4 sm:mt-6 flex flex-col gap-3 w-full">
              <div className="flex flex-col items-center justify-center w-full bg-orange-100 rounded-md p-3 sm:p-4 text-center shadow-sm text-sm sm:text-base">
                <AiOutlineGlobal className="text-red-800 w-5 h-5 mb-1 sm:mb-2" />
                <h3 className="font-semibold uppercase text-gray-600">International Delivery</h3>
                <p className="text-red-600 mt-1">Get your order in 2 days</p>
              </div>
              <div className="flex flex-col items-center justify-center w-full bg-orange-100 rounded-md p-3 sm:p-4 text-center shadow-sm text-sm sm:text-base">
                <MdOutlineDiamond className="text-red-800 w-5 h-5 mb-1 sm:mb-2" />
                <h3 className="font-semibold uppercase text-gray-600">Premium Material</h3>
                <p className="text-red-600 mt-1">Premium Material</p>
              </div>
            </div>

            {/* PRODUCT DETAILS */}
            <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{data.description}</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900 mb-2">Fabric & Care</h3>
                <ul className="text-gray-600 text-sm sm:text-base list-disc ml-5 space-y-1">
                  {data.fabric?.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="py-6 sm:py-12 bg-purple-100">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-0">
            <h2 className="text-center text-red-700 text-xl sm:text-2xl font-medium tracking-[5px] uppercase mb-6 sm:mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/product/${p.slug}`}>
                  <div className="rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer">
                    <div className={`relative h-40 sm:h-52 ${p.bg}`}>
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-contain p-4 sm:p-6"
                      />
                    </div>
                    <div className="p-2 sm:p-3">
                      <h3 className="font-medium text-sm sm:text-base">{p.title}</h3>
                      <p className="text-pink-600 font-semibold text-sm sm:text-base">{formatPrice(p.price)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
