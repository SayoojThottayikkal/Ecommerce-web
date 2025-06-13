import BestSelling from "@/components/products/BestSelling";
import CategorySection from "@/components/products/CategorySection";
import FlashSalesSlider from "@/components/products/FlashSalesSlider";
import Home from "@/components/products/HomeSection";
import NewArrivalSection from "@/components/products/NewArrivalSection";
import ProductSection from "@/components/products/ProductSection";
import React from "react";

function HomePage() {
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

export default HomePage;
