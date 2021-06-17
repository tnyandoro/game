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
  let playerAttack = function () {
    let calcBaseDamage;
    if (player.mana > 0) {
      calcBaseDamage = player.strength * player.mana / 1000;
    } else {
      calcBaseDamage = player.strength * player.agility / 1000;
    }
    let offsetDamage = Math.floor(Math.random() * Math.floor(10));
    let calcOutputDamage = calcBaseDamage + offsetDamage;
    // Number of hits 
    let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
    let attackValues = [calcOutputDamage, numberOfHits ];
    return attackValues;
  }
  // Enemy attacks  
  let enemyAttack = function () {
    let calcBaseDamage;
    if (enemy.mana > 0) {
      calcBaseDamage = enemy.strength * enemyr.mana / 1000;
    } else {
      calcBaseDamage = enemy.strength * enemy.agility / 1000;
    }
    let offsetDamage = Math.floor(Math.random() * Math.floor(10));
    let calcOutputDamage = calcBaseDamage + offsetDamage;
    // Number of hits 
    let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
    let attackValues = [calcOutputDamage, numberOfHits ];
    return attackValues;
};