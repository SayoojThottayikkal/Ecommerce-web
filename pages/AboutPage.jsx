"use client";
import React from "react";
import image from "../public/images/about/SideImage.png";
import Image from "next/image";
import { About, teamMembers } from "@/constants";
import { useState } from "react";
import { Headphones, ShieldCheck, Truck } from "lucide-react";
function AboutPage() {
  const [active, SetActive] = useState("");
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-12 bg-white">
        <div className="md:w-1/2 text-black">
          <h1 className="text-4xl font-semibold mb-6">Our Story</h1>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>

        <div className="md:w-1/2">
          <Image
            src={image}
            alt="Two women shopping"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
      {/* spotlight */}
      {/* card start */}
      <div className="flex justify-center flex-col gap-5 items-center mb-10 md:flex-row ">
        {About.map((item, index) => (
          <div key={index}>
            <div
              className={`border border-gray-400 rounded-lg p-6 flex flex-col ${
                active == index ? "text-white" : "text-black"
              } bg-white hover:bg-red-500 items-center justify-center transition hover:shadow cursor-pointer  `}
              onMouseEnter={() => SetActive(index)}
              onMouseLeave={() => SetActive("index")}
            >
              <div>
                <div
                  className={`rounded-full p-2 ${
                    active == index ? "bg-gray-100" : "bg-gray-400"
                  }`}
                >
                  <div className={` rounded-full p-2 text-black bg-gray-400 `}>
                    {item.icon}
                  </div>
                </div>
              </div>
              <h2 className=" font-bold mt-3 mb-2">{item.number}</h2>

              <span className="text-sm font-medium ">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
      {/* third section satart */}
      <div className="flex justify-center flex-col md:flex-row gap-3 md:gap-5  mb-5">
        {teamMembers.map((people) => (
          <div key={people.id}>
            <div
              className={`  flex flex-col
             items-center justify-center transition hover:shadow cursor-pointer  text-black mt-10 `}
            >
              <div className="">
                <Image
                  src={people.image}
                  alt={people.name}
                  className="h-auto "
                />
              </div>

              <div className="flex flex-col  md:w-full items-center md:items-start ">
                <h1 className="font-bold text-xl">{people.name}</h1>
                <p className="text-sm">{people.role}</p>
              </div>
              <div className="flex md:w-full items-center md:items-start  gap-2 mb-5  mt-3 ">
                {people.icon.twitter}
                {people.icon.instagram}
                {people.icon.linkedin}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* last section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 mb-16 text-center">
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
    </div>
  );
}

export default AboutPage;
