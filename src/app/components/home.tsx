"use client";
import { useState, useEffect } from "react";
import { getPokemon } from "@/app/api/apiCall";
import Image from "next/image";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState({ results: [{ name: "" }] });
  let total = 2;

  useEffect(() => {
    fetchData();
  }, [pokemon]);

  const fetchData = async () => {
    try {
      const data = await getPokemon(total);
      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {pokemon.results.map((item: { name: string }, index: number) => (
        <div key={index}>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              index + 1
            }.png`}
            alt=""
            width={20}
            height={15}
            sizes="100vw"
            style={{
              width: "auto",
              height: "8rem",
            }}
          />

          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
}
