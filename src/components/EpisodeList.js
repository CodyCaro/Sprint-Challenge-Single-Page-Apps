import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const [episodeData, setEpisodeData] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      // Which we then set to state
      .then(res => setEpisodeData(res.data.results))
      // Always include error handling
      .catch(err => console.log(err));
  }, []);

  console.log(episodeData);

  return (
    <section className="episode-list grid-view">
      {episodeData.map(episode => (
        <EpisodeCard
          name={episode.name}
          airDate={episode.air_date}
          characterCount={episode.characters.length}
        />
      ))}
    </section>
  );
}
