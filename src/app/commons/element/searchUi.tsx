import Image from "next/image";
import Search from "@/app/assets/search.svg";
import Close from "@/app/assets/close.svg";

export default function SearchUi() {
  return (
    <div className="w-[85%] bg-white flex items-center rounded-[3rem] h-[2.5rem] px-[1rem]">
      <label htmlFor="search">
        <Image className="h-[1.5rem] mr-[0.5rem] w-auto" src={Search} alt="" />
      </label>
      <input
        className="w-[70%] text-[#666666] bg-inherit mr-[0.5rem]"
        type="text"
        placeholder="Search"
        id="search"
      />
      <Image className="hidden h-[1.5rem] w-auto" src={Close} alt="" />
    </div>
  );
}
