/**
 * Created by rubenoliveira on 16-04-2015.
 */
function Terrain(imgP, frmWidth, frmHeight, frmDelay, endFrm) {

    this.initSpritesheet(imgP, frmWidth, frmHeight, frmDelay, endFrm);
};

Terrain.prototype = new SpriteSheet();