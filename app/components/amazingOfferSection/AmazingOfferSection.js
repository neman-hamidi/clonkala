import React from "react";

const products = [
  {
    id: 1,
    name: "هدفون سونی مدل WH-1000XM5",
    price: "۱۱,۶۰۰,۰۰۰",
    oldPrice: "۱۴,۵۰۰,۰۰۰",
    discount: "۲۰٪",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMhdsOJI-M94LZXqPpUuueCj_KY4VEIpicp6N58bbvh59Eim-u5BIeD63bfw8igdQTEkm6y--YAbHmto4bkXp7bVFNyjIKIhNMDB7_ZfkqN71XvV3lxQMLfdsjobSiaBg2RoL3uc_A0xdQnGszldaHG02_GWF5-uqH1xj8OCPmWl1YNLun4dc4WEh_BHZSxNSbDLTSpLNYZbRD8m-0squIgPnCsPLSFcycxEzWolzZhEm7VuwPdNYR-F6Eu6cYHmch33Jsff9D1Sw",
  },
  {
    id: 2,
    name: "اپل واچ سری ۹ جی‌پی‌اس",
    price: "۱۳,۶۰۰,۰۰۰",
    oldPrice: "۱۶,۰۰۰,۰۰۰",
    discount: "۱۵٪",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvvwOMQ37w9wc596D_tmAxp3KX4IjNRPt1c1PhIKmR5yWxvNBjUktwJSo_ROiTOPdQhBPzqk1cx7M5Nf9udbY-1f8OiZ121PA9Ab3qjDd_g4_JR9zecNuoS0xKSoPSQ72PZEwro64M2SUbHw2ICHApVBbpdX07CpqAcKsgDwQ397trF8mB62GmSVGeK9T-iWIXjvvHZXqbmvf2JyhMml6IWy_xS1dLut-fNPxUOnH96Qk5ACCxH4lH8EOGca1qQ2-2dzgadbo65bA",
  },
  {
    id: 3,
    name: "کفش پیاده‌روی نایکی مدل Air Max",
    price: "۳,۹۰۰,۰۰۰",
    oldPrice: "۶,۵۰۰,۰۰۰",
    discount: "۴۰٪",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBadpbxJxgqEczuHs1rR-d6LYDk3NVIOkJANgz5kuwIsQGIib582SMS_6sT8rof4moXlBXVeH-fpCaCDquKbyfP3BBaJufKCikZCap6C_WguJkjfHwcBmLF615AS6eVDtZntkyW0ByHwgq-EoRt231giPwz-BbtVuya4TAaEi8_F24OG5bNDL6B1mJ7H6Du3p2I_L-BZAu2Omw1Ch08TN7oC6ElPwyQXJ-lxuFxClNFV7CXWisBKWPtFgM4kEjGKnzfKH_1vY7wKTg",
  },
  {
    id: 4,
    name: "دوربین عکاسی فوجی‌فیلم Instax",
    price: "۳,۱۵۰,۰۰۰",
    oldPrice: "۳,۵۰۰,۰۰۰",
    discount: "۱۰٪",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkber37Hwk3Dh0Fs3UXqORvqMLE92XKlMT43bYuMafAiwvbEjIDH4KVBm-PpLBnJ5Ryri3qJBWYXyk-dQgfp3WbrcZye_M4Bp45YSebTnMUAy6dY5ktFq_EZzcyK-1qNsoRqmtdpXCdFMBvEMgY4p4QGYUWHXx9m_zHZHOzgdCCvcvZ-r1loMwH0G1-dcGSM-p5gIqBndhzpoEs3M0sp8o2jNv3gsFLCTXIJGVE2FR1wHeV8sKpNX1kUTj1Z7yobKglJMrtQer698",
  },
  {
    id: 5,
    name: "دسته بازی پلی‌استیشن DualSense",
    price: "۲,۱۰۰,۰۰۰",
    oldPrice: "۲,۸۰۰,۰۰۰",
    discount: "۲۵٪",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAawO6bkPOSglibQkRaIgcjdJorTipClp0nkOo6woN3xhWPu1dRvBo596uk-8MebEmHijz3g_eyxwDr1RCshTzet6XDIwg9kJ23kaou3ysvyPuIuxariaiO_qt-KRdVb7R7vqxd2HzG4nrts95R38f14Ts608tjjiuaT6hBQhsVnCKiiwQB9I7Zl9KoSO5N6TIU5m0Qkz-RT_SNohAE_iwKsU8RgRR3ZapFZ1TQhhfFQeewiUBIMOlpV34BrTgUSI7rBFQzVIEWWgw",
  },
];

