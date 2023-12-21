"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { searchPokemon } from "../api/apiCall";

export default function Page() {
  const [pokeName, setPokename] = useState({});
  const pathName = usePathname();
  const pokePath = pathName.split("/")[1];

  useEffect(() => {
    fetchPokemon();
  }, [pokePath]);

  const fetchPokemon = async () => {
    try {
      const data = await searchPokemon(pokePath);
      setPokename(data);
    } catch (error) {}
  };

  console.log(pokeName);
  return (
    <div>
      <h1>{pokeName.name}</h1>
    </div>
  );
}
