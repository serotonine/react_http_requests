export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const responseDatas = await response.json();
  if (!response.ok) {
    throw new Error(`${response.status} ${response.text}`);
  }
  return responseDatas.places;
}
export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const responseDatas = await response.json();
  if (!response.ok) {
    throw new Error(`${response.status} ${response.text}`);
  }
  return responseDatas.places;
}
export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseDatas = await response.json();
  if (!response.ok) {
    throw new Error(`${response.status} ${response.text}`);
  }
  return responseDatas.message;
}
