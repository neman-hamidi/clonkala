import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import CategorySection from "./components/categorySection/CategorySection";
import AmazingOfferSection from "./components/amazingOfferSection/AmazingOfferSection";
import BannerGrid from "./components/bannerGrid/BannerGrid";

import SuggestedProducts from "./components/suggestedProducts/SuggestedProducts";
import NewArrivals from "./components/newArrivals/NewArrivals";
import BrandSection from "./components/brandSection/BrandSection";
import MagazineSection from "./components/magazineSection/MagazineSection";
import Footer from "./components/footer/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20 lg:space-y-28">
        <HeroSection />
        <CategorySection />
        <AmazingOfferSection />
        <BannerGrid />
        <SuggestedProducts />
        <NewArrivals />
        <BrandSection />
        <MagazineSection />
      </main>
      {/* فوتر خارج از main قرار می‌گیرد */}
      <Footer />
    </>
  );
}
