"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { searchPokemon } from "../api/apiCall";
import Image from "next/image";
import { PathProps } from "../commons/constant/interface";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { GiPerspectiveDiceSix, GiWeight, GiLawStar } from "react-icons/gi";
import { LiaWeightHangingSolid, LiaRulerVerticalSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";

export default function Page() {
  const [pokeName, setPokename] = useState<PathProps>({
    name: "",
    id: 1,
    types: [{ type: { name: "" } }],
    weight: 0,
    height: 0,
    base_experience: 0,
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

  const checkType = (element: string, type: string) => {
    switch (type) {
      case "grass":
        return `${element}-[#74CB48]`;
      case "poison":
        return `${element}-[#A43E9E]`;
      case "normal":
        return `${element}-[#AAA67F]`;
      case "fire":
        return `${element}-[#F57D31]`;
      case "water":
        return `${element}-[#6493EB]`;
      case "fighting":
        return `${element}-[#C12239]`;
      case "flying":
        return `${element}-[#A891EC]`;
      case "ground":
        return `${element}-[#DEC16B]`;
      case "rock":
        return `${element}-[#B69E31]`;
      case "bug":
        return `${element}-[#A7B723]`;
      case "ghost":
        return `${element}-[#70559B]`;
      case "steel":
        return `${element}-[#B7B9D0]`;
      case "electric":
        return `${element}-[#F9CF30]`;
      case "psychic":
        return `${element}-[#FB5584]`;
      case "ice":
        return `${element}-[#9AD6DF]`;
      case "dragon":
        return `${element}-[#7037FF]`;
      case "dark":
        return `${element}-[#75574C]`;
      case "fairy":
        return `${element}-[#E69EAC]`;
      default:
        return `${element}-[#666666]`;
    }
  };

  const textType = (type: string) => {
    switch (type) {
      case "grass":
        return `text-[#74CB48]`;
      case "poison":
        return `text-[#A43E9E]`;
      case "normal":
        return `text-[#AAA67F]`;
      case "fire":
        return `text-[#F57D31]`;
      case "water":
        return `text-[#6493EB]`;
      case "fighting":
        return `text-[#C12239]`;
      case "flying":
        return `text-[#A891EC]`;
      case "ground":
        return `text-[#DEC16B]`;
      case "rock":
        return `text-[#B69E31]`;
      case "bug":
        return `text-[#A7B723]`;
      case "ghost":
        return `text-[#70559B]`;
      case "steel":
        return `text-[#B7B9D0]`;
      case "electric":
        return `text-[#F9CF30]`;
      case "psychic":
        return `text-[#FB5584]`;
      case "ice":
        return `text-[#9AD6DF]`;
      case "dragon":
        return `text-[#7037FF]`;
      case "dark":
        return `text-[#75574C]`;
      case "fairy":
        return `text-[#E69EAC]`;
      default:
        return `text-[#666666]`;
    }
  };

  console.log(pokeName);
  return (
    <main
      className={`${checkType(
        "bg",
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
                "bg",
                item.type.name
              )} py-[0.2rem] px-[1rem] mr-[0.5rem] rounded-[3rem] font-[700] text-white`}
              key={index}
            >
              {capitalizeFirstLetter(item.type.name)}
            </h1>
          ))}
        </div>
        <h1
          className={`${textType(
            pokeName.types[0].type.name
          )} text-[1.1rem] text-center font-[700] my-[1rem]`}
        >
          About
        </h1>
        <div className="flex justify-center pb-[1rem]">
          <div className="flex flex-col items-center px-[1.2rem] border-r-2 border-solid border-neutral-200">
            <div className="flex items-center">
              <LiaWeightHangingSolid
                className="text-[#1D1D1D] mr-[0.5rem]"
                size={20}
              />
              <span className="text-[#1D1D1D]">{pokeName.weight / 10} kg</span>
            </div>
            <h3 className="mt-[0.5rem] text-[#666666]">Weight</h3>
          </div>
          <div className="flex flex-col items-center px-[1.2rem] border-r-2 border-solid border-neutral-200">
            <div className="flex items-center">
              <LiaRulerVerticalSolid
                className="text-[#1D1D1D] mr-[0.5rem]"
                size={20}
              />
              <span className="text-[#1D1D1D]">{pokeName.height / 10} m</span>
            </div>
            <h3 className="mt-[0.5rem] text-[#666666]">Height</h3>
          </div>
          <div className="flex flex-col items-center px-[1.2rem]">
            <div className="flex items-center">
              <CiStar className="text-[#1D1D1D] mr-[0.5rem]" size={24} />
              <span className="text-[#1D1D1D]">{pokeName.base_experience}</span>
            </div>
            <h3 className="mt-[0.5rem] text-[#666666]">Base Exp</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
