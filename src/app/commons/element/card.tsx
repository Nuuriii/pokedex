import Image from "next/image";

interface CardProps {
  name: string;
  index: number;
}

export default function Card({ name, index }: CardProps) {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  let inputStr = capitalizeFirstLetter(name);

  return (
    <div className="dark:bg-white h-[9rem] w-[7rem] relative overflow-hidden flex items-end rounded-[0.7rem] dark:shadow-[_0px_1px_3px_1px_rgba(182,176,76,0.2)] shadow-[_0px_1px_3px_1px_rgba(0,0,0,0.20)]">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`}
        alt=""
        className="absolute top-[18%] left-[10%]"
        width={20}
        height={15}
        sizes="100vw"
        style={{
          width: "auto",
          height: "5rem",
        }}
      />
      <div className="h-[40%] w-full bg-neutral-200 flex justify-center dark:text-black dark:bg-neutral-200 items-end pb-[1rem]">
        <h3>{inputStr}</h3>
      </div>
    </div>
  );
}
