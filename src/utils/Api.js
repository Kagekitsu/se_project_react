const baseUrl = "https://my-json-server.typicode.com/Kagekitsu/se_project_react";

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};


export const getClothingItems = () => {
  const clothingApi = fetch(`${baseUrl}/items`).then(processServerResponse);
  return clothingApi;
};

export const deleteClothingItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then(processServerResponse);
};

export const addClothingItem = (clothingName, imageLoc, weatherType) => {
  return fetch(`${baseUrl}/items/`, {
    method: "POST",
    body: JSON.stringify({
      name: clothingName,
      imageUrl: imageLoc,
      weather: weatherType,
    }),
    headers: { "Content-Type": "application/json" },
  }).then(processServerResponse);
};