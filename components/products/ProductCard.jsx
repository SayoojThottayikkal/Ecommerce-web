"use client";

import React from "react";
import Image from "next/image";
import { Heart, Eye, Trash2 } from "lucide-react";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "@/redux/slices/CartSlice";
import {
  addToWishlist,
  removeFromWishlist,
  selectWishlist,
} from "@/redux/slices/wishlistSlice";

const ProductCard = ({
  image,
  title,
  price,
  discount,
  rating,
  count,
  id,
  originalPrice,
  showDelete = false,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const product = { id, image, title, price, discount, rating, count };

  const wishlist = useSelector(selectWishlist) || [];
  const isWishlisted = wishlist.some((item) => item.id === id);

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-md p-4 relative group bg-white">
      {!showDelete && discount > 0 && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
          {discount}%
        </div>
      )}

      <div className="absolute top-3 right-3 space-y-2 opacity-0 group-hover:opacity-100 transition flex flex-col">
        {showDelete ? (
          <button
            onClick={() => dispatch(removeFromWishlist(id))}
            className="bg-white p-1 rounded-full shadow hover:scale-110 transition"
          >
            <Trash2 className="w-4 h-4 text-gray-600" />
          </button>
        ) : (
          <>
            <button
              onClick={handleWishlistToggle}
              className="bg-white p-1 rounded-full shadow hover:scale-110 transition"
            >
              <Heart
                className={`w-4 h-4 ${
                  isWishlisted ? "fill-red-500 stroke-red-500" : "text-gray-600"
                }`}
              />
            </button>

            <button
              onClick={() => router.push(`/product/${id}`)}
              className="bg-white p-1 rounded-full shadow hover:scale-110 transition"
            >
              <Eye className="w-4 h-4 text-gray-600" />
            </button>
          </>
        )}
      </div>

      <div className="w-full h-40 flex items-center justify-center mb-4 bg-gray-50">
        <Image
          src={image}
          alt={title}
          width={160}
          height={160}
          className="object-contain max-h-full"
        />
      </div>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="w-full py-2 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition duration-300 mb-3"
      >
        Add To Cart
      </button>

      <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
        {title}
      </h3>

      <div className="text-sm mt-1">
        <span className="text-red-500 font-semibold mr-2">₹{price}</span>
        {originalPrice && originalPrice > price && (
          <span className="line-through text-gray-400 text-xs">
            ₹{originalPrice}
          </span>
        )}
      </div>

      <div className="flex items-center mt-2 gap-1 text-xs text-gray-600">
        <Rating value={rating} readOnly size="small" />
        <span className="text-gray-500">{count}</span>
      </div>
    </div>
  );
};

export default ProductCard;