export default function AmazingOfferSection() {
  return (
    <section className="bg-gradient-to-br from-[#ef3e5b] via-[#e11538] to-[#9c0f27] rounded-[2.5rem] p-6 md:p-10 flex flex-col lg:flex-row gap-10 items-center shadow-2xl shadow-primary/30 relative overflow-hidden group">
      {/* بک‌گراند افکت‌ها */}
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:bg-white/15 transition-colors duration-1000"></div>
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>

      {/* ستون سمت راست: توضیحات و تایمر */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-right gap-8 min-w-[260px] shrink-0 z-10">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-inner border border-white/20 animate-float">
            <span className="material-symbols-outlined text-white text-4xl">
              percent
            </span>
          </div>
          <h2 className="text-white text-4xl font-black tracking-tighter drop-shadow-md leading-tight">
            پیشنهادات
            <br />
            شگفت‌انگیز
          </h2>
        </div>

        {/* تایمر (استاتیک) */}
        <div className="flex gap-3 font-display text-primary" dir="ltr">
          <TimerBox num="05" unit="Hrs" />
          <span className="text-white/80 font-bold text-3xl mt-1">:</span>
          <TimerBox num="42" unit="Min" />
          <span className="text-white/80 font-bold text-3xl mt-1">:</span>
          <TimerBox num="18" unit="Sec" />
        </div>

        <a
          className="text-white text-base font-bold flex items-center justify-center lg:justify-start gap-2 hover:gap-4 transition-all duration-300 mt-4 px-6 py-3 rounded-xl hover:bg-white/10"
          href="#"
        >
          مشاهده همه{" "}
          <span className="material-symbols-outlined text-lg rotate-180">
            arrow_right_alt
          </span>
        </a>
      </div>

      {/* اسلایدر محصولات */}
      <div className="w-full overflow-hidden z-10">
        <div className="flex overflow-x-auto hide-scrollbar gap-5 pb-8 pt-4 snap-x px-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[220px] w-[220px] bg-white dark:bg-gray-800 rounded-3xl p-5 flex flex-col gap-4 snap-start shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
            >
              <div className="aspect-square bg-gray-50 dark:bg-gray-700 rounded-2xl relative overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${product.image}')` }}
                ></div>
                <span className="absolute top-3 right-3 bg-primary text-white text-xs font-black px-2.5 py-1.5 rounded-lg shadow-md">
                  -{product.discount}
                </span>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100 line-clamp-2 leading-relaxed h-11 group-hover:text-primary transition-colors">
                  {product.name}
                </h4>
                <div className="flex flex-col items-end mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
                  <span className="text-xs text-gray-400 line-through decoration-primary">
                    {product.oldPrice}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg font-black text-gray-900 dark:text-white">
                      {product.price}
                    </span>
                    <span className="text-[10px] font-bold text-gray-500">
                      تومان
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* کارت "مشاهده همه" آخر لیست */}
          <div className="min-w-[220px] w-[220px] bg-white/10 backdrop-blur-md border-2 border-dashed border-white/30 rounded-3xl p-5 flex flex-col items-center justify-center gap-6 snap-start hover:bg-white/20 transition-all cursor-pointer group">
            <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <span className="material-symbols-outlined text-4xl rotate-180">
                arrow_right_alt
              </span>
            </div>
            <h4 className="text-white font-black text-xl">مشاهده همه</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

// کامپوننت کوچک برای تایمر
function TimerBox({ num, unit }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl w-14 h-14 justify-center">
      <span className="font-black text-2xl leading-none">{num}</span>
      <span className="text-[9px] text-gray-400 font-bold uppercase mt-1">
        {unit}
      </span>
    </div>
  );
}
