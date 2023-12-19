import Image from "next/image";
import Search from "@/app/assets/search.svg";
import Close from "@/app/assets/close.svg";

export default function SearchUi() {
  return (
    <div>
      <label htmlFor="">
        <Image src={Search} alt="" />
      </label>
      <input type="text" />
      <Image src={Close} alt="" />
    </div>
  );
}
