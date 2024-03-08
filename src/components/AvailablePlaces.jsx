import { useState, useEffect } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  // Handling loading states.
  const [isFetching, setIsFetching] = useState(false);
  // Datas to be populate.
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    // Start fetching.
    setIsFetching(true);
    async function fetchPlaces() {
      const response = await fetch("http://localhost:3000/places");
      const responseDatas = await response.json();
      setAvailablePlaces(responseDatas.places);
      // Stop fetching.
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isFetching={isFetching}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
