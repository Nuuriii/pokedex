import Link from 'next/link';
import Image from 'next/image';
import { CardProps } from '../constant/interface';
import DefaultImg from '@/app/assets/defaultImg.svg';
import { capitalizeFirstLetter } from './capitalFirstLetter';

export default function Card({ name, index }: CardProps) {
  return (
    <Link
      className={`bg-neutral-100 dark:bg-neutral-700 h-[10rem] w-[9rem] min-[430px]:h-[12rem] min-[430px]:w-[11rem] relative overflow-hidden flex items-end rounded-[0.7rem] dark:shadow-[_0px_1px_3px_1px_rgba(182,176,76,0.2)] shadow-[_0px_1px_3px_1px_rgba(0,0,0,0.20)] hover:bg-neutral-300 border-solid border-black duration-[0.2s] hover:scale-[1.05] dark:hover:bg-neutral-600`}
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
      <div
        className={`h-[40%] w-full  flex justify-center bg-neutral-300 dark:text-black dark:bg-neutral-600 items-end pb-[1rem] rounded-t-[0.7rem]`}
      >
        <h3 className="dark:text-white font-medium">
          {capitalizeFirstLetter(name)}
        </h3>
      </div>
    </Link>
  );
}
