import BestSelling from "@/pages/BestSelling";
import CategorySection from "@/pages/CategorySection";
import FlashSalesSlider from "@/pages/FlashSalesSlider";
import Home from "@/pages/Home";
import NewArrivalSection from "@/pages/NewArrivalSection";
import ProductSection from "@/pages/ProductSection";

export default function HomePage() {
  return (
    <>
      <Home />
      <FlashSalesSlider />
      <CategorySection />
      <BestSelling />
      <ProductSection />
      <NewArrivalSection />
    </>
  );
}
