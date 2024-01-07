'use client'; // Error components must be Client Components
import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="bg-[#DC0A2D] dark:bg-[#330109] h-screen flex justify-center items-center flex-col">
      <h2 className="text-white font-semibold text-[1.5rem] md:text-[2.5rem]">
        Something went wrong!
      </h2>
      <Link
        className="m-4 bg-neutral-300 dark:bg-neutral-600 py-[0.8rem] px-[1rem] rounded-lg
        md:text-[1.2rem]
         hover:bg-neutral-400
         dark:hover:bg-neutral-500"
        href={'/'}
      >
        Back To Home
      </Link>
    </main>
  );
}
