'use client';
import { useState } from 'react';
import Provider from './provider';
import Header from '@/app/container/header';
import PokemonList from '@/app/container/content';

export default function Home() {
  const [search, setSearch] = useState('');

  return (
    <Provider>
      <main className="bg-[#DC0A2D] dark:bg-[#330109] flex min-h-screen flex-col items-center py-[2rem] px-[0.5rem]">
        <Header onSearch={(str: string) => setSearch(str)} />
        <PokemonList propsName={search} />
      </main>
    </Provider>
  );
}
