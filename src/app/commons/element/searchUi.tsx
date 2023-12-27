'use client';
import { useState, useEffect } from 'react';
import { SearchProps } from '../constant/interface';
import Image from 'next/image';
import { IoSearchOutline } from 'react-icons/io5';
import Close from '@/app/assets/close.svg';
export let searchValue = '';
import { CgClose } from 'react-icons/cg';

export default function SearchUi({ onSearch }: SearchProps) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleSearch = async () => {
      onSearch(search);
    };

    handleSearch();
  }, [search, onSearch]);

  const deleteSearching = () => {
    setSearch('');
  };

  //console.log(search);
  return (
    <div
      className={`w-[85%] bg-white flex items-center rounded-[3rem] h-[2.5rem] px-[1rem] ${
        search === '' ? 'shadow-[_0px_1px_3px_1px_rgba(0,0,0,0.25)_inset]' : ''
      }`}
    >
      <label htmlFor="search">
        <IoSearchOutline
          className="text-[#DC0A2D] dark:text-neutral-800 mr-[0.5rem]"
          size={20}
        />
      </label>
      <input
        className="w-[70%] text-[#666666] bg-inherit mr-[0.5rem] focus:outline-none"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        id="search"
      />
      <button
        onClick={deleteSearching}
        className={`${
          search === '' ? 'hidden' : 'flex'
        } justify-center items-center h-[2rem] w-[2rem] rounded-full hover:bg-red-100 dark:hover:bg-neutral-200`}
      >
        <CgClose size={20} className={`text-[#DC0A2D] dark:text-neutral-800`} />
      </button>
    </div>
  );
}
