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

var t_asteroid_20 = PIXI.Texture.from("images/asteroids_20.png");
var asteroid_20 = new PIXI.TilingSprite(t_asteroid_20, renderer.width, renderer.height);
asteroid_20.alpha = 0.25;
main.addChild(asteroid_20);

var t_asteroid_15 = PIXI.Texture.from("images/asteroids_15.png");
var asteroid_15 = new PIXI.TilingSprite(t_asteroid_15, renderer.width, renderer.height);
asteroid_15.alpha = 0.5;
main.addChild(asteroid_15);

var t_asteroid_10 = PIXI.Texture.from("images/asteroids_10.png");
var asteroid_10 = new PIXI.TilingSprite(t_asteroid_10, renderer.width, renderer.height);
asteroid_10.alpha = 0.75;
main.addChild(asteroid_10);

var t_asteroid_5 = PIXI.Texture.from("images/asteroids_5.png");
var asteroid_5 = new PIXI.TilingSprite(t_asteroid_5, renderer.width, renderer.height);
main.addChild(asteroid_5);

//Add player
var t_player = PIXI.Texture.from("images/pirateShip.png");
var player = new PIXI.Sprite(t_player);
player.position.x = 250;
player.position.y = 300;
main.addChild(player);

//Music
const theme_1 = PIXI.sound.Sound.from('audio/Beyond\ The\ Heart\ -\ Lena\ Raine.mp3');
theme_1.loop = true;
theme_1.play();


/* * * * * * * * * * * * * * * * * * * * *
 * MAIN MENU                             *
 * Creates the main menu and all of its  *
 * functionality.                        *
 * * * * * * * * * * * * * * * * * * * * */
var menu_bkd = PIXI.Texture.from("images/menu/menu_bkd.png");
var menu_bkd = new PIXI.Sprite(menu_bkd);
menu_bkd.position.x = 736;
menu_bkd.position.y = 64;
menu.addChild(menu_bkd);

var t_menu1 = PIXI.Texture.from("images/menu/menu_inactive1.png");
var t_menu2 = PIXI.Texture.from("images/menu/menu_inactive2.png");
var t_menu3 = PIXI.Texture.from("images/menu/menu_inactive3.png");

//Menu 1
var menu1 = new PIXI.Sprite(t_menu1);
menu_bkd.addChild(menu1);

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
menu1.addChild(play);

var options = new PIXI.Sprite(options_neutral);
options.position.x = 17;
options.position.y = 305;
options.interactive = true;
menu1.addChild(options);

var credits = new PIXI.Sprite(credits_neutral);
credits.position.x = 10;
credits.position.y = 415;
credits.interactive = true;
menu1.addChild(credits);

menu_bkd.addChild(menu1);

//Menu 2
var menu2 = new PIXI.Sprite(t_menu2);

var t_quiet_neutral = PIXI.Texture.from('images/menu/quieter_neutral.png');
var t_quiet_active = PIXI.Texture.from('images/menu/quieter_active.png');
var t_loud_neutral = PIXI.Texture.from('images/menu/louder_neutral.png');
var t_loud_active = PIXI.Texture.from('images/menu/louder_active.png');
var t_back_neutral = PIXI.Texture.from('images/menu/back_neutral.png');
var t_back_active = PIXI.Texture.from('images/menu/back_active.png');

var t_volume = [];
for (i=1; i<=9; i++)
{
	t_volume[i] = PIXI.Texture.from('images/menu/volume' + i + '.png');
}

//Music Volume
var vol_count1 = 9;
var volume1 = new PIXI.Sprite(t_volume[vol_count1]);
volume1.position.x = 114;
volume1.position.y = 208;
menu2.addChild(volume1);
var quiet1 = new PIXI.Sprite(t_quiet_neutral);
quiet1.position.x = 20;
quiet1.position.y = 198;
quiet1.interactive = true;
menu2.addChild(quiet1);
var loud1 = new PIXI.Sprite(t_loud_neutral);
loud1.position.x = 387;
loud1.position.y = 199;
loud1.interactive = true;
menu2.addChild(loud1);

