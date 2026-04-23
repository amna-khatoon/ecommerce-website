"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TopHeader() {
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "FLAT 10% OFF ON ORDERS, CODE : CHIHILI10",
    "Free shipping in India | Free shipping worldwide for orders above ₹400",
    "Connect Us on Whatsapp +918488070070",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-7 sm:h-8 md:h-9 bg-black overflow-hidden flex items-center  justify-center px-2">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMessage}
          initial={{ y: 40, opacity: 0 }} // mobile ke liye kam distance
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{
            y: {
              duration: 1.4, // mobile me faster feel
              ease: [0.33, 1, 0.68, 1],
            },
            opacity: {
              duration: 0.8,
            },
          }}
          className="absolute w-full flex justify-center"
        >
          <p className="
  text-white 
  text-[11px] 
  sm:text-xs 
  md:text-sm 
  lg:text-xs 
  xl:text-[11px]
  font-medium 
  tracking-wide 
  uppercase 
  text-center
  whitespace-nowrap
">

            {messages[currentMessage]}
          </p>
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
