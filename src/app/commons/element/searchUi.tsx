'use client';
import { IoSearchOutline } from 'react-icons/io5';
import { CgClose } from 'react-icons/cg';
import type { RootState } from '@/app/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { searchPokemonByName } from '@/app/reducer/searchReducer';

export default function SearchUi() {
  const searchPokemon = useSelector(
    (state: RootState) => state.searchPokemon.search,
  );
  const dispatch = useDispatch();

  const deleteSearching = () => {
    dispatch(searchPokemonByName({ search: '' }));
  };

  const handleSearching = (e: any) => {
    dispatch(searchPokemonByName({ search: e.target.value }));
  };

  return (
    <div
      className={`w-[85%] bg-white flex items-center rounded-[3rem] h-[2.5rem] px-[1rem] ${
        searchPokemon === ''
          ? 'shadow-[_0px_1px_3px_1px_rgba(0,0,0,0.25)_inset]'
          : ''
      }`}
    >
      <label htmlFor="search">
        <IoSearchOutline
          data-testid="search-icon"
          className="text-[#DC0A2D] dark:text-neutral-800 mr-[0.5rem]"
          size={20}
        />
      </label>
      <input
        className="w-[90%] text-[#666666] bg-inherit mr-[0.5rem] focus:outline-none"
        type="text"
        value={searchPokemon}
        onChange={(e) => handleSearching(e)}
        placeholder="Search"
        id="search"
      />
      <button
        onClick={deleteSearching}
        className={`${
          searchPokemon === '' ? 'hidden' : 'flex'
        } justify-center items-center h-[2rem] w-[2rem] rounded-full hover:bg-red-100 dark:hover:bg-neutral-200`}
      >
        <CgClose size={20} className={`text-[#DC0A2D] dark:text-neutral-800`} />
      </button>
    </div>
  );
}
