"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { searchPokemon } from "../api/apiCall";
import Image from "next/image";
import { PathProps } from "../commons/constant/interface";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

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

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  let inputStr = capitalizeFirstLetter(pokeName.name);

  const checkType = (str: string) => {
    switch (str) {
      case "grass":
        return "bg-[#74CB48]";
      case "poison":
        return "bg-[#A43E9E]";
      case "normal":
        return "bg-[#AAA67F]";
      case "fire":
        return "bg-[#F57D31]";
      case "water":
        return "bg-[#6493EB]";
      case "fighting":
        return "bg-[#C12239]";
      case "flying":
        return "bg-[#A891EC]";
      case "ground":
        return "bg-[#DEC16B]";
      case "rock":
        return "bg-[#B69E31]";
      case "bug":
        return "bg-[#A7B723]";
      case "ghost":
        return "bg-[#70559B]";
      case "steel":
        return "bg-[#B7B9D0]";
      case "electric":
        return "bg-[#F9CF30]";
      case "psychic":
        return "bg-[#FB5584]";
      case "ice":
        return "bg-[#9AD6DF]";
      case "dragon":
        return "bg-[#7037FF]";
      case "dark":
        return "bg-[#75574C]";
      case "fairy":
        return "bg-[#E69EAC]";
      default:
        return "bg-[#666666]";
    }
  };
  console.log(pokeName);
  return (
    <main
      className={`${checkType(
        pokeName.types[0].type.name
      )} h-screen px-[0.5rem] py-[1rem]`}
    >
      <div className="relative flex flex-col items-center ml-[0.5rem]">
        <div className="flex justify-left w-full">
          <Link
            className="text-white text-[1.5rem] font-[700] flex items-center"
            href={"/"}
          >
            <FiArrowLeft size={28} />
            <span className="ml-[0.5rem]">{inputStr}</span>
          </Link>
        </div>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeName.id}.png`}
          alt=""
          className="absolute top-[4rem]"
          width={20}
          height={15}
          sizes="100vw"
          style={{
            width: "auto",
            height: "13rem",
          }}
        />
      </div>
      <div className="bg-white rounded-[0.7rem] mt-[11rem] pt-[2rem]">
        <div className="mt-[2rem] flex justify-center items-center">
          {pokeName.types.map((item, index) => (
            <h1
              className={`${checkType(
                item.type.name
              )} py-[0.2rem] px-[1rem] mr-[0.5rem] rounded-[3rem] font-[700] text-white`}
              key={index}
            >
              {capitalizeFirstLetter(item.type.name)}
            </h1>
          ))}
        </div>
        <p>{pokeName.weight / 10}</p>
        <p>{pokeName.height / 10}</p>
      </div>
    </main>
  );
}
