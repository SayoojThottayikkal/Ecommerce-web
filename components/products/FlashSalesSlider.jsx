"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { getAllProducts } from "@/services/productService";
import Button from "@/components/ui/Button";
import CountdownTimer from "@/components/ui/CountdownTimer";
import SectionHeader from "../SectionHeader";
import ProductCard from "./ProductCard";

export default function FlashSalesSlider() {
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
    <section className="my-10 px-4 md:px-10 relative">
      <div className="flex items-center justify-between">
        <div className="flex  gap-5 md:gap-20">
          <SectionHeader heading="Flash Sales" label="Today's" />
          <CountdownTimer timeLeftString="3 days" />
        </div>
        <div className="hidden md:flex gap-2">
          <button className="swiper-button-prev-custom bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition">
            <ArrowLeft size={18} color="black" />
          </button>
          <button className="swiper-button-next-custom bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition">
            <ArrowRight size={18} color="black" />
          </button>
        </div>
      </div>

      {products.length > 0 ? (
        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Navigation]}
            className="my-8"
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  discount={item.discount}
                  rating={item.rating?.rate || 4}
                  count={item.rating?.count || 100}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <p className="text-center text-gray-500 py-6">Loading products...</p>
      )}

      <div className="text-center mt-6">
        <Button variant="primary">View All Products</Button>
      </div>
      <div className="border border-#000000 mt-10"></div>
    </section>
  );
}
