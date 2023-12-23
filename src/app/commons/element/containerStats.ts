export const containerStats = (stats: string) => {
  switch (stats) {
    case "grass":
      return "bg-[#d6f5c6]";
    case "poison":
      return `bg-[#fcc5f9]`;
    case "normal":
      return `bg-[#dedcd1]`;
    case "fire":
      return `bg-[#fadbc8]`;
    case "water":
      return `bg-[#cfdefa]`;
    case "fighting":
      return `bg-[#facdd3]`;
    case "flying":
      return `bg-[#A891EC]`;
    case "ground":
      return `bg-[#DEC16B]`;
    case "rock":
      return `bg-[#B69E31]`;
    case "bug":
      return `bg-[#A7B723]`;
    case "ghost":
      return `bg-[#70559B]`;
    case "steel":
      return `bg-[#B7B9D0]`;
    case "electric":
      return `bg-[#F9CF30]`;
    case "psychic":
      return `bg-[#FB5584]`;
    case "ice":
      return `bg-[#9AD6DF]`;
    case "dragon":
      return `bg-[#7037FF]`;
    case "dark":
      return `bg-[#75574C]`;
    case "fairy":
      return `bg-[#E69EAC]`;
    default:
      return "bg-neutral-300";
  }
};
