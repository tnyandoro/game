// Lets declare the player without set values globally

let player;

function Player(classType, health, mana, strength, agility, speed) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

const PlayerMoves = {
  calcAttack() {
    // who attacks first?

    const getPlayerSpeed = player.speed;
    const getEnemySpeed = enemy.speed;
  },
  // Player attacks  
  let playAttack = function () {
    let calcBaseDamage;
    if (player.mana > 0) {

    } else {
      calcBaseDamage = player.strength * player.mana
    }
  }
};