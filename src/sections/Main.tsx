import DiscountIcon from "../assets/svg/discount.svg?react";
import BattlefieldLogo from "../assets/svg/battlefield-6-logo.svg?react";
import StarRating from "../components/StarRating";

interface Game {
  title: string;
  description: string;
  image: string;
  price: number;
  discountedPrice: number;
  rating: number;
  logo?: React.ReactNode | null;
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
      logo: <BattlefieldLogo className="w-auto h-14 fill-white" />,
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
      title: "The Witcher 3: Wild Hunt",
      description: "Action-packed first-person shooter",
      image: "/images/witcher-3.jpg",
      price: 100,
      discountedPrice: 80,
      rating: 4.5,
      genres: ["Adventure", "Open World", "Single Player"],
    },
    {
      title: "The Last of Us Part II",
      description: "Action-packed first-person shooter",
      image: "/images/last-of-us-ii.jpg",
      price: 100,
      discountedPrice: 80,
      rating: 4,
      genres: ["Action", "Adventure", "Single Player"],
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
    <section className="w-full max-w-[2000px] mx-auto p-16 flex gap-10">
      { /* Featured Game */ }
      <div className="relative h-160 flex-7 rounded-2xl overflow-hidden group
        cursor-pointer">
        {/* Background layer (scales on hover) */}
        <div
          className="absolute inset-0 image-hover"
          style={{ backgroundImage: "url('/images/battlefield-6.webp')" }}
        >
        </div>

        {/* Overlay and content */}
        <div className="relative z-10 w-full h-full flex flex-col items-start
          justify-end gap-4 bg-linear-to-t from-black/50 to-transparent p-10
          rounded-2xl">
          <StarRating rating={games[0].rating} />
          {games[0].logo}
          <p className="text-lg font-semibold text-white/80">
            {games[0].description}
          </p>
          <button className="button">Buy Now</button>
        </div>
      </div>


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
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
};
