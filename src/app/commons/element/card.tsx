import Link from 'next/link';
import Image from 'next/image';
import { CardProps } from '../constant/interface';
import DefaultImg from '@/app/assets/defaultImg.svg';

export default function Card({ name, index }: CardProps) {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  let inputStr = capitalizeFirstLetter(name);

  return (
    <Link
      className=" dark:bg-neutral-500 h-[10rem] w-[9rem] min-[430px]:h-[12rem] min-[430px]:w-[11rem] relative overflow-hidden flex items-end rounded-[0.7rem] dark:shadow-[_0px_1px_3px_1px_rgba(182,176,76,0.2)] shadow-[_0px_1px_3px_1px_rgba(0,0,0,0.20)]"
      href={`/${name}`}
    >
      <Image
        src={
          name === 'Pokemon Name'
            ? DefaultImg
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                index + 1
              }.png`
        }
        alt=""
        className="absolute top-[10%] left-[20%] h-[6rem] w-auto min-[430px]:h-[8rem]"
        width={20}
        height={15}
        sizes="100vw"
      />
      <div className="h-[40%] w-full bg-neutral-200 flex justify-center dark:text-black dark:bg-neutral-700 items-end pb-[1rem] rounded-t-[0.7rem]">
        <h3 className="dark:text-white font-medium">{inputStr}</h3>
      </div>
    </Link>
  );
}
