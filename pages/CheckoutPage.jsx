"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import image1 from "@/public/images/payment/image 30.png";
import image2 from "@/public/images/payment/image 32.png";
import image3 from "@/public/images/payment/Mastercard.png";
import image4 from "@/public/images/payment/Nagad.png";

import FormInput from "@/components/checkout/FormInput";
import OrderItemCard from "@/components/checkout/OrderItemCard";
import PaymentOption from "@/components/checkout/PaymentOption";
import { clearCheckout } from "@/redux/slices/CheckoutSlice";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";

const CheckoutPage = () => {
  const methods = useForm();
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const { checkoutItems, subtotal, total } = useSelector(
    (state) => state.checkout
  );
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
  />;
  const onSubmit = (data) => {
    console.log("Order Submitted:", { ...data, paymentMethod, checkoutItems });
    dispatch(clearCheckout());

    toast("Order placed!");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4  text-black">
            Billing Details
          </h2>

          <FormInput name="First Name*" label="firstname*" required />
          <FormInput name="Company Name" label="Company Name" />
          <FormInput name="Street Address*" label="Street Address*" required />
          <FormInput
            name="Apartment, floor, etc. (optional)"
            label="Apartment, floor, etc."
          />
          <FormInput name="Town/City*" label="Town/City*" required />
          <FormInput name="Phone Number*" label="Phone Number*" required />
          <FormInput
            name="Email Address*"
            label="Email Address*"
            type="email"
            required
          />
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...methods.register("saveInfo")}
              defaultChecked
              className="accent-red-500 w-4 h-4"
            />
            <span className="text-sm text-black">
              Save this information for faster check-out next time
            </span>
          </label>
        </form>
      </FormProvider>

      <div className="space-y-4 border p-6 rounded text-black">
        {checkoutItems.map((item) => (
          <OrderItemCard key={item.id} item={item} />
        ))}

        <div className="flex justify-between text-black ">
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </div>
        <div className="border border-gray-400"></div>
        <div className="flex justify-between text-black">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="border border-gray-400"></div>
        <div className="flex justify-between font-bold text-lg text-black">
          <span>Total:</span>
          <span>${total}</span>
        </div>

        <div className="space-y-2 text-black">
          <div className="flex justify-between">
            <PaymentOption
              value="bank"
              label="Bank"
              selected={paymentMethod}
              onChange={setPaymentMethod}
            />
            <div className="flex justify-between items-center gap-2">
              <Image src={image2} alt="visa card" height={30} width={30} />
              <Image src={image1} alt="visa card" height={30} width={30} />
              <Image src={image3} alt="visa card" height={30} width={30} />
              <Image src={image4} alt="visa card" height={30} width={30} />
            </div>
          </div>
          <PaymentOption
            value="cod"
            label="Cash on delivery"
            selected={paymentMethod}
            onChange={setPaymentMethod}
          />
        </div>

        <div className="flex-row gap-2  ">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border p-2 flex-1 rounded"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded ">
            Apply Coupon
          </button>
        </div>

        <button
          type="submit"
          onClick={methods.handleSubmit(onSubmit)}
          className="w-1/2 md:w-1/3 bg-red-600 text-white py-3 rounded "
        >
          Place Order
          <ToastContainer />
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
