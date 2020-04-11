function drawChessboard() {
  let columns = 12;
  let rows =12;
  // size of each square
  const squareSize = 35;
  // position of board's top left
  const boardTopx = 0;
  const boardTopy = 0;
  let canvas = document.getElementById("canvasChessboard");
ctx = canvas.getContext("2d");
  for(let i=0; i<columns; i++) {
    for(let j=0; j<rows; j++) {
      ctx.fillStyle = ((i+j)%2==0) ? "white":"black";
      let xOffset = boardTopx + j*squareSize;
      let yOffset = boardTopy + i*squareSize;

      ctx.rect(xOffset, yOffset, squareSize, squareSize);
      ctx.stroke();
    }
  }
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
  // this.itemClass = itemClass;????

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