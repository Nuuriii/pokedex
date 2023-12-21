import React, { useState, useEffect } from "react";
import { SearchProps } from "../commons/constant/interface";

function SearchComponent({ onSearch }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleSearch = async () => {
      onSearch(searchTerm);
    };

    // Panggil fungsi pencarian setiap kali searchTerm berubah
    handleSearch();
  }, [searchTerm, onSearch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Cari Pokemon berdasarkan nama"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchComponent;
