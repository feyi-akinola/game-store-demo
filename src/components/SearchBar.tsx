import SearchIcon from "../assets/svg/search.svg?react";

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
        className="w-full outline-none px-6 text-purple-300 font-semi text-lg"
      >
      </input>

      <div
        className="absolute right-1 w-10 h-10 rounded-full bg-purple-800
          flex items-center justify-center cursor-pointer"
      >
        <SearchIcon className="w-5 h-5 fill-white" />
      </div>
    </div>
  );
};

export default SearchBar;