var canvas = document.getElementById("game");
var context = canvas.getContext('2d');
context.strokeStyle = "yellow";
context.moveTo(0,0);
context.lineTo(200,300);
context.stroke();
context.beginPath();

context.strokeStyle = "red";
context.moveTo(200,0);
context.lineTo(0,300);
context.stroke();

context.beginPath();
context.arc(100, 150, 100, 0, 2 * Math.PI);
context.stroke();

context.font = "30px Arial";
context.fillText("12", 83, 35);

//draw image
window.onload = function() {
    var playerImage1 = document.getElementById("player1");
    var playerImage2 = document.getElementById("player1");
    context.drawImage(playerImage1, 0, 0, 50, 50);
    context.drawImage(playerImage2, 200, 300, 50, 50);
}