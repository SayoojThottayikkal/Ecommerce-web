import BestSelling from "@/components/BestSelling";
import CategorySection from "@/components/CategorySection";
import FlashSalesSlider from "@/components/FlashSalesSlider";
// import Home from "@/pages/Home";
import ProductSection from "@/components/ProductSection";

export default function HomePage() {
  return (
    <>
      {/* <Home /> */}
      <FlashSalesSlider />
      <CategorySection />
      <BestSelling />
      <ProductSection />
    </>
  );
}
