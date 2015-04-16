
function SpriteSheet() {
  var ctx;
  var image;
  var framesPerRow;
  var currentFrame = 0;        // the current frame to draw
  var counter = 0;             // keep track of frame rate
  var path
  var frameWidth;
  var frameHeight;
  var frameDelay;
  var endFrame;

  function update() {
      // update to the next frame if it is time
      if (counter == (frameDelay - 1))
        currentFrame = (currentFrame + 1) % endFrame;

      // update the counter
      counter = (counter + 1) % frameDelay;
    };

  function draw(x, y) {
      // get the row and col of the frame
      var row = Math.floor(currentFrame / framesPerRow);
      var col = Math.floor(currentFrame % framesPerRow);

      ctx.drawImage(
          image,
          col * frameWidth, row * frameHeight,
          frameWidth, frameHeight,
          x, y,
        frameWidth, frameHeight);
  };

  function animate() {
    requestAnimFrame( animate );
    ctx.clearRect(0, 0, 500, 500);

    update();
    draw(0, 0);
  };

  this.start = function() {
    animate();
  };

  this.increaseSpeed = function() {
    var newSpeed = frameDelay - 1;
    frameDelay = (newSpeed > 0) ? newSpeed : 1;
  };

  this.decreaseSpeed = function() {
    frameDelay++;
  };

  this.initSpritesheet = function (imgPath, frmWidth, frmHeight, frmDelay, endFrm, canvasId) {

    console.log(arguments);

    path = imgPath;
    frameWidth = frmWidth;
    frameHeight = frmHeight;
    frameDelay = frmDelay;
    endFrame = endFrm;

    ctx = document.getElementById(canvasId).getContext('2d');
    image = new Image();
    image.src = path;
    image.onload = function (){
      framesPerRow = Math.floor(image.width / frameWidth);
    }
  }
}