import React from "react";
import Image from "next/image";

const OrderItemCard = ({ item }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image src={item.image} alt={item.title} width={40} height={40} />
        <span>
          {item.title} × {item.quantity}
        </span>
      </div>
      <span>${item.price * item.quantity}</span>
    </div>
  );
};

export default OrderItemCard;
