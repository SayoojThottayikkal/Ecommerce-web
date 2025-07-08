"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ArrowLeft, ArrowRight } from "lucide-react";

import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Category } from "@/constants";

function CategorySection() {
  return (
    <section className="my-10 px-4 md:px-10 relative">
      <div className="flex items-center justify-between">
        <SectionHeader heading="Browse By Category" label="Categories" />
        <div className="hidden md:flex gap-2">
          <button className="swiper-button-prev-custom bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition">
            <ArrowLeft size={18} color="black" />
          </button>
          <button className="swiper-button-next-custom bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition">
            <ArrowRight size={18} color="black" />
          </button>
        </div>
      </div>

      <div className="relative">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          modules={[Navigation]}
          className="my-8"
        >
          {Category.map((item, index) => (
            <SwiperSlide key={index.id}>
              <div
                className={`border rounded-lg p-6 flex flex-col  bg-white hover:bg-red-500 items-center justify-center transition hover:shadow cursor-pointer 
                  
                `}
              >
                <div className="filter hover:invert ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    size={32}
                    className={`mb-4  ${index === 3 ? "filter invert " : ""}`}
                  />
                </div>
                <span className="text-sm font-medium text-black">
                  {item.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center mt-6">
        <Button variant="primary">View All Products</Button>
      </div>

      <div className="border-t mt-10"></div>
    </section>
  );
}

export default CategorySection;
