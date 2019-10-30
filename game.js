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
var music_vol = 1;
//const theme_1 = PIXI.sound.Sound.from('audio/Beyond\ The\ Heart\ -\ Lena\ Raine.mp3');
//theme_1.loop = true;
//theme_1.play();
const theme_1 = PIXI.sound.Sound.from('audio/overseer.mp3');
theme_1.loop = true;
theme_1.play();

//Sounds
const bloop = PIXI.sound.Sound.from('audio/bloop.mp3');
const a_shoot = PIXI.sound.Sound.from('audio/shoot.mp3');
const a_game_over = PIXI.sound.Sound.from('audio/fail.mp3');
const a_hurt = PIXI.sound.Sound.from('audio/hurt.mp3');
const a_big_shot = PIXI.sound.Sound.from('audio/big_shot.mp3');
var sound_vol = 1;

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
var vol_count2 = 9;
var volume2 = new PIXI.Sprite(t_volume[vol_count2]);
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
cred_back.position.x = 204;
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
	bloop.play();
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
	bloop.play();
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
	bloop.play();
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
	bloop.play();
}
quiet1.mouseout = function(ev)
{
	quiet1.texture = t_quiet_neutral;
}
quiet1.mousedown = function(ev)
{
	if (music_vol > 0)
	{
		music_vol -= 0.125;
		theme_1.volume = music_vol;
		vol_count1 -= 1;
		volume1.texture = t_volume[vol_count1];
	}
}

loud1.hitArea = new PIXI.Rectangle(0, 0, 75, 53);
loud1.mouseover = function(ev)
{
	loud1.texture = t_loud_active;
	bloop.play();
}
loud1.mouseout = function(ev)
{
	loud1.texture = t_loud_neutral;
}
loud1.mousedown = function(ev)
{
	if (music_vol < 1)
	{
		music_vol += 0.125;
		theme_1.volume = music_vol;
		vol_count1 += 1;
		volume1.texture = t_volume[vol_count1];
	}
}

quiet2.hitArea = new PIXI.Rectangle(0, 0, 75, 53);
quiet2.mouseover = function(ev)
{
	quiet2.texture = t_quiet_active;
	bloop.play();
}
quiet2.mouseout = function(ev)
{
	quiet2.texture = t_quiet_neutral;
}
quiet2.mousedown = function(ev)
{
	if (sound_vol > 0)
	{
		sound_vol -= 0.125;
		bloop.volume = sound_vol;
		bloop.play();
		a_shoot.volume = sound_vol;
		a_game_over.volume = sound_vol;
		a_hurt.volume = sound_vol;
		a_big_shot.volume = sound_vol;
		vol_count2 -= 1;
		volume2.texture = t_volume[vol_count2];
	}
}

loud2.hitArea = new PIXI.Rectangle(0, 0, 75, 53);
loud2.mouseover = function(ev)
{
	loud2.texture = t_loud_active;
	bloop.play();
}
loud2.mouseout = function(ev)
{
	loud2.texture = t_loud_neutral;
}
loud2.mousedown = function(ev)
{
	if (sound_vol < 1)
	{
		sound_vol += 0.125;
		bloop.volume = sound_vol;
		bloop.play();
		a_shoot.volume = sound_vol;
		a_game_over.volume = sound_vol;
		a_hurt.volume = sound_vol;
		a_big_shot.volume = sound_vol;
		vol_count2 += 1;
		volume2.texture = t_volume[vol_count2];
	}
}

