import axios from "axios";
import { error } from "console";

const apiUrl = "https://pokeapi.co/api/v2";

export const getPokemon = async (limit: number) => {
  return axios
    .get(`${apiUrl}/pokemon?offset=0&limit=${limit}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const searchPokemon = async (name: string) => {
  return axios
    .get(`${apiUrl}/pokemon/${name}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getDescription = async (index: number) => {
  return axios
    .get(`${apiUrl}/pokemon-species/${index.toString()}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
