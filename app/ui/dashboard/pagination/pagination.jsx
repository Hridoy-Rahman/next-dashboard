"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const prev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const next = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
      replace(`${pathname}?${params}`)
  };

  return (
    <div className="flex justify-between">
      <button
        className="text-gray-700 bg-white p-1 rounded-md"
        disabled={!prev}
        onClick={()=>handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className="bg-white text-black p-1 rounded-md"
        disabled={!next}
        onClick={()=>handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
