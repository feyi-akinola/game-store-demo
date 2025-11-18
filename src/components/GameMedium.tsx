import type { Game } from "../sections/Main";
import StarRating from "./StarRating";

export default function GameMedium({ game, index }: { game: Game, index?: number }) {
  return (
    <div className="relative flex-1 flex flex-col gap-2 group cursor-pointer group min-w-0">
      <div className="aspect-9/14 rounded-lg overflow-hidden">
        {/* Image */}
        <div
          className={`w-full rounded-lg image-hover`}
          style={{ backgroundImage: `url(${game.image})` }}>
        </div>
      </div>

      {/* Details */}
      <h3 className="font-bold truncate w-full min-w-0">{game.title}</h3>
      <div className="w-full flex items-center justify-between">
        <div className="w-full flex items-center justify-between">
          <StarRating rating={game.rating} />
          <p className="text-purple-400 font-bold">${game.discountedPrice}</p>
        </div>
      </div>

      {index !== undefined && index !== null && (
        <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full bg-white
          z-999 flex items-center justify-center shadow-md group-hover:bg-amber-400
          transition-all duration-200">
          <p className="text-black text-xl font-bold">{index + 1}</p>
        </div>
      )}
    </div>
  );
};