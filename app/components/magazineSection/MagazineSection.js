import React from "react";

const articles = [
  {
    title: "راهنمای خرید بهترین گوشی‌های ۲۰۲۴",
    desc: "در این مقاله به بررسی جدیدترین و بهترین گوشی‌های هوشمند بازار می‌پردازیم تا انتخابی هوشمندانه داشته باشید.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAuIhGAC7AnPYM4Zt7ROttOE6dUY7KM0tecLbOM8hNNcUfgzRPajZpWJacoI1xY0pZFUdCJu6Uh1cS7if27flQOUnMhx7AY8JSl1Apyo0QRU3JPWlciP8MKE2o-nT8HY4h4PCzPFYA62GsOBXXi0px6ZG-F1YZYX7eBbWaijq0-fI1dMvn6Xhfwb5teCW9Y-_dW1yOMvZBIPX7s6O0Akg-fFsneeS8VIMeN9xfUBz1ze_tIjzVKw9jbThWh7uBjChcbkzO2wnrykZw",
  },
  {
    title: "نقد و بررسی هدفون‌های نویز کنسلینگ",
    desc: "اگر به دنبال سکوت و کیفیت صدای بی‌نظیر هستید، این مطلب را از دست ندهید. مقایسه سونی و بوز.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMhdsOJI-M94LZXqPpUuueCj_KY4VEIpicp6N58bbvh59Eim-u5BIeD63bfw8igdQTEkm6y--YAbHmto4bkXp7bVFNyjIKIhNMDB7_ZfkqN71XvV3lxQMLfdsjobSiaBg2RoL3uc_A0xdQnGszldaHG02_GWF5-uqH1xj8OCPmWl1YNLun4dc4WEh_BHZSxNSbDLTSpLNYZbRD8m-0squIgPnCsPLSFcycxEzWolzZhEm7VuwPdNYR-F6Eu6cYHmch33Jsff9D1Sw",
  },
  {
    title: "ترندهای مد و پوشاک بهار امسال",
    desc: "با جدیدترین استایل‌ها و رنگ‌های سال آشنا شوید و کمد لباس خود را بروز کنید.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_4G_nKC994tcwVs84CDNtBKRQopIhmTuBkXNUn6EXuP4zXm3dI_7KcqZPlS1mjZ12-drJNo6QEi22ZSazA0qW3nF_Me0SboxYHJfzAoKGmSBis40Wkr4XtB6xxsUkWC5IY4XA_VPPUn0daZFro2Jj9LrmVZwIKhaTCi_FlhbGZIjQI1HpDoDub5JWgDoRyZF-koYy1lihmiEWPABS6kzefMpPuH0_5cPgRk5GRS8xJcrJHqfdPIghE6dCZVzO4OR4HQmBgIWL1-c",
  },
];

export default function MagazineSection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-10 px-2">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
          مجله دیجی‌کلون
        </h2>
        <a
          className="text-[#ef3e5b] text-sm font-bold flex items-center gap-1"
          href="#"
        >
          مشاهده همه مطالب
          <span className="material-symbols-outlined text-sm rotate-180">
            arrow_right_alt
          </span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <article
            key={index}
            className="group cursor-pointer flex flex-col gap-6"
          >
            <div className="rounded-[2rem] overflow-hidden aspect-video bg-gray-200 dark:bg-gray-800 relative shadow-md group-hover:shadow-xl transition-shadow duration-500">
              {/* تصویر اصلی با hover zoom */}
              <img
                src={article.image}
                alt="توضیح تصویر"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-base text-gray-500 leading-relaxed line-clamp-2">
                {article.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
