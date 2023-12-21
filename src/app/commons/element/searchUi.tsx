"use client";
import { useState, useEffect } from "react";
import { SearchProps } from "../constant/interface";
import Image from "next/image";
import Search from "@/app/assets/search.svg";
import { FaSearch } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import Close from "@/app/assets/close.svg";

export let searchValue = "";

export default function SearchUi({ onSearch }: SearchProps) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleSearch = async () => {
      onSearch(search);
    };

    handleSearch();
  }, [search, onSearch]);

  //console.log(search);
  return (
    <div className="w-[85%] bg-white flex items-center rounded-[3rem] h-[2.5rem] px-[1rem]">
      <label htmlFor="search">
        <IoSearchOutline
          className="text-[#DC0A2D] dark:text-neutral-800 mr-[0.5rem]"
          size={20}
        />
      </label>
      <input
        className="w-[70%] text-[#666666] bg-inherit mr-[0.5rem]"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        id="search"
      />
      <Image className="hidden h-[1.5rem] w-auto" src={Close} alt="" />
    </div>
  );
}
