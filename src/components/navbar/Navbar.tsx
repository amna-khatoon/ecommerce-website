"use client";

import { useState, useEffect } from "react";
import { FiSearch, FiMenu, FiX, FiHeart } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navItems = [
  { name: "GOWN", href: "/gown" },
  { name: "FABRIC", href: "/fabric" },
  { name: "CO-ORD SETS", href: "/cordset" },
  { name: "SAREE", href: "/saree" },
  { name: "KURTI SET", href: "/kurti-set" },
  { name: "SKIRT", href: "/skirt" },
  {
    name: "DESIGN YOURSELF",
    href: "/design-yourself",
    highlight: true,
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // --- WISHLIST COUNT STATE ---
  const [wishlistCount, setWishlistCount] = useState(0);

  const [cartCount, setCartCount] = useState(0);

  const pathname = usePathname();



  // --- WISHLIST UPDATE LOGIC ---
  const updateWishlistCount = () => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      try {
        const items = JSON.parse(stored);
        setWishlistCount(items.length);
      } catch (e) {
        setWishlistCount(0);
      }
    } else {
      setWishlistCount(0);
    }
  };

  useEffect(() => {
  updateWishlistCount();
  updateCartCount();

  window.addEventListener("storage", updateWishlistCount);
  window.addEventListener("storage", updateCartCount);

  window.addEventListener("wishlistUpdated", updateWishlistCount);
  window.addEventListener("cartUpdated", updateCartCount);

  return () => {
    window.removeEventListener("storage", updateWishlistCount);
    window.removeEventListener("storage", updateCartCount);

    window.removeEventListener("wishlistUpdated", updateWishlistCount);
    window.removeEventListener("cartUpdated", updateCartCount);
  };
}, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);


  // --- CART UPDATE LOGIC ---
const updateCartCount = () => {
  const stored = localStorage.getItem("cart");
  if (stored) {
    try {
      const items = JSON.parse(stored);
      setCartCount(items.length);
    } catch (e) {
      setCartCount(0);
    }
  } else {
    setCartCount(0);
  }
};

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-pink-100">
      
      {/* TOP NAVBAR */}
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 h-21.25">
        
        {/* LOGO */}
        <Link href="/" className="relative w-32.5 h-13.75">
          <Image
            src="/images/logo.jpg"
            alt="Chihili"
            fill
            priority
            className="object-contain"
          />
        </Link>

        {/* SEARCH DESKTOP */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11.5 pl-12 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <FiSearch className="absolute left-4 top-3.5 text-gray-400 text-lg" />
          </div>
        </div>

        {/* RIGHT DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          
          {/* WISHLIST WITH BADGE */}
          <Link href="/wishlist" className="relative group">
            <FiHeart className="text-[24px] group-hover:scale-110 transition" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                {wishlistCount}
              </span>
            )}
          </Link>

         <Link href="/cart" className="relative">
  <BsBag className="text-[22px]" />

  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
      {cartCount}
    </span>
  )}
</Link>

          <Link href="/profile">
            <AiOutlineUser className="text-[24px] hover:scale-125 transition" />
          </Link>

          <Link
            href="/design"
            className="flex items-center justify-center px-10 h-10.5 rounded-md bg-red-900 text-white font-semibold hover:bg-red-700 transition"
          >
            Talk to Designers
          </Link>
        </div>

        {/* MOBILE RIGHT */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={() => setIsSearchOpen(true)}>
            <FiSearch className="text-[22px]" />
          </button>

          {/* MOBILE WISHLIST COUNT */}
          <Link href="/wishlist" className="relative">
             <FiHeart className="text-[22px]" />
             {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link href="/cart">
            <BsBag className="text-[22px]" />
          </Link>

          <button onClick={() => setIsMenuOpen(true)}>
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {/* ... Rest of your code (Search bar, Desktop Nav, Mobile Menu) remains same ... */}
      
      {/* MOBILE SEARCH */}
      {isSearchOpen && (
        <div className="md:hidden px-4 py-3 bg-white border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="w-full h-10.5 pl-10 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute right-3 top-3 text-gray-500"
            >
              <FiX />
            </button>
          </div>
        </div>
      )}

      {/* CATEGORY NAVBAR */}
      <nav className="hidden md:flex w-full max-w-378 h-12.5 mx-auto items-center justify-between px-6 md:px-21">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`relative text-sm font-medium uppercase transition-colors px-2  ${
              pathname === item.href
                ? "text-pink-600 font-semibold "
                : "text-gray-700 hover:text-pink-500"
            }`}
          >
            {item.name}
            {pathname === item.href && (
              <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-pink-500"></span>
            )}
          </Link>
        ))}
      </nav>

      {/* Mobile Categories Scroll */}
      <div className="md:hidden w-full overflow-x-auto py-2">
        <div className="flex gap-4 px-4 min-w-max">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 text-sm whitespace-nowrap rounded-lg transition-colors ${
                pathname === item.href
                  ? "text-pink-600 bg-pink-50 font-medium "
                  : "text-gray-700 hover:bg-gray-100 hover:text-pink-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* MOBILE SIDE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden">
          <div className="w-70 bg-white h-full p-5 ml-auto">
            <div className="flex justify-between items-center mb-6">
              <Image src="/images/logo.jpg" alt="logo" width={120} height={50} />
              <FiX className="text-2xl cursor-pointer" onClick={() => setIsMenuOpen(false)} />
            </div>
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-3 px-3 rounded-md font-semibold ${
                    item.highlight ? "bg-pink-500 text-white" : "text-gray-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/register"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 bg-red-950 text-white py-3 px-3 rounded-md text-center font-semibold"
              >
                Talk to Designers
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}