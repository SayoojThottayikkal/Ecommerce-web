"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import iphone from "../public/images/iphone.png";
import iphone1 from "../public/images/iphone1.jpg";
import iphone2 from "../public/images/iphone2.jpg";
import iphonelogo from "../public/images/iphonelog.png";
import { getCategories } from "../public/services/productService";

const bannerSlides = [
  {
    img: iphone,
    icon: iphonelogo,
    title: " iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
  },
  {
    img: iphone1,
    icon: iphonelogo,
    title: "iPhone 14 Pro Max",
    subtitle: "Grab Now at Best Price",
  },
  {
    img: iphone2,

    title: "Upgrade Now",
    subtitle: "Special Exchange Offer",
  },
];

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    };

    fetchCategories();
  }, []);
  console.log(categories, "cat");

  return (
    <div className="flex flex-col md:flex-row px-4 py-4 bg-white gap-4">
      <aside className="md:w-1/5 w-full bg-white border-r border-gray-200 p-4 md:p-6">
        <ul className="space-y-4">
          {categories.map((cat, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-red-600 capitalize text-gray-700"
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      <main className="md:w-4/5 w-full p-2 md:p-6">
        <div className="rounded-lg overflow-hidden">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            loop={true}
            className="h-[250px] md:h-[300px]"
          >
            {bannerSlides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-black text-white flex flex-col md:flex-row items-center justify-between p-6 md:p-10 h-full">
                  <div>
                    <p className="text-sm mb-2 flex items-center gap-2">
                      <Image src={slide.icon} width={20} height={20} />
                      {slide.title}
                    </p>
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">
                      {slide.subtitle}
                    </h1>
                    <button className=" underline  px-4 py-2 rounded hover:bg-white hover:text-black transition">
                      Shop Now →
                    </button>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Image
                      src={slide.img}
                      alt={slide.title}
                      width={300}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </div>
  );
};

export default Home;
