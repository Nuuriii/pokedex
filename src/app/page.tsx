"use client";
import Provider from "./provider";
import Header from "./container/header";
import PokemonList from "./container/home";

export default function Home() {
  return (
    <Provider>
      <main className="bg-[#DC0A2D] dark:bg-neutral-950 flex min-h-screen flex-col items-center justify-between py-[2rem] px-[0.5rem]">
        <Header />
        <PokemonList />
      </main>
    </Provider>
  );
}
