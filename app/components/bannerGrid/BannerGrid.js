import React from "react";

export default function BannerGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-[250px]">
      <a
        className="relative rounded-[2.5rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 lg:col-span-2 lg:row-span-2"
        href="#"
      >
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[800ms] ease-out"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgmwbENTOQP_NR4Y65FlXnAE4AUejqXLweSUaXZVFeVYsYoc1DHLd7GLWSWVHU18tzyqp5OnJHD2_ZgvyUK4m959RcGSfjrosK7Jclxnzf6QlJsj0ePp5gw5R60dHi9qrsqNU7Xtou6y_4apxkMt9NrkaM-ZeB6dW029IBQQUwY18gDGMGs7Lhhbc-N7pN3nHu7vai1nV_A9O3SVdjZZn2a9g7onrK6wsuOrlSozCc8TGJXmn-dvmP745-A8bW2MCIwcddm8LWwoI')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
          <span className="text-white text-4xl font-black mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            دکوراسیون مینیمال
          </span>
          <span className="text-gray-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            زیبایی در سادگی است
          </span>
        </div>
      </a>
      <a
        className="relative rounded-[2.5rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 lg:col-span-2"
        href="#"
      >
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[800ms] ease-out"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0dZezbifSv5gLZcheaJ2D-AIQdbj_OX_Ds3Wo9XTmNVsNO4vzVRWxZO3NxUvce6ARelZdznYMZmHQuHJtvSm8VL7K3OGhg_mjXgMSO50pH4I6VtsIRHYiOFTcm5wmZgRuyYvtEx4dj7bi0Ge4iwQ2hvF-fYAiV7a2vIbOznRBMhU6zcMCjsUdfwBDC-xnT8FxO7zurrn6mLy2R9lq1qoD_lHMoRWThzxgzr1DEL8Hu6TBwI68ToliHXODgZZlFYQRUeg4IYnv13M')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center p-10">
          <span className="text-white text-3xl font-black mb-2 translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
            لوازم آرایشی
          </span>
          <span className="text-gray-200 font-medium">
            برترین برندهای جهانی
          </span>
        </div>
      </a>
      <a
        className="relative rounded-[2.5rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500"
        href="#"
      >
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[800ms] ease-out"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYrly-LpsF2zFT4JJrKjlINje-KPs-O7kh4yoeLM7XIfvcYhwlegMWtTs1rwDCh8sGIeb1I2cb_HQU_Ufs9ZULI7-7D9fhoLKlfDlt6kd3baSwjQ4mPizHKM_3R2TEQfmGkzUu-DlypMyKu7qjdP0_ai0IblZ2eNUl9I4kxFmAt1EFg8QqOjKlss4JTDgsp4LWvO60M0JxX-fCyvC1ZiloEo9rjoVOxVOmKGmkqztNtEnIgfV_VSu1Afi-noBaRVaXlkNtOEWSVNw')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
          <span className="text-white text-xl font-bold border-2 border-white/70 px-6 py-2.5 backdrop-blur-md rounded-2xl group-hover:bg-white group-hover:text-black transition-all">
            اکسسوری
          </span>
        </div>
      </a>
      <a
        className="relative rounded-[2.5rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500"
        href="#"
      >
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[800ms] ease-out"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqqnzpMFDEEMqjHHGOuwh8Eh_9JKVmMhCNu3WXk1Y14n9qQ3XyCKmZhXZClxjpJa43qY6Yy3vFtlNInzQuoceKJ4-saWnz1yXn5UC6881rDCIV5PF6KuAUKmYfqq_DvEymHTBn7tqlfnDD3KSDs2zKum6VTg9D_el6sWS9HW9kfW1VAJcXMbXwhRE6_NoP8cQkiEPaTRJk-EScx8Irv3QNeY0yrRGeR9PAbhkiwpziGqhdyfabRE4Id1ActnQGewgvlsf_mgP6rJw')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
          <span className="text-white text-xl font-bold border-2 border-white/70 px-6 py-2.5 backdrop-blur-md rounded-2xl group-hover:bg-white group-hover:text-black transition-all">
            ورزشی
          </span>
        </div>
      </a>
    </section>
  );
}
