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
        <div className="flex items-center dark:text-neutral-200 text-[#1D1D1D]">
          <LiaWeightHangingSolid
            className="mr-[0.5rem] hidden min-[340px]:block"
            size={20}
          />
          <span className="">{weight / 10} kg</span>
        </div>
        <h3 className="mt-[0.5rem] text-[#666666] dark:text-neutral-300">
          Weight
        </h3>
      </div>
      <div className="flex flex-col items-center px-[1.2rem] border-r-2 border-solid border-neutral-200">
        <div className="flex items-center text-[#1D1D1D] dark:text-neutral-200">
          <LiaRulerVerticalSolid
            className=" mr-[0.5rem] hidden min-[340px]:block"
            size={20}
          />
          <span className="">{height / 10} m</span>
        </div>
        <h3 className="mt-[0.5rem] text-[#666666] dark:text-neutral-300">
          Height
        </h3>
      </div>
      <div className="flex flex-col items-center px-[1.2rem] ">
        <div className="flex items-center text-[#1D1D1D] dark:text-neutral-200">
          <CiStar className="mr-[0.5rem] hidden min-[340px]:block" size={24} />
          <span className="">{exp}</span>
        </div>
        <h3 className="mt-[0.5rem] text-[#666666] dark:text-neutral-300 text-center">
          Base Exp
        </h3>
      </div>
    </div>
  );
}
