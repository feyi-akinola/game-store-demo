import StarRating from "./StarRating";
import GenreTag from "./GenreTag";
import type { Game } from "../sections/Main";

interface GameXLargeProps {
  game: Game;
  height: number;
  aspect?: number;
}

export default function GameXLarge({ game, height, aspect }: GameXLargeProps) {
  return (
    <div
      className="w-full relative flex-7 rounded-2xl overflow-hidden group
      cursor-pointer"
      style={{ height: `${height * 4}px`, aspectRatio: aspect ? `${aspect}` : undefined }}>
      {/* Background layer (scales on hover) */}
      <div
        className="absolute inset-0 image-hover"
        style={{ backgroundImage: `url(${game.image})` }}
      >
      </div>

      {/* Overlay and content */}
      <div
        className="relative z-10 w-full h-full flex flex-col items-start
        justify-end gap-4 bg-linear-to-t from-black/50 to-transparent p-10
        rounded-2xl"
        style={{
          padding: height < 130 ? "24px" : undefined,
          background:
            height < 130
              ? "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%)"
              : undefined,
          gap: height < 130 ? "8px" : undefined,
        }}>
        <StarRating rating={game.rating} />
        {
          game.logo
            ? game.logo
            : <>
                <p className="text-2xl xl:text-3xl font-bold text-white">
                  {game.title}
                </p>
                <p className="text-white/80 text-sm">
                  {game.description}
                </p>
              </>
        }
        {
          height > 120 && (
            <>
              <p className="mt-2 font-semibold text-white/80">
                {game.description}
              </p>
              <button className="button">Buy Now</button>
            </>
          )
        }

        <div className="flex items-center gap-2">
          {
            game.genres.map((genre, index) =>
              <GenreTag key={index} genre={genre} />)
          }
        </div>
      </div>
    </div>
  );
};  