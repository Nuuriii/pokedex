'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { searchPokemon } from '../api/apiCall';
import { PathProps } from '../commons/constant/interface';
import { bgCheck } from '../commons/element/bgType';
import { titleType } from '../commons/element/textType';
import { statsText } from '../commons/element/statsText';
import { getDescription } from '../api/apiCall';
import PokemonImages from './components/images';
import StatsInformation from '../commons/element/containerStats';
import AboutInformation from './components/aboutInformation';
import { BackLink } from './components/backLink';
import TypePokemon from './components/typePokemon';
import { capitalizeFirstLetter } from '../commons/element/capitalFirstLetter';

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
    <main
      className={`${bgCheck(
        pokeName.types[0].type.name,
      )}  h-full md:h-screen px-[0.5rem] py-[1rem] md:flex justify-center items-center`}
    >
      <div className="md:flex md:justify-center md:bg-white md:rounded-[0.7rem] md:pb-[2rem] lg:w-[60rem]">
        <div className="relative flex flex-col items-center md:w-[50%] ml-[0.5rem] md:pt-[1rem]">
          <BackLink pokemon={capitalizeFirstLetter(pokeName.name)} />
          <PokemonImages index={pokeName.id} types={pokeName.types} />
        </div>
        <div className="bg-white md:bg-transparent rounded-[0.7rem] mt-[11rem] pt-[2rem] md:mt-0 md:w-[50%] pb-[1rem]">
          <div className="mt-[2rem] flex justify-center items-center md:hidden">
            {pokeName.types.map((item, index) => (
              <TypePokemon
                key={index}
                bgColor={bgCheck(item.type.name)}
                typeName={capitalizeFirstLetter(item.type.name)}
              />
            ))}
          </div>
          <h1
            className={`${titleType(
              pokeName.types[0].type.name,
            )} text-[1.1rem] text-center font-[700] my-[1rem]`}
          >
            About
          </h1>
          <AboutInformation
            weight={pokeName.weight}
            height={pokeName.height}
            exp={pokeName.base_experience}
          />
          <p className="mt-[1rem] px-[1.5rem] text-justify text-[#1D1D1D]">
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
    </main>
  );
}
