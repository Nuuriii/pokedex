"use client";
import { useState, useEffect } from "react";
import { getPokemon } from "@/app/api/apiCall";
import Image from "next/image";
import Card from "../commons/element/card";

export default function PokemonList({ propsName }: any) {
  const [pokemon, setPokemon] = useState({ results: [{ name: "" }] });
  const [searchResult, setSearchResult] = useState([]);
  let total = 60;

  useEffect(() => {
    fetchData();
    handleSearch();
  }, [total, propsName]);

  const handleSearch = async () => {
    if (!propsName) {
      setSearchResult([]);
      return;
    }

    try {
      const response = await getPokemon(total);
      const filteredResults = response.results.filter((pokemon: any) =>
        pokemon.name.toLowerCase().startsWith(propsName.toLowerCase())
      );
      setSearchResult(filteredResults);
    } catch (error) {
      console.log("Error searching Pokemon: ", error);
    }
  };

  const fetchData = async () => {
    try {
      const data = await getPokemon(total);
      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  };

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
                index={Number(pokemon.url.split("/")[6] - 1)}
              />
            ))}
          </>
        ) : searchResult.length === 0 && propsName !== "" ? (
          <p>Hasil pencarian tidak ditemukan</p>
        ) : (
          <>
            {pokemon.results.map((item, index) => (
              <Card key={index} name={item.name} index={index} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

// <div>
//   <h2>{searchResult.name}</h2>
//   <img src={searchResult.sprites.front_default} alt={searchResult.name} />
//   {/* Tampilkan informasi lainnya sesuai kebutuhan */}
// </div>;
