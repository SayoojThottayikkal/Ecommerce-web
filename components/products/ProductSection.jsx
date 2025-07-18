"use client";

import React, { useEffect, useState } from "react";
import { getAllProducts } from "@/services/productService";
import ProductCard from "@/components/products/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

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
        {products.slice(0, 10).map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            discount={item.discount}
            rating={item.rating?.rate || 4}
            count={item.rating?.count || 100}
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
