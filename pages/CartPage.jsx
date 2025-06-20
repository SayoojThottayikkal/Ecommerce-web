"use client";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "@/features/cart/cartSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { cartItems, subtotal, total } = useSelector((state) => state.cart);

  const handleQuantityChange = (id, newQty) => {
    dispatch(updateQuantity({ id, quantity: Number(newQty) }));
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="w-full border rounded">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-3 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                  />
                  {item.name}
                </td>
                <td className="p-3">${item.price}</td>
                <td className="p-3">
                  <select
                    className="border p-1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  >
                    {[...Array(10).keys()].map((n) => (
                      <option key={n + 1} value={n + 1}>
                        {n + 1}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-3">${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-between">
        <Link href="/products">
          <button className="px-4 py-2 border">Return To Shop</button>
        </Link>
        <button className="px-4 py-2 border">Update Cart</button>
      </div>

      {/* Coupon & Total */}
      <div className="mt-8 flex flex-col lg:flex-row gap-6">
        {/* Coupon Section */}
        <div className="flex gap-2">
          <input type="text" placeholder="Coupon Code" className="border p-2" />
          <button className="bg-red-500 text-white px-4 py-2">
            Apply Coupon
          </button>
        </div>

        {/* Cart Summary */}
        <div className="border p-4 w-full max-w-sm ml-auto">
          <h3 className="text-lg font-bold mb-4">Cart Total</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <button
            onClick={() => router.push("/checkout")}
            className="w-full bg-red-500 text-white px-4 py-2"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
