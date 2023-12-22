export const textType = (type: string) => {
  switch (type) {
    case "grass":
      return `text-[#74CB48]`;
    case "poison":
      return `text-[#A43E9E]`;
    case "normal":
      return `text-[#AAA67F]`;
    case "fire":
      return `text-[#F57D31]`;
    case "water":
      return `text-[#6493EB]`;
    case "fighting":
      return `text-[#C12239]`;
    case "flying":
      return `text-[#A891EC]`;
    case "ground":
      return `text-[#DEC16B]`;
    case "rock":
      return `text-[#B69E31]`;
    case "bug":
      return `text-[#A7B723]`;
    case "ghost":
      return `text-[#70559B]`;
    case "steel":
      return `text-[#B7B9D0]`;
    case "electric":
      return `text-[#F9CF30]`;
    case "psychic":
      return `text-[#FB5584]`;
    case "ice":
      return `text-[#9AD6DF]`;
    case "dragon":
      return `text-[#7037FF]`;
    case "dark":
      return `text-[#75574C]`;
    case "fairy":
      return `text-[#E69EAC]`;
    default:
      return `text-[#666666]`;
  }
};
