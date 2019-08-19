import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      // Which we then set to state
      .then(res => setCharacterData(res.data.results))
      // Always include error handling
      .catch(err => console.log(err));
  }, []);

  console.log(characterData);

  return (
    <section className="character-list grid-view">
      {characterData.map(character => (
        <CharacterCard characterData={character} />
      ))}
    </section>
  );
}
