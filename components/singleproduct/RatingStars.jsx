"use client";
import Rating from "@mui/material/Rating";

const RatingStars = ({ rating, reviews }) => {
  return (
    <div className="flex items-center gap-2">
      <Rating
        name="product-rating"
        value={rating}
        precision={0.5}
        readOnly
        size="small"
      />
      <span className="text-sm text-gray-600">({reviews} Reviews)</span>
    </div>
  );
};

export default RatingStars;
