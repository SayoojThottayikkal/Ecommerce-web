"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

import { navBars } from "../../constants/index";

import { Heart, Search, ShoppingCart } from "lucide-react";
import { Input } from "../ui/Input";

const AccountMenu = dynamic(() => import("../ui/AccountMenu"), { ssr: true });

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isAuthenticated = true;

  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  return (
    <nav className="bg-white px-6 md:px-10 py-4 shadow flex justify-between items-center">
      <h1 className="text-black font-bold text-xl">Exclusive</h1>

      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
        {navBars.map((item, index) => {
          if (item.title === "Sign Up" && isAuthenticated) return null;

          return (
            <Link key={index} href={item.route} className="hover:text-black">
              {item.title}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative hidden sm:block">
          <Input
            type="text"
            placeholder="What are you looking for?"
            className="pl-4 pr-10 py-1 text-sm border border-gray-200 rounded-md bg-gray-100 focus:outline-none"
          />
          <div className="absolute right-2 top-1.5">
            <Search color="#404040" strokeWidth={2} />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {isAuthenticated && (
            <Link href="/wishlist" className="relative">
              <Heart
                color="#080808"
                strokeWidth={2}
                className="cursor-pointer"
              />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
          )}

          <ShoppingCart color="#080808" strokeWidth={2} />

          {isMounted && isAuthenticated && <AccountMenu />}
        </div>
      </div>
    </nav>
  );
}
