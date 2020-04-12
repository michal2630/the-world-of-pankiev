
const map = () => {

  let columns = 5;
  let rows = 5;
  
  
  let myArray1 = new Array(rows);
  let start = 1;
  
  
  for(let i = 0; i < columns; i++){
    myArray1[i] = new Array(columns);
  }
  
  for(let i = 0; i < columns; i++){
    for (var j=0; j<rows; j++) {
      myArray1[i][j] = start;
      start = start + 1;
    }
  }
  
  for(let i = 0; i < columns; i++){
    for (var j=0; j<rows; j++) {
      // document.write(myArray1[i][j] + "&emsp;");
    }
    // document.write("<br/>");
  }
  
  return myArray1
  
  }

  









function drawChessboard() {
  let columns = 5;
  let rows = 5;
  // size of each square
  const squareSize = 35;



let drawMap = map();

let randomRowDraw = Math.floor(Math.random() * Math.floor(rows));
let randomColumnsDraw = Math.floor(Math.random() * Math.floor(columns));

drawMap[randomRowDraw][randomColumnsDraw] = "CJ";

for(let i=0; i<drawMap.length; i++){
  for(let j=0; j<drawMap[i].length; j++){
    let superNumber = drawMap[i][j];


    const numPositionTopX = 9;
    const numPositionTopY = 20;

    let canvas = document.getElementById("canvasMap");
    ctx = canvas.getContext("2d");
    ctx.font = "20px Arial";
    let xOffset = numPositionTopX + j*squareSize;
    let yOffset = numPositionTopY + i*squareSize;


    ctx.fillText(superNumber.toString(), xOffset, yOffset); 

  }
}





let randomCol = Math.floor(Math.random() * Math.floor(columns));
let randomRow = Math.floor(Math.random() * Math.floor(rows));



  // position of board's top left
  const boardTopx = 0;
  const boardTopy = 0;
  let canvas = document.getElementById("canvasMap");
  ctx = canvas.getContext("2d");

  for(let i=0; i<columns; i++) {
    map[i] = new Array(columns);
    
    for(let j=0; j<rows; j++) {

      ctx.fillStyle = ((i+j)%2==0) ? "black":"black";
      let xOffset = boardTopx + j*squareSize;
      let yOffset = boardTopy + i*squareSize;


      ctx.rect(xOffset, yOffset, squareSize, squareSize);
      ctx.stroke();
  
    }
  }


  
            // drawingRandomElementsOnBoard
            ctx.beginPath();
            ctx.rect(randomRowDraw, randomColumnsDraw, squareSize, squareSize);
            ctx.fillStyle = "red";
            ctx.fill();
  
  // border around the map
  ctx.strokeStyle = "black";
  ctx.strokeRect(boardTopx, boardTopy, squareSize*rows, squareSize*columns)
}


// static map plants

function Plant(type, strength, action, interaction, itemClass) {
  this.type = type;
  this.strength = strength;
  this.action = action;
  this.interaction = interaction;
  this.itemClass = itemClass;

  // add weapons to the map
  this.add = function () {
  addComponents(this.itemClass);
  }
  //add quiz mark to the map
  this.addExtras = function(){
      for(var i = 1; i<=questionsMark; i++){
          addComponents(this.itemClass);
      }
  }
};

// Specified plants

let grass = new Plant('Grass', 0, undefined, undefined );
let sowThistle  = new Plant('Sow thistle ', 0, "3 tries to spread on different fields", undefined);
let guarana = new Plant('Guarana', 0, undefined ,"When animal eat it, gain its strenght by 3" );
let wolfberry = new Plant('Wolfberry', 99, undefined ,"When animal eats it dies");
let hogweed = new Plant('Hogweed', 0, "Kills all animals around exept cyber-sheep", "When animal eat this plant dies, exept cyber-sheep" );




