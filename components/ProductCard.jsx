"use client";

import React from "react";
import Image from "next/image";
import { Heart, Eye, Star, StarHalf, StarOff } from "lucide-react";

const ProductCard = ({ image, title, price, discount, rating }) => {
  const renderStars = () => {
    const stars = [];
    const full = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < full; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          size={16}
          className="text-yellow-400"
          fill="currentColor"
        />
      );
    }

    if (hasHalf) {
      stars.push(<StarHalf key="half" size={16} className="text-yellow-400" />);
    }

    while (stars.length < 5) {
      stars.push(
        <StarOff
          key={`empty-${stars.length}`}
          size={16}
          className="text-yellow-400"
        />
      );
    }

    return stars;
  };

  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-md p-4 relative group bg-white">
      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
        -{discount}%
      </div>

      <div className="absolute top-3 right-3 space-y-2 opacity-0 group-hover:opacity-100 transition flex flex-col bg-#F5F5F5">
        <button className="bg-white p-1 rounded-full shadow hover:scale-110 transition">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
        <button className="bg-white p-1 rounded-full shadow hover:scale-110 transition">
          <Eye className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="w-full h-40 flex items-center justify-center mb-4 bg-#F5F5F5">
        <Image
          src={image}
          alt={title}
          width={160}
          height={160}
          className="object-contain max-h-full "
        />
      </div>

      <button className="w-full py-2 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition duration-300 mb-3">
        Add To Cart
      </button>

      <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
        {title}
      </h3>

      <div className="text-sm mt-1">
        <span className="text-red-500 font-semibold">${price}</span>
      </div>

      <div className="flex items-center mt-2 gap-1 text-xs text-gray-600">
        {renderStars()}
        <span className="ml-1">({rating})</span>
      </div>
    </div>
  );
};

export default ProductCard;
