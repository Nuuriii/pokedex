import TitleIcon from "../commons/element/titleIcon";
import SearchUi from "../commons/element/searchUi";
import ThemeSwitch from "../commons/element/themeSwitcher";

export default function Header() {
  return (
    <div className="w-full px-[1rem] mb-[2rem]">
      <TitleIcon />
      <div className="mt-[1rem] flex items-center justify-between">
        <SearchUi />
        <ThemeSwitch />
      </div>
    </div>
  );
}
