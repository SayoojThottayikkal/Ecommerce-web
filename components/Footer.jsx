import Image from "next/image";
import Link from "next/link";
import AppStore from "../public/images/footer/AppStore.png";
import GooglePlay from "../public/images/footer/GooglePlay.png";
import QrCode from "../public/images/footer/Qr Code.png";
import { Input } from "./Input";

import {
  Facebook,
  Instagram,
  Linkedin,
  SendHorizontal,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Exclusive</h3>
          <p className="text-sm mb-2">Subscribe</p>
          <p className="text-xs mb-4">Get 10% off your first order</p>
          <div className="flex border border-white rounded-md overflow-hidden justify-between">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-none text-sm px-3 py-2 focus:outline-none w-full"
            />
            <button className="  px-4 text-white transition-all">
              <SendHorizontal color="#fafafa" strokeWidth={1.25} />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <p className="text-sm">111 Bijoy sarani, Dhaka,</p>
          <p className="text-sm">DH 1515, Bangladesh.</p>
          <p className="text-sm mt-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Account</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="#">My Account</Link>
            </li>
            <li>
              <Link href="#">Login / Register</Link>
            </li>
            <li>
              <Link href="#">Cart</Link>
            </li>
            <li>
              <Link href="#">Wishlist</Link>
            </li>
            <li>
              <Link href="#">Shop</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Quick Link</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms Of Use</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Download App</h3>
          <p className="text-xs mb-2">Save $3 with App New User Only</p>
          <div className="flex space-x-2 mb-4">
            <Image src={QrCode} alt="QR" width={80} height={80} />
            <div className="flex flex-col gap-2">
              <Image
                src={GooglePlay}
                alt="Google Play"
                width={100}
                height={30}
              />
              <Image src={AppStore} alt="App Store" width={100} height={30} />
            </div>
          </div>
          <div className="flex space-x-4 text-white mt-4">
            <Facebook color="#fafafa" strokeWidth={1.25} />

            <Twitter color="#fafafa" strokeWidth={1.25} />
            <Instagram color="#fafafa" strokeWidth={1.25} />
            <Linkedin color="#fafafa" strokeWidth={1.25} />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
}
