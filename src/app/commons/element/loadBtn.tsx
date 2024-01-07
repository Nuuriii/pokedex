import { LoadBtnProps } from '../constant/interface';

export default function LoadBtn({ loading, onClick }: LoadBtnProps) {
  return (
    <button
      className="bg-[#DC0A2D] dark:bg-[#330109] py-[0.3rem] px-[1rem] rounded-md text-white"
      onClick={onClick}
    >
      {loading ? 'Loading . . .' : 'Load More'}
    </button>
  );
}
