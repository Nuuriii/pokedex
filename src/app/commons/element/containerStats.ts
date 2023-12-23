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
      return `bg-[#e6a5b7]`;
    case "ice":
      return `bg-[#bee3e8]`;
    case "dragon":
      return `bg-[#a396eb]`;
    case "dark":
      return `bg-[#b39388]`;
    case "fairy":
      return `bg-[#f7e1e5]`;
    default:
      return "bg-neutral-300";
  }
};
