import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div
      className="relative flex items-center justify-center w-full rounded-full ml-12
        ring-2 ring-purple-500/30 hover:ring-purple-800 transition-all
        duration-200 max-w-100 p-2.5"
    >
      <input
        type="text"
        placeholder="Search for products"
        className="w-full outline-none px-6 text-purple-300 font-semi text-sm"
      >
      </input>

      <div
        className="absolute right-1 w-8 h-8 rounded-full bg-purple-800
          flex items-center justify-center cursor-pointer"
      >
        <Search className="w-4 h-4" />
      </div>
    </div>
  );
};

export default SearchBar;