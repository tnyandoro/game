import Enemy from './Enemy';
import Player from './Player';
/* eslint-disable default-case */
let GameManager;

GameManager = {
  // set three method inside the game manager method
  setGameStart(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },

  resetPlayer(classType) {
    switch (classType) {
      case 'Warrior':
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case 'Rouge':
        player = new Player(classType, 100, 0, 100, 150, 200);
        break;
      case 'Mage':
        player = new Player(classType, 80, 0, 50, 200, 50);
        break;
      case 'Hunter':
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
    }
    const getInterface = document.querySelector('.interface');
    getInterface.innerHTML = `<img src="img/${classType.toLowerCase()}.png" class="img-avatar"/><div><h3>' + classType \n\n        \n    + </h3><p>Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p>\n        \n    <p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div'`;
  },

  setPreFight() {
    const getHeader = document.querySelector('.header');
    let getActions = document.querySelector('.actions');
    let getArena = document.querySelector('.arena');
  },
};