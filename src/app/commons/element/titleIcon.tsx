import Image from "next/image";
import Pokeball from "@/app/assets/pokeball.svg";
import Pokedex from "@/app/assets/Pokédex.svg";

export default function TitleIcon() {
  return (
    <div>
      <Image src={Pokeball} alt="" />
      <Image src={Pokedex} alt="" />
    </div>
  );
}
