"use client";

import React from "react";
import Image from "next/image";
import { Heart, Eye } from "lucide-react";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
const ProductCard = ({ image, title, price, discount, rating, count }) => {
  const router = useRouter();
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-md p-4 relative group bg-white">
      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
        {discount}%
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

      <button
        onClick={() => router.push("/cart")}
        className="w-full py-2 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition duration-300 mb-3"
      >
        Add To Cart
      </button>

      <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
        {title}
      </h3>

      <div className="text-sm mt-1">
        <span className="text-red-500 font-semibold">${price}</span>
      </div>

      <div className="flex items-center mt-2 gap-1 text-xs text-gray-600">
        <Rating value={rating} readOnly size="small" />
        <span className="text-gray-500">{count}</span>
      </div>
    </div>
  );
};

export default ProductCard;
