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
      return `bg-[#d8cef5]`;
    case "ground":
      return `bg-[#f7e8ba]`;
    case "rock":
      return `bg-[#fcefb1]`;
    case "bug":
      return `bg-[#e3e8bc]`;
    case "ghost":
      return `bg-[#aa95cc]`;
    case "steel":
      return `bg-[#d3d5eb]`;
    case "electric":
      return `bg-[#faf1cf]`;
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