opt_back.hitArea = new PIXI.Rectangle(0, 0, 120, 45);
opt_back.mouseover = function(ev)
{
	opt_back.texture = t_back_active;
	bloop.play();
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
	bloop.play();
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

//Player HP handling
var player_hp = 3;
var player_hurt = PIXI.Texture.from("images/pirateShip_hurt.png");
var hittable = true;
let player_health = new PIXI.Text("HP: " + player_hp,{fontFamily : 'Arial', fontSize: 36, fill : 0xa11fa}); 
stage.addChild(player_health);
var player_cd = PIXI.timerManager.createTimer(250);
player_cd.repeat = 8;
player_cd.on('start', function(elapsed) {
	a_hurt.play();
	player_hp -= 1;
	hittable = false;
	player_health.text = "HP: " + player_hp;
});
player_cd.on('end', function(elapsed) {
	hittable = true;
	player_cd.reset();
});
player_cd.on('repeat', function(elapsed, repeat) {
	if (repeat == 2 || repeat == 4 || repeat == 6 || repeat == 8)
	{
		player.texture = t_player;
	}
	else
	{
		player.texture = player_hurt;
	}
});

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
	var clx = clamp(point.x, rect.x, rect.x + rect.width);
	var cly = clamp(point.y, rect.y, rect.y + rect.height);
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

//Bullet & Shooting
var t_bullet = PIXI.Texture.from("images/player_bullet.png");
var bullets = [];
var pbul_colliders = [];
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

	var b_collider = new PIXI.Graphics();
	b_collider.beginFill(0,0);
	b_collider.drawCircle(bullet.position.x, bullet.position.y, bullet.texture.width/4);
	b_collider.endFill();
	stage.addChild(b_collider);
	pbul_colliders.push(b_collider);
	a_shoot.play();
}

/* * * * * * * * * * * * * * * * * * * * *
 * ENEMY INTERACTION                     *
 * Big shot, tri-shot, radial shot,      *
 * and honing shot defined here          *
 * * * * * * * * * * * * * * * * * * * * */
// import federal ship texture
var t_fed = PIXI.Texture.from("images/federalShip.png");
var federalShip = new PIXI.Sprite(t_fed);
federalShip.position.x = 3500;
federalShip.position.y = 300;
stage.addChild(federalShip);

var fed_hit = new PIXI.Graphics();
fed_hit.beginFill(0,0);
fed_hit.drawRect(federalShip.position.x, federalShip.position.y, 300, 200);
fed_hit.endFill();
stage.addChild(fed_hit);

// big shot START HERE
var t_bigShot = PIXI.Texture.from("images/enemy_bullet_big.png");
var t_normShot = PIXI.Texture.from("images/enemy_bullet.png");
var enemybullets = [];
// enemy bullet colliders
var bad_colliders = [];
var enemy_bulletSpeed = -10;

// waiting for ship to be on screen
var start_bullet = PIXI.timerManager.createTimer(10000);

// timer for small bullets
var enemy_bullet_timer_norm = PIXI.timerManager.createTimer(200);
enemy_bullet_timer_norm.on('end', function(elapsed) {  enemy_bullet_timer_norm.reset();});

var ship_appearance = PIXI.timerManager.createTimer(10000);
ship_appearance.on('start', function(elapsed) { federalShip.alpha = 1;});

// if player kills ship
ship_appearance.on('stop', function(elapsed) { federalShip.alpha = 0;});

function enemy_shoot_norm(pos_x, pos_y)
{
	var enemybullet = new PIXI.Sprite(t_normShot);
	
	enemybullet.position.x = pos_x;
	enemybullet.position.y = pos_y;
	enemybullet.scale.x = 0.5;
	enemybullet.scale.y = 0.5;
	stage.addChild(enemybullet);
	console.log('enemy bullet');
	enemybullets.push(enemybullet);

	var en_collider = new PIXI.Graphics();
	en_collider.beginFill(0,0);
	en_collider.drawCircle(enemybullet.position.x, enemybullet.position.y, enemybullet.texture.width/4);
	en_collider.endFill();
	stage.addChild(en_collider);
	bad_colliders.push(en_collider);
	
}


// GAME LOOP - WITH TIMERS 
// PIXI TIMER MANAGER - IN ANIMATE FUNCTION
// AFTER ANIMATE, CREATE TIMER
// SET ON START AND ON END (ON START DO THIS, ON END DO THAT NO PARTICULAR)
// THEN CALL TIMER START OR TIMER END
// PRIM UPLOADED PIXI TIMER

