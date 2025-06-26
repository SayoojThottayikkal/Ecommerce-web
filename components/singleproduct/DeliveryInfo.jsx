"use client";
import { Truck, RefreshCcw } from "lucide-react";

const DeliveryInfo = () => (
  <div className="mt-6 border rounded-lg p-2 text-sm space-y-3">
    <div className="flex items-center gap-3 text-gray-800">
      <Truck className="w-5 h-5 text-black" />
      <div className="p-2">
        <span className="font-medium">Free Delivery</span>
        <p className="text-xs hover:underline mt-2">
          Enter your postal code for Delivery Availability
        </p>
      </div>
    </div>
    <div className="border border-gray-300"></div>
    <div className="flex items-center gap-3 text-gray-800">
      <RefreshCcw className="w-5 h-5 text-black" />
      <div className="p-2">
        <span className="font-medium  ">Return Delivery</span>
        <p className="text-xs hover:underline mt-2">
          Free 30 Days Delivery Returns. Details
        </p>
      </div>
    </div>
  </div>
);

export default DeliveryInfo;
