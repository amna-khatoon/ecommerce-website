"use client";

import ShopPage from "@/components/navbar/ShopPage";
import Filter from "@/components/website/Filter";
import React from "react";

const Page = () => {
  return (
    <div className="my-10 px-4 lg:px-20 min-h-screen bg-linear-to-b from-rose-50/20 to-white">
      
      <section className="flex flex-col lg:flex-row gap-8 items-start relative">
        
       
        <aside className="w-full lg:w-80 lg:sticky lg:top-24 self-start">
          <Filter />
        </aside>

       
        <main className="flex-1 w-full mt-6 lg:mt-0">
          <ShopPage />
        </main>
        
      </section>
    </div>
  );
};

export default Page;