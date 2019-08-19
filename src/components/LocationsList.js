import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/location/")
      // Which we then set to state
      .then(res => setLocationData(res.data.results))
      // Always include error handling
      .catch(err => console.log(err));
  }, []);

  console.log(locationData);

  return (
    <section className="location-list grid-view">
      {locationData.map(location => (
        <LocationCard
          name={location.name}
          type={location.type}
          dimension={location.dimension}
          residents={location.residents.length}
        />
      ))}
    </section>
  );
}
