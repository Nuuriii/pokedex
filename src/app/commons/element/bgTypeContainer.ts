export const bgTypeContainer = (type: string) => {
  switch (type) {
    case 'grass':
      return `bg-[#74CB48]`;
    case 'poison':
      return `bg-[#A43E9E]`;
    case 'normal':
      return `bg-[#AAA67F]`;
    case 'fire':
      return `bg-[#F57D31] `;
    case 'water':
      return `bg-[#6493EB]`;
    case 'fighting':
      return `bg-[#C12239]`;
    case 'flying':
      return `bg-[#A891EC]`;
    case 'ground':
      return `bg-[#DEC16B]`;
    case 'rock':
      return `bg-[#B69E31]`;
    case 'bug':
      return `bg-[#A7B723]`;
    case 'ghost':
      return `bg-[#70559B]`;
    case 'steel':
      return `bg-[#B7B9D0]`;
    case 'electric':
      return `bg-[#F9CF30]`;
    case 'psychic':
      return `bg-[#FB5584]`;
    case 'ice':
      return `bg-[#9AD6DF]`;
    case 'dragon':
      return `bg-[#7037FF]`;
    case 'dark':
      return `bg-[#75574C]`;
    case 'fairy':
      return `bg-[#E69EAC]`;
    default:
      return `bg-[#666666]`;
  }
};
