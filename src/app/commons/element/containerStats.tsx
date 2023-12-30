import { StatsProps } from '../constant/interface';
import { bgCheck } from './bgType';
import { bgStatValue } from './bgStatsValue';

export const containerStats = (stats: string) => {
  switch (stats) {
    case 'grass':
      return 'bg-[#d6f5c6] dark:bg-[#205e03]';
    case 'poison':
      return `bg-[#fce3fb] dark:bg-[#521d50]`;
    case 'normal':
      return `bg-[#dedcd1] dark:bg-[#504713]`;
    case 'fire':
      return `bg-[#fadbc8] dark:bg-[#663313]`;
    case 'water':
      return `bg-[#cfdefa] dark:bg-[#384969]`;
    case 'fighting':
      return `bg-[#facdd3]`;
    case 'flying':
      return `bg-[#d8cef5]`;
    case 'ground':
      return `bg-[#f7e8ba]`;
    case 'rock':
      return `bg-[#fcefb1]`;
    case 'bug':
      return `bg-[#e3e8bc] dark:bg-[#636b2c]`;
    case 'ghost':
      return `bg-[#aa95cc]`;
    case 'steel':
      return `bg-[#d3d5eb]`;
    case 'electric':
      return `bg-[#faebb4]`;
    case 'psychic':
      return `bg-[#f7cdd9]`;
    case 'ice':
      return `bg-[#cff9ff]`;
    case 'dragon':
      return `bg-[#d0c8fa]`;
    case 'dark':
      return `bg-[#d1b8b0]`;
    case 'fairy':
      return `bg-[#f7e1e5]`;
    default:
      return 'bg-neutral-300';
  }
};

export default function StatsInformation({ type, baseStats }: StatsProps) {
  return (
    <div
      className={`rounded-[3rem] overflow-hidden w-[90%] sm:w-[95%] h-[0.3rem] md:h-[0.5rem] ${containerStats(
        type,
      )}`}
    >
      <div
        className={`h-full ${bgStatValue(type)}`}
        style={{ width: `${(baseStats / 255) * 100}%` }}
      ></div>
    </div>
  );
}
