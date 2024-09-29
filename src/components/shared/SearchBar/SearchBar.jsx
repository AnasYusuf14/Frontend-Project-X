const SearchBar = () => {
  return (
    <div className="bg-black p-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Lists"
          className="w-full bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none"
        />
        <svg
          className="absolute top-2 right-4 text-gray-400 w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m0 0a8.5 8.5 0 1112 12l-4.35-4.35z"
          />
        </svg>
      </div>
    </div>
  );
};
export default SearchBar;
