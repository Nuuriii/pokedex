import { LiaWeightHangingSolid, LiaRulerVerticalSolid } from 'react-icons/lia';
import { CiStar } from 'react-icons/ci';
import { AboutInfoProps } from '@/app/commons/constant/interface';

export default function AboutInformation({
  height,
  weight,
  exp,
}: AboutInfoProps) {
  return (
    <div className="flex justify-center pb-[1rem]">
      <div className="flex flex-col items-center px-[1.2rem] border-r-2 border-solid border-neutral-200">
        <div className="flex items-center">
          <LiaWeightHangingSolid
            className="text-[#1D1D1D] mr-[0.5rem] hidden min-[340px]:block"
            size={20}
          />
          <span className="text-[#1D1D1D]">{weight / 10} kg</span>
        </div>
        <h3 className="mt-[0.5rem] text-[#666666]">Weight</h3>
      </div>
      <div className="flex flex-col items-center px-[1.2rem] border-r-2 border-solid border-neutral-200">
        <div className="flex items-center">
          <LiaRulerVerticalSolid
            className="text-[#1D1D1D] mr-[0.5rem] hidden min-[340px]:block"
            size={20}
          />
          <span className="text-[#1D1D1D]">{height / 10} m</span>
        </div>
        <h3 className="mt-[0.5rem] text-[#666666]">Height</h3>
      </div>
      <div className="flex flex-col items-center px-[1.2rem]">
        <div className="flex items-center">
          <CiStar
            className="text-[#1D1D1D] mr-[0.5rem] hidden min-[340px]:block"
            size={24}
          />
          <span className="text-[#1D1D1D]">{exp}</span>
        </div>
        <h3 className="mt-[0.5rem] text-[#666666] text-center">Base Exp</h3>
      </div>
    </div>
  );
}