//Effects Volume
var volume2 = new PIXI.Sprite(t_volume[9]);
volume2.position.x = 114;
volume2.position.y = 387;
menu2.addChild(volume2);
var quiet2 = new PIXI.Sprite(t_quiet_neutral);
quiet2.position.x = 20;
quiet2.position.y = 377;
quiet2.interactive = true;
menu2.addChild(quiet2);
var loud2 = new PIXI.Sprite(t_loud_neutral);
loud2.position.x = 387;
loud2.position.y = 378;
loud2.interactive = true;
menu2.addChild(loud2);

//Back button
var opt_back = new PIXI.Sprite(t_back_neutral);
opt_back.position.x = 174;
opt_back.position.y = 528;
opt_back.interactive = true;
menu2.addChild(opt_back);

//Menu 3
var menu3 = new PIXI.Sprite(t_menu3);
var cred_back = new PIXI.Sprite(t_back_neutral);
cred_back.position.x = 174;
cred_back.position.y = 528;
cred_back.interactive = true;
menu3.addChild(cred_back);

//Start main menu
main.addChild(menu);

//Menu interactives behavior
play.hitArea = new PIXI.Rectangle(0, 0, 128, 64);
play.mouseover = function(ev)
{
	play.texture = play_active;
}
play.mouseout = function(ev)
{
	play.texture = play_neutral;
}
play.mousedown = function(ev)
{
	main.removeChild(menu);
	main.addChild(stage);
	main.removeChild(player);
	stage.addChild(player);
}

options.hitArea = new PIXI.Rectangle(0, 0, 220, 64);
options.mouseover = function(ev)
{
	options.texture = options_active;
}
options.mouseout = function(ev)
{
	options.texture = options_neutral;
}
options.mousedown = function(ev)
{
	menu_bkd.removeChild(menu1);
	menu_bkd.addChild(menu2);
}

credits.hitArea = new PIXI.Rectangle(0, 0, 200, 64);
credits.mouseover = function(ev)
{
	credits.texture = credits_active;
}
credits.mouseout = function(ev)
{
	credits.texture = credits_neutral;
}
credits.mousedown = function(ev)
{
	menu_bkd.removeChild(menu1);
	menu_bkd.addChild(menu3);
}

quiet1.hitArea = new PIXI.Rectangle(0, 0, 75, 53);
quiet1.mouseover = function(ev)
{
	quiet1.texture = t_quiet_active;
}
quiet1.mouseout = function(ev)
{
	quiet1.texture = t_quiet_neutral;
}
quiet1.mousedown = function(ev)
{
	if (theme_1.volume > 0)
	{
		theme_1.volume -= 0.125;
		vol_count1 -= 1;
		volume1.texture = t_volume[vol_count1];
	}
}

loud1.hitArea = new PIXI.Rectangle(0, 0, 75, 53);
loud1.mouseover = function(ev)
{
	loud1.texture = t_loud_active;
}
loud1.mouseout = function(ev)
{
	loud1.texture = t_loud_neutral;
}
loud1.mousedown = function(ev)
{
	if (theme_1.volume < 1)
	{
		theme_1.volume += 0.125;
		vol_count1 += 1;
		volume1.texture = t_volume[vol_count1];
	}
}

quiet2.hitArea = new PIXI.Rectangle(0, 0, 75, 53);
quiet2.mouseover = function(ev)
{
	quiet2.texture = t_quiet_active;
}
quiet2.mouseout = function(ev)
{
	quiet2.texture = t_quiet_neutral;
}
quiet2.mousedown = function(ev)
{
	//TODO
}

loud2.hitArea = new PIXI.Rectangle(0, 0, 75, 53);
loud2.mouseover = function(ev)
{
	loud2.texture = t_loud_active;
}
loud2.mouseout = function(ev)
{
	loud2.texture = t_loud_neutral;
}
loud2.mousedown = function(ev)
{
	//TODO
}

opt_back.hitArea = new PIXI.Rectangle(0, 0, 120, 45);
opt_back.mouseover = function(ev)
{
	opt_back.texture = t_back_active;
}
opt_back.mouseout = function(ev)
{
	opt_back.texture = t_back_neutral;
}
opt_back.mousedown = function(ev)
{
	menu_bkd.removeChild(menu2);
	menu_bkd.addChild(menu1);
}

