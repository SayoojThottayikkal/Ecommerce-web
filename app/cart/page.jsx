"use client";
import { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: "/images/lcd-monitor.png",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: "/images/gamepad.png",
    },
  ]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = Number(newQuantity);
    setCartItems(updatedItems);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8">
      <p className="text-sm text-gray-500 mb-4">
        Home / <span className="text-black">Cart</span>
      </p>

      {/* Table Header */}
      <div className="grid grid-cols-4 font-semibold text-sm border-b py-2 text-black">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {/* Cart Items */}
      {cartItems.map((item, index) => (
        <div
          key={item.id}
          className="grid grid-cols-4 items-center py-4 border-b text-sm text-black"
        >
          <div className="flex items-center gap-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 object-contain"
            />
            <span>{item.name}</span>
          </div>
          <span>${item.price}</span>
          <select
            value={item.quantity}
            onChange={(e) => handleQuantityChange(index, e.target.value)}
            className="border px-2 py-1 rounded w-16"
          >
            {[1, 2, 3, 4, 5].map((qty) => (
              <option key={qty} value={qty}>
                {String(qty).padStart(2, "0")}
              </option>
            ))}
          </select>
          <span>${item.price * item.quantity}</span>
        </div>
      ))}

      {/* Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button className="border border-gray-300 px-4 py-2 rounded text-black">
          Return To Shop
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded text-black">
          Update Cart
        </button>
      </div>

      {/* Coupon + Total */}
      <div className="flex flex-col md:flex-row justify-between mt-8 gap-6">
        {/* Coupon Section */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border px-4 py-2 w-64"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="border p-4 w-full md:w-96">
          <h2 className="font-semibold mb-4">Cart Total</h2>
          <div className="flex justify-between border-b py-2">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between py-2 font-semibold">
            <span>Total</span>
            <span>${subtotal}</span>
          </div>
          <button className="bg-red-500 text-white w-full mt-4 py-2 rounded">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