//Enemy HP handling
var enemy_hp = 10;
var enemy_hurt = PIXI.Texture.from("images/federalShip_hurt.png");
var enemy_red = PIXI.timerManager.createTimer(100);
enemy_red.on('start', function(elapsed) {
	federalShip.texture = enemy_hurt;
	enemy_hp -= 1;
});

enemy_red.on('end', function(elapsed) {var fed_hit = new PIXI.Graphics();
fed_hit.beginFill(0,0);
fed_hit.drawRect(federalShip.position.x, federalShip.position.y, 300, 200);
fed_hit.endFill();
stage.addChild(fed_hit);

// big shot START HERE
var t_bigShot = PIXI.Texture.from("images/enemy_bullet_big.png");
var t_normShot = PIXI.Texture.from("images/enemy_bullet.png");
var enemybullets = [];
// enemy bullet colliders
var bad_colliders = [];
var enemy_bulletSpeed = -10;

// waiting for ship to be on screen
var start_bullet = PIXI.timerManager.createTimer(10000);

// timer for small bullets
var enemy_bullet_timer_norm = PIXI.timerManager.createTimer(200);
enemy_bullet_timer_norm.on('end', function(elapsed) {  enemy_bullet_timer_norm.reset();});

var ship_appearance = PIXI.timerManager.createTimer(10000);
ship_appearance.on('start', function(elapsed) { federalShip.alpha = 1;});

// if player kills ship
ship_appearance.on('stop', function(elapsed) { federalShip.alpha = 0;});

function enemy_shoot_norm(pos_x, pos_y)
{
	var enemybullet = new PIXI.Sprite(t_normShot);
	
	enemybullet.position.x = pos_x;
	enemybullet.position.y = pos_y;
	enemybullet.scale.x = 0.5;
	enemybullet.scale.y = 0.5;
	stage.addChild(enemybullet);
	console.log('enemy bullet');
	enemybullets.push(enemybullet);

	var en_collider = new PIXI.Graphics();
	en_collider.beginFill(0,0);
	en_collider.drawCircle(enemybullet.position.x, enemybullet.position.y, enemybullet.texture.width/4);
	en_collider.endFill();
	stage.addChild(en_collider);
	bad_colliders.push(en_collider);
	
}

	federalShip.texture = t_fed;
	enemy_red.reset();
});

//I'm so sorry
var ast_x = [1408,1504,1408,1536,1920,1984,2144,2144,2272,2592,2592,2592,2624,2624,2688,2720,2720,2848,2848,2880,2912,2976,3040,3040,3040,3136,3136,3168,3232,3232,3328,3392,3456,3616];
var ast_y = [64,224,416,608,352,672,96,192,512,288,512,608,416,704,0,128,544,128,256,576,384,224,0,320,544,352,512,224,352,480,64,672,416,224];
var ast_cluster = [];
var colliders = [];
var t_asteroid = new PIXI.Texture.from("images/asteroid_standard.png");
for (var i = 0; i <= ast_x.length; i++)
{
	var asteroid = new PIXI.Sprite(t_asteroid);
	asteroid.position.x = ast_x[i];
	asteroid.position.y = ast_y[i];
	stage.addChild(asteroid);
	ast_cluster.push(asteroid);

	var collider = new PIXI.Graphics();
	collider.beginFill(0,0);
	collider.drawCircle(asteroid.position.x, asteroid.position.y, asteroid.texture.width/2);
	collider.endFill();
	stage.addChild(collider);
	colliders.push(collider);

}

//Player hitbox
var p_collider = new PIXI.Graphics();
p_collider.beginFill(0,0);
p_collider.drawRect(player.position.x, player.position.y, 200, 100);
p_collider.endFill();
stage.addChild(p_collider);

var empty = PIXI.Texture.from("images/empty.png");
var explosion = PIXI.Texture.from("images/explosion.png");

