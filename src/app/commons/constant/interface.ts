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
