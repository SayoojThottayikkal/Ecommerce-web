"use client";

import React, { useEffect, useState } from "react";

import SectionHeader from "../SectionHeader";
import ProductCard from "../products/ProductCard";
import { getAllProducts } from "@/services/productService";

const JustForYouRecommendations = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setRecommendedProducts(products);
      } catch (error) {
        console.error("Failed to fetch recommended products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSeeAll = () => {
    setVisibleCount(recommendedProducts.length);
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-4">
        <SectionHeader heading="Just For You" />
        {visibleCount < recommendedProducts.length && (
          <button
            onClick={handleSeeAll}
            className="text-sm border px-4 py-3 rounded bg-white text-[#000] border-black"
          >
            See All
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {recommendedProducts.slice(0, visibleCount).map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            // discount={item.discount}
            rating={item.rating?.rate || 4}
            count={item.rating?.count || 100}
            originalPrice={(item.price + 30).toFixed(2)}
          />
        ))}
      </div>
    </div>
  );
};

export default JustForYouRecommendations;
