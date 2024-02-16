'use client';
import { useState, useEffect } from 'react';
import { getPokemon } from '@/app/api/apiCall';
import Card from '@/app/commons/element/card';
import { setCookie, getCookie } from 'cookies-next';
import LoadBtn from '../commons/element/loadBtn';
import type { RootState } from '@/app/store/store';
import { useSelector } from 'react-redux';

export default function PokemonList() {
  const [pokemon, setPokemon] = useState({
    results: [
      { name: 'bulbasaur' },
      { name: 'ivysaur' },
      { name: 'venusaur' },
      { name: 'charmander' },
      { name: 'charmeleon' },
      { name: 'charizard' },
    ],
  });
  const [searchResult, setSearchResult] = useState([]);
  const [limit, setLimit] = useState(() => {
    const get = getCookie('pokemon-limit');
    return get === '' || get === null || get === undefined ? 20 : Number(get);
  });
  const [loading, setLoading] = useState(false);
  const searchValue = useSelector(
    (state: RootState) => state.searchPokemon.search,
  );

  useEffect(() => {
    fetchData();
    handleSearch();
  }, [limit, searchValue]);

  const handleSearch = async () => {
    if (!searchValue) {
      setSearchResult([]);
      return;
    }

    try {
      const response = await getPokemon(limit);
      const filteredResults = response.results.filter((pokemon: any) =>
        pokemon.name.toLowerCase().startsWith(searchValue.toLowerCase()),
      );
      setSearchResult(filteredResults);
    } catch (error) {
      console.log('Error searching Pokemon: ', error);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getPokemon(limit);
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addPokemon = () => {
    setLimit((prev) => prev + 20);
    setCookie('pokemon-limit', `${limit + 20}`, { maxAge: 60 * 60 * 24 });
  };

  return (
    <div className="bg-white min-[1444px]:flex min-[1444px]:justify-center dark:bg-neutral-800 w-full px-[1rem] py-[2rem] rounded-[1rem]">
      <div className="min-[1444px]:w-[90rem]">
        {searchResult.length > 0 ? (
          <div className="flex flex-wrap gap-4 justify-center">
            {searchResult.map((pokemon: any, index) => (
              <Card
                key={index}
                name={pokemon.name}
                index={Number(pokemon.url.split('/')[6] - 1)}
              />
            ))}
          </div>
        ) : searchResult.length === 0 && searchValue !== '' ? (
          <p className="text-center">{searchValue} is not in Pokedex</p>
        ) : (
          <>
            <div className="flex flex-wrap gap-4 justify-center">
              {pokemon.results.map((item, index) => (
                <Card key={index} name={item.name} index={index} />
              ))}
            </div>
            <div className="flex justify-center mt-[2rem]">
              <LoadBtn onClick={addPokemon} loading={loading} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
