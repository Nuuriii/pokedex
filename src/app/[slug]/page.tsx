"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { searchPokemon } from "../api/apiCall";
import Image from "next/image";
import { PathProps } from "../commons/constant/interface";
import Link from "next/link";

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
    <main
      className={`${
        pokeName.types[0].type.name === "grass" ? "bg-[#74CB48]" : ""
      } h-screen px-[0.5rem] py-[1rem]`}
    >
      <div className="relative flex flex-col items-center">
        <div>
          <Link className="text-white text-[2rem] font-[700]" href={"/"}>
            {pokeName.name}
          </Link>
        </div>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeName.id}.png`}
          alt=""
          className="absolute top-[3rem]"
          width={20}
          height={15}
          sizes="100vw"
          style={{
            width: "auto",
            height: "15rem",
          }}
        />
      </div>
      <div className="bg-white rounded-[0.7rem] mt-[13rem] pt-[3rem]">
        <div className="mt-[2rem]">
          {pokeName.types.map((item, index) => (
            <h1 key={index}>{item.type.name}</h1>
          ))}
        </div>
        <p>{pokeName.weight / 10}</p>
        <p>{pokeName.height / 10}</p>
      </div>
    </main>
  );
}
