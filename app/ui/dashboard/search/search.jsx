import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-2 bg-[#2e374a] p-2 rounded-md">
      <MdSearch />
      <input
        className={`bg-transparent outline-none`}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
