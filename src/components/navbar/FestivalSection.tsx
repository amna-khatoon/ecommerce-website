"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
  bg: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Saree",
    price: "₹7,000/-",
    image: "/wom1.png",
    bg: "bg-pink-100",
  },
  {
    id: 2,
    title: "Kurtha",
    price: "₹7,000/-",
    image: "/wom2.png",
    bg: "bg-purple-100",
  },
  {
    id: 3,
    title: "Saree",
    price: "₹7,000/-",
    image: "/wom3.png",
    bg: "bg-yellow-100",
  },
  {
    id: 4,
    title: "Saree",
    price: "₹7,000/-",
    image: "/wom4.png",
    bg: "bg-rose-100",
  },
];

export default function FestivalSection() {
  return (
    <section className="w-full py-5 md:py-10 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-3 gap-4 items-center">
         
          {/* LEFT TEXT */}
          <div className="relative text-center lg:text-left h-60 md:h-80 flex flex-col justify-center rounded-xl overflow-hidden">
            {/* Background Image */}
            <Image
              src="/hroimg/gulab.png"
              alt="Festival Background"
              fill
              className="object-contain object-bottom-left opacity-20 z-0"
              sizes="100vw"
              priority 
              
            />

            <div className="absolute inset-0 bg-white/40 z-0" />

            <div className="relative flex items-center justify-center h-60 md:h-80 rounded-sm overflow-hidden text-center">
              {/* Background Image */}
              <Image
                src="/hroimg/gulab.png"
                alt="Festival Background"
                fill
                className="object-contain object-bottom-left z-0"
                sizes="100vw"
                priority
              />

              <div className="absolute inset-0 bg-white/40 z-0" />

              <div className="relative z-10 flex flex-col items-center leading-none">
                <div className="flex font-serif items-end leading-none text-red-900">
                  <span className="text-[60px] md:text-[95px] font-extralight">
                    F
                  </span>

                  <span className="text-3xl md:text-5xl tracking-wide ml-1">
                    estival
                  </span>
                </div>

                <p
                  className="
        -mt-1
        md:-mt-2
        text-lg 
        md:text-2xl 
        tracking-[6px] 
        text-red-600 
        font-light font-serif
      "
                >
                  favorites
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PRODUCTS */}
          <div
            className="lg:col-span-2 grid 
                          grid-cols-1 
                          sm:grid-cols-2 
                          lg:grid-cols-4 
                          gap-4"
          >
            {products.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                {/* CARD */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden">
                  {/* IMAGE */}
                  <div
                    className={`relative w-full 
                                h-60
                                sm:h-62.5 
                                md:h-65
                                lg:h-60
                                ${item.bg}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width:640px) 100vw,
                             (max-width:1024px) 50vw,
                             25vw"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="p-4 text-left sm:text-left">
                    <h4 className="font-semibold text-gray-800 text-base tracking-wide">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 font-medium mt-1">
                      {item.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
