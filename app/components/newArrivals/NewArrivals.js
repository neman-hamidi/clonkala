import React from "react";

const newItems = [
  {
    name: "گوشی موبایل سامسونگ S24",
    icon: "smartphone",
    badge: "موجودی محدود",
    color: "orange",
  },
  { name: "لپ‌تاپ ایسوس زن‌بوک", icon: "laptop", badge: "جدید", color: "blue" },
  {
    name: "هدفون بیتس استودیو پرو",
    icon: "headphones",
    badge: "ارسال فوری",
    color: "green",
  },
  {
    name: "کنسول بازی ایکس‌باکس",
    icon: "videogame_asset",
    badge: "تخفیف ویژه",
    color: "primary",
  }, // primary is a custom color in config
  {
    name: "تلویزیون هوشمند ال‌جی",
    icon: "tv",
    badge: "گارانتی اصلی",
    color: "gray",
  },
];

export default function NewArrivals() {
  return (
    <section>
      <div className="flex items-center justify-between mb-10 px-2">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-500 shadow-sm">
            <span className="material-symbols-outlined text-3xl">
              new_releases
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
            تازه‌ترین محصولات
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {newItems.map((item, index) => {
          // مدیریت کلاس‌های رنگی برای بج‌ها
          // نکته: اگر رنگ primary بود باید دستی هندل بشه چون توی tailwind standard colors نیست مگر اینکه extend کرده باشیم (که کردیم)
          const badgeBg =
            item.color === "primary"
              ? "bg-primary/10"
              : `bg-${item.color}-100 dark:bg-${item.color}-900/30`;
          const badgeText =
            item.color === "primary"
              ? "text-primary"
              : `text-${item.color}-600`;

          return (
            <div
              key={index}
              className={`group cursor-pointer bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-[2rem] p-6 hover:shadow-softHover hover:-translate-y-2 transition-all duration-500 ${
                item.icon === "tv" ? "hidden lg:block" : ""
              }`}
            >
              <div className="aspect-square rounded-3xl mb-5 bg-gray-50 dark:bg-gray-700/50 overflow-hidden relative">
                <div className="w-full h-full flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-6xl">
                    {item.icon}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              <div className="flex justify-between items-center">
                <span
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg ${badgeBg} ${badgeText}`}
                >
                  {item.badge}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
