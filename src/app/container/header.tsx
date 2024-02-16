import TitleIcon from '@/app/commons/element/titleIcon';
import SearchUi from '@/app/commons/element/searchUi';
import ThemeSwitch from '@/app/commons/element/themeSwitcher';

export default function Header() {
  return (
    <div className="w-full sm:w-[30rem] px-[1rem] mb-[2rem]">
      <TitleIcon />
      <div className="mt-[1rem] flex items-center justify-between">
        <SearchUi />
        <ThemeSwitch bgColor="bg-white text-black" />
      </div>
    </div>
  );
}
