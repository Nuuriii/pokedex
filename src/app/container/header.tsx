import { useState, useEffect } from 'react';
import TitleIcon from '@/app/commons/element/titleIcon';
import SearchUi from '@/app/commons/element/searchUi';
import ThemeSwitch from '@/app/commons/element/themeSwitcher';
import { SearchProps } from '@/app/commons/constant/interface';

export default function Header({ onSearch }: SearchProps) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    handleSearch();
  }, [search]);

  const handleSearch = async () => {
    onSearch(search);
  };

  return (
    <div className="w-full sm:w-[30rem] px-[1rem] mb-[2rem]">
      <TitleIcon />
      <div className="mt-[1rem] flex items-center justify-between">
        <SearchUi onSearch={(str: string) => setSearch(str)} />
        <ThemeSwitch bgColor="bg-white text-black" />
      </div>
    </div>
  );
}
