'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BsFillSunFill, BsMoon } from 'react-icons/bs';
import { ThemeProps } from '../constant/interface';

const ThemeSwitch = ({ bgColor }: ThemeProps) => {
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
        data-testid="theme-btn"
        className={`h-[2.5rem] w-[2.5rem] flex justify-center items-center rounded-full active:scale-100 ${bgColor}`}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="toggletheme"
      >
        {theme === 'light' ? (
          <BsMoon data-testid="bs-moon" size={18} className="" />
        ) : (
          <BsFillSunFill data-testid="bs-sun" size={18} className="" />
        )}
      </button>
    </>
  );
};

export default ThemeSwitch;
