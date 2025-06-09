"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "../components/ProductCard";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import { getAllProducts } from "@/public/services/productService";
import CountdownTimer from "../components/CountdownTimer";

export default function FlashSalesSlider() {
  const [products, setProducts] = useState([]);
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
        <SectionHeader
          heading="Flash Sales"
          label="Today's"
          option={<CountdownTimer timeLeft={timeLeft} />}
        />
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
                  image={item.image}
                  title={item.title}
                  price={`${item.price}`}
                  discount={Math.floor(Math.random() * 40) + 10}
                  rating={item.rating?.rate || 4}
                  category={`${(item.price + 30).toFixed(2)}`}
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
