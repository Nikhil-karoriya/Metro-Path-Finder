import { imagePaths, station_info } from "./stations_info.mjs";

const cardsContainer = document.getElementById('cards-container');

for (let i = 0; i < station_info.length; i++) {
   
    const card = document.createElement('div');
    card.classList.add('card', 'col-md-3', 'col-md-6');
  
    const img = document.createElement('img');
    img.src = `${imagePaths[i]}`;
    img.alt = '...';
    img.classList.add('card-img');  
  
    
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-body');
    
    const stationName = document.createElement('h5');
    stationName.classList.add('card-title');
    stationName.textContent = `${i+1}). ${station_info[i].split(":")[0]}`;


    // Append the image and text to the card content
    cardContent.appendChild(stationName);
  

    // Append the image and card content to the card
    card.appendChild(img);
    card.appendChild(cardContent);
  
    // Append the card to the container
    cardsContainer.appendChild(card);
  }