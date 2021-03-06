var Game = require("./../js/game.js").gameModule;

// $(document).ready(function() {
  var currentGame = new Game();

  var canvas = document.getElementById('game-board');
  var draw = canvas.getContext('2d');

  var drawGame = function(passedGame) {
    var imageToDraw = 1
    passedGameStateString = passedGame.gameState.toString();
    draw.clearRect(0,0, canvas.width, canvas.height);
    draw.fillStyle = "#000";
    draw.strokeStyle = "#fff";
    draw.font = "50px Arial";
    for(var x = 0; x < 4; x++) {
      for(var y = 0; y < 3; y++) {
        if (passedGameStateString.charAt(imageToDraw) === 0) {
          draw.fillRect(x*200, y*200, 200, 200)
          draw.strokeRect(x*200, y*200, 200, 200)
        } else {
          draw.strokeText(passedGame.shuffledGame.charAt(imageToDraw), x*200, y*200);
        }
        imageToDraw ++;
      }
    }
  };

  var clickPlacer = function(x, y) {
    var clickValue = 1;
    clickValue += x / 200;
    clickValue += (y / 200) * 4;
    currentGame.guess(clickValue);
    drawGame(currentGame);
  };

  var getPosition = function(event) {
    var x = event.x;
    var y = event.y;
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
    clickPlacer(x, y);
  };

  drawGame(currentGame);
  canvas.addEventListener("mousedown", getPosition, false);

// });
