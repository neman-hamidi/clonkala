import React from "react";

const categories = [
  { name: "موبایل", icon: "smartphone", color: "blue" },
  { name: "هدفون", icon: "headphones", color: "purple" },
  { name: "پوشاک", icon: "checkroom", color: "green" },
  { name: "خانه", icon: "chair", color: "orange" },
  { name: "اسباب‌بازی", icon: "toys", color: "red" },
  { name: "سوپرمارکت", icon: "local_mall", color: "teal" },
];

export default function CategorySection() {
  return (
    <section className="space-y-10">
      <h3 className="text-3xl font-black text-center text-gray-800 dark:text-white relative inline-block w-full">
        دسته‌بندی‌های محبوب
      </h3>
      <div className="flex flex-wrap justify-center gap-8 md:gap-14">
        {categories.map((cat, index) => (
          <a
            key={index}
            className="group flex flex-col items-center gap-5 w-24 md:w-32"
            href="#"
          >
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-[2rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-card group-hover:shadow-cardHover group-hover:scale-110 flex items-center justify-center text-gray-700 dark:text-gray-300 transition-all duration-500 ease-out overflow-hidden relative">
              {/* استفاده از استایل داینامیک برای رنگ‌ها */}
              <div
                className={`absolute inset-0 bg-${cat.color}-50 dark:bg-${cat.color}-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
              <span
                className={`material-symbols-outlined text-4xl md:text-5xl relative z-10 group-hover:text-${cat.color}-600 dark:group-hover:text-${cat.color}-400 transition-colors`}
              >
                {cat.icon}
              </span>
            </div>
            <span
              className={`text-base font-bold text-center text-gray-700 dark:text-gray-300 group-hover:text-${cat.color}-600 dark:group-hover:text-${cat.color}-400 transition-colors`}
            >
              {cat.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
