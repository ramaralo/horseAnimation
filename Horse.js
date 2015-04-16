function Horse(path, frameWidth, frameHeight, frameDelay, endFrame, canvasId) {
	var myObj = this;
	
	myObj.initSpritesheet(path, frameWidth, frameHeight, frameDelay, endFrame, canvasId);
}

Horse.prototype = new SpriteSheet();