var t_retry = PIXI.Texture.from("images/game_over.png");
var retry = new PIXI.Sprite(empty);
retry.position.x = 250;
retry.position.y = 100;
main.addChild(retry);

var expl_timer = PIXI.timerManager.createTimer(1000);
expl_timer.on('start', function(elapsed) {
	a_game_over.play();
	player.texture = explosion;
});
expl_timer.on('end', function(elapsed) {
	player.texture = empty;
	retry.texture = t_retry;
});

//Game Over and Victory
function game_over()
{
	if (player_hp <= 0)
	{
		player_cd.stop();
		stage.removeChild(player);
		main.removeChild(stage);
		main.addChild(player);
		expl_timer.start();
		for (var i = 0; i <= ast_x.length; i++)
		{
			ast_cluster[i].position.x = ast_x[i];
			ast_cluster[i].position.y = ast_y[i];
		}
		federalShip.position.x = 1600;
		federalShip.position.y = 300;
	}
}

let count = 0;
function animate() 
{
	requestAnimationFrame(animate);
	asteroid_5.tilePosition.x -= 3;
	asteroid_10.tilePosition.x -= 2;
	asteroid_15.tilePosition.x -= 1;
	asteroid_20.tilePosition.x -= 0.5;
	ship_appearance.start();
	start_bullet.start();
	if (player_hp <= 0)
	{
		game_over();
		if (keyListener[4] == 'j' && expl_timer.isEnded)
		{
			retry.texture = empty;
			expl_timer.stop();
			player.texture = t_player;
			main.addChild(stage);
			main.removeChild(player);
			stage.addChild(player);
			player_hp = 3;
			expl_timer.reset();
			p_collider.position.set(player.position.x-50, player.position.y - 10);
		}
	}
	
	console.log(enemy_hp);
	if (enemy_hp <= 0)
	{
		enemy_bullet_timer_norm.stop();
		federalShip.alpha = 0;
	}

	else if (menu.parent == undefined)
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
		p_collider.position.set(player.position.x-50, player.position.y - 10);
	
		if (keyListener[4] == 'j' && !bullet_timer.isStarted)
		{
			var bullet_switch = ["normal", "big shot"];
			shoot(player.position.x + 120, player.position.y + 50);
			
			bullet_timer.start();
			
		}
		
		// once the ship appears
		if(start_bullet.isEnded && !enemy_bullet_timer_norm.isStarted)
		{
			enemy_shoot_norm(federalShip.position.x + 120, federalShip.position.y + 50);
			enemy_bullet_timer_norm.start();
			
		}

		for(var b=bullets.length-1;b>=0;b--)
		{
			bullets[b].position.x += bulletSpeed;
			pbul_colliders[b].position.set(bullets[b].position.x, bullets[b].position.y);
			if (circle_rect_collide(pbul_colliders[b], fed_hit) && pbul_colliders[b].texture != empty)
			{
				enemy_red.start();
				pbul_colliders[b].texture = empty;
			}
	  	}

		for(var eb=enemybullets.length-1;eb>=0;eb--)
		{
			enemybullets[eb].position.x += enemy_bulletSpeed;
	  	}
		federalShip.position.x -= 1;
		//console.log(federalShip.position.x);
		federalShip.position.y = +1;
		fed_hit.position.set(federalShip.position.x, federalShip.position.y);
		if(federalShip.position.x == 300 && federalShip < 300)
		{
			federalShip.position.x += 1;
			federalShip.position.y -= 1;
		}
		if(federalShip.position.x < 600)
		{
			federalShip.position.x -= 1.5;
			federalShip.position.y += 1;

		}
		for(var ast=0; ast < ast_cluster.length; ast++)
		{
			ast_cluster[ast].position.x -= 1.5;	
			colliders[ast].position.set(ast_cluster[ast].position.x, ast_cluster[ast].position.y);
			if (circle_rect_collide(colliders[ast], p_collider) && hittable)
			{
				player_cd.start();
				console.log('hit');
			}
		}
	}
	PIXI.timerManager.update();
	renderer.render(main);
}
animate();
