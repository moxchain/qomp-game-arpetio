import React, { useEffect } from 'react'
import Phaser from 'phaser';

const QompGame = (params: {speed: number, endGame: () => void}) => {

  class playGame extends Phaser.Scene {
    constructor() {
      super("PlayGame");
    }
  
    gameOver: boolean = false
    gameWin: boolean = false
    map: any;
    layer: any;
    hero: any;
    star: any;
    enemy: any;
    counterNewEnemy = 0
  
    preload() {
      this.load.tilemapTiledJSON("level", "assets/level.json");
      this.load.image("tile", "assets/tile.png");
      this.load.image("hero", "assets/Brute_1.png");
      this.load.image("enemy", "assets/bomb.png");
      this.load.image("star", "assets/star.png");
    }
    create() {
      // creation of "level" tilemap
      this.map = this.make.tilemap({
        key: "level",
      });
  
      // add tiles to tilemap
      let tile = this.map.addTilesetImage("tileset01", "tile");
  
      // which layers should we render? That's right, "layer01"
      this.layer = this.map.createStaticLayer("layer01", tile);
  
      // layer (wall) is enabled for collision
      this.layer.setCollision(1);
  
      // add the hero sprite and enable arcade physics for the hero
      this.hero = this.physics.add.sprite(260, 376, "hero");
  
      // make hero bounce
      this.hero.setBounce(1);
  
      // set hero velocity
      this.hero.setVelocity(
        params.speed * Math.cos(Math.PI / 4),
        params.speed * Math.sin(Math.PI / 4)
      );
  
      // add the star sprite and enable arcade physics for the star
      this.star = this.physics.add.sprite(800, 400, 'star');
  
      // make star bounce
      this.star.setBounce(1);
  
      this.star.setVelocity(
        100 * Math.cos(Math.PI / 4),
        100 * Math.sin(Math.PI / 4)
      );
  
      // add star and hero collision
      this.physics.add.collider(this.hero, this.star, this.hitStar, undefined, this);
  
      // add enemy group
      this.enemy = this.physics.add.group();
  
      this.physics.add.collider(this.enemy, this.layer);
  
      this.physics.add.collider(this.hero, this.enemy, this.hitEnemy, undefined, this);
  
      // listener for input
      this.input.on("pointerdown", this.changeDirection, this);
  
      // set world bounds to allow camera to follow the hero
      this.cameras.main.setBounds(0, 0, 1920, 1440);
  
      // make the camera follow the hero
      this.cameras.main.startFollow(this.hero);
    }
  
    hitStar (hero: any, star: any) {
      this.physics.pause();
      this.hero.setTint(0x00ff00);
      this.gameWin = true
    }
  
    hitEnemy (hero: any, enemy: any) {
      this.physics.pause();
      this.hero.setTint(0xff0000);
      this.gameOver = true
    }
  
    // method to make the change direction
    changeDirection() {
      // invert hero y velocity
      this.hero.body.velocity.y *= -1;
    }
  
    createEnemy () {
      if (this.counterNewEnemy >= 150) {
        const x =  Phaser.Math.Between(460, 640);
        const enemy = this.enemy.create(x, 16, 'enemy');
        enemy.setBounce(1);
        this.enemy.setVelocity(
          180 * Math.cos(Math.PI / 4),
          180 * Math.sin(Math.PI / 4)
        );
        this.counterNewEnemy = 0;
      } else {
        this.counterNewEnemy++;
      }
    }
  
    // method to be executed at each frame
    update() {
      // handle collision between hero and tiles
      this.physics.world.collide(this.hero, this.layer);
  
      // handle collision between enemy and tiles
      this.physics.world.collide(this.enemy, this.layer);
  
      // handle collision between star and tiles
      this.physics.world.collide(this.star, this.layer);
  
      // flip hero according to direction
      this.hero.flipX = this.hero.body.velocity.x < 0;
  
      // Create more enemy
      this.createEnemy();
  
      // Handle Game Over
      if (this.gameOver === true) {
        setTimeout(()=>{
          this.scene.remove(this)
          params.endGame()
        }, 1000)
        return
      }
  
      // Handle Game win
      if (this.gameWin === true) {
        setTimeout(()=>{
          this.scene.remove(this)
          params.endGame()
        }, 1000)
        return
      }
    }
  }

  useEffect(()=>{
    const gameConfig = {
      type: Phaser.AUTO,
      backgroundColor: 0x444444,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 640,
        height: 480
    },
      physics: {
        default: "arcade",
        arcade: {
          gravity: {
            y: 0,
          },
        },
      },
      scene: playGame,
    };

    new Phaser.Game(gameConfig)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div id="phaser-game" />
  )
}

export default QompGame