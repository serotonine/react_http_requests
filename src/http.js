import { REQUEST_URL } from "./config";

export async function fetchAvailablePlaces() {
  const response = await fetch(`${REQUEST_URL}places`);
  const responseDatas = await response.json();
  if (!response.ok) {
    throw new Error(`${response.status} ${response.text}`);
  }
  return responseDatas.places;
}
export async function fetchUserPlaces() {
  const response = await fetch(`${REQUEST_URL}user-places`);
  const responseDatas = await response.json();
  if (!response.ok) {
    throw new Error(`${response.status} ${response.text}`);
  }
  return responseDatas.places;
}
export async function updateUserPlaces(places) {
  const response = await fetch(`${REQUEST_URL}user-places`, {
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
