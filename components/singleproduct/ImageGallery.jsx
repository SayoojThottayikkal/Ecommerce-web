"use client";
import { useEffect, useState } from "react";

const ImageGallery = ({ images }) => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (Array.isArray(images) && images.length > 0) {
      setSelected(images[0]);
    }
  }, [images]);

  if (!Array.isArray(images) || images.length === 0) {
    return <div className="text-gray-500">No images available.</div>;
  }

  return (
    <div className="flex gap-4">
      <div className="flex flex-col justify-between gap-5 ">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail`}
            onClick={() => setSelected(img)}
            className={`bg-gray-500  w-16 h-16 object-cover border cursor-pointer rounded ${
              selected === img ? "border-gray-300" : "border-gray-300"
            }`}
          />
        ))}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail `}
            onClick={() => setSelected(img)}
            className={`w-16 h-16 object-cover border cursor-pointer rounded ${
              selected === img ? "border-gray-300" : "border-gray-300"
            }`}
          />
        ))}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail `}
            onClick={() => setSelected(img)}
            className={`w-16 h-16 object-cover border cursor-pointer rounded ${
              selected === img ? "border-gray-300" : "border-gray-300"
            }`}
          />
        ))}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail `}
            onClick={() => setSelected(img)}
            className={`w-16 h-16 object-cover border cursor-pointer rounded ${
              selected === img ? "border-gray-300" : "border-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="flex-1">
        <img
          src={selected}
          alt="Selected"
          className="w-full h-auto object-cover rounded bg-gray-400"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
