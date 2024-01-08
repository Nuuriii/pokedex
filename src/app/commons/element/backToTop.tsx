import ScrollToTop from 'react-scroll-to-top';
import { IoIosArrowRoundUp } from 'react-icons/io';

export default function BackToTop() {
  return (
    <div>
      <ScrollToTop
        className="flex justify-center items-center"
        smooth
        component={
          <IoIosArrowRoundUp
            className="dark:bg-[#40020c] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-full w-full bg-[#DC0A2D] rounded-[0.3rem] text-white"
            size={2}
          />
        }
      />
    </div>
  );
}
