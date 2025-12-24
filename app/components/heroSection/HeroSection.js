import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[16/11] sm:aspect-[2/1] lg:aspect-[2.8/1] rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-gray-200 dark:shadow-black/50 ring-1 ring-black/5">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDB8FJetQ0H3c3hvgvqn1RMOjzJ5y8eXZjRH3WXwtOuEysbiuM120Ny3qSKViclgbKqUKqOW4ZyRpIV0HkIzbv9jZgBIIPSdH0OjY8Thu_-UxQbz7tDHGq2J2ng2yL17qAsdszutJMUrnTyXhL2AyxnPczM1U1fStNWhheay1mZo-EyanOhs0m2Nw5WtUlco19G4xuLKheZqxXXhEbkDx3GovA0dnOsmVdXR_Wgx7OsgTLsMEp_b7EciZPds6QNiITXnjWlghz0MBc')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black/80 flex flex-col justify-center px-8 md:px-24 gap-8">
          <div className="max-w-2xl space-y-6 opacity-0 animate-[fade-in-up_1s_ease-out_forwards] translate-y-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-xl rounded-full text-white text-sm font-bold border border-white/20 shadow-lg">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              جشنواره ویژه بهاره
            </span>
            <h2 className="text-white text-4xl sm:text-6xl lg:text-8xl font-black leading-tight drop-shadow-2xl tracking-tight">
              نسل جدید
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryLight to-white">
                دنیای دیجیتال
              </span>
            </h2>
            <p className="text-gray-100 text-lg sm:text-2xl font-medium leading-relaxed max-w-lg drop-shadow-lg text-justify">
              تجربه‌ای متفاوت از بازی و سرگرمی با جدیدترین کنسول‌ها و لوازم
              جانبی. همین حالا آینده را لمس کنید.
            </p>
          </div>
          <button className="w-fit mt-2 px-10 py-4 bg-primary hover:bg-primaryDark text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(239,62,91,0.4)] hover:shadow-[0_15px_40px_rgba(239,62,91,0.6)] transition-all duration-300 flex items-center gap-4 group/btn opacity-0 animate-[fade-in-up_1s_ease-out_0.3s_forwards] translate-y-10 hover:-translate-y-1 active:scale-95">
            مشاهده و خرید
            <span className="material-symbols-outlined text-xl rotate-180 transition-transform duration-300 group-hover/btn:-translate-x-2">
              arrow_right_alt
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
