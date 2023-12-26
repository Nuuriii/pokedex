import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { BackLinkProps } from '@/app/commons/constant/interface';

export function BackLink({ pokemon }: BackLinkProps) {
  return (
    <div className="flex justify-left w-full">
      <Link
        className="text-white lg:text-neutral-700 text-[1.5rem] font-[700] flex items-center"
        href={'/'}
      >
        <FiArrowLeft size={28} />
        <span className="ml-[0.5rem]">{pokemon}</span>
      </Link>
    </div>
  );
}
