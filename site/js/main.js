var flappyBird = require('./flappy-bird');

document.addEventListener('DOMContentLoaded', function(){
  var app = new flappyBird.FlappyBird();
  app.run();
});