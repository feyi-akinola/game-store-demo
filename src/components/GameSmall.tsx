import type { Game } from "../sections/Main";
import StarRating from "./StarRating";
import GenreTag from "./GenreTag";

const GameSmall = ({ game } : { game: Game }) => {
  return (
    <div className="flex items-center gap-4 group cursor-pointer">
      {/* Image */}
      <div className="min-w-24 h-34 rounded-lg overflow-hidden group ">
        <div
          className="image-hover w-full h-full"
          style={{ backgroundImage: `url(${game.image})` }}>

        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold truncate w-full min-w-0">{game.title}</h3>
        <StarRating rating={game.rating} />
        <div className="flex items-center gap-2">
          <p className="text-purple-400/50 line-through">${game.price}</p>
          <p className=" text-purple-400 font-bold">${game.discountedPrice}</p>
        </div>
        {
          game.genres.length > 0 && (
            <div className="flex items-center gap-2">
              {
                game.genres.slice(0, 2).map((genre, index) => (
                  <GenreTag key={index} genre={genre} />
                ))
              }

              {
                game.genres.length > 2 && (
                  <span className="text-white/80 text-xs font-semibold">
                    + {game.genres.length - 2}
                  </span>
                )
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default GameSmall;