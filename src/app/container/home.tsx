"use client";
import { useState, useEffect } from "react";
import { getPokemon } from "@/app/api/apiCall";
import Image from "next/image";
import Card from "../commons/element/card";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState({ results: [{ name: "" }] });
  let total = 20;

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
      <div className="grid grid-cols-3 gap-3">
        {pokemon.results.map((item: { name: string }, index: number) => (
          <Card key={index} index={index} name={item.name} />
        ))}
      </div>
    </div>
  );
}
