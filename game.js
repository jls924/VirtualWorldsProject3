var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer({width: 1280, height: 720, backgroundColor: 0x3344ee});
gameport.appendChild(renderer.view);

var main = new PIXI.Container();
var menu = new PIXI.Container();
var stage = new PIXI.Container();

//Background and parallax
var t_background = PIXI.Texture.from("images/earth2.png");
var background = new PIXI.Sprite(t_background);
main.addChild(background);

//Main menu
var menu_bkd = PIXI.Texture.from("images/menu/menu_bkd.png");
var menu_bkd = new PIXI.Sprite(menu_bkd);
menu_bkd.position.x = 736;
menu_bkd.position.y = 64;
menu.addChild(menu_bkd);

var menu1 = PIXI.Texture.from("images/menu/menu_inactive1.png");
var menu2 = PIXI.Texture.from("images/menu/menu_inactive2.png");
var menu3 = PIXI.Texture.from("images/menu/menu_inactive3.png");

var menu_inactive = new PIXI.Sprite(menu1);
menu_bkd.addChild(menu_inactive);

var play_neutral = PIXI.Texture.from("images/menu/play_neutral.png");
var play_active = PIXI.Texture.from("images/menu/play_active.png");
var options_neutral = PIXI.Texture.from("images/menu/options_neutral.png");
var options_active = PIXI.Texture.from("images/menu/options_active.png");
var credits_neutral = PIXI.Texture.from("images/menu/credits_neutral.png");
var credits_active = PIXI.Texture.from("images/menu/credits_active.png");

var play = new PIXI.Sprite(play_neutral);
play.position.x = 8;
play.position.y = 192;
play.interactive = true;
menu_bkd.addChild(play);

var options = new PIXI.Sprite(options_neutral);
options.position.x = 17;
options.position.y = 305;
options.interactive = true;
menu_bkd.addChild(options);

var credits = new PIXI.Sprite(credits_neutral);
credits.position.x = 10;
credits.position.y = 415;
credits.interactive = true;
menu_bkd.addChild(credits);

main.addChild(menu);

/*
function mouseHandler(e)
{
	if (!wait.isStarted)
	{
		main.removeChild(menu);
		main.addChild(stage);
		wait.start();
		menu_theme.stop();
		main_theme.play();
	}
	else
	{
		stage.removeChild(game_over);
		stage.removeChild(retry);
		score = 0;
		wait.reset();
		wait.start();
		main_theme.play();
	}
}


click_box.on('mousedown',mouseHandler);
click_box.hitArea = new PIXI.Rectangle(0,0,135,65);
click_box.mouseover = function(ev)
{
	s_menu.texture = menu_hover;
}
click_box.mouseout = function(ev)
{
	s_menu.texture = t_menu;
}
retry.on('mousedown', mouseHandler);
*/


/*
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
*/

function animate()
{
	requestAnimationFrame(animate);
	renderer.render(main);
}

animate();
