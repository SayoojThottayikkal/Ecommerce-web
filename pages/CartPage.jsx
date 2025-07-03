"use client";

import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "@/redux/slices/CartSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import { setCheckoutItems } from "@/redux/slices/CheckoutSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { cartItems, subtotal, total } = useSelector((state) => state.cart);

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: Number(newQuantity) }));
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <p className="text-sm text-gray-500 mb-6">
        Home / <span className="text-black">Cart</span>
      </p>

      <div className="overflow-x-auto  ">
        <table className="w-full text-left">
          <thead className="text-black text-sm bg-gray-50">
            <tr>
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Subtotal</th>
            </tr>
          </thead>
          <tbody className="text-sm ">
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-8 text-black">
                  Your cart is empty.
                </td>
              </tr>
            ) : (
              cartItems.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden my-2 "
                >
                  <td className="p-3 ">
                    <div className="flex items-center gap-4 relative">
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="absolute -top-2 -left-2 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center z-10"
                      >
                        <X size={12} />
                      </button>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-contain"
                      />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td className="p-3 text-black">${item.price}</td>
                  <td className="p-3">
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="border px-2 py-1 rounded w-16  text-black text-center"
                    >
                      {[...Array(10).keys()].map((n) => {
                        const val = n + 1;
                        return (
                          <option key={val} value={val}>
                            {String(val).padStart(2, "0")}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                  <td className="p-3 font-medium text-black">
                    ${item.price * item.quantity}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-8">
        <Link href="/home">
          <button className="border border-gray-300 bg-white text-black px-4 py-2 rounded">
            Return To Shop
          </button>
        </Link>
        <button className="border border-gray-300 bg-white text-black px-4 py-2 rounded">
          Update Cart
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-10 gap-6">
        <div className="flex gap-2 h-14 lg:h-10">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border px-4 py-2 w-64 rounded"
          />
          <Button className="bg-red-500 text-white px-4 py-2 rounded">
            Apply Coupon
          </Button>
        </div>

        <div className="border p-4 rounded w-full md:w-96 text-black shadow-sm bg-white">
          <h2 className="font-semibold mb-4 text-lg">Cart Total</h2>
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
            <span>${total}</span>
          </div>
          <Button
            onClick={() => {
              dispatch(setCheckoutItems(cartItems));
              router.push("/checkout");
            }}
            className="bg-red-500 text-white w-full mt-4 py-2 rounded"
          >
            Proceed to checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
