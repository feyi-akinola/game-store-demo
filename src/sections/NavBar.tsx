// Components
import SearchBar from "../components/SearchBar";

// Icons
import CartIcon from "../assets/svg/cart.svg?react";
import UserIcon from "../assets/svg/account.svg?react";
import InstagramIcon from "../assets/svg/instagram.svg?react";
import TiktokIcon from "../assets/svg/tiktok.svg?react";
import DiscordIcon from "../assets/svg/discord.svg?react";
import ArrowDownIcon from "../assets/svg/arrow-down.svg?react";

interface NavLink {
  name: string;
  hasDropdown?: boolean;
}

interface Social {
  name: string;
  icon: React.ReactNode;
}

interface MenuItem {
  id: string;
  icon: React.ReactNode;
  hasBadge: boolean;
}

export default function NavBar() {
  const navLinks: NavLink[] = [
    { name: "Home", hasDropdown: true },
    { name: "Games", hasDropdown: true },
    { name: "Wishlist", hasDropdown: false },
  ];
  const socials: Social[] = [
    { 
      name: "Instagram",
      icon: <InstagramIcon className="w-4 h-4 fill-white/80" />
    },
    { 
      name: "Tiktok",
      icon: <TiktokIcon className="w-4 h-4 fill-white/80" />
    },
    { 
      name: "Discord",
      icon: <DiscordIcon className="w-4 h-4 fill-white/80" />
    },
  ];
  const menuItems: MenuItem[] = [
    { 
      id: "account", 
      icon: <UserIcon className="w-5 h-5 fill-white/80 group-hover:scale-115
        group-hover:fill-blue-400 transition-all duration-200" />,
      hasBadge: false,
    },
    { 
      id: "cart", 
      icon: <CartIcon className="w-5 h-5 fill-white/80 group-hover:scale-115
        group-hover:fill-red-400 transition-all duration-200" />,
      hasBadge: true,
    },
  ];

  return (
    <nav className="w-full bg-white/10 px-4 py-3">
      <div className="w-full max-w-[2000px] px-8 mx-auto flex justify-between items-center">
        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {
            navLinks.map((link, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-white font-semibold text-sm flex items-center gap-1
                  hover:text-purple-400 transition-all duration-200"
              >
                {link.name}

                {
                  link.hasDropdown && (
                    <ArrowDownIcon className="w-5 h-5 fill-white/60" />
                  )
                }
              </a>
            ))
          }
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Socials */}
        <div className="flex items-center gap-8">
          {
            socials.map((social, index) => (
              <a
                key={index}
                href="#"
                className="p-3 bg-purple-500/20 rounded-full text-white
                  hover:bg-white/20 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))
          }
        </div>

        {/* Account & Cart */}
        <div className="flex items-center gap-8">
          {
            menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="relative rounded-full group"
              >
                {item.icon}
                {
                  item.hasBadge && (
                    <div className="absolute -top-4 -right-4 bg-red-500 rounded-full
                      w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                  )
                }
              </a>
            ))
          }
        </div>
      </div>
    </nav>
  );
}