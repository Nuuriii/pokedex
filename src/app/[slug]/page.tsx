'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Provider from '@/app/provider';
import { searchPokemon } from '@/app/api/apiCall';
import { getDescription } from '@/app/api/apiCall';
import { PathProps } from '@/app/commons/constant/interface';
import { bgCheck } from '@/app/commons/element/bgType';
import { titleType } from '@/app/commons/element/textType';
import { statsText } from '@/app/commons/element/statsText';
import { capitalizeFirstLetter } from '@/app/commons/element/capitalFirstLetter';
import { bgTypeContainer } from '@/app/commons/element/bgTypeContainer';
import StatsInformation from '@/app/commons/element/statsInformation';
import PokemonImages from '@/app/[slug]/components/images';
import AboutInformation from '@/app/[slug]/components/aboutInformation';
import { BackLink } from '@/app/[slug]/components/backLink';
import TypePokemon from '@/app/[slug]/components/typePokemon';

export default function Page() {
  const [pokeName, setPokename] = useState<PathProps>({
    name: 'Pokemon Name',
    id: 1,
    types: [{ type: { name: '' } }],
    weight: 0,
    height: 0,
    base_experience: 0,
    stats: [{ base_stat: 0, stat: { name: '' } }],
  });
  const pathName = usePathname();
  const pokePath = pathName.split('/')[1];
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchPokemon();
    fetchDescription();
  }, [pokePath, pokeName.id]);

  const fetchDescription = async () => {
    try {
      const data = await getDescription(pokeName.id);
      const description = data.flavor_text_entries[6].flavor_text;
      setDescription(description);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPokemon = async () => {
    try {
      const data = await searchPokemon(pokePath);
      setPokename(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Provider>
      <main
        className={`${bgCheck(
          pokeName.types[0].type.name,
        )}  h-full md:h-screen px-[0.5rem] py-[1rem] md:flex justify-center items-center`}
      >
        <div className="md:flex md:flex-col md:justify-center md:bg-white md:dark:bg-neutral-800 md:rounded-[0.7rem] md:pb-[2rem] lg:w-[60rem] md:pt-[1rem]">
          <div className="w-full">
            <BackLink
              pokemonType={pokeName.types[0].type.name}
              pokemon={capitalizeFirstLetter(pokeName.name)}
            />
          </div>
          <div className="md:hidden relative flex flex-col items-center md:w-[50%] ml-[0.5rem] md:pt-[1rem]">
            <PokemonImages index={pokeName.id} types={pokeName.types} />
          </div>
          <div className="bg-white dark:bg-neutral-800  justify-center md:bg-transparent rounded-[0.7rem] mt-[11rem] pt-[2rem] md:h-full md:mt-0 md:pt-0 pb-[1rem] md:flex md:w-full">
            <div className="hidden md:flex mr-[2rem]">
              <PokemonImages index={pokeName.id} types={pokeName.types} />
            </div>
            <div className="md:w-[50%]">
              <div className="mt-[2rem] flex justify-center items-center md:hidden">
                {pokeName.types.map((item, index) => (
                  <TypePokemon
                    key={index}
                    bgColor={bgTypeContainer(item.type.name)}
                    typeName={capitalizeFirstLetter(item.type.name)}
                  />
                ))}
              </div>
              <h1
                className={`${titleType(
                  pokeName.types[0].type.name,
                )} text-[1.1rem] text-center font-[700] mt-[2rem] mb-[1rem] md:mt-0`}
              >
                About
              </h1>
              <AboutInformation
                weight={pokeName.weight}
                height={pokeName.height}
                exp={pokeName.base_experience}
              />
              <p className="mt-[1rem] px-[1.5rem] text-justify text-[#1D1D1D] dark:text-neutral-100">
                {description.split('').join('')}
              </p>
              <h1
                className={`${titleType(
                  pokeName.types[0].type.name,
                )} text-[1.1rem] text-center font-[700] my-[1rem]`}
              >
                Base Stats
              </h1>
              <div className="flex w-full flex-col px-[1.5rem] items-center">
                {pokeName.stats.map((item, index) => (
                  <div className="flex items-center w-full" key={index}>
                    <h1
                      className={`${titleType(
                        pokeName.types[0].type.name,
                      )} font-[700] pr-[1rem] min-[432px]:border-r-2 md:border-0 border-solid border-neutral-400 w-[15%] md:w-[3rem] mr-[1rem]`}
                    >
                      {statsText(item.stat.name)}
                    </h1>
                    <div className="flex items-center w-[80%] sm:w-[90%">
                      <p
                        className={`mr-[0.5rem] w-[10%] sm:w-[5%] md:w-[10%] ${titleType(
                          pokeName.types[0].type.name,
                        )}`}
                      >
                        {item.base_stat}
                      </p>
                      <StatsInformation
                        type={pokeName.types[0].type.name}
                        baseStats={item.base_stat}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Provider>
  );
}
