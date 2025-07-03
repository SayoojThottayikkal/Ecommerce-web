"use client";

const ImageGallery = ({ images }) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col justify-between gap-5 ">
        <img
          src={images}
          alt={`Thumbnail`}
          className={`bg-gray-500  w-16 h-16 object-cover border cursor-pointer rounded`}
        />

        <img
          src={images}
          alt={`Thumbnail `}
          className={`w-16 h-16 object-cover border cursor-pointer rounded `}
        />

        <img
          src={images}
          alt={`Thumbnail `}
          className={`w-16 h-16 object-cover border cursor-pointer rounded `}
        />

        <img
          src={images}
          alt={`Thumbnail `}
          className={`w-16 h-16 object-cover border cursor-pointer rounded `}
        />
      </div>

      <div className="flex-1">
        <img
          src={images}
          alt="Selected"
          className="w-full h-auto object-cover rounded bg-gray-400"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
