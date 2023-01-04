import { useEffect, useState } from "react";
import CharacterBrowser from "./CharacterBrowser";
import CharacterCard from "./CharacterCard";

const MiApi = () => {

  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");


  const getData = async () => {
    const response = await fetch ("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setCharacters(data.results);
  }

  useEffect(() => {
    getData();
  }, []);

  const filteredCharacters = characters.filter((character) => character.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <CharacterBrowser setSearch={setSearch} />
      <div className="d-flex flex-wrap">
        {filteredCharacters.map((character) => <CharacterCard key={character.name} characterUrl={character.url} />)}
      </div> 
    </div>
  );
};

export default MiApi;