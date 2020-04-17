var userTeste = {
  name: 'joao',
  idade: 12,
  senha: "ave",
  code: "hehehehe12"
};


//import Bubble from './bubble';
let freeMouse = true;

//circle
let x, y;
let moveSpeed = 3;
let diameter = 20, maxDiameter = 180, minDiameter = 20;

//canvas
let canvasX = 700, canvasY = 400;
let bn;
let mainB;

function setup() {


  createCanvas(canvasX, canvasY);
  background(0, 0, 0);

  // Starts in the middle
  x = width/2;
  y = height/2;
  
  bn = [new Bubble(90, 40, "c1"), new Bubble(140, 60, "c2"), new Bubble(230, 30, "c3")];

  // async() => {
  //   readData(bn);
  // }
  readData(bn);

  mainB = new Bubble(mouseX, mouseY, 'DONT');
  mainB.r = 2;
}

let freeM = true;

function draw() {
  background(0, 0, 0);
  

  stroke(255);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
  moveHandler();
  sizeHandler();

  bn.map((x) => x.update(false));
  bn.map((x) => x.display(false));

  mainB.display(true);
  mainB.update(true); 

  collideHandler(bn, freeM);
}

function mouseReleased(fxn){
  bn.map((x) => {
    writeData(bn);
    x.drag = false;
  })
}
function loguinho(){
  console.table([x,y, d])
    moveSpeed = +document.getElementById("value").value;
}

function sizeHandler(){

  if(mainB.r <= maxDiameter){
    if(keyIsDown(UP_ARROW)) {
      console.log("salvo");
      mainB.r += 5;
    }
  }

  if(diameter >= minDiameter){
    if(keyIsDown(DOWN_ARROW)) {
      diameter -= 5;
    }
  }

}

// // API Key for MapboxGL. Get one here:
// // https://www.mapbox.com/studio/account/tokens/
// const key = 'pk.eyJ1IjoibWZmZHNwIiwiYSI6ImNrOTBuY2FjaDAzYnkzZ28ydzB5emg3ZnUifQ._u_XyX0wPMhFcMAwxiI0qw';

// // Options for map
// const options = {
//   lat: 0,
//   lng: 0,
//   zoom: 4,
//   style: 'mapbox://styles/mapbox/traffic-night-v2',
//   pitch: 50,
// };

// // Create an instance of MapboxGL
// const mappa = new Mappa('MapboxGL', key);
// let myMap;

// let canvas;
// let meteorites;

// function setup() {
//   canvas = createCanvas(800, 700).parent('corpo');

//   // Create a tile map and overlay the canvas on top.
//   myMap = mappa.tileMap(options);
//   myMap.overlay(canvas);

//   // Load the data
//   const mapAdress = "https://raw.githubusercontent.com/mffdsp/p5js/master/Meteorite_Landings.csv"
//   meteorites = loadTable(mapAdress, 'csv', 'header');

//   // Only redraw the meteorites when the map change and not every frame.
//   myMap.onChange(drawMeteorites);

//   fill(109, 255, 255);
//   stroke(100);
// }

// // The draw loop is fully functional but we are not using it for now.
// function draw() {
    
// }

// function drawMeteorites() {
//   // Clear the canvas
//   clear();
//     console.log("desenjad")
//   for (let i = 0; i < meteorites.getRowCount(); i += 1) {
//     // Get the lat/lng of each meteorite
//     const latitude = Number(meteorites.getString(i, 'reclat'));
//     const longitude = Number(meteorites.getString(i, 'reclong'));

//     // Transform lat/lng to pixel position
//     const pos = myMap.latLngToPixel(latitude, longitude);
//     // Get the size of the meteorite and map it. 60000000 is the mass of the largest
//     // meteorite (https://en.wikipedia.org/wiki/Hoba_meteorite)
//     let size = meteorites.getString(i, 'mass (g)');
//     size = map(size, 558, 60000000, 1, 25) + myMap.zoom();
//     ellipse(pos.x, pos.y, size, size);
//   }
// }