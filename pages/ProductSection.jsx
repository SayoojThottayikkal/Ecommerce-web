"use client";

import React, { useEffect, useState } from "react";
import { getAllProducts } from "@/public/services/productService";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        console.error("Fetch Error:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="my-10 px-4 md:px-10">
      <div className="flex justify-between items-center">
        <SectionHeader heading="Explore Our Products" label="Our Products" />
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-200 transition">
            <ArrowLeft size={16} color="black" />
          </button>
          <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-200 transition">
            <ArrowRight size={16} color="black" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-6">
        {products.slice(0, 10).map((item, index) => (
          <ProductCard
            key={item.id || index}
            image={item.image}
            title={item.title}
            price={item.price}
            discount={Math.floor(Math.random() * 40) + 10}
            rating={item.rating?.rate || 4}
            count={item.rating?.count}
            category={item.category}
            isNew={index % 3 === 0}
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <Button className="bg-red-500 hover:bg-red-600 text-white">
          View All Products
        </Button>
      </div>
    </section>
  );
}

export default ProductSection;
