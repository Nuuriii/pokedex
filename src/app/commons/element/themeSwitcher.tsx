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
        className={`h-[2.5rem] w-[2.5rem] flex justify-center items-center rounded-full active:scale-100 bg-white`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="toggletheme"
      >
        {theme === "light" ? (
          <BsMoon size={18} className="text-black" />
        ) : (
          <BsFillSunFill size={18} className="text-black" />
        )}
      </button>
    </>
  );
};

export default ThemeSwitch;
