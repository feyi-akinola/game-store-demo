import { BadgePlus  } from "lucide-react";
import type { Game } from "./Main";
import GameXLarge from "../components/GameXLarge";

export default function NewReleases() {
  const games: Game[] = [
    {
      title: "Arc Raiders",
      description: "High tension extraction shooter with dangers ranging from deadly machines to other Raiders.",
      image: "/images/arc-raiders.jpg",
      price: 100,
      discountedPrice: 80,
      rating: 4.6,
      genres: ["Open World", "Single Player"],
    },
    {
      title: "Anno 117: Pax Romana",
      description: "Shape the Roman Empire in this genre-defining strategic builder game.",
      image: "/images/anno-117-pax-romana.jpg",
      price: 100,
      discountedPrice: 80,
      rating: 4.4,
      genres: ["Strategy", "Simulation"],
    },
  ];
  
  return (
    <section className="w-full max-w-[2000px] mx-auto p-16 flex flex-col gap-10
      justify-start items-start">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-start gap-2">
          <BadgePlus  className="w-6 h-6 stroke-white/40 fill-white/20" />
          <h2 className="text-xl font-bold">New Releases</h2>
        </div>

        <button className="button-alt">View All</button>
      </div>

      { /* Game List */ }
      <div className="w-full grid grid-cols-2 gap-12">
        {
          games.map((game, index) =>
            <GameXLarge key={index} game={game} height={120} />
          )
        }
      </div>
    </section>
  );
}