import { StatsProps } from '../constant/interface';
import { containerStats } from './containerStats';
import { bgStatValue } from './bgStatsValue';

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
