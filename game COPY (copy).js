var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer({width: 1280, height: 720, backgroundColor: 0x3344ee});
gameport.appendChild(renderer.view);

var main = new PIXI.Container();
var menu = new PIXI.Container();
var stage = new PIXI.Container();

//Background and parallax
var t_background = PIXI.Texture.from("images/earth4.png");
var background = new PIXI.Sprite(t_background);
main.addChild(background);

//Main menu
var menu_bkd = PIXI.Texture.from("images/menu/menu_bkd.png");
var menu_bkd = new PIXI.Sprite(menu_bkd);
menu_bkd.position.x = 736;
menu_bkd.position.y = 64;
menu.addChild(menu_bkd);

var t_menu1 = PIXI.Texture.from("images/menu/menu_inactive1.png");
var t_menu2 = PIXI.Texture.from("images/menu/menu_inactive2.png");
var t_menu3 = PIXI.Texture.from("images/menu/menu_inactive3.png");

class MInteract
{
	constructor(t_neutral, t_active, posx, posy, _menu, width, height)
	{
		this.neutral = t_neutral;
		this.active = t_active;
		this.sprite = new PIXI.Sprite(this.neutral);
		this.sprite.position.x = posx;
		this.sprite.position.y = posy;
		this.sprite.interactive = true;
		_menu.addChild(this.sprite);
		this.sprite.hitArea = new PIXI.Rectangle(0, 0, width, height);
	}
	set_neutral()
	{
		this.sprite.texture = this.neutral;
	}
	set_active()
	{
		this.sprite.texture = this.active;
	}
}

//Menu 1
var menu1 = new PIXI.Sprite(t_menu1);
menu_bkd.addChild(menu1);

var play_neutral = PIXI.Texture.from("images/menu/play_neutral.png");
var play_active = PIXI.Texture.from("images/menu/play_active.png");
var options_neutral = PIXI.Texture.from("images/menu/options_neutral.png");
var options_active = PIXI.Texture.from("images/menu/options_active.png");
var credits_neutral = PIXI.Texture.from("images/menu/credits_neutral.png");
var credits_active = PIXI.Texture.from("images/menu/credits_active.png");

var play = new MInteract(play_neutral, play_active, 8, 192, menu1, 128, 64);
play.sprite.mouseover = play.set_active();
play.sprite.mouseout = play.set_neutral();
play.sprite.mousedown = function(ev)
{
	main.removeChild(menu);
}

var options = new MInteract(options_neutral, options_active, 17, 305, menu1, 220, 64);
options.sprite.mousedown = function(ev)
{
	menu_bkd.removeChild(menu1);
	menu_bkd.addChild(menu2);
}

var credits = new MInteract(credits_neutral, credits_active, 10, 415, menu1, 200, 64);
credits.sprite.mousedown = function(ev)
{
	menu_bkd.removeChild(menu1);
	menu_bkd.addChild(menu3);
}

menu_bkd.addChild(menu1);

//Menu 2
var menu2 = new PIXI.Sprite(t_menu2);

var t_quiet_neutral = PIXI.Texture.from('images/quieter_neutral.png');
var t_quiet_active = PIXI.Texture.from('images/quieter_active.png');
var t_loud_neutral = PIXI.Texture.from('images/louder_neutral.png');
var t_loud_active = PIXI.Texture.from('images/louder_active.png');
var t_back_neutral = PIXI.Texture.from('images/back_neutral.png');
var t_back_active = PIXI.Texture.from('images/back_active.png');
var t_volume = [];
for (i=1; i<=8; i++)
{
	t_volume[i] = PIXI.Texture.from('images/volume' + i + '.png');
}

var quiet1 = new MInteract(t_quiet_neutral, t_quiet_active, 20, 198, menu2, 75, 53);
quiet1.sprite.mousedown = function(ev)
{
	//TODO
}
var loud1 = new MInteract(t_loud_neutral, t_loud_active, 387, 199, menu2, 75, 53);
quiet1.sprite.mousedown = function(ev)
{
	//TODO
}
var volume1 = new PIXI.Sprite(t_volume[8]);
volume1.position.x = 114;
volume1.position.y = 208;
menu2.addChild(volume1);

var quiet2 = new MInteract(t_loud_neutral, t_loud_active, 20, 377, menu2, 75, 53);
quiet2.sprite.mousedown = function(ev)
{
	//TODO
}
var loud2 = new MInteract(t_loud_neutral, t_loud_active, 387, 378, menu2, 75, 53);
loud2.sprite.mousedown = function(ev)
{
	//TODO
}
var volume2 = new PIXI.Sprite(t_volume[8]);
volume2.position.x = 114;
volume2.position.y = 387;
menu2.addChild(volume2);

var opt_back = new MInteract(t_back_neutral, t_back_active, 174, 528, menu2, 120, 45);
opt_back.mousedown = function(ev)
{
	menu_bkd.removeChild(menu2);
	menu_bkd.addChild(menu1);
}

//Menu 3
var menu3 = new PIXI.Sprite(t_menu3);
var cred_back = new MInteract(t_back_neutral, t_back_active, 174, 528, menu3, 120, 45);
cred_back.mousedown = function(ev)
{
	menu_bkd.removeChild(menu3);
	menu_bkd.addChild(menu1);
}


//Start main menu
main.addChild(menu);

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
