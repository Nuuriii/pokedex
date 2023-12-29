'use client';
import { useState } from 'react';
import Provider from './provider';
import Header from './container/header';
import PokemonList from './container/home';

export default function Home() {
  const [search, setSearch] = useState('');

  return (
    <Provider>
      <main className="bg-[#DC0A2D] dark:bg-red-900 flex min-h-screen flex-col items-center py-[2rem] px-[0.5rem]">
        <Header onSearch={(str: string) => setSearch(str)} />
        <PokemonList propsName={search} />
      </main>
    </Provider>
  );
}
