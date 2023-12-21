import React, { useState, useEffect } from "react";

function ListPokemonComponent({ searchName }: any) {
  const [searchResults, setSearchResults] = useState<any>([]);

  useEffect(() => {
    const handleSearch = async () => {
      if (!searchName) {
        setSearchResults([]);
        return;
      }

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=150`
        );
        const data = await response.json();

        const filteredResults = data.results.filter((pokemon: any) =>
          pokemon.name.toLowerCase().startsWith(searchName.toLowerCase())
        );

        setSearchResults(filteredResults);
      } catch (error) {
        console.error("Error searching Pokemon:", error);
        setSearchResults(null);
      }
    };

    console.log(searchResults);
    console.log("ini yang kamu cari", searchName);

    // Pindahkan handleSearch ke useEffect agar terpanggil setiap kali searchName berubah
    handleSearch();
  }, [searchName]);

  return (
    <div>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((pokemon: any) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      ) : searchResults.length === 0 && searchName !== "" ? (
        <p>Hasil pencarian tidak ditemukan</p>
      ) : (
        <p>Pokemon sebelumnya</p>
      )}
    </div>
  );
}

export default ListPokemonComponent;
