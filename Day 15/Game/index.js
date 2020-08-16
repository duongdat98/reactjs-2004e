var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var imgPlayer = document.createElement("img");
imgPlayer.src = "./Canvas/medias/player2.png";
var imgTrap = document.createElement("img");
var imgTreasure = document.createElement("img");
imgTrap.src = "./Canvas/medias/trap.png";
imgTreasure.src = "./Canvas/medias/treasure.png";
// document.body.append(imgTreasure)
var screenWidth = 500;
var screenHeight = 500;
var cellWidth = 50;
var cellHeight = 50;
var lengthWidth = screenWidth / cellWidth;
var lengthHeight = screenHeight / cellHeight;
var map = [
    [0, 0, 0, 0, 0, -1, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, -1, 0, 0, 0],
    [0, 0, -1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, -1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
var drawMap = () => {
    for(let y = 0; y <lengthHeight; y++) {
        for(let x = 0; x < lengthWidth; x++) {
            if(map[y][x] === -1) {
                context.drawImage(imgTrap, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
            }
            if(map[y][x] === 2) {
                context.drawImage(imgTreasure, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
            }
        }
    }
}

var removeTreasure = (yIndex, xIndex) => {
    map[yIndex][xIndex] = 0;
}
var playerXIndex = 0;
var playerYIndex = 0;
for(let y = 0; y <lengthHeight; y++) {
    for(let x = 0; x < lengthWidth; x++) {
        if(map[y][x] === 1) {
            playerXIndex = x;
            playerYIndex = y;
            break;
        }
    }
}

var player = {
    map: map,
    treasureCollect: 0,
    trapCollect: 0,
    ctx: context,
    x: playerXIndex * cellWidth,
    y: playerYIndex * cellHeight,
    // xIndex: playerXIndex,
    // yIndex: playerYIndex,
    width: cellWidth,
    height: cellHeight,
    img: imgPlayer,
    drawImage() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    },
    moveRight() {
        if(this.x < screenWidth - cellWidth) {
            this.x += cellWidth;
        }
    },
    moveLeft() {
        if(this.x > 0){
            this.x -= cellWidth;
        }
    },
    moveDown() {
        if(this.y < screenHeight - cellHeight){
            this.y += cellHeight;
        }
    },
    moveTop() {
        if(this.y > 0){
            this.y -= cellHeight;
        }
    },
    checkWin() {
        var xIndex = this.x / cellWidth;
        var yIndex = this.y / cellHeight;
        if(this.map[yIndex][xIndex] === 2){
            this.treasureCollect++
            removeTreasure(yIndex, xIndex);
            if(this.treasureCollect === 3) {
                setTimeout(() => {
                alert("You Win");
                }, 100)
            }
            if(this.map[yIndex][xIndex] === -1){
                setTimeout(() => {
                    alert("You Lose");
                    }, 100)
                }
            }
        }
    }


var clearScreen = (ctx) => {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, screenWidth, screenHeight);
}

window.onload = () => {
    // player.drawImage();
    setInterval(() => {
        clearScreen(context);
        drawMap();
        player.drawImage();
    }, 1)
}

//Catch event Keyboard

window.addEventListener("keydown", (event) => {
    // console.log(event);
    switch(event.keyCode) {
        case 37:
            console.log("Arrow left");
            // clearScreen(context);
            player.moveLeft();
            player.checkWin();
            // player.drawImage(); 
            break; 
        case 38:
            console.log("Arrow top");
            // clearScreen(context);
            player.moveTop();
            player.checkWin();
            // player.drawImage(); 
            break;
        case 39:
            console.log("Arrow right");
            // clearScreen(context);
            player.moveRight();
            player.checkWin()
            // player.drawImage();  
            break; 
        case 40:
            console.log("Arrow down");
            // clearScreen(context);
            player.moveDown();
            player.checkWin()
            // player.drawImage(); 
            break;          
    }
})


