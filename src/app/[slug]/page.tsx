"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { searchPokemon } from "../api/apiCall";
import Image from "next/image";
import { PathProps } from "../commons/constant/interface";

export default function Page() {
  const [pokeName, setPokename] = useState<PathProps>({
    name: "",
    id: 1,
    types: [{ type: { name: "" } }],
    weight: 0,
    height: 0,
  });
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
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeName.id}.png`}
        alt=""
        className=""
        width={20}
        height={15}
        sizes="100vw"
        style={{
          width: "auto",
          height: "8rem",
        }}
      />
      <div>
        {pokeName.types.map((item, index) => (
          <h1 key={index}>{item.type.name}</h1>
        ))}
      </div>
      <p>{pokeName.weight / 10}</p>
      <p>{pokeName.height / 10}</p>
    </div>
  );
}
