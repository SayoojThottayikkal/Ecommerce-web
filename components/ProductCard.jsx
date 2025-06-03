"use client";

import React from "react";
import Image from "next/image";
import { Heart, Eye, Star, StarHalf, StarOff } from "lucide-react";

const ProductCard = ({
  image,
  name,
  price,
  oldPrice,
  discount,
  rating,
  reviewsCount,
}) => {
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
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-md p-4 relative group bg-#F5F5F5">
      <div className="absolute top-5 left-5 bg-red-500 text-white text-xs px-2 py-1 rounded">
        -{discount}%
      </div>

      <div className="absolute top-5 right-5 space-y-2 opacity-0 group-hover:opacity-100 transition flex flex-col">
        <button className="bg-white p-1 rounded-full shadow hover:scale-110 transition">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
        <button className="bg-white p-1 rounded-full shadow hover:scale-110 transition">
          <Eye className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="mx-auto object-contain"
      />

      <button className="w-full py-2 bg-black text-white text-sm rounded-b opacity-0 group-hover:opacity-100 transition duration-300">
        Add To Cart
      </button>

      <h3 className="mt-4 text-sm font-semibold text-gray-800">{name}</h3>

      <div className="text-sm mt-1">
        <span className="text-red-500 font-semibold">${price}</span>{" "}
        <span className="line-through text-gray-400">${oldPrice}</span>
      </div>

      <div className="flex items-center mt-2 gap-1 text-xs text-gray-600">
        {renderStars()}
        <span className="ml-1">({reviewsCount})</span>
      </div>
    </div>
  );
};

export default ProductCard;