cred_back.hitArea = new PIXI.Rectangle(0, 0, 120, 45);
cred_back.mouseover = function(ev)
{
	cred_back.texture = t_back_active;
}
cred_back.mouseout = function(ev)
{
	cred_back.texture = t_back_neutral;
}
cred_back.mousedown = function(ev)
{
	menu_bkd.removeChild(menu3);
	menu_bkd.addChild(menu1);
}

//Player Behavior & input
var new_x = player.position.x;
var new_y = player.position.y;
var keyListener = ['', '', '', '', ''];
function keydownEventHandler(e)
{
	if (menu.parent == undefined)
	{
		if (e.keyCode == 87) //W key
		{
			keyListener[0] = 'w';	
		}
		else if (e.keyCode == 83) //S key
		{
			keyListener[1] = 's';
		}
		if (e.keyCode == 65) //A key
		{
			keyListener[2] = 'a';
		}
		else if (e.keyCode == 68) //D key
		{
			keyListener[3] = 'd';
		}
		if (e.keyCode == 74) //J key
		{
			keyListener[4] = 'j';
		}
		if (e.keyCode == 82)// R key
		{
			keyListener[4] = 'j';
		}
	}
}

function keyupEventHandler(e)
{
	if (e.keyCode == 87) //W key
	{
		keyListener[0] = '';
	}
	else if (e.keyCode == 83) //S key
	{
		keyListener[1] = '';
	}
	if (e.keyCode == 65) //A key
	{
		keyListener[2] = '';
	}
	else if (e.keyCode == 68) //D key
	{
		keyListener[3] = '';
	}
	if (e.keyCode == 74)
	{
		keyListener[4] = '';
	}
}
document.addEventListener('keydown', keydownEventHandler);
document.addEventListener('keyup', keyupEventHandler);

//Bullet & Shooting
var t_bullet = PIXI.Texture.from("images/player_bullet.png");
var bullets = [];
var bulletSpeed = 10;
var bullet_timer = PIXI.timerManager.createTimer(200);
bullet_timer.on('end', function(elapsed) {
	bullet_timer.reset();
});

function shoot(pos_x, pos_y)
{
	var bullet = new PIXI.Sprite(t_bullet);
	bullet.position.x = pos_x;
	bullet.position.y = pos_y;
	bullet.scale.x = 0.5;
	bullet.scale.y = 0.5;
	stage.addChild(bullet);
	console.log('ublett');
	bullets.push(bullet);
}

//Collision & helper functions
//Circle needs to be a PIXI.Graphics circle, square needs to be a sprite
function clamp(coor, min, max)
{
	if(coor < min)
		return min;
	else if (max < coor)
		return max;
	else
		return coor;
}

function rect_clamp(point, rect)
{
	var clamp_p = new PIXI.Point();
	var clx = clamp(point.x, rect.position.x, rect.position.x + rect.width);
	var cly = clamp(point.y, rect.position.y, rect.position.y + rect.height);
	clamp_p.set(clx, cly);
	return clamp_p;
}

function circle_point_collide(circle, point)
{
	var cx = circle.position.x + circle.width/2;
	var cy = circle.position.y + circle.width/2;
	var dx = cx - point.x;
	var dy = cy - point.y;
	var distance = Math.sqrt((dx * dx) + (dy * dy));
	//console.log('cx ', cx, '\ncy ', cy, '\ndx ', dx, '\ndy ', dy, '\ndistance ', distance);
	return (distance <= circle.width/2);
}

function circle_rect_collide(circle, rect)
{
	var center = new PIXI.Point((circle.position.x + circle.width/2), (circle.position.y + circle.width/2));
	var n_point = rect_clamp(center, rect);
	//console.log('center ', center, '\nn_point ', n_point);
	return circle_point_collide(circle, n_point);
}


/* * * * * * * * * * * * * * * * * * * * *
 * ENEMY INTERACTION                     *
 * Big shot, tri-shot, radial shot,      *
 * and honing shot defined here          *
 * * * * * * * * * * * * * * * * * * * * */
