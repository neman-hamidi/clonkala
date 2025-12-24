import React from "react";

const products = [
  {
    id: 1,
    name: "کفش ورزشی اولترابوست",
    price: "۴,۸۰۰,۰۰۰",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAuIhGAC7AnPYM4Zt7ROttOE6dUY7KM0tecLbOM8hNNcUfgzRPajZpWJacoI1xY0pZFUdCJu6Uh1cS7if27flQOUnMhx7AY8JSl1Apyo0QRU3JPWlciP8MKE2o-nT8HY4h4PCzPFYA62GsOBXXi0px6ZG-F1YZYX7eBbWaijq0-fI1dMvn6Xhfwb5teCW9Y-_dW1yOMvZBIPX7s6O0Akg-fFsneeS8VIMeN9xfUBz1ze_tIjzVKw9jbThWh7uBjChcbkzO2wnrykZw",
  },
  {
    id: 2,
    name: "کوله پشتی هرشل",
    price: "۲,۶۰۰,۰۰۰",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9HW9OgyRqWUP2Rb-Cge_oy4uUyfPMIRm4YojB_dqlB3SDQhfbIl5Xy11cKKpji3GqgdAqnBAaHaywG4yb9lLKJThXeHXohnwRzx_rv522Gn7tt30kqvBQoKEo6GmMVbwmXd_3Ug-c2up998BaxAwMUXrXnhhMO3dW1J1Qoig41QN8vqbntJD9-hfXlzZKFAqM_TuG_G6z3fE5dtiZhWhH1G-3mQrzMFnkzK7QkaC8AJwogBH-JUrZWFDp_rwjHK4hQblalIJouGA",
  },
  {
    id: 3,
    name: "کیبورد مکانیکی کی‌کرون K2",
    price: "۳,۴۰۰,۰۰۰",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_4G_nKC994tcwVs84CDNtBKRQopIhmTuBkXNUn6EXuP4zXm3dI_7KcqZPlS1mjZ12-drJNo6QEi22ZSazA0qW3nF_Me0SboxYHJfzAoKGmSBis40Wkr4XtB6xxsUkWC5IY4XA_VPPUn0daZFro2Jj9LrmVZwIKhaTCi_FlhbGZIjQI1HpDoDub5JWgDoRyZF-koYy1lihmiEWPABS6kzefMpPuH0_5cPgRk5GRS8xJcrJHqfdPIghE6dCZVzO4OR4HQmBgIWL1-c",
  },
  {
    id: 4,
    name: "قهوه‌ساز نسپرسو ورتو",
    price: "۷,۹۰۰,۰۰۰",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMnIrpEXNFkpAxsgcfT1NYfOqd9Dui8LKlOwo8EoVg-lus1sCJfARpsxSLBlACtojhHekAe2qxZ1cC59uS0XShZjTTTvUO4O4knkcM1fovtdVIXLKRUgTFsuFhDtuTRLNOJBdVMJFRh6YdbPP8GOl8vYu7UGjuiiwYD7NxJpojcRVjkcjvyB56-oRlNw78gUL34AeYij5VastRkyhXbDqgaQ01t5hWOx7_AAooKw5AXGsGC8Jggs07gBjxF0o7COL1GkbeFvPE-EI",
  },
  {
    id: 5,
    name: "صندلی طرح ایمز",
    price: "۱۸,۰۰۰,۰۰۰",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDocY2xpUVC55W9if6mbMaTI5Fvkp1sStJifSXux9dXnRup6hIPOm804xyg1tNc5J8DtVH9LqKMDijidSmakNp6SUcRA8lDZkao2JFhdRFns5PyghWLPPpEoifbskOmXMvGEHVcivFLWxuiP8WRB7FL_KGHcknoZvEqZMCDkK1H-Yr8YDlRv4ZniHywHK6EAxmvctDWZVYCTMWaY5rMOYfKO4w2xnTUtudvvnnpNtQNUM2vrZxYQ0lXHY1A2hlYwgDPa3Y1s4qQ-_4",
  },
  {
    id: 6,
    name: "مچ‌بند هوشمند فیت‌بیت Charge 5",
    price: "۵,۹۰۰,۰۰۰",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbHR54e9vkJTB0ijBTXH2iGPueU03-YHii9VGcvWJqrfw9Mguk5a_ddsoWPqL2AU3DC48j99OPko_kfe8WPxaN-9gYuS6U1RS5SopekOM1rADAz-hvm4d9zxT92n38nGDhJD2vB4xT9hMXv6vmcctdTgW_0V0kkSc5RlLmYyG1RndcculOlLZiHhjxGYPT6nFIThTXLsNF42B1n6JC_S6LTEUGfrrfbTqAzpAAF7NJL3eqDgrOkPwTZywD2pQbUz4oCkgP4nOsXt0",
  },
];

export default function SuggestedProducts() {
  return (
    <section className="bg-white dark:bg-[#18181b] rounded-[3rem] p-8 md:p-12 shadow-card border border-gray-100 dark:border-white/5">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-500 shadow-sm animate-pulse-slow">
            <span className="material-symbols-outlined text-3xl">
              trending_up
            </span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
              پرفروش‌ترین محصولات
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              انتخاب خریداران حرفه‌ای
            </p>
          </div>
        </div>
        <a
          className="text-[#ef3e5b] text-base font-bold hover:bg-primary/5 px-6 py-3 rounded-2xl transition-all flex items-center gap-2 group"
          href="#"
        >
          مشاهده همه
          <span className="material-symbols-outlined text-lg rotate-180 transition-transform group-hover:-translate-x-1">
            arrow_right_alt
          </span>
        </a>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="aspect-square bg-gray-50 dark:bg-gray-800 rounded-3xl mb-5 overflow-hidden relative shadow-sm group-hover:shadow-xl transition-all duration-500">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url('${product.image}')` }}
              ></div>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <div className="bg-black text-white dark:bg-white dark:text-black rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl block">
                    add_shopping_cart
                  </span>
                </div>
              </div>
            </div>
            <h3 className="text-sm md:text-base font-bold text-gray-700 dark:text-gray-200 line-clamp-2 h-12 leading-relaxed group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <div className="mt-3 font-black text-gray-900 dark:text-white text-lg">
              {product.price}{" "}
              <span className="text-xs font-normal text-gray-500">تومان</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
