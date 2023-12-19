import axios from "axios";

const apiUrl = "https://pokeapi.co/api/v2";

export const getPokemon = async (limit: number) => {
  return axios
    .get(`${apiUrl}/pokemon?offset=0&limit=${limit}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
//"https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