// import federal ship texture
var t_fed = PIXI.Texture.from("images/federalShip.png");
var federalShip = new PIXI.Sprite(t_fed);
federalShip.position.x = 900;
federalShip.position.y = 300;
//CHANGED FROM MAIN TO STAGE
stage.addChild(federalShip);


// big shot START HERE
var t_bigShot = PIXI.Texture.from("images/enemy_bullet_big.png");
var t_normShot = PIXI.Texture.from("images/enemy_bullet.png");
var enemybullets = [];
var enemy_bulletSpeed = -10;
var enemy_bullet_timer = PIXI.timerManager.createTimer(200);
enemy_bullet_timer.on('end', function(elapsed) {
	enemy_bullet_timer.reset();
});

function enemy_shoot(pos_x, pos_y)
{
	var enemybullet = new PIXI.Sprite(t_normShot);
	enemybullet.position.x = pos_x;
	enemybullet.position.y = pos_y;
	enemybullet.scale.x = 0.5;
	enemybullet.scale.y = 0.5;
	stage.addChild(enemybullet);
	console.log('enemy bullet');
	enemybullets.push(enemybullet);
}

// GAME LOOP - WITH TIMERS 
// PIXI TIMER MANAGER - IN ANIMATE FUNCTION
// AFTER ANIMATE, CREATE TIMER
// SET ON START AND ON END (ON START DO THIS, ON END DO THAT NO PARTICULAR)
// THEN CALL TIMER START OR TIMER END
// PRIM UPLOADED PIXI TIMER


//var sprite = new PIXI.TilingSprite(texture, renderer.width, renderer.height);
//stage.addChild(sprite);

//Adding some test sprites here
var t_asteroid = new PIXI.Texture.from("images/asteroid_standard.png");
var coll_asteroid = new PIXI.Sprite(t_asteroid);
coll_asteroid.position.x = 2000;
coll_asteroid.position.y = 140;
stage.addChild(coll_asteroid);

var collider = new PIXI.Graphics();
collider.beginFill(0,0);
collider.drawCircle(coll_asteroid.position.x, coll_asteroid.position.y, coll_asteroid.texture.width/2);
collider.endFill();
stage.addChild(collider);

let count = 0;
function animate() 
{
	requestAnimationFrame(animate);
	asteroid_5.tilePosition.x -= 3;
	asteroid_10.tilePosition.x -= 2;
	asteroid_15.tilePosition.x -= 1;
	asteroid_20.tilePosition.x -= 0.5;
	if (menu.parent == undefined)
	{
		if (keyListener[0] == 'w' && player.position.y > 0)
		{
			new_y -= 3;
		}
		else if (keyListener[1] == 's' && player.position.y < (renderer.height - player.texture.height))
		{
			new_y += 3;
		}
		if (keyListener[2] == 'a' && player.position.x > 0)
		{
			new_x -= 3;
		}
		else if (keyListener[3] == 'd' && player.position.x < (renderer.width - player.texture.width))
		{
			new_x += 3;
		}
		createjs.Tween.get(player.position).to({x: new_x, y: new_y}, 50);
	
		if (keyListener[4] == 'j' && !bullet_timer.isStarted && !enemy_bullet_timer.isStarted)
		{
			shoot(player.position.x + 120, player.position.y + 50);
			enemy_shoot(federalShip.position.x + 120, federalShip.position.y + 50, "normal");
			enemy_bullet_timer.start();
			bullet_timer.start();
		}

		for(var b=bullets.length-1;b>=0;b--)
		{
			bullets[b].position.x += bulletSpeed;
	  	}

		for(var eb=enemybullets.length-1;eb>=0;eb--)
		{
			enemybullets[eb].position.x += enemy_bulletSpeed;
	  	}

		coll_asteroid.position.x -= 1.5;
		collider.position.set(coll_asteroid.position.x, coll_asteroid.position.y);
		if (circle_rect_collide(collider, player))
		{
			player.texture = undefined;
		}
	}
	PIXI.timerManager.update();
	renderer.render(main);
}
animate();
