"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Card = {
  image: string;
  bg: string;
};

const topBig: Card = {
  bg: "bg-gradient-to-br from-red-100 via-red-200 to-black/10",
  image: "/wom6.png",
};

const topSmall: Card[] = [
  { image: "/frock1.png", bg: "bg-gradient-to-br from-blue-100 to-blue-300" },
  { image: "/frock2.png", bg: "bg-gradient-to-br from-pink-100 to-pink-300" },
  { image: "/wom2.png", bg: "bg-gradient-to-br from-yellow-100 to-amber-300" },
  { image: "/saree3.png", bg: "bg-gradient-to-br from-red-200 to-rose-400" },
];

const bottomCards: Card[] = [
  { image: "/wom3.png", bg: "bg-gradient-to-br from-sky-100 to-blue-300" },
  { image: "/wom4.png", bg: "bg-gradient-to-br from-gray-100 to-gray-300" },
  { image: "/wom5.png", bg: "bg-gradient-to-br from-indigo-100 to-indigo-300" },
];

export default function NewCollection() {
  return (
    <section className="w-full py-5 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-center text-pink-500 text-xl md:text-3xl font-light tracking-[6px] uppercase mb-5">
          New Collection
        </h2>

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-3">

          {/* BIG CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
            className={`relative group overflow-hidden rounded-xl cursor-pointer
            h-65 md:h-45 lg:h-78 flex items-center justify-center ${topBig.bg}`}
          >
            <Image
              src={topBig.image}
              alt="collection"
              fill
              priority
              sizes="(max-width:768px) 100vw, 66vw"
              className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
          </motion.div>

          {/* 4 SMALL CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {topSmall.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3, boxShadow: "0px 15px 30px rgba(0,0,0,0.08)" }}
                className={`relative group overflow-hidden rounded-xl cursor-pointer
                h-32.5 md:h-45 lg:h-38 flex items-center justify-center ${card.bg}`}
              >
                <Image
                  src={card.image}
                  alt="category"
                  fill
                  sizes="33vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM 3 CARDS */}
        <div className="grid md:grid-cols-3 gap-3 mt-3">
          {bottomCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -3, boxShadow: "0px 15px 30px rgba(0,0,0,0.08)" }}
              className={`relative group overflow-hidden rounded-xl cursor-pointer
              h-45 md:h-55 lg:h-60 flex items-center justify-center ${card.bg}`}
            >
              <Image
                src={card.image}
                alt="collection"
                fill
                sizes="33vw"
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-10">
          <Link href="/collection">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
              transition={{ duration: 0.3 }}
              className="group relative flex items-center gap-3 px-6 py-3 text-sm font-semibold tracking-[3px] uppercase border border-black overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition">
                View Collection
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" size={18} />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
