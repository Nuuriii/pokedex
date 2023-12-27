import Image from 'next/image';
import { ImageProps } from '@/app/commons/constant/interface';
import { capitalizeFirstLetter } from '@/app/commons/element/capitalFirstLetter';
import { bgCheck } from '@/app/commons/element/bgType';
import TypePokemon from './typePokemon';
import { containerStats } from '@/app/commons/element/containerStats';
import DefaultImg from '@/app/assets/defaultImg.svg';

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
      <div className="hidden md:flex flex-col h-full">
        <div
          className={`rounded-[0.5rem] ${containerStats(types[0].type.name)}`}
        >
          <Image
            src={
              types[0].type.name === ''
                ? DefaultImg
                : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`
            }
            alt=""
            className="w-auto h-[20rem]"
            width={20}
            height={15}
            sizes="100vw"
          />
          <div className=" hidden justify-center items-center md:flex mb-[1rem]">
            {types.map((item, index) => (
              <TypePokemon
                key={index}
                bgColor={bgCheck(item.type.name)}
                typeName={capitalizeFirstLetter(item.type.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
