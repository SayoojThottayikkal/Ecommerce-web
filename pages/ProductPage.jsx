"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Heart } from "lucide-react";
import { useDispatch } from "react-redux";
import { getProductById, getAllProducts } from "@/services/productService";
import { addToCart } from "@/redux/slices/CartSlice";
import { addToWishlist } from "@/redux/slices/wishlistSlice";

import ImageGallery from "@/components/singleproduct/ImageGallery";
import RatingStars from "@/components/singleproduct/RatingStars";
import DeliveryInfo from "@/components/singleproduct/DeliveryInfo";
import RelatedItems from "@/components/singleproduct/RelatedItems";
import { addTocheckout } from "@/redux/slices/CheckoutSlice";
import Link from "next/link";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      getProductById(id).then((data) => {
        if (!data) return;

        const Colors = {
          black: "#000",
          white: "#fff",
        };
        const Sizes = ["S", "M", "L", "XL"];

        setProduct({
          ...data,
          colors: data.colors ?? Colors,
          sizes: data.sizes ?? Sizes,
        });

        setSelectedColor((data.colors ?? Colors)[0]);
        setSelectedSize((data.sizes ?? Sizes)[0]);
      });

      getAllProducts().then((items) => {
        setRelated(items.filter((item) => item.id !== id).slice(0, 4));
      });
    }
  }, [id]);

  if (!product)
    return <div className="text-center py-20 text-gray-500">Loading...</div>;
  console.log(product, "pro");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-10 ">
        <div className="w-full lg:w-1/2">
          <ImageGallery images={product.image} />
        </div>

        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className=" text-2xl font-semibold text-black ">
            {product.title}
          </h1>

          <div className="flex justify-left items-center gap-3">
            <RatingStars
              rating={product.rating?.rate || 4}
              count={product.rating?.count || 100}
            />
            <p className="text-sm text-green-600">
              | {product.inStock ? " In Stock" : " Out of Stock"}
            </p>
          </div>
          <p className="text-lg font-bold text-black">${product.price}</p>

          <p className="text-gray-700">{product.description}</p>
          <div className="border border-gray-400"></div>

          <div className="flex items-center gap-2">
            <h4 className="font-medium text-black">Colours:</h4>
            <div className="flex  gap-2 mt-1">
              <button
                style={{ background: product.colors.black }}
                className="size-4 border-2 border-red-700 rounded-lg"
              ></button>
              <button
                style={{ background: product.colors.white }}
                className="size-4 border-2 border-red-700 rounded-lg"
              ></button>
            </div>
          </div>

          {product.sizes?.length > 0 && (
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-black">Size:</h4>
              <div className="flex gap-2 mt-1">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border rounded ${
                      selectedSize === size
                        ? "bg-red-600 text-white"
                        : "text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 mt-4">
            <div className="flex border rounded overflow-hidden h-10">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev == 0 ? 0 : prev - 1))
                }
                className="px-3 border-r text-black"
              >
                –
              </button>
              <input
                type="number"
                value={quantity}
                min={1}
                className="w-12 text-center text-black"
              />
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 bg-red-500 text-white"
              >
                +
              </button>
            </div>

            <button
              onClick={() =>
                dispatch(
                  addTocheckout({
                    ...product,
                    selectedColor,
                    selectedSize,
                    quantity,
                  })
                )
              }
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
            >
              <Link href={`/checkout`}>Buy Now</Link>
            </button>

            <button
              onClick={() => dispatch(addToWishlist(product))}
              className="w-10 h-10 border rounded flex items-center justify-center"
            >
              <Heart className="w-5 h-5 text-black" />
            </button>
          </div>

          <DeliveryInfo />
        </div>
      </div>

      <RelatedItems products={related} />
    </div>
  );
};

export default ProductPage;
