import DiscountIcon from "../assets/svg/discount.svg?react";
import BattlefieldLogo from "../assets/svg/battlefield-6-logo.svg?react";
import StarRating from "../components/StarRating";
import GameXLarge from "../components/GameXLarge";
import GenreTag from "../components/GenreTag";

export interface Game {
  title: string;
  description: string;
  image: string;
  price: number;
  discountedPrice: number;
  rating: number;
  logo?: React.ReactNode | string |null;
  genres: string[];
}

export default function Main() {
  const games: Game[] = [
    {
      title: "Battlefield 6",
      description: "It's the ultimate all-out warfare experience. Fight in high-intensity infantry combat. Rip through the skies in aerial dogfights.",
      image: "/images/battlefield-6.webp",
      price: 100,
      discountedPrice: 80,
      rating: 4.2,
      logo: <BattlefieldLogo className="w-auto h-12 fill-white" />,
      genres: ["Action", "Shooter", "Multiplayer"],
    },
    {
      title: "Red Dead Redemption 2",
      description: "Action-packed first-person shooter",
      image: "/images/rdr-2.jpg",
      price: 100,
      discountedPrice: 80,
      rating: 4.6,
      genres: ["Action", "Adventure", "Open World"],
    },
    {
      title: "Star Wars Jedi: Fallen Order",
      description: "A new Star Wars story",
      image: "/images/star-wars-jedi-fallen-order.png",
      price: 100,
      discountedPrice: 80,
      rating: 4.2,
      genres: ["Fantasy", "Adventure"],
    },
    {
      title: "The Last of Us Part II",
      description: "Action-packed first-person shooter",
      image: "/images/last-of-us-ii.jpg",
      price: 100,
      discountedPrice: 80,
      rating: 4,
      genres: ["Action", "Adventure"],
    },
    {
      title: "The Elder Scrolls V: Skyrim",
      description: "Action-packed first-person shooter",
      image: "/images/elder-scrolls-v.jpg",
      price: 100,
      discountedPrice: 80,
      rating: 4.5,
      genres: ["RPG", "Open World"],
    },
  ];

  return (
    <section className="w-full max-w-[2000px] mx-auto p-8 flex gap-10">
      { /* Featured Game */ }
      <GameXLarge game={games[0]} height={160} />


      { /* Discounted Games */ } 
      <div className="flex-3 flex flex-col h-160 gap-6">
        <div className="flex items-start gap-3">
          <DiscountIcon className="w-6 h-6 fill-white/30" />
          <h2 className="text-xl font-bold">
            Discounted Games
          </h2>
        </div>

        { /* Game List */ }
        <div className="game-list">
          {
            games.slice(1).map((game, index) => (
              <div key={index} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-24 h-34 rounded-lg overflow-hidden group">
                  <div
                    className="image-hover"
                    style={{ backgroundImage: `url(${game.image})` }}>

                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">{game.title}</h3>
                  <StarRating rating={game.rating} />
                  <div className="flex items-center gap-2">
                    <p className="text-purple-400/50 line-through">${game.price}</p>
                    <p className=" text-purple-400 font-bold">${game.discountedPrice}</p>
                  </div>
                  {
                    game.genres.length > 0 && (
                      <div className="flex items-center gap-2">
                        {
                          game.genres.map((genre, index) => (
                            <GenreTag key={index} genre={genre} />
                          ))
                        }
                      </div>
                    )
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
};
