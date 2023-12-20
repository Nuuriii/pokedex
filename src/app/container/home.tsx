"use client";
import { useState, useEffect } from "react";
import { getPokemon } from "@/app/api/apiCall";
import Card from "../commons/element/card";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState({ results: [{ name: "" }] });
  let total = 21;

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
    <div className="bg-white dark:bg-neutral-800 w-full px-[1rem] py-[2rem] rounded-[1rem]">
      <div className="flex flex-wrap gap-4 justify-center">
        {pokemon.results.map((item: { name: string }, index: number) => (
          <Card key={index} index={index} name={item.name} />
        ))}
      </div>
    </div>
  );
}
