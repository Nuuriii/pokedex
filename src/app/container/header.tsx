import { useState, useEffect } from 'react';
import TitleIcon from '../commons/element/titleIcon';
import SearchUi from '../commons/element/searchUi';
import ThemeSwitch from '../commons/element/themeSwitcher';
import { SearchProps } from '../commons/constant/interface';

export default function Header({ onSearch }: SearchProps) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    handleSearch();
  }, [search]);

  const handleSearch = async () => {
    onSearch(search);
  };

  return (
    <div className="w-full px-[1rem] mb-[2rem]">
      <TitleIcon />
      <div className="mt-[1rem] flex items-center justify-between">
        <SearchUi onSearch={(str: string) => setSearch(str)} />
        <ThemeSwitch />
      </div>
    </div>
  );
}
