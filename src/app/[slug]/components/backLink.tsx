import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { BackLinkProps } from '@/app/commons/constant/interface';
import ThemeSwitch from '@/app/commons/element/themeSwitcher';
import { bgCheck } from '@/app/commons/element/bgType';
import { bgStatValue } from '@/app/commons/element/bgStatsValue';

export function BackLink({ pokemon, pokemonType }: BackLinkProps) {
  const bgTheme = bgStatValue(pokemonType);
  return (
    <div className="flex justify-between w-full md:px-[2rem] mb-[2rem]">
      <Link
        className="text-white md:text-neutral-700 dark:text-neutral-200 text-[1.5rem] font-[700] flex items-center"
        href={'/'}
      >
        <FiArrowLeft size={28} />
        <span className="ml-[0.5rem]">{pokemon}</span>
      </Link>
      <ThemeSwitch bgColor={`md:hidden bg-white`} />
      <ThemeSwitch
        bgColor={`hidden text-white dark:text-black md:flex ${bgTheme}`}
      />
    </div>
  );
}
