"use client"
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) =>{
    const params = new URLSearchParams(searchParams);
    if(e.target.value){

      e.target.value.length >2 && params.set("q",e.target.value);
    }
    else{
      params.delete("q")
    }
    replace(`${pathname}?${params}`)
  }

  return (
    <div className="flex items-center gap-2 bg-[#2e374a] p-2 rounded-md">
      <MdSearch />
      <input
        className={`bg-transparent outline-none`}
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
