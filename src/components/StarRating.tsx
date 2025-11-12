import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number; // e.g. 3.5
  max?: number; // default = 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating, max = 5 }) => {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: max }).map((_, index) => {
        const starValue = index + 1;
        const fillPercentage =
          rating >= starValue
            ? 100
            : rating > starValue - 1
            ? (rating - (starValue - 1)) * 100
            : 0;

        return (
          <div key={index} className="relative w-5 h-5">
            {/* Empty star (gray outline) */}
            <Star className="absolute text-gray-300 w-5 h-5" />

            {/* Filled star (yellow overlay clipped by width) */}
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <Star className="text-yellow-400 w-5 h-5" fill="currentColor" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
