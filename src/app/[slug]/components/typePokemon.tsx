import { TypePokemonProps } from "@/app/commons/constant/interface";

export default function TypePokemon({ bgColor, typeName }: TypePokemonProps) {
  return (
    <h1
      className={`${bgColor} py-[0.2rem] px-[1rem] mr-[0.5rem] rounded-[3rem] font-[700] text-white`}
    >
      {typeName}
    </h1>
  );
}
