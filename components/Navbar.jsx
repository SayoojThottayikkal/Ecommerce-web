import Link from "next/link";
import Image from "next/image";
import imgCart from "../public/images/nav/Cart1.png";
import imgSearch from "../public/images/nav/Component 2.png";
import imgHeart from "../public/images/nav/heart small.png";
import { Input } from "./Input";

export default function Navbar() {
  return (
    <nav className="bg-white px-6 md:px-10 py-4 shadow flex justify-between items-center">
      <h1 className="text-black font-bold text-xl">Exclusive</h1>

      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
        <Link href="/home" className="hover:text-black">
          Home
        </Link>
        <Link href="/contact" className="hover:text-black">
          Contact
        </Link>
        <Link href="/about" className="hover:text-black">
          About
        </Link>
        <Link href="/signup" className="hover:text-black">
          Sign Up
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative hidden sm:block">
          <Input
            type="text"
            placeholder="What are you looking for?"
            className="pl-4 pr-10 py-1 text-sm border border-gray-200 rounded-md bg-gray-100 focus:outline-none"
          />
          <div className="absolute right-2 top-1.5">
            <Image src={imgSearch} alt="Search" width={20} height={20} />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Image
            src={imgHeart}
            alt="Favorites"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src={imgCart}
            alt="Cart"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
}
