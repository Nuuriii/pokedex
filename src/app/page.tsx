'use client';
import { useState } from 'react';
import NextThemeProvider from './provider';
import Header from '@/app/container/header';
import PokemonList from '@/app/container/content';
import BackToTop from './commons/element/backToTop';
import { store } from './store/store';
import { Provider } from 'react-redux';

export default function Home() {
  const [search, setSearch] = useState('');

  return (
    <Provider store={store}>
      <NextThemeProvider>
        <main className="bg-[#DC0A2D] dark:bg-[#330109] flex min-h-screen flex-col items-center py-[2rem] px-[0.5rem]">
          <Header onSearch={(str: string) => setSearch(str)} />
          <PokemonList propsName={search} />
          <BackToTop />
        </main>
      </NextThemeProvider>
    </Provider>
  );
}
