export interface CardProps {
  name: string;
  index: number;
}

export interface SearchProps {
  onSearch: (param: string) => void;
}

export interface SearchName {
  name: string;
}

export interface PathProps {
  name: string;
  id: number;
  types: [{ type: { name: string } }];
  weight: number;
  height: number;
  base_experience: number;
  stats: [{ base_stat: number; stat: { name: string } }];
}

export interface PokeTypes {
  types: [{ type: { name: string } }];
}

export interface StatsProps {
  type: string;
  baseStats: number;
}

export interface ImageProps {
  index: number;
  types: [{ type: { name: string } }];
}

export interface AboutInfoProps {
  height: number;
  weight: number;
  exp: number;
}

export interface BackLinkProps {
  pokemon: string;
}

export interface TypePokemonProps {
  bgColor: string;
  typeName: string;
}
