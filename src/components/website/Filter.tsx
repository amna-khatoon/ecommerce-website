"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Filter as FilterIcon,
  X,
} from "lucide-react";

// Options
const categories = ["Saree", "Kurti", "Lehenga", "Co-ord Set"];
const colors = ["Red", "Blue", "Green", "Pink", "Black"];
const sizes = ["XS", "S", "M", "L", "XL"];
const discounts = [
  "10% and above",
  "20% and above",
  "30% and above",
  "40% and above",
  "50% and above",
  "60% and above",
  "70% and above",
  "80% and above",
  "90% and above",
];

type SelectedFilters = {
  category: string[];
  color: string[];
  size: string[];
  discount: string[];
};

const Filter: React.FC = () => {
  const [openSections, setOpenSections] = useState<string[]>([
    "category",
    "color",
    "size",
    "price",
    "discount",
  ]);

  const [price, setPrice] = useState<number>(5000);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    category: [],
    color: [],
    size: [],
    discount: [],
  });

  const toggle = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section]
    );
  };

  const handleCheckboxChange = (
    section: keyof SelectedFilters,
    value: string
  ) => {
    setSelectedFilters((prev) => {
      const current = prev[section];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [section]: updated };
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      category: [],
      color: [],
      size: [],
      discount: [],
    });
    setPrice(5000);
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const activeFiltersCount = Object.values(selectedFilters).flat().length;

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 bg-rose-500 text-white px-4 py-2 rounded-full shadow-lg"
        >
          <FilterIcon className="w-5 h-5" />
          Filters
        </button>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <section
        className={`
          /* Mobile: Fixed overlay rahega */
          fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}

          /* Desktop: Sticky behavior */
          md:translate-x-0 
          md:sticky 
          md:top-24 
          md:w-72 
          md:h-[calc(100vh-120px)] 
          md:overflow-y-auto 
          md:z-30
          
          /* Styling */
          p-6 space-y-6 bg-white border border-gray-100 rounded-2xl shadow-sm
          scrollbar-thin scrollbar-thumb-gray-200
        `}>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <FilterIcon className="w-5 h-5 text-rose-500" />
            <h2 className="text-xl font-semibold text-rose-500">Filters</h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={clearAllFilters}
              className="text-white px-6 bg-red-900 hover:bg-red-700 rounded-md py-2 text-sm"
            >
              Clear All
            </button>

            <button
              onClick={() => setMobileOpen(false)}
              className="md:hidden w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2">
            {Object.entries(selectedFilters).map(([key, values]) =>
              values.map((value) => (
                <span
                  key={`${key}-${value}`}
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full flex items-center gap-1 border"
                >
                  {value}
                  <button
                    onClick={() =>
                      handleCheckboxChange(
                        key as keyof SelectedFilters,
                        value
                      )
                    }
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))
            )}
          </div>
        )}

        {/* Reusable Section Component Inline */}

        {["category", "color", "size", "discount"].map((section) => (
          <div key={section} className="pb-5 border-b border-gray-200">
            <button
              onClick={() => toggle(section)}
              className="flex justify-between items-center w-full font-medium"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {openSections.includes(section) ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {openSections.includes(section) && (
              <div className="mt-4 space-y-3">
                {(section === "category"
                  ? categories
                  : section === "color"
                  ? colors
                  : section === "size"
                  ? sizes
                  : discounts
                ).map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFilters[
                        section as keyof SelectedFilters
                      ].includes(item)}
                      onChange={() =>
                        handleCheckboxChange(
                          section as keyof SelectedFilters,
                          item
                        )
                      }
                      className="w-4 h-4 accent-rose-500"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Price */}
        <div>
          <button
            onClick={() => toggle("price")}
            className="flex justify-between items-center w-full font-medium"
          >
            Price
            {openSections.includes("price") ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>

          {openSections.includes("price") && (
            <div className="mt-6 space-y-4">
              <input
                type="range"
                min={500}
                max={10000}
                step={500}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-rose-500"
              />

              <div className="flex justify-between text-sm text-gray-600">
                <span>₹500</span>
                <span>₹10,000</span>
              </div>

              <div className="p-4 bg-rose-50 rounded-xl text-center">
                <div className="text-sm text-gray-500">Selected Price</div>
                <div className="text-xl font-semibold">
                  {formatPrice(price)}
                </div>
              </div>

              <button className="w-full py-2.5 bg-rose-500 text-white rounded-xl hover:bg-rose-600">
                Apply Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Filter;
