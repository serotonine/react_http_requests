import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  // Handling loading states.
  const [isFetching, setIsFetching] = useState(false);
  // Datas to be populate.
  const [availablePlaces, setAvailablePlaces] = useState([]);
  // Fetching Errors.
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      // Start fetching.
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();
        // Sort by nearest location.
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          const sortedPlaces = sortPlacesByDistance(
            places,
            latitude,
            longitude
          );
          setAvailablePlaces(sortedPlaces);
          // Stop fetching.
          setIsFetching(false);
        });
      } catch (e) {
        setError({ message: e.message || "Couille dans le potage." });
      }
    }
    fetchPlaces();
  }, []);
  // Fetch error render.
  if (error) {
    return <Error title="An error occured." message={error.message} />;
  }
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
