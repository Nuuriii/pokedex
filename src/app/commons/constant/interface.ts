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
}
