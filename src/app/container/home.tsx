'use client';
import { useState, useEffect } from 'react';
import { getPokemon } from '@/app/api/apiCall';
import Card from '../commons/element/card';
import { setCookie, getCookie } from 'cookies-next';

export default function PokemonList({ propsName }: any) {
  const [pokemon, setPokemon] = useState({ results: [{ name: '' }] });
  const [searchResult, setSearchResult] = useState([]);
  const [limit, setLimit] = useState(() => {
    const get = getCookie('pokemon-limit');
    return get === '' || get === null || get === undefined ? 20 : Number(get);
  });

  useEffect(() => {
    fetchData();
    handleSearch();
  }, [limit, propsName]);

  const handleSearch = async () => {
    if (!propsName) {
      setSearchResult([]);
      return;
    }

    try {
      const response = await getPokemon(limit);
      const filteredResults = response.results.filter((pokemon: any) =>
        pokemon.name.toLowerCase().startsWith(propsName.toLowerCase()),
      );
      setSearchResult(filteredResults);
    } catch (error) {
      console.log('Error searching Pokemon: ', error);
    }
  };

  const fetchData = async () => {
    try {
      const data = await getPokemon(limit);
      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addPokemon = () => {
    setLimit((prev) => prev + 20);
    setCookie('pokemon-limit', `${limit + 20}`, { maxAge: 60 * 60 * 24 });
  };

  console.log(limit);

  console.log(searchResult);

  return (
    <div className="bg-white dark:bg-neutral-800 w-full px-[1rem] py-[2rem] rounded-[1rem]">
      <div className="flex flex-wrap gap-4 justify-center">
        {searchResult.length > 0 ? (
          <>
            {searchResult.map((pokemon: any, index) => (
              <Card
                key={index}
                name={pokemon.name}
                index={Number(pokemon.url.split('/')[6] - 1)}
              />
            ))}
          </>
        ) : searchResult.length === 0 && propsName !== '' ? (
          <p>Hasil pencarian tidak ditemukan</p>
        ) : (
          <>
            {pokemon.results.map((item, index) => (
              <Card key={index} name={item.name} index={index} />
            ))}
          </>
        )}
      </div>
      <button onClick={addPokemon}>Load More</button>
    </div>
  );
}
