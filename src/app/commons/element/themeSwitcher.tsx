"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsCloudMoon, BsCloudSun, BsFillSunFill, BsMoon } from "react-icons/bs";

// interface ThemeProps {
//   additional: string;
// }

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button
        className={`h-[2rem] w-[2rem] flex justify-center items-center rounded-xl active:scale-100 bg-neutral-300 dark:bg-neutral-600 `}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="toggletheme"
      >
        {theme === "light" ? <BsMoon size={18} /> : <BsFillSunFill size={18} />}
      </button>
    </>
  );
};

export default ThemeSwitch;
