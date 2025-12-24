import React from "react";

const navItems = [
  {
    icon: "local_fire_department",
    text: "پرفروش‌ترین‌ها",
    color: "text-orange-500",
  },
  { icon: "percent", text: "تخفیف‌ها", color: "text-green-500" },
  { icon: "smartphone", text: "دیجیتال", color: "" },
  { icon: "checkroom", text: "مد و پوشاک", color: "" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass-effect transition-all duration-300">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between px-4 lg:px-8 py-4 gap-4 lg:gap-8">
          {/* لوگو و سرچ */}
          <div className="flex items-center gap-6 lg:gap-10 flex-1">
            <a className="flex items-center gap-3 group shrink-0" href="#">
              <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-glow transform group-hover:rotate-6 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">
                  shopping_bag
                </span>
              </div>
              <h1 className="text-3xl font-black tracking-tighter hidden lg:block text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                دیجی‌<span className="text-primary">کلون</span>
              </h1>
            </a>
            <div className="flex-1 max-w-3xl hidden md:block">
              <div className="relative group">
                <input
                  className="w-full h-12 bg-gray-100/80 dark:bg-white/5 border-0 focus:ring-2 focus:ring-primary/20 rounded-2xl px-6 pr-14 text-base transition-all duration-300 dark:text-white placeholder:text-gray-400 font-medium group-hover:bg-white dark:group-hover:bg-white/10 group-hover:shadow-lg group-hover:shadow-gray-200/50 dark:group-hover:shadow-none"
                  placeholder="جستجو در میان هزاران کالا..."
                  type="text"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-2xl">
                  search
                </span>
              </div>
            </div>
          </div>
          {/* دکمه‌ها */}
          <div className="flex items-center gap-3 lg:gap-4">
            <button className="flex items-center gap-2 px-5 py-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 active:scale-95 font-bold border border-transparent hover:border-gray-200 dark:hover:border-white/10">
              <span className="material-symbols-outlined">login</span>
              <span className="text-sm hidden sm:block">ورود | ثبت‌نام</span>
            </button>
            <div className="h-8 w-[1px] bg-gray-200 dark:bg-white/10 hidden sm:block"></div>
            <button className="relative p-3 rounded-xl hover:bg-primary/10 transition-all duration-300 group active:scale-90">
              <span className="material-symbols-outlined text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors text-2xl">
                shopping_cart
              </span>
              <span className="absolute top-2 left-2 size-3 bg-primary rounded-full border-2 border-white dark:border-[#121212] animate-bounce"></span>
            </button>
          </div>
        </div>

        {/* منوی پایین هدر */}
        <nav className="hidden md:flex px-4 lg:px-8 pb-2 gap-8 lg:gap-10 overflow-x-auto hide-scrollbar text-sm lg:text-base">
          <div className="group relative py-3 cursor-pointer">
            <span className="flex items-center gap-2 font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors whitespace-nowrap">
              <span className="material-symbols-outlined">menu</span>
              دسته‌بندی‌ها
            </span>
            <div className="absolute bottom-0 right-0 w-0 h-1 bg-primary rounded-t-full group-hover:w-full transition-all duration-300"></div>
          </div>
          <div className="h-5 w-[1px] bg-gray-300 dark:bg-white/20 my-auto"></div>

          {/* استفاده از آرایه برای نمایش منوها */}
          {navItems.map((item, index) => (
            <a
              key={index}
              className="flex items-center gap-2 font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors whitespace-nowrap py-3 hover:-translate-y-0.5 transform duration-300"
              href="#"
            >
              <span
                className={`material-symbols-outlined text-[20px] ${item.color}`}
              >
                {item.icon}
              </span>
              {item.text}
            </a>
          ))}

          <div className="flex-1"></div>
          <a
            className="text-xs lg:text-sm font-medium text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 whitespace-nowrap flex items-center gap-2 py-3 px-4 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
            href="#"
          >
            تهران، ولیعصر
            <span className="material-symbols-outlined text-[20px] text-primary">
              location_on
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
