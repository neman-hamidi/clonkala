import React from "react";

const brands = [
  { name: "NIKE", style: "italic hover:text-black dark:hover:text-white" },
  { name: "SAMSUNG", style: "font-bold hover:text-[#1428a0]" },
  {
    name: "adidas",
    style:
      "font-semibold tracking-tighter hover:text-black dark:hover:text-white",
  },
  {
    name: "SONY",
    style: "font-serif font-bold hover:text-black dark:hover:text-white",
  },
  { name: "L'OREAL", style: "font-mono font-bold hover:text-[#b48d61]" },
  { name: "XIAOMI", style: "font-black hover:text-[#ff6900]" },
];

export default function BrandSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-white/5 dark:to-transparent rounded-[3rem] border border-gray-100 dark:border-white/5">
      <h3 className="text-center text-2xl font-black text-gray-400 dark:text-gray-500 mb-12">
        محبوب‌ترین برندهای بازار
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500 px-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`text-4xl text-gray-300 transition-all scale-95 hover:scale-110 cursor-pointer duration-300 ${brand.style}`}
          >
            {brand.name}
          </div>
        ))}
      </div>
    </section>
  );
}
