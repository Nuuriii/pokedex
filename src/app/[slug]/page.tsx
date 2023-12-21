"use client";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathName = usePathname();

  console.log(pathName.split("/")[1]);
  return (
    <div>
      <h1>{pathName}</h1>
    </div>
  );
}
