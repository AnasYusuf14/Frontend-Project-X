import { IoSearch } from "react-icons/io5";
import React from "react";

const SearchInput = ({ trendName }) => {
  return (
    <div className="relative flex items-center mt-2">
      <input
        type="text"
        value={trendName || ""}
        placeholder="Search Settings"
        className="w-full max-w-900 mx-2 my-1 p-[6px] indent-8 rounded-full bg-black border-4 border-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <IoSearch className="absolute left-6 text-gray-500 text-[20px]" />
    </div>
  );
};

export default SearchInput;
