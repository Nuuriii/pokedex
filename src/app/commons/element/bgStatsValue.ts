export const bgStatValue = (type: string) => {
  switch (type) {
    case 'grass':
      return `bg-[#74CB48] dark:bg-[#c0faa2]`;
    case 'poison':
      return `bg-[#A43E9E] dark:bg-[#f0aaec]`;
    case 'normal':
      return `bg-[#AAA67F] dark:bg-[#f2ecae]`;
    case 'fire':
      return `bg-[#F57D31] dark:bg-[#f0ae84]`;
    case 'water':
      return `bg-[#6493EB] dark:bg-[#81aaf7]`;
    case 'fighting':
      return `bg-[#C12239] dark:bg-[#fa415c]`;
    case 'flying':
      return `bg-[#A891EC]`;
    case 'ground':
      return `bg-[#DEC16B] dark:bg-[#fadb7f]`;
    case 'rock':
      return `bg-[#B69E31]`;
    case 'bug':
      return `bg-[#A7B723] dark:bg-[#ebf788]`;
    case 'ghost':
      return `bg-[#70559B]`;
    case 'steel':
      return `bg-[#B7B9D0]`;
    case 'electric':
      return `bg-[#F9CF30] dark:bg-[#fae69b]`;
    case 'psychic':
      return `bg-[#FB5584]`;
    case 'ice':
      return `bg-[#9AD6DF]`;
    case 'dragon':
      return `bg-[#7037FF]`;
    case 'dark':
      return `bg-[#75574C]`;
    case 'fairy':
      return `bg-[#E69EAC] dark:bg-[#f0afbc]`;
    default:
      return `bg-[#666666]`;
  }
};
