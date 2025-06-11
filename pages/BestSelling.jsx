"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import { getAllProducts } from "@/public/services/productService";

import Button from "@/components/ui/Button";

function BestSelling() {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 5);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      if (diff <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-10 px-4 md:px-10">
      <div className="flex justify-between items-center">
        <SectionHeader heading="Best Selling Products" label="This Month" />
        <Button onClick={() => setShowAll(!showAll)} className="ml-auto">
          {showAll ? "Show Less" : "View All"}
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {(showAll ? products : products.slice(0, 4)).map((item, index) => (
          <ProductCard
            key={item.id || index}
            image={item.image}
            title={item.title}
            price={item.price}
            discount={item.discount}
            rating={item.rating?.rate || 4}
            category={`${(item.price + 30).toFixed(2)}`}
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 bg-black text-white rounded-lg overflow-hidden px-6 py-12 mt-10">
        <div className="space-y-5 max-w-xl text-center md:text-left">
          <span className="text-green-400 font-semibold text-sm">
            Categories
          </span>
          <h1 className="text-4xl font-bold leading-snug">
            Enhance Your <br /> Music Experience
          </h1>

          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white text-black w-16 h-16 flex flex-col items-center justify-center rounded-full shadow"
              >
                <span className="font-bold text-lg">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="text-xs">{item.label}</span>
              </div>
            ))}
          </div>

          <Button className="mt-6 bg-green-500 hover:bg-green-600 text-white">
            Buy Now!
          </Button>
        </div>

        <div className="mt-10 md:mt-0 md:ml-10">
          <Image
            src="/images/Frame.png"
            alt="JBL Speaker"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default BestSelling;
