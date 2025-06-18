"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectWishlist,
  removeFromWishlist,
} from "@/redux/slices/wishlistSlice";
import { addToCart } from "@/redux/slices/CartSlice";

import JustForYouRecommendations from "@/components/wishlist/JustForYouRecommendations";
import ProductCard from "@/components/products/ProductCard";

const WishlistPage = () => {
  const wishlistItems = useSelector(selectWishlist);
  const dispatch = useDispatch();

  const handleMoveAllToBag = () => {
    wishlistItems.forEach((item) => {
      dispatch(addToCart(item));
      dispatch(removeFromWishlist(item.id));
    });
  };

  return (
    <div className="px-4 md:px-12 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-black">
          Wishlist ({wishlistItems.length})
        </h2>
        <button
          onClick={handleMoveAllToBag}
          className="text-sm text-white bg-black px-4 py-2 rounded"
        >
          Move All To Bag
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {wishlistItems.map((item, index) => (
          <ProductCard key={item.id} {...item} showDelete={true} />
        ))}
      </div>

      <JustForYouRecommendations />
    </div>
  );
};

export default WishlistPage;
