'use client';
import { useState, useEffect } from 'react';
import { getPokemon } from '@/app/api/apiCall';
import Card from '@/app/commons/element/card';
import { setCookie, getCookie } from 'cookies-next';
import LoadBtn from '../commons/element/loadBtn';

export default function PokemonList({ propsName }: any) {
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
    <div className="bg-white dark:bg-neutral-800 w-full px-[1rem] py-[2rem] rounded-[1rem]">
      <div>
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
        ) : searchResult.length === 0 && propsName !== '' ? (
          <p className="text-center">{propsName} is not in Pokedex</p>
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
