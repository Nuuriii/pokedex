"use client";
import ThemeSwitch from "./commons/element/themeSwitcher";
import Image from "next/image";
import Provider from "./provider";
import PokemonList from "./container/home";

export default function Home() {
  return (
    <Provider>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <ThemeSwitch />
        <PokemonList />
      </main>
    </Provider>
  );
}
