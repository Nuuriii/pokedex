import TitleIcon from "../commons/element/titleIcon";
import SearchUi from "../commons/element/searchUi";

export default function Header() {
  return (
    <div className="w-full px-[1rem] mb-[1rem]">
      <TitleIcon />
      <SearchUi />
    </div>
  );
}
