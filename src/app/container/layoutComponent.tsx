import React, { useState } from "react";
import SearchComponent from "./searchComponent";
import ListPokemonComponent from "./listComponent";

function LayoutComponent() {
  const [searchName, setSearchName] = useState("");

  return (
    <div>
      <SearchComponent onSearch={(term) => setSearchName(term)} />
      <ListPokemonComponent searchName={searchName} />
    </div>
  );
}

export default LayoutComponent;
