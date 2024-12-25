const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, './pics/metro_station');
const files = fs.readdirSync(folderPath);

const imagePaths = files
    .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)) // Filter image files
    .map(file => `../pics/metro_station/${file}`);

console.log('const imagePaths = ', JSON.stringify(imagePaths, null, 2));
