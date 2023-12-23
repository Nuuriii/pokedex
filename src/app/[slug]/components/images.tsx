import Image from "next/image";
import { ImageProps } from "@/app/commons/constant/interface";

export default function PokemonImages({ index }: ImageProps) {
  return (
    <Image
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`}
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
  );
}
