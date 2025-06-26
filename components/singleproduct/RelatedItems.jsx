"use client";

import ProductCard from "@/components/products/ProductCard";
import SectionHeader from "../SectionHeader";

const RelatedItems = ({ products }) => {
  return (
    <div className="mt-12">
      <SectionHeader className={"text-xl "} label={"Related Items"} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-3">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            discount={item.discount}
            rating={item.rating?.rate || 4}
            count={item.rating?.count || 100}
            originalPrice={item.originalPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedItems;
