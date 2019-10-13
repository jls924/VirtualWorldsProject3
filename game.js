var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer({width: 400, height: 400, backgroundColor: 0x3344ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var texture = PIXI.Texture.fromImage("planetPurp.png");

var sprite = new PIXI.TilingSprite(texture, renderer.width, renderer.height);

stage.addChild(sprite);

let count = 0;
	


function animate() 
{
	requestAnimationFrame(animate);
	count +=0.005;
	
	tilingSprite.tileScale.x = 2 + Math.sin(count);
	
	tilingSprite.tileScale.y = 2 + Math.cos(count);

	tilingSprite.tilePosition.x += 1;
	tilingSprite.tilePosition.y += 1;
	
	renderer.render(stage);
}

animate();
