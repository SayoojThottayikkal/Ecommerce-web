"use client";

import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { Truck, Headphones, ShieldCheck } from "lucide-react";
import arrival from "../public/images/Arrival/arrival1.png";
import { Arrival } from "@/constants";

function NewArrivalSection() {
  return (
    <section className="my-16 px-4 md:px-10">
      <SectionHeader heading="New Arrival" label="Featured" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="relative group bg-black rounded-xl overflow-hidden h-[360px]">
          <Image src={arrival} alt="PlayStation 5" fill className="" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-lg font-semibold mb-1">PlayStation 5</h3>
            <p className="text-xs mb-1">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="px-3 py-1 text-white underline text-xs hover:bg-white hover:text-black rounded">
              Shop Now
            </button>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-6">
          <div className="relative group bg-black rounded-xl overflow-hidden h-[170px]">
            <Image
              src={Arrival[0].image}
              alt={Arrival[0].title}
              fill
              className=""
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-sm font-semibold">{Arrival[0].title}</h4>
              <p className="text-xs">{Arrival[0].description}</p>
              <button className="px-2 py-1 text-white underline text-xs hover:bg-white hover:text-black rounded mt-1">
                Shop Now
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {Arrival.slice(1, 3).map((item, i) => (
              <div
                key={i}
                className="relative group bg-black rounded-xl overflow-hidden h-[160px]"
              >
                <Image src={item.image} alt={item.title} fill className="" />
                <div className="absolute bottom-3 left-3 text-white">
                  <h4 className="text-xs font-semibold">{item.title}</h4>
                  <p className="text-[10px]">{item.description}</p>
                  <button className="px-2 py-1 text-white underline text-[10px] hover:bg-white hover:text-black rounded mt-1">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-gray-300 rounded-full p-2 flex items-center justify-center">
            <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center">
              <Truck size={20} />
            </div>
          </div>
          <h4 className="font-semibold text-black mt-3 text-sm">
            FREE AND FAST DELIVERY
          </h4>
          <p className="text-xs text-black">
            Free delivery for all orders over $140
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-300 rounded-full p-2 flex items-center justify-center">
            <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center">
              <Headphones size={20} />
            </div>
          </div>
          <h4 className="font-semibold text-black mt-3 text-sm">
            24/7 CUSTOMER SERVICE
          </h4>
          <p className="text-xs text-black">Friendly 24/7 customer support</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-300 rounded-full p-2 flex items-center justify-center">
            <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
          </div>
          <h4 className="font-semibold text-black mt-3 text-sm">
            MONEY BACK GUARANTEE
          </h4>
          <p className="text-xs text-black">We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
}

export default NewArrivalSection;
