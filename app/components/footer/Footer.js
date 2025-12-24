import React from "react";

const footerLinks = {
  customerServices: [
    "پاسخ به پرسش‌های متداول",
    "رویه‌های بازگرداندن کالا",
    "شرایط استفاده",
    "حریم خصوصی",
  ],
  buyingGuide: ["نحوه ثبت سفارش", "رویه ارسال سفارش", "شیوه‌های پرداخت"],
  withUs: ["اتاق خبر", "فروش در دیجی‌کلون", "فرصت‌های شغلی", "تماس با ما"],
};
const lang = [
  { z: "IG", color: "red-400" },
  { z: "TW", color: "blue-400" },
  { z: "LN", color: "yellow-400" },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#18181b] border-t border-gray-100 dark:border-white/5 pt-20 pb-10 mt-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* بخش پشتیبانی و دانلود */}
        <div className="bg-gray-50 dark:bg-white/5 rounded-[2.5rem] p-10 lg:p-14 mb-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-sm">
          <div className="flex items-center gap-8">
            <div className="bg-white dark:bg-white/10 p-6 rounded-3xl shadow-sm ring-1 ring-gray-100 dark:ring-white/5">
              <span className="material-symbols-outlined text-5xl text-primary">
                headset_mic
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                ۷ روز هفته، ۲۴ ساعته
              </p>
              <p className="text-gray-500 text-lg">
                پاسخگوی شما هستیم:{" "}
                <span className="font-display font-black text-gray-800 dark:text-gray-200 tracking-wider">
                  ۶۱۹۳۰۰۰۰ - ۰۲۱
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 justify-center">
            {["android", "ios"].map((os) => (
              <button
                key={os}
                className="flex items-center gap-4 px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span className="material-symbols-outlined text-3xl">{os}</span>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase opacity-70 tracking-widest">
                    Download on
                  </span>
                  <span className="text-base font-bold">
                    {os === "android" ? "Google Play" : "App Store"}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* لینک‌ها و توضیحات */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-20 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-4xl font-black tracking-tighter text-black dark:text-white">
              دیجی‌<span className="text-primary">کلون</span>
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-9 text-justify max-w-md font-light">
              بزرگترین فروشگاه اینترنتی منطقه. با اطمینان از اصل بودن کالاها،
              بهترین برندها را در زمینه کالای دیجیتال، مد و پوشاک و لوازم خانه
              بخرید. دیجی‌کلون، نماد اعتماد و نوآوری در خرید آنلاین.
            </p>
            <div className="flex gap-4 pt-2">
              {lang.map((social, idx) => (
                <a
                  key={idx}
                  className={`w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  href="#"
                >
                  <span className="font-bold text-sm">{social.z}</span>
                </a>
              ))}
            </div>
          </div>

          <FooterList
            title="خدمات مشتریان"
            items={footerLinks.customerServices}
          />
          <FooterList title="راهنمای خرید" items={footerLinks.buyingGuide} />
          <FooterList title="با دیجی‌کلون" items={footerLinks.withUs} />
        </div>

        {/* کپی‌رایت و نمادها */}
        <div className="border-t border-gray-100 dark:border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-gray-400 text-center md:text-right font-medium">
            کلیه حقوق این سایت متعلق به دیجی‌کلون می‌باشد. © ۱۴۰۳
          </p>
        </div>
      </div>
    </footer>
  );
}

// کامپوننت کمکی برای لیست‌ها
function FooterList({ title, items }) {
  return (
    <div className="space-y-6">
      <h4 className="font-bold text-gray-900 dark:text-white text-xl">
        {title}
      </h4>
      <ul className="space-y-5 text-sm text-gray-500 dark:text-gray-400">
        {items.map((item, index) => (
          <li key={index}>
            <a
              className="hover:text-[#ef3e5b] hover:translate-x-1 inline-block transition-all duration-300"
              href="#"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
