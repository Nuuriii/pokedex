import Image from 'next/image';
import Pokeball from '@/app/assets/pokeball.svg';
import Pokedex from '@/app/assets/Pokédex.svg';

export default function TitleIcon() {
  return (
    <div className="flex items-center">
      <Image
        className="mr-[1rem] h-[1.7rem] w-auto"
        src={Pokeball}
        alt="pokeball-icon"
      />
      <Image className="h-[1.7rem] w-auto" src={Pokedex} alt="pokedex-title" />
    </div>
  );
}
