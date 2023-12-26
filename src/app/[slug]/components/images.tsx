import Image from 'next/image';
import { ImageProps } from '@/app/commons/constant/interface';
import { capitalizeFirstLetter } from '@/app/commons/element/capitalFirstLetter';
import { bgCheck } from '@/app/commons/element/bgType';
import TypePokemon from './typePokemon';

export default function PokemonImages({ index, types }: ImageProps) {
  return (
    <>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`}
        alt=""
        className="absolute top-[4rem] md:hidden"
        width={20}
        height={15}
        sizes="100vw"
        style={{
          width: 'auto',
          height: '13rem',
        }}
      />
      <div className="hidden md:flex flex-col">
        <div>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`}
            alt=""
            className="absolute top-[4rem]"
            width={20}
            height={15}
            sizes="100vw"
            style={{
              width: 'auto',
              height: '13rem',
            }}
          />
        </div>
        <div className="mt-[2rem] hidden justify-center items-center md:flex">
          {types.map((item, index) => (
            <TypePokemon
              key={index}
              bgColor={bgCheck(item.type.name)}
              typeName={capitalizeFirstLetter(item.type.name)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
