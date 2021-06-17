// set three method inside the game manager method
/* eslint-disable default-case */
const GameManager = {
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
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
      case 'Mage':
        player = new Player(classType, 80, 0, 50, 200, 50);
        break;
      case 'Hunter':
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
    }
    const getInterface = document.querySelector('.interface');
    getInterface.innerHTML = `<img src="img/avatar-player/${classType.toLowerCase()}.png" class="img-avatar"><div><h3>${classType}</h3><p class ="health-player">Health: ${player.health}</p><p>Mana: ${player.mana}</p><p>Strength: ${player.strength}</p><p>Agility:${player.agility}</p><p>Speed: ${player.speed}</p></div>`;
  },

  setPreFight() {
    const getHeader = document.querySelector('.header');
    const getActions = document.querySelector('.actions');
    const getArena = document.querySelector('.arena');
    getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an oponent</a>';
    getArena.style.visibility = 'visible';
  },
  setFight() {
    const getHeader = document.querySelector('.header');
    const getActions = document.querySelector('.actions');
    const getEnemy = document.querySelector('.enemy');
    const enemy00 = new Enemy('Raider', 100, 0, 50, 100, 100);
    const enemy01 = new Enemy('Scholar', 200, 0, 150, 80, 150);
    const chooseRandonEnemy = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandonEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
    }
    getHeader.innerHTML = '<p>Task: Choose your move!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack!()">Attack!</a>';
    getEnemy.innerHTML = `<img src="img/avatar-enemy/${
      enemy.enemyType.toLowerCase()}.png" alt="${
      enemy.enemyType}" class="img-avatar"><div><h3>${
      enemy.enemyType}</h3><p class="health-enemy">Health: ${
      enemy.health}</p><p>Agililty: ${
      enemy.agility}</p><p>Speed: ${enemy.speed}</p></div>`;
  },
};