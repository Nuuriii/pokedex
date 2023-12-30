export const bgCheck = (type: string) => {
  switch (type) {
    case 'grass':
      return `bg-[#74CB48] dark:bg-[#163008]`;
    case 'poison':
      return `bg-[#A43E9E] dark:bg-[#4a1b47]`;
    case 'normal':
      return `bg-[#AAA67F] dark:bg-[#363420]`;
    case 'fire':
      return `bg-[#F57D31] dark:bg-[#4d270f]`;
    case 'water':
      return `bg-[#6493EB] dark:bg-[#1a2a47]`;
    case 'fighting':
      return `bg-[#C12239] dark:bg-[#520e18]`;
    case 'flying':
      return `bg-[#A891EC]`;
    case 'ground':
      return `bg-[#DEC16B] dark:bg-[#453c20]`;
    case 'rock':
      return `bg-[#B69E31]`;
    case 'bug':
      return `bg-[#A7B723] dark:bg-[#2a2e08]`;
    case 'ghost':
      return `bg-[#70559B]`;
    case 'steel':
      return `bg-[#B7B9D0]`;
    case 'electric':
      return `bg-[#F9CF30] dark:bg-[#332a09]`;
    case 'psychic':
      return `bg-[#FB5584]`;
    case 'ice':
      return `bg-[#9AD6DF]`;
    case 'dragon':
      return `bg-[#7037FF]`;
    case 'dark':
      return `bg-[#75574C]`;
    case 'fairy':
      return `bg-[#E69EAC] dark:bg-[#422d31]`;
    default:
      return `bg-[#666666]`;
  }
};
