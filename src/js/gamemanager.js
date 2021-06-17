/* eslint-disable default-case */
const GameManager = {
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
    getInterface.innerHTML = `<img src="img/${classType.toLowerCase()}.png" class="img-avatar"><div><h3>${classType}</h3><p class=".health-player">Health: ${player.health}</p><p>Mana: ${player.mana}</p><p>Strength: ${player.strength}</p><p>Agility:${player.agility}</p><p>Speed: ${player.speed}</p></div>`;
  },

  setPreFight() {
    const getHeader = document.querySelector('.header');
    const getActions = document.querySelector('.actions');
    const getArena = document.querySelector('.arena');
    getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an oponent</a>';
    getArena.style.visibility = 'visible';
  },
};