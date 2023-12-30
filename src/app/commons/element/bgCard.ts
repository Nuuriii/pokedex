export const bgCard = (type: string) => {
  switch (type) {
    case 'grass':
      return 'bg-[#d6f5c6] dark:bg-[#233819]';
    case 'poison':
      return `bg-[#fce3fb] dark:bg-[#573855]`;
    case 'normal':
      return `bg-[#dedcd1] dark:bg-[#423c1b]`;
    case 'fire':
      return `bg-[#fadbc8] dark:bg-[#754c32]`;
    case 'water':
      return `bg-[#cfdefa] dark:bg-[#394a6b]`;
    case 'fighting':
      return `bg-[#facdd3] dark:bg-[#423637]`;
    case 'flying':
      return `bg-[#d8cef5]`;
    case 'ground':
      return `bg-[#f7e8ba] dark:bg-[#595442]`;
    case 'rock':
      return `bg-[#fcefb1] dark:bg-[#635e45]`;
    case 'bug':
      return `bg-[#e3e8bc] dark:bg-[#3a3d24]`;
    case 'ghost':
      return `bg-[#aa95cc] dark:bg-[#4c425c]`;
    case 'steel':
      return `bg-[#d3d5eb] dark:bg-[#52535c]`;
    case 'electric':
      return `bg-[#faebb4] dark:bg-[#3d361d]`;
    case 'psychic':
      return `bg-[#f7cdd9] dark:bg-[#4a373c]`;
    case 'ice':
      return `bg-[#cff9ff] dark:bg-[#64787a]`;
    case 'dragon':
      return `bg-[#d0c8fa] dark:bg-[#5a576b]`;
    case 'dark':
      return `bg-[#d1b8b0] dark:bg-[#594d49]`;
    case 'fairy':
      return `bg-[#f7e1e5] dark:bg-[#4a4344]`;
    default:
      return 'bg-neutral-300';
  }
};
