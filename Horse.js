window.requestAnimFrame = (function(){
		  return  window.requestAnimationFrame       ||
		          window.webkitRequestAnimationFrame ||
		          window.mozRequestAnimationFrame    ||
		          window.oRequestAnimationFrame      ||
		          window.msRequestAnimationFrame     ||
		          function(callback, element){
		            window.setTimeout(callback, 1000 / 60);
		          };
		})();



function Horse(path, frameWidth, frameHeight, frameDelay, endFrame) {
	var myObj = this;
	
	myObj.initSpritesheet(path, frameWidth, frameHeight, frameDelay, endFrame);
}

Horse.prototype = new SpriteSheet();