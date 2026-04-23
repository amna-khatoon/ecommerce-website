"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag, ChevronRight, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { FaQuestionCircle } from "react-icons/fa";
import ShopPage from "@/components/navbar/ShopPage";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      if (stored) {
        try {
          setCart(JSON.parse(stored));
        } catch (error) {
          console.error("Cart parse error:", error);
        }
      }
    }
  }, []);

  // --- FIXED FUNCTION: Using item.id to match the onClick call ---
  const updateQuantity = (id: string, delta: number) => {
    const updated = cart.map((item) => {
      // Agar aap cartId use kar rahe hain to yahan bhi cartId likhein
      if (item.id === id) { 
        return { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) };
      }
      return item;
    });
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    // Navbar update karne ke liye event
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (id: string) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const subtotal = cart.reduce((acc, item) => acc + (parseFloat(item.price.toString().replace(/[^0-9.]/g, '')) * (item.quantity || 1)), 0);
  const shipping = subtotal > 5000 || subtotal === 0 ? 0 : 150;
  const total = subtotal + shipping;

  return (
    <section className="min-h-screen bg-[#FBFBFC] py-10 md:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <h1 className="text-center mb-10 text-red-700 font-bold tracking-[0.2em] uppercase text-lg md:text-xl">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[3rem] shadow-sm border border-gray-100">
            <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="text-gray-300" size={40} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Your bag is empty</h2>
            <Link href="/" className="inline-block bg-black text-white px-10 py-4 rounded-2xl font-bold mt-8 hover:bg-pink-600 transition-all">
              Discover Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT: Cart Items */}
            <div className="lg:col-span-8 space-y-6">
              {cart.map((item, index) => (
                <div key={item.cartId || `${item.id}-${index}`} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-50 flex flex-col md:flex-row items-center gap-6 group">
                  
                  {/* IMAGE */}
                  <div className={`relative w-full md:w-40 h-40 ${item.bg || 'bg-gray-50'} rounded-4xl overflow-hidden shrink-0`}>
                    <Image src={item.image} alt={item.title} fill className="object-contain p-4 group-hover:scale-105 transition duration-500" />
                  </div>

                  {/* CONTENT SECTION (Aapka manga hua design) */}
                  <div className="flex-1 w-full space-y-6">
                    
                    {/* TITLE & PRICE */}
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      <p className="text-xl font-black text-gray-900">{item.price}</p>
                    </div>

                    {/* QUANTITY & ACTIONS */}
                    <div className="flex flex-row items-center justify-between gap-4">
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center bg-gray-50 p-1 rounded-xl border border-gray-100">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)} 
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm hover:text-pink-600 transition"
                        >
                          <Minus size={14}/>
                        </button>
                        <span className="w-10 text-center font-bold text-gray-800">{item.quantity || 1}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)} 
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm hover:text-pink-600 transition"
                        >
                          <Plus size={14}/>
                        </button>
                      </div>

                      {/* Action Links */}
                      <div className="items-center gap-4 md:gap-8">
                        <button className="text-sm font-medium text-gray-500 hover:text-pink-600 transition-colors mb-6">
                          Save for later
                        </button>
                        
                        <button 
                          onClick={() => removeItem(item.id)} 
                          className="flex items-center gap-1.5 text-sm font-medium text-rose-600 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                          <span className="hidden md:inline text-rose-600">Remove</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>

         <div className="lg:col-span-4 sticky top-32">
  <div className="bg-pink-50 p-8 rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100">

    <h2 className="text-lg font-semibold text-gray-700 mb-6 tracking-wide">
      PRICE DETAILS
    </h2>

    <div className="space-y-5">

      <div className="flex justify-between items-center text-sm font-medium text-gray-600 pb-4 border-b border-gray-200">
        <span>Subtotal</span>
        <span className="text-gray-900 font-semibold">
          ₹{subtotal.toLocaleString()}
        </span>
      </div>

      <div className="flex justify-between items-center text-sm font-medium text-gray-600 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-1">
          <span>Shipping estimate</span>
          <FaQuestionCircle className="text-gray-400 text-xs cursor-pointer" />
        </div>
        <span className="text-gray-900 font-semibold">
          ₹{(subtotal * 0.001).toFixed(2)}
        </span>
      </div>

      <div className="flex justify-between items-center text-sm font-medium text-gray-600">
        <div className="flex items-center gap-1">
          <span>Tax estimate</span>
          <FaQuestionCircle className="text-gray-400 text-xs cursor-pointer" />
        </div>
        <span className="text-gray-900 font-semibold">
          ₹{(subtotal * 0.0016).toFixed(2)}
        </span>
      </div>

      <div className="border-t border-gray-200 mt-2"></div>

      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-800">
          Order total
        </span>
        <span className="text-xl font-semibold text-gray-800">
          ₹{total.toLocaleString()}
        </span>
      </div>
    </div>

    {/* Coupon Section */}
   
     <div className="flex items-center py-4">
  <input
    type="text"
    placeholder="Enter Coupon Code"
    className="flex-1 bg-white border border-gray-200 rounded-sm px-5 py-2 text-sm 
    focus:bg-white focus:border-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-50 transition-all"
  />
  
  <button className="bg-red-900 text-white px-5 py-2 rounded-sm text-sm font-bold hover:bg-red-600 transition-colors">
    Apply
  </button>
</div>
    <button className=" w-full bg-red-900 text-white py-2 rounded-sm font-bold text-lg hover:bg-pink-600 transition-all shadow-lg flex items-center justify-center gap-2 group">
      Check-out
    </button>

  </div>
</div>
          </div>

        )}
        <ShopPage/>
      </div>


      
    </section>
  );
}