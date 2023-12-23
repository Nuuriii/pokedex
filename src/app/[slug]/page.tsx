"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { searchPokemon } from "../api/apiCall";
import { PathProps } from "../commons/constant/interface";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { bgCheck } from "../commons/element/bgType";
import { textType } from "../commons/element/textType";
import { statsText } from "../commons/element/statsText";
import { getDescription } from "../api/apiCall";
import PokemonImages from "./components/images";
import StatsInformation from "../commons/element/containerStats";
import AboutInformation from "./components/aboutInformation";

export default function Page() {
  const [pokeName, setPokename] = useState<PathProps>({
    name: "",
    id: 1,
    types: [{ type: { name: "" } }],
    weight: 0,
    height: 0,
    base_experience: 0,
    stats: [{ base_stat: 0, stat: { name: "" } }],
  });
  const pathName = usePathname();
  const pokePath = pathName.split("/")[1];
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchPokemon();
    fetchDescription();
  }, [pokePath, pokeName.id]);

  const fetchDescription = async () => {
    try {
      const data = await getDescription(pokeName.id);
      const description = data.flavor_text_entries[6].flavor_text;
      setDescription(description);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPokemon = async () => {
    try {
      const data = await searchPokemon(pokePath);
      setPokename(data);
    } catch (error) {
      console.log(error);
    }
  };

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  let inputStr = capitalizeFirstLetter(pokeName.name);

  return (
    <main
      className={`${bgCheck(
        pokeName.types[0].type.name
      )} h-full px-[0.5rem] py-[1rem]`}
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
        <PokemonImages index={pokeName.id} />
      </div>
      <div className="bg-white rounded-[0.7rem] mt-[11rem] pt-[2rem] pb-[1rem]">
        <div className="mt-[2rem] flex justify-center items-center">
          {pokeName.types.map((item, index) => (
            <h1
              className={`${bgCheck(
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
        <AboutInformation
          weight={pokeName.weight}
          height={pokeName.height}
          exp={pokeName.base_experience}
        />
        <p className="mt-[1rem] px-[2rem] text-justify text-[#1D1D1D]">
          {description.split("").join("")}
        </p>
        <h1
          className={`${textType(
            pokeName.types[0].type.name
          )} text-[1.1rem] text-center font-[700] my-[1rem]`}
        >
          Base Stats
        </h1>
        <div className="flex w-full flex-col items-center">
          {pokeName.stats.map((item, index) => (
            <div className="flex items-center w-[90%]" key={index}>
              <h1
                className={`${textType(
                  pokeName.types[0].type.name
                )} font-[700] pr-[1rem] border-r-2 border-solid border-neutral-400 w-[15%] mr-[1rem]`}
              >
                {statsText(item.stat.name)}
              </h1>
              <div className="flex items-center w-[80%]">
                <p className="mr-[0.5rem] w-[10%]">{item.base_stat}</p>
                <StatsInformation
                  type={pokeName.types[0].type.name}
                  baseStats={item.base_stat}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
