import { imagePaths, station_info } from "./stations_info.mjs";

const cardsContainer = document.getElementById("cards-container");

for (let i = 0; i < station_info.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = imagePaths[i];
  img.alt = `Image of ${station_info[i].split(":")[0]}`;
  img.classList.add("card-img");

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-body");

  const stationName = document.createElement("h5");
  stationName.classList.add("card-title");
  stationName.textContent = `${i + 1}). ${station_info[i].split(":")[0]}`;

  cardContent.appendChild(stationName);
  card.appendChild(img);
  card.appendChild(cardContent);
  cardsContainer.appendChild(card);
}
