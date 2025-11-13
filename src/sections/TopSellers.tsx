import { Flame } from "lucide-react";
import type { Game } from "./Main";
import GameMedium from "../components/GameMedium";

export default function TopSellers() {
  const games: Game[] = [
    {
      title: "Grand Theft Auto V",
      description: "The most popular Grand Theft Auto game",
      image: "/images/gta-v.webp",
      price: 100,
      discountedPrice: 80,
      rating: 4.6,
      genres: ["Open World", "Single Player"],
    },
    {
      title: "Cyberpunk 2077",
      description: "Immerse yourself in the Cyberpunk universe, from the original storyline of Cyberpunk 2077 and its gripping spy-thriller expansion Phantom Liberty.",
      image: "/images/cyberpunk-2077.png",
      price: 100,
      discountedPrice: 80,
      rating: 4.4,
      genres: ["Action", "Adventure", "Open World", "Single Player"],
    },
    {
      title: "Black Myth: Wukong",
      description: "Enter a fascinating realm filled with the wonders and discoveries of ancient Chinese mythology!",
      image: "/images/black-myth-wukong.png",
      price: 100,
      discountedPrice: 80,
      rating: 4.8,
      genres: ["Action", "Adventure", "Open World", "Single Player"],
    },
    {
      title: "Red Dead Redemption 2",
      description: "Action-packed first-person shooter",
      image: "/images/rdr-2.jpg",
      price: 100,
      discountedPrice: 80,
      rating: 4.7,
      genres: ["Action", "Adventure", "Open World", "Single Player"],
    },
    {
      title: "Witcher 3: Wild Hunt",
      description: "A new Witcher story",
      image: "/images/witcher-3.jpg",
      price: 100,
      discountedPrice: 80,
      rating: 4.5,
      genres: ["Action", "Adventure", "Open World", "Single Player"],
    },
    {
      title: "Hogwarts Legacy",
      description: "A new Harry Potter story",
      image: "/images/hogwarts-legacy.png",
      price: 100,
      discountedPrice: 80,
      rating: 4.3,
      genres: ["Adventure", "Fantasy", "Open World", "Single Player"],
    },
  ];
  
  return (
    <section className="w-full max-w-[2000px] mx-auto p-16 flex flex-col gap-10
      justify-start items-start">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-start gap-2">
          <Flame className="w-6 h-6 stroke-red-500/40 fill-amber-500" />
          <h2 className="text-xl font-bold">Top Sellers</h2>
        </div>

        <button className="button-alt">View All</button>
      </div>

      { /* Game List */ }
      <div className="w-full flex justify-start gap-12">
        {
          games.map((game, index) =>
            <GameMedium key={index} game={game} index={index} />
          )
        }
      </div>
    </section>
  );
}